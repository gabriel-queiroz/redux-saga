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
    case "ADD_REPOSITORIE":
      return {
        data: [...state.data, { id: Math.random(), name: action.payload }]
      };
    default:
      break;
  }
  return state;
};

export default repositories;
