<template>
  <div @click="goToCurrentProductPage" class="container-item-card">
    <div class="container-item-card-new-and-sale-divs-flex">
      <div class="container-item-card-new-div">
        <span class="container-item-card-new-text">NEW</span>
      </div>
      <div class="container-item-card-sale-div">
        <span class="container-item-card-sale-text">-50%</span>
      </div>
    </div>
    <div class="container-item-card-main-flex">
      <img :src="item.hero" alt="" class="container-item-card-hero" />
      <div
        class="container-item-card-rating-and-title-and-wishlist-btn-and-prices-and-desctiption-flex"
      >
        <div class="container-item-card-rating">
          <img src="imgs/Star-icon.svg" alt="" />
          <img src="imgs/Star-icon.svg" alt="" />
          <img src="imgs/Star-icon.svg" alt="" />
          <img src="imgs/Star-icon.svg" alt="" />
          <img src="imgs/Star-icon.svg" alt="" />
        </div>
        <div class="container-item-card-title-and-whishlist-btn-flex">
          <span class="container-item-card-title">{{ item.title }}</span>
          <button class="container-item-card-wishlist-btn">
            <img src="imgs/whishlist-icon.svg" alt="" />
          </button>
        </div>
        <div class="container-item-card-prices-flex">
          <span class="container-item-card-current-price">{{
            item.currentPrice
          }}</span>
          <span class="container-item-card-previous-price">{{
            item.previousPrice
          }}</span>
        </div>
        <span class="container-item-card-description">{{
          item.description
        }}</span>
      </div>
      <button class="container-item-card-add-to-cart-btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ShopItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["selectProduct"]),
    goToCurrentProductPage() {
      this.selectProduct(this.item);
      this.$router.push("/CurrentProductPage");
      window.scrollTo(0, 0);
      console.log(localStorage.getItem("CurrentProduct"));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container-item-card {
  position: relative;
  cursor: pointer;
}
.container-item-card-new-and-sale-divs-flex {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 71px;
}
.container-item-card-new-div {
  background: #fff;
  border-radius: 0.25rem;
  padding: 0.25rem 0.875rem;
  z-index: 2;
}
.container-item-card-new-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: $black;
}
.container-item-card-sale-div {
  background: #38cb89;
  border-radius: 0.25rem;
  padding: 0.25rem 0.875rem;
  z-index: 2;
}
.container-item-card-sale-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fefefe;
}
.container-item-card-main-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container-item-card-rating-and-title-and-wishlist-btn-and-prices-and-desctiption-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container-item-card-rating {
  display: flex;
  gap: 0.12rem;
}
.container-item-card-title-and-whishlist-btn-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container-item-card-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container-item-card-wishlist-btn {
  @include button;
  padding: 0.375rem;
}
.container-item-card-styles-for-wishlist-btn-in-2-cols-grid {
  position: absolute;
  top: 0.625rem;
  right: 0.375rem;
}
.container-item-card-prices-flex {
  display: flex;
  gap: 0.75rem;
}
.container-item-card-current-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #121212;
}
.container-item-card-previous-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
  text-decoration: line-through;
}
.container-item-card-description {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
.container-item-card-add-to-cart-btn {
  @include button;
  background: $black;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fefefe;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-item-card-add-to-cart-btn-styles-from768px {
    position: absolute;
    bottom: 6.4rem;
    left: 1rem;
    width: calc(100% - 2rem);
  }
}
</style>
