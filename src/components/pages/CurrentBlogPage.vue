<template>
  <div class="container">
    <go-back-btn></go-back-btn>
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
    <div class="container__heros-and-texts-flex">
      <img src="imgs/current-blog-hero-1.svg" alt="" class="container__hero" />
      <img
        src="imgs/current-blog-hero-1-from1024px.svg"
        alt=""
        class="container__hero-from1024px"
      />
      <div class="container__title-and-text">
        <span class="container__text"
          >Your bathroom serves a string of busy functions on a daily basis. See
          how you can make all of them work, and still have room for comfort and
          relaxation.</span
        ><br class="container__text-br" />
        <br class="container__text-br" />
        <span class="container__title"
          >A cleaning hub with built-in ventilation</span
        ><br class="container__text-title" />
        <span class="container__text"
          >Use a rod and a shower curtain to create a complement to your
          cleaning cupboard. Unsightly equipment is stored out of sight yet
          accessibly close – while the air flow helps dry any dampness.</span
        >
      </div>
      <img src="imgs/current-blog-hero-2.svg" alt="" class="container__hero" />
      <img
        src="imgs/current-blog-hero-2-from1024px.svg"
        alt=""
        class="container__hero-from1024px container__hero-2-from1024px"
      />
      <div class="container__title-and-text">
        <span class="container__title">Storage with a calming effect</span>
        <br class="container__text-title" />
        <span class="container__text"
          >Having a lot to store doesn’t mean it all has to go in a cupboard.
          Many bathroom items are better kept out in the open – either to be
          close at hand or are nice to look at. Add a plant or two to set a calm
          mood for the entire room (and they’ll thrive in the humid air).</span
        >
      </div>
      <img src="imgs/current-blog-hero-3.svg" alt="" class="container__hero" />
      <img
        src="imgs/current-blog-hero-3-from1024px.svg"
        alt=""
        class="container__hero-from1024px container__hero-3-from1024px"
      />
      <div class="container__title-and-text">
        <div class="container__title-hero-4">
          <span class="container__title">Kit your clutter for easy access</span>
        </div>
        <br class="container__text-title" />
        <span class="container__text"
          >Even if you have a cabinet ready to swallow the clutter, it’s worth
          resisting a little. Let containers hold kits for different activities
          – home spa, make-up, personal hygiene – to bring out or put back at a
          moment’s notice.</span
        >
      </div>
      <img src="imgs/current-blog-hero-4.svg" alt="" class="container__hero" />
      <img
        src="imgs/current-blog-hero-4-from1024px.svg"
        alt=""
        class="container__hero-from1024px container__hero-4-from1024px"
      />
      <div class="container__title-and-text container__title-and-text-4">
        <span class="container__title">An ecosystem of towels</span
        ><br class="container__text-title" />
        <span class="container__text"
          >Racks or hooks that allow air to circulate around each towel prolong
          their freshness. They dry quick and the need for frequent washing is
          minimized.</span
        ><br class="container__text-title" /><br
          class="container__text-title"
        />
        <span class="container__title">Make your mop disappear</span
        ><br class="container__text-title" />
        <span class="container__text"
          >Having your cleaning tools organized makes them easier to both use
          and return to. When they’re not needed, close the curtain and feel the
          peace of mind it brings.</span
        >
      </div>
    </div>
    <current-blog-list></current-blog-list>
    <news-letter></news-letter>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoBackBtn from "../UI/GoBackBtn.vue";
import NewsLetter from "../UI/NewsLetter.vue";
import CurrentBlogList from "../UI/CurrentBlogList.vue";
export default {
  components: { GoBackBtn, NewsLetter, CurrentBlogList, GoBackBtn },
  name: "CurrentBlogPage",
  computed: {
    ...mapGetters(["getSelectedItem"]),
    item() {
      return JSON.parse(localStorage.getItem("CurrentBlog"));
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
.container__heros-and-texts-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.container__heros-and-texts-flex::after {
  content: "";
  border: 1px solid rgb(235, 229, 229);
  margin: 5rem -2rem 0rem -2rem;
}
.container__hero {
  width: 100%;
}
.container__hero-from1024px {
  display: none;
}
.container__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: #000;
}
.container__text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  color: #000;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0 2.5rem;
  }
  .container__user-profile-icon-and-author-name-and-calendar-icon-and-date-flex {
    justify-content: left;
    gap: 3rem;
  }
  .container__hero-from1024px {
    display: block;
    height: 650px;
    object-fit: cover;
  }
  .container__hero {
    display: none;
  }
  .container__heros-and-texts-flex::after {
    margin: 5rem -2.5rem 0rem -2.5rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
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
  .container__heros-and-texts-flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  .container__heros-and-texts-flex::after {
    content: "";
    border: 1px solid rgb(235, 229, 229);
    margin-top: 5rem;
    margin-left: -2rem;
    margin-right: -2rem;
  }
  .container__title {
    font-family: "Poppins", sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    color: #000;
  }
  .container__text {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: #000;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0 10rem;
  }
  .container__hero-2-from1024px {
    width: 49%;
  }
  .container__hero-3-from1024px {
    width: 49%;
    margin-top: -48.5rem;
    margin-left: auto;
  }
  .container__title-hero-4 {
    margin-top: 8rem;
  }
  .container__hero-4-from1024px {
    width: 49%;
  }
  .container__title-and-text-4 {
    margin-top: -42rem;
    margin-left: auto;
    width: 49%;
    margin-bottom: 27rem;
  }
  .container__heros-and-texts-flex::after {
    margin: 5rem -10rem 0rem -10rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0 15.938rem;
  }
  .container__heros-and-texts-flex::after {
    margin: 5rem -15.938rem 0rem -15.938rem;
  }
}
</style>
