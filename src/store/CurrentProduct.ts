import { GetterTree, MutationTree, ActionTree } from "vuex";

interface State {
  selectedProduct: any;
}

const state: State = {
  selectedProduct: null,
};

const mutations: MutationTree<State> = {
  setSelectedProduct(state, item) {
    state.selectedProduct = item;
    localStorage.setItem("CurrentProduct", JSON.stringify(item));
  },
};

const actions: ActionTree<State, any> = {
  selectProduct({ commit }, item) {
    commit("setSelectedProduct", item);
  },
};

const getters: GetterTree<State, any> = {
  getSelectedProduct: (state) => {
    const savedProduct = localStorage.getItem("CurrentProduct");
    if (savedProduct) {
      return JSON.parse(savedProduct);
    } else {
      return state.selectedProduct;
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
