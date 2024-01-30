<template>
  <div @click="goToCurrentBlogPage" class="container__blog-item-card">
    <img :src="item.hero" alt="" class="container__blog-item-card-hero" />
    <div class="container__blog-item-card-title-and-date-flex">
      <span class="container__blog-item-card-title">{{ item.title }}</span>
      <span class="container__blog-item-card-date">{{ item.date }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BlogItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["selectItem"]),
    goToCurrentBlogPage() {
      this.selectItem(this.item);
      this.$router.push("/CurrentBlogPage");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.container__blog-item-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: pointer;
}
.container__blog-item-card-hero {
  width: 100%;
}
.container__blog-item-card-title-and-date-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__blog-item-card-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #23262f;
}
.container__blog-item-card-date {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
</style>
