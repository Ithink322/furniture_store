<template>
  <div class="container__orders-flex">
    <orders-item
      v-for="order in orders"
      :key="order.orderId"
      :order="order"
    ></orders-item>
  </div>
</template>

<script>
import OrdersItem from "../UI/OrdersItem.vue";
export default {
  components: { OrdersItem },
  name: "OrdersList",
  computed: {
    orders() {
      return JSON.parse(localStorage.getItem("orders")) || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.container__orders-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3.5rem;
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__orders-flex {
    gap: 3rem;
  }
  .container__orders-flex {
    margin-top: 2rem;
  }
}
</style>
