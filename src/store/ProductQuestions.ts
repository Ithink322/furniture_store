import { MutationTree, ActionTree } from "vuex";
interface Question {
  id: number;
  description: string;
}

interface State {
  questions: Question[];
}

const state: State = {
  questions: [],
};

const mutations: MutationTree<State> = {
  addQuestion(state: State, question: Question) {
    state.questions.push(question);
    localStorage.setItem("questions", JSON.stringify(state.questions));
  },
  loadQuestions(state: State) {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      state.questions = JSON.parse(storedQuestions);
    }
  },
};

const actions: ActionTree<State, any> = {
  askQuestion({ commit }, question: Question) {
    commit("addQuestion", question);
  },
};

export default {
  state,
  mutations,
  actions,
};
