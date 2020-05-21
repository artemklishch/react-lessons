import ProductsList from "./ProductsList.vue";
import ProductDetails from "./ProductDetails.vue";
import ProductAdd from "./ProductAdd";

export const routes = [
  {
    path: "/",
    component: ProductsList,
    name: "home"
  },
  {
    path: "/add",
    component: ProductAdd
  },
  {
    path: "/details/:id",
    component: ProductDetails,
    name: "product-details",
    // props: true
    props: {
      staticText: 'some text'
    }
  },
  {
    path: "*",
    component: ProductsList
  }
];
