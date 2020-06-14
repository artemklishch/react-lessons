import { reactive } from "@vue/composition-api";

function useFiltering() {
  const filterModel = reactive({
    name: null,
  });
  function filterList(list) {
    if (filterModel.name) {
      const newList = list.filter(
        (val) => val.name.indexOf(filterModel.name) >= 0
      );
      return newList;
    }
  }
  return { filterModel, filterList };
}
export default useFiltering;
