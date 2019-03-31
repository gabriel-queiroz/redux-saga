export const Types = {
  ADD_REPOSITORY: 'REPOSITORIES/ADD_REPOSITORY',
  SUCCESS_ADD_REPOSITORY: 'REPOSITORIES/SUCCESS_ADD_REPOSITORY',
  FAILURE_ADD_REPOSITORY: 'REPOSITORIES/FAILURE_ADD_REPOSITORY',
  REMOVE_REPOSITORY: 'REPOSITORIES/REMOVE_REPOSITORY',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

const repositories = (state = INITIAL_STATE, action) => {
  console.tron.log(action);
  switch (action.type) {
    case Types.ADD_REPOSITORY:
      return {
        ...state,
        loading: true,
      };
    case Types.SUCCESS_ADD_REPOSITORY:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case Types.FAILURE_ADD_REPOSITORY:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case Types.REMOVE_REPOSITORY:
      return {
        ...state,
        data: [...state.data.filter(repo => repo.id !== action.payload)],
      };
    default:
      break;
  }
  return state;
};

export default repositories;

export const Creators = {
  addRepository: repositoryName => ({
    type: Types.ADD_REPOSITORY,
    payload: repositoryName,
  }),
  sucessAddRepository: repository => ({
    type: Types.SUCCESS_ADD_REPOSITORY,
    payload: repository,
  }),
  failureAddRepository: errorMessage => ({
    type: Types.FAILURE_ADD_REPOSITORY,
    payload: errorMessage,
  }),
  removeRepository: repositoryId => ({
    type: Types.REMOVE_REPOSITORY,
    payload: repositoryId,
  }),
};
