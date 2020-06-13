export function EXECUTE_OPERATION({ commit }) {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Processed");
    }, 3000);
  }).then((response) => {
    commit("UPDATE_STATUS", response);
  });
}
