import { MutationTree, ActionTree } from "vuex";

interface Question {
  name: string;
  description: string;
}

interface State {
  questions: Question[];
}

const state: State = {
  questions: JSON.parse(localStorage.getItem("questions") || "[]") || [],
};

const mutations: MutationTree<State> = {
  addQuestion(state, question: Question) {
    state.questions.push(question);
  },
};

const actions: ActionTree<State, any> = {
  addQuestion({ commit }, question: Question) {
    commit("addQuestion", question);
  },
};

const getters = {
  questions: (state: State) => state.questions,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
