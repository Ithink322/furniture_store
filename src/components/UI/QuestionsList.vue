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
import { mapGetters } from "vuex";
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
    ...mapGetters(["questions"]),
    filteredQuestions() {
      return this.questions.filter(
        (question) => question.id === this.productId
      );
    },
  },
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
