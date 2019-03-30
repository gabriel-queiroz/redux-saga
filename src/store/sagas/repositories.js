import { call, put, select } from 'redux-saga/effects';

export default function* addRepository(action) {
  yield select((state) => {
    console.log(state);
  });
}
