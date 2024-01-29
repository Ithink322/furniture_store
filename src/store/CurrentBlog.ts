import { GetterTree, MutationTree, ActionTree } from "vuex";

interface State {
  selectedItem: any;
}

const state: State = {
  selectedItem: null,
};

const mutations: MutationTree<State> = {
  setSelectedItem(state, item) {
    state.selectedItem = item;
    localStorage.setItem("CurrentBlog", JSON.stringify(item));
  },
};

const actions: ActionTree<State, any> = {
  selectItem({ commit }, item) {
    commit("setSelectedItem", item);
  },
};

const getters: GetterTree<State, any> = {
  getSelectedItem: (state) => {
    const savedItem = localStorage.getItem("CurrentBlog");
    if (savedItem) {
      return JSON.parse(savedItem);
    } else {
      return state.selectedItem;
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
