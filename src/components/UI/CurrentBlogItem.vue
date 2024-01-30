<template>
  <div class="container__blog-item-card-flex">
    <div @click="goToCurrentBlogPage" class="container__blog-item-card">
      <img class="container__blog-item-card-hero" :src="item.hero" alt="" />
      <div class="container__blog-item-card-title-and-date-flex">
        <span class="container__blog-item-card-title">{{ item.title }}</span>
        <span class="container__blog-item-card-date">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CurrentBlogItem",
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
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.container__blog-item-card-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.container__blog-item-card {
  cursor: pointer;
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
