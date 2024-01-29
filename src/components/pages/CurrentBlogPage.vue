<template>
  <div class="container">
    <button @click="goBack" class="container__go-back-btn">
      <img src="imgs/go-back-btn.svg" alt="" />back
    </button>
    <span class="container__article-title"></span>
    <h1 class="container__title">{{ item.title }}</h1>
    <div
      class="container__user-profile-icon-and-author-name-and-calendar-icon-and-date-flex"
    >
      <div class="container__user-profile-icon-and-author-name-flex">
        <img src="imgs/user-profile-gray-icon.svg" alt="" />
        <span class="container__author">{{ item.author }}</span>
      </div>
      <div class="container__calendar-icon-and-date">
        <img src="imgs/calendar-icon.svg" alt="" />
        <span class="container__date">{{ item.date }}</span>
      </div>
    </div>
    <news-letter></news-letter>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewsLetter from "../UI/NewsLetter.vue";
export default {
  components: { NewsLetter },
  name: "CurrentBlogPage",
  computed: {
    ...mapGetters(["getSelectedItem"]),
    item() {
      return JSON.parse(localStorage.getItem("CurrentBlog"));
    },
  },
  methods: {
    goBack() {
      this.$router.push("/BlogPage");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 0rem 2rem;
}
.container__go-back-btn {
  @include button;
  gap: 0.25rem;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #605f5f;
}
.container__article-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #000;
  margin-top: 3rem;
}
.container__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: $black;
  margin: 1.5rem 0rem;
}
.container__user-profile-icon-and-author-name-and-calendar-icon-and-date-flex {
  display: flex;
  justify-content: space-between;
}
.container__user-profile-icon-and-author-name-flex,
.container__calendar-icon-and-date {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.container__author,
.container__date {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #605f5f;
}
</style>
