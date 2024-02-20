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
import axios from "axios";
import OrdersItem from "../UI/OrdersItem.vue";
export default {
  components: { OrdersItem },
  name: "OrdersList",
  /* computed: {
    orders() {
      return JSON.parse(localStorage.getItem("orders")) || [];
    },
  }, */
  data() {
    return {
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
