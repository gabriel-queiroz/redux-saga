import { call, put, select } from 'redux-saga/effects';
import http from '../../services/api';
import { Creators as RepositoriesCreators } from '../ducks/repositories';

export default function* addRepository(action) {
  try {
    const { data } = yield call(http.get, `/repos/${action.payload}`);
    const isDuplicated = yield select(state => state.repositories.data.find(repo => repo.id === data.id));
    if (isDuplicated) {
      yield put(RepositoriesCreators.failureAddRepository('Repositório duplicado!'));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };
      yield put(RepositoriesCreators.sucessAddRepository(repositoryData));
    }
  } catch (error) {
    yield put(RepositoriesCreators.failureAddRepository('Ops! Error ao buscar o repositório!'));
  }
}
