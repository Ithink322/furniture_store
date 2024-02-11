<template>
  <div class="container__checkout-details-summary-list-flex">
    <summary-item
      v-for="product in products"
      :product="product"
      :key="product.id"
    ></summary-item>
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
  },
};
</script>

<style lang="scss" scoped>
.container__checkout-details-summary-list-flex {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 2rem;
}
</style>
