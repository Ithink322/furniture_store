<template>
  <div class="container__items-list-flex">
    <transition-group name="cart-item-list">
      <cart-item
        v-for="product in products"
        :product="product"
        :products="products"
        :key="product.id"
        @productRemoved="removeProduct"
        :calculateTotals="calculateTotals"
      ></cart-item>
    </transition-group>
  </div>
</template>

<script>
import CartItem from "../UI/CartItem.vue";
export default {
  name: "CartList",
  components: { CartItem },
  props: {
    products: {
      type: Array,
      required: true,
    },
    calculateTotals: {
      type: Function,
      required: true,
    },
  },
  methods: {
    removeProduct(id) {
      this.$emit("productRemoved", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.cart-item-list-enter-active,
.cart-item-list-leave-active {
  transition: all 0.6s ease;
}
.cart-item-list-enter-from,
.cart-item-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.cart-item-list-move {
  transition: transform 0.6s ease;
}
.container__items-list-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin-top: 3rem;
  width: 100%;
}
.container__items-list-flex::before {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #868686;
  margin-top: -1.5rem;
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container__items-list-flex {
    margin-bottom: 6.7rem;
  }
}
</style>
