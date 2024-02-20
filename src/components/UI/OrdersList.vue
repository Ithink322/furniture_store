<template>
  <span v-if="!userId" class="container__orders-non-authorized-user-text"
    >Please log In to see your orders.</span
  >
  <span
    v-if="userId && this.orders.length === 0"
    class="container__orders-empty-text"
    >Order something cool!</span
  >
  <div v-else class="container__orders-flex">
    <orders-item
      v-for="order in orders"
      :key="order.orderId"
      :order="order"
    ></orders-item>
  </div>
</template>

<script>
import axios from "axios";
import OrdersItem from "../UI/OrdersItem.vue";
export default {
  components: { OrdersItem },
  name: "OrdersList",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      orders: [],
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const userId = localStorage.getItem("userId");
        if (userId) {
          const response = await axios.get(
            `http://localhost:5000/orders/collect?userId=${userId}`
          );
          this.orders = response.data;
        } else {
          console.log("You're not authorized");
        }
      } catch (error) {
        console.error("Error fetching orders client:", error);
      }
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
.container__orders-non-authorized-user-text,
.container__orders-empty-text {
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__orders-flex {
    gap: 3rem;
  }
  .container__orders-flex {
    margin-top: 2rem;
  }
  .container__orders-non-authorized-user-text,
  .container__orders-empty-text {
    margin-top: 2.5rem;
  }
}
</style>
