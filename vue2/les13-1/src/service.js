import Vue from "vue";
import _ from "lodash";

export default new Vue({
  data: {
    products: [
      {
        id: 1,
        title: "Product #1",
        price: 50,
        qt: 1000
      },
      {
        id: 2,
        title: "Product #2",
        price: 100,
        qt: 456
      },
      {
        id: 3,
        title: "Product #3",
        price: 23,
        qt: 2345
      },
      {
        id: 4,
        title: "Product #4",
        price: 23,
        qt: 2345
      }
    ],
    users: [
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove Str., Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Dan",
        address: "No. 189, Grove Str., Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Julia",
        address: "No. 189, Grove Str., Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Sam",
        address: "No. 189, Grove Str., Los Angeles"
      }
    ]
  },
  methods: {
    deleteUser(index) {
      return this.users.splice(index, 1);
    },
    deleteProduct(index) {
      return this.products.splice(index, 1);
    }
  }
});
