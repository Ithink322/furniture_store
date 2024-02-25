<template>
  <div class="container__checkout-details-summary-item">
    <div class="container__checkout-details-summary-item-flex">
      <img
        @click="goToCurrentProductPage"
        :src="product.hero"
        alt=""
        class="container__checkout-details-summary-item-hero"
      />
      <div
        class="container__checkout-details-summary-item-title-and-color-and-counter-and-prices-flex"
      >
        <div
          class="container__checkout-details-summary-item-title-and-color-and-counter-flex"
        >
          <span
            @click="goToCurrentProductPage"
            class="container__checkout-details-summary-item-title"
            >{{ product.title }}</span
          >
          <span class="container__checkout-details-summary-item-color"
            >Color: {{ selectedColor }}</span
          >
          <div class="container__checkout-details-summary-item-counter">
            <button
              @click="decreaseQty(product)"
              class="container__checkout-details-summary-item-minus-btn"
            >
              <img src="imgs/minus-icon.svg" alt="" />
            </button>
            <div class="container__checkout-details-summary-item-counter-text">
              {{ product.qty }}
            </div>
            <button
              @click="increaseQty(product)"
              class="container__checkout-details-summary-item-plus-btn"
            >
              <img src="imgs/plus-icon.svg" alt="" />
            </button>
          </div>
        </div>
        <div
          class="container__checkout-details-summary-price-and-remove-btn-flex"
        >
          <span class="container__checkout-details-summary-price"
            >${{
              (product.currentPrice.replace("$", "") * product.qty).toFixed(2)
            }}</span
          >
          <button
            @click="removeProduct(product.productId)"
            class="container__checkout-details-summary-remove-btn"
          >
            <img src="imgs/x-icon-gray.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "SummaryItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    calculateTotals: {
      type: Function,
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
  computed: {
    ...mapState(["totalQtyOfCartProducts"]),
  },
  methods: {
    ...mapActions(["selectProduct"]),
    goToCurrentProductPage() {
      this.selectProduct(this.product);
      this.$router.push("/CurrentProductPage");
      window.scrollTo(0, 0);
    },
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    async updateTotalQtyOfProducts() {
      let totalQty = 0;
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/cart/get?userId=${userId}`
          );
          let products = response.data;
          products.forEach((product) => {
            totalQty += Number(product.qty);
          });
          this.updateTotalQtyOfCartProducts(totalQty);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      } else {
        console.log("You're not authorized");
      }
    },
    decreaseQty(product) {
      if (product.qty > 1) {
        product.qty--;
      }
      axios
        .post("http://localhost:5000/cart/changeCounter", {
          userId: localStorage.getItem("userId"),
          productId: product.productId,
          qty: product.qty,
        })
        .then((response) => {
          console.log(
            "Product counter was changed successfully:",
            response.data
          );
        })
        .catch((error) => {
          console.error("Error in changing product counter:", error);
        });
      this.updateTotalQtyOfProducts();
      this.calculateTotals();
    },
    increaseQty(product) {
      product.qty++;
      axios
        .post("http://localhost:5000/cart/changeCounter", {
          userId: localStorage.getItem("userId"),
          productId: product.productId,
          qty: product.qty,
        })
        .then((response) => {
          console.log(
            "Product counter was changed successfully:",
            response.data
          );
        })
        .catch((error) => {
          console.error("Error in changing product counter:", error);
        });
      this.updateTotalQtyOfProducts();
      this.calculateTotals();
    },
    async removeProduct(productId) {
      const userId = localStorage.getItem("userId");
      try {
        const response = await axios.delete(
          `http://localhost:5000/cart/delete/${productId}/${userId}`
        );
        console.log("Product deleted successfully:", response.data);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
      this.$emit("productRemoved", productId);
      this.updateTotalQtyOfCartProducts();
      this.calculateTotals();
      this.updateTotalQtyOfProducts();
    },
  },
  mounted() {
    this.calculateTotals();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__checkout-details-summary-item-flex {
  position: relative;
  display: flex;
  gap: 1rem;
}
.container__checkout-details-summary-item-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: 7.4rem;
}
.container__checkout-details-summary-item-hero {
  width: 80px;
  height: 96px;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
}
.container__checkout-details-summary-item-title-and-color-and-counter-and-prices-flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  cursor: pointer;
}
.container__checkout-details-summary-item-title:hover {
  color: rgb(212, 40, 204);
}
.container__checkout-details-summary-item-color {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: $black;
}
.container__checkout-details-summary-item-counter {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid #6c7275;
  border-radius: 0.25rem;
  padding: 0.75rem 0.5rem;
  width: fit-content;
  height: 32px;
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
.container__checkout-details-summary-price-and-remove-btn-flex {
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
.container__checkout-details-summary-remove-btn {
  @include button;
}
</style>
