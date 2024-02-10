<template>
  <div class="container__questions-list">
    <question-item
      v-for="question in filteredQuestions"
      :question="question"
      :key="question.id"
    ></question-item>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import QuestionItem from "./QuestionItem.vue";
export default {
  name: "QuestionsList",
  components: { QuestionItem },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    questions() {
      return JSON.parse(localStorage.getItem("questions")) || [];
    },
    filteredQuestions() {
      return this.questions.filter(
        (question) => question.id === this.productId
      );
    },
  },
  /* computed: {
    ...mapState(["questions"]),
    filteredQuestions() {
      return this.questions.filter(
        (question) => question.id === this.productId
      );
    },
  },
  created() {
    this.$store.commit("loadQuestions");
  },
  watch: {
    questions: {
      handler() {
        if (this.questions) {
          this.$store.commit("loadQuestions");
        }
      },
      deep: true,
    },
  }, */
};
</script>

<style lang="scss" scoped>
.container__questions-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0rem 5rem 0rem;
}
</style>
