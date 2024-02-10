import { createStore } from "vuex";
import CurrentBlog from "./CurrentBlog";
import CurrentProduct from "./CurrentProduct";
import ProductQuestions from "./ProductQuestions";
import totalQtyOfCartProducts from "./totalQtyOfCartProducts";

export default createStore({
  modules: {
    CurrentBlog,
    CurrentProduct,
    ProductQuestions,
    totalQtyOfCartProducts,
  },
});
