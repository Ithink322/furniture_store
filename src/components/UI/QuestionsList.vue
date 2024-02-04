<template>
  <div class="container__questions-list">
    <question-item
      v-for="question in questions"
      :question="question"
      :key="question.id"
    ></question-item>
  </div>
</template>

<script>
import QuestionItem from "./QuestionItem.vue";
export default {
  name: "QuestionsList",
  components: { QuestionItem },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    return JSON.parse(localStorage.getItem("questions"));
  },
};
</script>

<style lang="scss" scoped>
.container__questions-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0rem;
}
</style>
