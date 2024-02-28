<template>
  <div class="container__avatar-and-description-and-user-name-flex">
    <img :src="question.avatar" alt="" class="container__avatar" />
    <div class="container__description-and-user-name-flex">
      <span class="container__description">{{ question.description }}</span>
      <span class="container__user-name">{{ question.name }}</span>
    </div>
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
.container__avatar-and-description-and-user-name-flex {
  position: relative;
  display: flex;
  gap: 1rem;
  width: 100%;
}
.container__avatar-and-description-and-user-name-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid rgb(190, 197, 201);
  bottom: -1rem;
}
.container__avatar {
  border-radius: 50%;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
}
.container__description-and-user-name-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__avatar-and-description-and-user-name-flex {
    gap: 2.5rem;
  }
  .container__avatar-and-description-and-user-name-flex::after {
    bottom: -1.5rem;
  }
}
</style>
