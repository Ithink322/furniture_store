import { createStore } from "vuex";
import CurrentBlog from "./CurrentBlog";
import CurrentProduct from "./CurrentProduct";
import totalQtyOfCartProducts from "./totalQtyOfCartProducts";

export default createStore({
  modules: {
    CurrentBlog,
    CurrentProduct,
    totalQtyOfCartProducts,
  },
});
