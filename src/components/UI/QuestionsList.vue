<template>
  <div class="container__questions-list">
    <transition-group name="items-list">
      <question-item
        v-for="question in questions"
        :question="question"
        :key="question._id"
      ></question-item>
    </transition-group>
  </div>
</template>

<script>
import axios from "axios";
import QuestionItem from "./QuestionItem.vue";
export default {
  name: "QuestionsList",
  components: { QuestionItem },
  props: {
    productId: {
      type: Number,
      required: true,
    },
    questionOption: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      questions: [],
    };
  },
  methods: {
    fetchQuestions() {
      axios
        .get(
          `http://localhost:5000/questions/collect?productId=${this.productId}`
        )
        .then((response) => {
          this.questions = response.data.map((question) => {
            question.avatar = `data:image/jpeg;base64,${question.avatar}`;
            return question;
          });
          if (this.questions.length > 0) {
            console.log("Questions were fetched succsessfully!", response.data);
          }
        })
        .catch((e) => {
          console.error("Error fetching questions:", e);
        });
    },
    sortQuestions() {
      if (this.questionOption === "Newest") {
        return this.questions.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      } else if (this.questionOption === "Oldest") {
        return this.questions.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      }
    },
  },
  watch: {
    questionOption: function (newOption) {
      this.sortQuestions();
    },
  },
  mounted() {
    this.fetchQuestions();
    this.sortQuestions();
  },
};
</script>

<style lang="scss" scoped>
.items-list-enter-active,
.items-list-leave-active {
  transition: all 0.6s ease;
}
.items-list-enter-from,
.items-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.items-list-move {
  transition: transform 0.6s ease;
}
.container__questions-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0rem 5rem 0rem;
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__questions-list {
    gap: 3rem;
  }
}
</style>
