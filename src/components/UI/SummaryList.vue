<template>
  <div class="container__checkout-details-summary-list-flex">
    <transition-group name="summary-item-list">
      <summary-item
        v-for="product in products"
        :product="product"
        :products="products"
        :key="product.id"
        :remove-product="removeProduct"
        @productRemoved="removeProduct"
        :calculateTotals="calculateTotals"
      ></summary-item>
    </transition-group>
  </div>
</template>

<script>
import SummaryItem from "../UI/SummaryItem.vue";
export default {
  components: { SummaryItem },
  name: "SummaryList",
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
.summary-item-list-enter-active,
.summary-item-list-leave-active {
  transition: all 0.6s ease;
}
.summary-item-list-enter-from,
.summary-item-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.summary-item-list-move {
  transition: transform 0.6s ease;
}
.container__checkout-details-summary-list-flex {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 2rem;
  margin-bottom: 1.875rem;
}
</style>
