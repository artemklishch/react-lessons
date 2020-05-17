<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{ header }}</h2>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Address</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in items">
          <th scope="row">{{ user.date }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button @click="func(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import service from "../service";
import list from "../mixins/list";

export default {
  mixins: [list],
  data() {
    return {
      header: "Users",
      listName: "users"
    };
  },
  methods: {
    func(index) {
      this.$emit("deleteItem", index, "deleteUser");
    },
    filterDate(value, row) {
      return row.date === value;
    }
  }
};
</script>
