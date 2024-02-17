<template>
  <form @submit.prevent="askQuestion" class="container__questions-form">
    <span class="container__questions-form-title"
      >Ask a question about the product</span
    >
    <textarea
      v-model="question.description"
      class="container__questions-form-text-area"
      cols="30"
      rows="10"
      placeholder="Write your question"
    ></textarea>
    <button
      type="submit"
      @click="askQuestion"
      class="container__ask-a-question-btn"
    >
      Ask a Question
    </button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "QuestionForm",
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      question: {
        name: localStorage.getItem("name"),
        description: "",
      },
    };
  },
  methods: {
    ...mapMutations(["addQuestion"]),
    askQuestion() {
      if (this.question.description.trim() !== "") {
        this.question.id = this.productId;
        this.addQuestion(this.question);
        this.$emit("askQuestion", this.question);
        this.question = {
          name: "",
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
  border: 2px solid $black;
  outline: none;
}
.container__ask-a-question-btn {
  @include button;
  width: 100%;
  background: $black;
  border-radius: 0.5rem;
  padding: 0.625rem 1rem;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__ask-a-question-btn {
    width: 280px;
    margin-left: auto;
  }
}
</style>
