<template>
  <div class="container__description-and-user-name-flex">
    <span class="container__description">{{ question.description }}</span>
    <span class="container__user-name">User Name</span>
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
};
</script>

<style lang="scss" scoped>
.container__description-and-user-name-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__description {
  font-family: "Inter", sans-serif;
  font-size: 1.25;
  font-weight: 700;
  color: #000;
}
.container__user-name {
}
</style>
