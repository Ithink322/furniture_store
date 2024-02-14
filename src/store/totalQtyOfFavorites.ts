import { MutationTree, ActionTree } from "vuex";

interface State {
  totalQtyOfFavorites: number;
}

const state: State = {
  totalQtyOfFavorites: 0,
};

const mutations: MutationTree<State> = {
  updateTotalQtyOfFavorites(state, totalQty) {
    state.totalQtyOfFavorites = totalQty;
  },
};

const actions: ActionTree<State, any> = {
  updateTotalQtyOfFavorites({ commit, state }) {
    const totalQtyOfFavorites = state.totalQtyOfFavorites;
    commit("updateTotalQtyOfFavorites", totalQtyOfFavorites);
  },
};

export default {
  state,
  mutations,
  actions,
};
