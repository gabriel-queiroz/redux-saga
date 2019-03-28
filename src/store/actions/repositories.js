export const addRepository = repository => ({
  type: "ADD_REPOSITORY",
  payload: repository
});

export const removerRepository = repositoryId => ({
  type: "REMOVE_REPOSITORY",
  payload: repositoryId
});
