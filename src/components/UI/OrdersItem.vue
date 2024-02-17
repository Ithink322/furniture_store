<template>
  <div class="container__orders-item-flex">
    <div class="container__orders-item-titles-flex">
      <span class="container__orders-item-title">Number ID</span>
      <span class="container__orders-item-title">Dates</span>
      <span class="container__orders-item-title">Status</span>
      <span class="container__orders-item-title">Price</span>
    </div>
    <div class="container__orders-item-values-flex">
      <span class="container__orders-item-value">#{{ order.orderId }}</span>
      <span class="container__orders-item-value">{{ order.date }}</span>
      <span class="container__orders-item-value">{{
        order.deliveryStatus
      }}</span>
      <span class="container__orders-item-value"
        >${{ order.total.toFixed(2) }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersList",
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__orders-item-flex {
  position: relative;
  display: flex;
  gap: 4rem;
}
.container__orders-item-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: 8.2rem;
}
.container__orders-item-titles-flex,
.container__orders-item-values-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__orders-item-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
}
.container__orders-item-value {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $black;
}
/* 768px = 48em */
@media (min-width: 48em) {
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__orders-item-flex::after {
    margin-top: 2.5rem;
  }
  .container__orders-item-titles-flex {
    display: none;
  }
  .container__orders-item-values-flex {
    flex-direction: row;
    gap: 5rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
