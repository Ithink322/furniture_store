import { createStore } from "vuex";
import CurrentBlog from "./CurrentBlog";
import CurrentProduct from "./CurrentProduct";

export default createStore({
  modules: {
    CurrentBlog,
    CurrentProduct,
  },
});
