export function AUTHENTICATION({ commit }) {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Max B.");
      }, 3000);
    }).then((response) => {
      commit("SET_USER", response);
    });
  }
  