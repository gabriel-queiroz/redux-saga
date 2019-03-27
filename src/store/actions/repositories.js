export const addRepositorie = repositorie => ({
  type: "ADD_REPOSITORIE",
  payload: repositorie
});

export const removerRepositorie = repositorieId => ({
  type: "REMOVE_REPOSITORIE",
  payload: repositorieId
});
