import { MutationTree, ActionTree } from "vuex";

interface Review {
  name: string;
  selectedRating: number;
  description: string;
}

interface State {
  reviews: Review[];
}

const state: State = {
  reviews: JSON.parse(localStorage.getItem("reviews") || "[]") || [],
};

const mutations: MutationTree<State> = {
  addReview(state, review: Review) {
    state.reviews.push(review);
  },
};

const actions: ActionTree<State, any> = {
  addReview({ commit }, review: Review) {
    commit("addReview", review);
  },
};

const getters = {
  reviews: (state: State) => state.reviews,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
