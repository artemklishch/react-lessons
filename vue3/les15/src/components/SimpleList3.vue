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
import useSorting from "./composition/useSorting";
import useFiltering from "./composition/useFiltering";

export default {
  // setup(props, context)
  setup() {
    //context.atts, context.slots, context.parent, contetx.root, context.emit
    const sorting = useSorting();
    const filtering = useFiltering();

    const params = reactive({
      preparedItems: computed(() => {
        let list = sorting.sortList(
          items.value,
          sorting.params.sortColumn,
          sorting.params.sortDirection
        );
        if (filtering.filterModel.name) list = filtering.filterList(list);
        return list;
      })
    });
    const items = ref([]);

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          items.value = data;
        });
    });

    return {
      ...toRefs(params),
      ...toRefs(sorting.params),
      filterModel: filtering.filterModel,
      items,
      sort: sorting.sort,
    };
  }
};
</script>