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
import {
  ref,
  reactive,
  toRefs,
  onMounted,
  computed
  // watch
} from "@vue/composition-api";
export default {
  // setup(props, context)
  setup() {
    //context.atts, context.slots, context.parent, contetx.root, context.emit
    const params = reactive({
      sortColumn: "name",
      sortDirection: "Asc",
      filterModel: {
        name: null
      },
      preparedItems: computed(() => {
        let list = sortList(
          items.value,
          params.sortColumn,
          params.sortDirection
        );
        if(params.filterModel.name) list = filterList(list);
        return list;
      })
    });
    const items = ref([]);

    function sort(column) {
      if (params.sortColumn !== column) {
        params.sortDirection = "Asc";
      } else {
        params.sortDirection = params.sortDirection === "Asc" ? "Desc" : "Asc";
      }
    }
    function sortList(list, field, direction) {
      if (direction === "Asc") {
        return list.sort((a, b) => (a[field] > b[field] ? 1 : -1));
      } else {
        return list.sort((a, b) => (a[field] < b[field] ? 1 : -1));
      }
    }
    function filterList(list) {
      if (params.filterModel.name) {
        const newList = list.filter(
          val => val.name.indexOf(params.filterModel.name) >= 0
        );
        return newList;
      }
    }

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          items.value = data;
        });
    });

    return { ...toRefs(params), items, sort, sortList, filterList };
  }
};
</script>