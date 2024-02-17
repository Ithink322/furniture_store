<template>
  <div class="container__description-and-user-name-flex">
    <span class="container__description">{{ question.description }}</span>
    <span class="container__user-name">{{ question.name }}</span>
  </div>
</template>

<script>
export default {
  name: "QuestionItem",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
};
</script>

<style lang="scss" scoped>
.container__description-and-user-name-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__description-and-user-name-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid rgb(190, 197, 201);
  bottom: -1rem;
}
.container__description {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
}
.container__user-name {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
}
</style>
