export const Types = {
  ADD_REPOSITORY: "REPOSITORIES/ADD_REPOSITORY",
  REMOVE_REPOSITORY: "REPOSITORIES/REMOVE_REPOSITORY"
};

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: "angular"
    },
    {
      id: 2,
      name: "vuejs"
    },
    {
      id: 3,
      name: "ract"
    }
  ]
};

const repositories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_REPOSITORY:
      return {
        data: [...state.data, { id: Math.random(), name: action.payload }]
      };
    case Types.REMOVE_REPOSITORY:
      return {
        data: [...state.data.filter(repo => repo.id !== action.payload)]
      };
    default:
      break;
  }
  return state;
};

export default repositories;

export const Creators = {
  addRepository: repository => ({
    type: Types.ADD_REPOSITORY,
    payload: repository
  }),
  removeRepository: repositoryId => ({
    type: Types.REMOVE_REPOSITORY,
    payload: repositoryId
  })
};
