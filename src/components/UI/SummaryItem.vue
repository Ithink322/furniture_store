<template>
  <div class="container__checkout-details-summary-item">
    <div class="container__checkout-details-summary-item-flex">
      <img
        :src="product.hero"
        alt=""
        class="container__checkout-details-summary-item-hero"
      />
      <div
        class="container__checkout-details-summary-item-title-and-color-and-counter-flex"
      >
        <span class="container__checkout-details-summary-item-title">{{
          product.title
        }}</span>
        <span class="container__checkout-details-summary-item-color"
          >Color: {{ selectedColor }}</span
        >
        <div class="container__checkout-details-summary-item-counter">
          <button class="container__checkout-details-summary-item-minus-btn">
            <img src="imgs/minus-icon.svg" alt="" />
          </button>
          <div class="container__checkout-details-summary-item-counter-text">
            {{ product.qty }}
          </div>
          <button class="container__checkout-details-summary-item-plus-btn">
            <img src="imgs/plus-icon.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="container__checkout-details-summary-price-and-close-btn-flex">
        <span class="container__checkout-details-summary-price">{{
          product.currentPrice
        }}</span>
        <button class="container__checkout-details-summary-close-btn">
          <img src="imgs/x-icon-gray.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryItem",
  props: {
    product: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedColor:
        localStorage.getItem(`selectedColor_${this.product.id}`) ||
        this.product.startColor,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__checkout-details-summary-item {
}
.container__checkout-details-summary-item-flex {
  display: flex;
  gap: 1rem;
}
.container__checkout-details-summary-item-hero {
  width: 80px;
  height: 96px;
}
.container__checkout-details-summary-item-title-and-color-and-counter-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__checkout-details-summary-item-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__checkout-details-summary-item-color {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: $black;
}
.container__checkout-details-summary-item-counter {
  display: flex;
  gap: 0.75rem;
  border: 1px solid #6c7275;
  border-radius: 0.25rem;
  padding: 0.75rem 0.5rem;
}
.container__checkout-details-summary-item-minus-btn,
.container__checkout-details-summary-item-plus-btn {
  @include button;
}
.container__checkout-details-summary-item-counter-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #121212;
}
.container__checkout-details-summary-price-and-close-btn-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}
.container__checkout-details-summary-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #121212;
}
.container__checkout-details-summary-close-btn {
  @include button;
}
</style>
