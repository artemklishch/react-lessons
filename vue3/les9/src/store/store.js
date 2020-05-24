import Vue from "vue";

export const store = Vue.observable({
  name: "",
});

export const storeMutations = {
  setName(value) {
    store.name = value;
  },
};
