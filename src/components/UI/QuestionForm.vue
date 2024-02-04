<template>
  <form @submit.prevent="askQuestion" class="container__questions-form">
    <span class="container__questions-form-title">Задайте вопрос о товаре</span>
    <textarea
      v-model="question.description"
      class="container__questions-form-text-area"
      cols="30"
      rows="10"
      placeholder="Напишите свой вопрос"
    ></textarea>
    <button
      type="submit"
      @click="askQuestion"
      class="container__ask-a-question-btn"
    >
      Задать вопрос
    </button>
  </form>
</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      question: {
        description: "",
      },
    };
  },
  methods: {
    askQuestion() {
      if (this.question.description.trim() !== "") {
        this.question.id = Date.now();
        this.$emit("askQuestion", this.question);
        this.question = {
          description: "",
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__questions-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__questions-form-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container__questions-form-text-area {
  border-radius: 0.375rem;
  border: 2px solid #b3bcc5;
  padding: 0.313rem 0.625rem;
}
.container__questions-form-text-area:focus {
  border: 2px solid #005bff;
  outline: none;
}
.container__ask-a-question-btn {
  @include button;
  width: 100%;
  background: #005bff;
  border-radius: 0.5rem;
  padding: 0.625rem 1rem;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}
</style>
