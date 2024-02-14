<template>
  <div class="container">
    <go-back-btn></go-back-btn>
    <h1 class="container__title">Your Wishlist</h1>
    <section
      v-if="this.totalQtyOfFavorites.totalQtyOfFavorites > 0"
      class="container__items-list-title-and-items-list-section"
    >
      <div class="container__items-list-titles-flex">
        <div class="container__items-list-product-and-price-titles-flex">
          <span class="container__items-list-title">Product</span>
          <span
            class="container__items-list-title container__items-list-title-from1024px"
            >Price</span
          >
        </div>
        <span
          class="container__items-list-title container__items-list-title-from1024px container__items-list-title-action"
          >Action</span
        >
      </div>
      <wish-list></wish-list>
    </section>
    <span v-else class="container__items-list-empty-text"
      >Your wishlist is empty.</span
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import GoBackBtn from "../UI/GoBackBtn.vue";
import WishList from "../UI/WishList.vue";
export default {
  name: "WishlistPage",
  components: { GoBackBtn, WishList },
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  },
  computed: {
    ...mapState(["totalQtyOfFavorites"]),
  },
  methods: {
    ...mapMutations(["updateTotalQtyOfFavorites"]),
    updateTotalQty() {
      this.updateTotalQtyOfFavorites(this.favorites.length);
    },
  },
  mounted() {
    this.updateTotalQty();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0rem 2rem;
}
.container__title {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 2.5rem;
}
.container__items-list-empty-text {
  display: block;
  text-align: center;
  height: 120px;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 2.5rem;
}
.container__items-list-title-from1024px {
  display: none;
}
.container__items-list-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
  margin-left: 2.5rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0rem 2.5rem;
  }
  .container__items-list-empty-text {
    height: 700px;
  }
  .container__items-list-title-and-items-list-section {
    padding: 0rem 8rem;
    height: 550px;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__items-list-title-and-items-list-section {
    padding: 0rem 10rem;
  }
  .container__items-list-title-from1024px {
    display: block;
  }
  .container__items-list-titles-flex {
    display: flex;
    justify-content: space-between;
  }
  .container__items-list-product-and-price-titles-flex {
    display: flex;
    gap: 13.125rem;
  }
  .container__items-list-title-action {
    margin-right: 6.125rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem 10rem;
  }
  .container__items-list-title-and-items-list-section {
    padding: 0rem 15.938rem;
  }
  .container__items-list-empty-text {
    height: 550px;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0rem 15.938rem;
  }
}
</style>
