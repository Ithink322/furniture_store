import { createStore } from "vuex";
import CurrentBlog from "./CurrentBlog";
import CurrentProduct from "./CurrentProduct";
import totalQtyOfCartProducts from "./totalQtyOfCartProducts";
import totalQtyOfFavorites from "./totalQtyOfFavorites";

export default createStore({
  modules: {
    CurrentBlog,
    CurrentProduct,
    totalQtyOfCartProducts,
    totalQtyOfFavorites,
  },
});
