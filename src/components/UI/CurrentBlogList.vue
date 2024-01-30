<template>
  <span class="container__title">You might also like</span>
  <div class="container__related-blogs-grid">
    <current-blog-item
      v-for="item in relatedBLogs"
      :item="item"
      :key="item.id"
    ></current-blog-item>
  </div>
  <button @click="goToBlogPage" class="container__more-articles-btn">
    More Articles <img src="imgs/arrow-right-black.svg" alt="" />
  </button>
</template>

<script>
import CurrentBlogItem from "../UI/CurrentBlogItem.vue";
export default {
  name: "CurrentBlogList",
  components: { CurrentBlogItem },
  data() {
    return {
      relatedBLogs: JSON.parse(localStorage.getItem("Blogs")) || [],
    };
  },
  methods: {
    goToBlogPage() {
      this.$router.push("/BlogPage");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #000;
}
.container__related-blogs-grid {
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(auto-fill, auto);
  gap: 1.56rem;
  margin: 2.5rem 0rem;
}
.container__more-articles-btn {
  @include button;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
  margin-bottom: 5rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #121212;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container__related-blogs-grid {
    grid-template-columns: repeat(3, 31.75%);
    row-gap: 1.5rem;
    margin: 2.5rem 0rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__related-blogs-grid {
    grid-template-columns: repeat(3, 31.5%);
    column-gap: 1.56rem;
    row-gap: 2.5rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container__related-blogs-grid {
    grid-template-columns: repeat(3, 31.83%);
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container__related-blogs-grid {
    grid-template-columns: repeat(3, 32.15%);
  }
}
</style>
