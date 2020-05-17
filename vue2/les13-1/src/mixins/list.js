import service from "../service";

export default {
  data() {
    return {
      items: null
    };
  },
  created() {
    this.items = service[this.listName];
  }
};
