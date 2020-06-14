import { reactive } from "@vue/composition-api";

function useSorting() {
  const params = reactive({
    sortColumn: "name",
    sortDirection: "Asc",
  });

  function sort(column) {
    if (params.sortColumn !== column) {
      params.sortDirection = "Asc";
    } else {
      params.sortDirection = params.sortDirection === "Asc" ? "Desc" : "Asc";
    }
    params.sortColumn = column;
  }
  function sortList(list, field, direction) {
    if (direction === "Asc") {
      return list.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    } else {
      return list.sort((a, b) => (a[field] < b[field] ? 1 : -1));
    }
  }

  return { params, sort, sortList };
}
export default useSorting;
