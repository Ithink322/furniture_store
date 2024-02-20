import { createStore } from "vuex";
import CurrentBlog from "./CurrentBlog";
import CurrentProduct from "./CurrentProduct";
import ProductQuestions from "./ProductQuestions";
import productReviews from "./productReviews";
import totalQtyOfCartProducts from "./totalQtyOfCartProducts";
import totalQtyOfFavorites from "./totalQtyOfFavorites";

export default createStore({
  modules: {
    CurrentBlog,
    CurrentProduct,
    ProductQuestions,
    productReviews,
    totalQtyOfCartProducts,
    totalQtyOfFavorites,
  },
});
