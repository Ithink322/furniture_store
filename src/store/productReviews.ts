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
  reviews: [],
};

const mutations: MutationTree<State> = {
  addReview(state, review: Review) {
    state.reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(state.reviews));
  },
};

const actions: ActionTree<State, any> = {
  addReview({ commit }, review: Review) {
    commit("addReview", review);
  },
};

export default {
  state,
  mutations,
  actions,
};
