<template>
  <button @click="goBack" class="container__go-back-btn">
    <img src="imgs/go-back-btn.svg" alt="" />back
  </button>
</template>

<script>
export default {
  name: "GoBackBtn",
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__go-back-btn {
  @include button;
  gap: 0.375rem;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #605f5f;
}
</style>
