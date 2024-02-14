<template>
  <div class="container__item-card">
    <div class="container__item-card-flex">
      <img
        @click="goToCurrentProductPage"
        :src="product.hero"
        alt=""
        class="container__item-card-hero"
      />
      <div class="container__item-card-main-flex">
        <div class="container__item-card-title-and-color-and-counter-flex">
          <span
            @click="goToCurrentProductPage"
            class="container__item-card-title"
            >{{ product.title }}</span
          >
          <span class="container__item-card-color"
            >Color: {{ selectedColor }}</span
          >

          <div class="container__item-card-counter">
            <button
              @click="decreaseQty(product)"
              class="container__item-card-minus-btn"
            >
              <img src="imgs/minus-icon.svg" alt="" />
            </button>
            <span class="container__item-card-counter-text">{{
              product.qty
            }}</span>
            <button
              @click="increaseQty(product)"
              class="container__item-card-plus-btn"
            >
              <img src="imgs/plus-icon.svg" alt="" />
            </button>
          </div>
        </div>
        <button
          @click="removeProduct(product.id)"
          class="container__item-card-remove-btn"
        >
          <img src="imgs/x-icon-gray.svg" alt="" />
          <span class="container__item-card-remove-span">Remove</span>
        </button>
        <div
          class="container__item-card-counter-from768px-and-prices-flex-from768px"
        >
          <div class="container__item-card-counter-from768px">
            <button
              @click="decreaseQty(product)"
              class="container__item-card-minus-btn"
            >
              <img src="imgs/minus-icon.svg" alt="" />
            </button>
            <span class="container__item-card-counter-text">{{
              product.qty
            }}</span>
            <button
              @click="increaseQty(product)"
              class="container__item-card-plus-btn"
            >
              <img src="imgs/plus-icon.svg" alt="" />
            </button>
          </div>
          <div class="container__item-card-prices-flex">
            <span class="container__item-card-current-price"
              >${{
                (product.currentPrice.replace("$", "") * product.qty).toFixed(2)
              }}</span
            >
            <span class="container__item-card-previous-price"
              >${{
                (product.previousPrice.replace("$", "") * product.qty).toFixed(
                  2
                )
              }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    removeProduct: {
      type: Function,
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
    ...mapMutations(["updateTotalQty"]),
    updateTotalQtyOfCartProducts() {
      let totalQty = 0;
      let products = JSON.parse(localStorage.getItem("cart"));
      if (products !== null) {
        products.forEach((product) => {
          totalQty += Number(product.qty);
        });
        this.updateTotalQty(totalQty);
      }
    },
    decreaseQty(product) {
      if (product.qty > 1) {
        product.qty--;
      }
      localStorage.setItem("cart", JSON.stringify(this.products));
      this.updateTotalQtyOfCartProducts();
      this.calculateTotals();
    },
    increaseQty(product) {
      product.qty++;
      localStorage.setItem("cart", JSON.stringify(this.products));
      this.updateTotalQtyOfCartProducts();
      this.calculateTotals();
    },
    removeProduct(id) {
      this.removeProduct(id);
      this.$emit("productRemoved", id);
      this.updateTotalQtyOfCartProducts();
      this.calculateTotals();
    },
  },
  mounted() {
    this.updateTotalQtyOfCartProducts();
    this.calculateTotals();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__item-card::after {
  content: "";
  position: absolute;
  border: 1px solid #ebf0f3;
  width: 100%;
  margin-top: 1.5rem;
}
.container__item-card-flex {
  display: flex;
  gap: 1rem;
}
.container__item-card-hero {
  width: 80px;
  height: 96px;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
}
.container__item-card-main-flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.container__item-card-title-and-color-and-counter-flex,
.container__item-card-prices-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__item-card-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
  cursor: pointer;
}
.container__item-card-title:hover {
  color: rgb(212, 40, 204);
}
.container__item-card-color {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
.container__item-card-counter {
  display: flex;
  gap: 0.75rem;
  border: 1px solid #6c7275;
  border-radius: 0.25rem;
  width: fit-content;
  padding: 0.5rem 0.5rem;
}
.container__item-card-counter-from768px {
  display: none;
}
.container__item-card-minus-btn,
.container__item-card-plus-btn {
  @include button;
}
.container__item-card-counter-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #121212;
}
.container__item-card-current-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #121212;
}
.container__item-card-previous-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
  text-decoration: line-through;
}
.container__item-card-remove-btn {
  position: absolute;
  @include button;
  width: 14px;
  height: 14px;
  right: 0rem;
  margin-top: 3.4rem;
}
.container__item-card-remove-span {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container__item-card-current-price,
  .container__item-card-previous-price {
    font-size: 1.125rem;
  }
  .container__item-card-remove-span {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #6c7275;
  }
  .container__item-card-remove-btn {
    gap: 0.563rem;
    left: 8.05rem;
    margin-top: 3.1rem;
  }
  .container__item-card-counter {
    display: none;
  }
  .container__item-card-counter-from768px {
    display: flex;
    gap: 0.75rem;
    border: 1px solid #6c7275;
    border-radius: 0.25rem;
    width: fit-content;
    padding: 0.5rem 0.5rem;
  }
  .container__item-card-counter-from768px-and-prices-flex-from768px {
    display: flex;
    align-items: center;
    gap: 3.938rem;
  }
  .container__item-card-prices-flex {
    display: flex;
    flex-direction: row;
    gap: 3.938rem;
  }
}
</style>
