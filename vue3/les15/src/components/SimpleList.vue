<template>
  <div>
    <div>
      Name:
      <input type="text" v-model="filterModel.name" />
    </div>
    <table>
      <tr>
        <th @click="sort('name')">Name</th>
        <th @click="sort('username')">UserName</th>
        <th @click="sort('email')">Email</th>
      </tr>
      <tr v-for="item in preparedItems" :key="item.name">
        <td>{{item.name}}</td>
        <td>{{item.username}}</td>
        <td>{{item.email}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortColumn: "name",
      sortDirection: "Asc",
      filterModel: {
        name: null
      },
      items: []
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => (this.items = data));
  },
  computed: {
    preparedItems() {
      const list = this.sortList(this.items, this.sortColumn, this.sortDirection);
      return list;
    }
  },
  methods: {
    sort(column) {
      if (this.sortColumn !== column) {
        this.sortDirection = "Asc";
      } else {
        this.sortDirection = this.sortDirection === "Asc" ? "Desc" : "Asc";
      }
    },
    sortList(list, field, direction) {
      if (direction === "Asc") {
        return list.sort((a, b) => (a[field] > b[field] ? 1 : -1));
      } else {
        return list.sort((a, b) => (a[field] < b[field] ? 1 : -1));
      }
    },
    filterList(list) {
      if (this.filterModel.name) {
        const newList = list.filter(val => val.name.indexOf(this.filterModel.name) >= 0);
        return newList;
      }
    }
  }
};
</script>