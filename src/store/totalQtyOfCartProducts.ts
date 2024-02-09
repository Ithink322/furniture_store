import { MutationTree, ActionTree } from "vuex";

interface State {
  totalQtyOfCartProducts: number;
}

const state: State = {
  totalQtyOfCartProducts: 0,
};

const mutations: MutationTree<State> = {
  updateTotalQty(state, totalQty) {
    state.totalQtyOfCartProducts = totalQty;
  },
};

const actions: ActionTree<State, any> = {
  updateTotalQtyOfCartProducts({ commit, state }) {
    const totalQtyOfCartProducts = state.totalQtyOfCartProducts;
    commit("updateTotalQty", totalQtyOfCartProducts);
  },
};

export default {
  state,
  mutations,
  actions,
};
