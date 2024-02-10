<template>
  <div class="container">
    <button @click="goBack" class="container__go-back-btn">
      <img src="imgs/go-back-btn.svg" alt="" />back
    </button>
    <h1 class="container__title">Cart</h1>
    <span class="container__sub-title">Products</span>
    <div
      class="container__items-list-and-coupon-and-cart-summary-sections-flex"
    >
      <cart-list
        :products="products"
        :calculateTotals="calculateTotals"
        @productRemoved="removeProduct"
      ></cart-list>
      <div class="container__coupon-and-cart-summary-sections-flex">
        <section class="container__coupon-section">
          <div class="container__coupon-title-and-subtitle">
            <span class="container__coupon-title">Have a coupon?</span>
            <span class="container__coupon-subtitle"
              >Add your code for an instant cart discount</span
            >
          </div>
          <form class="container__coupon-form">
            <img
              class="container__coupon-icon"
              src="imgs/coupon-icon.svg"
              alt=""
            />
            <input
              placeholder="Coupon Code"
              class="container__coupon-input"
              type="text"
            />
            <button class="container__coupon-btn">Apply</button>
          </form>
        </section>
        <section class="container__cart-summary-section">
          <span class="container__cart-summary-title">Cart summary</span>
          <div class="container__cart-summary-shipping-divs-flex">
            <div
              class="container__cart-summary-shipping-div container__cart-summary-free-shipping-div"
            >
              <div class="container__cart-summary-shipping-input-and-text-flex">
                <input
                  class="container__cart-summary-free-shipping-input container__cart-summary-shipping-input"
                  type="radio"
                  checked
                />
                <span class="container__cart-summary-shipping-text"
                  >Free shipping</span
                >
                <span class="container__cart-summary-shipping-price"
                  >$0.00</span
                >
              </div>
            </div>
            <div
              class="container__cart-summary-shipping-div container__cart-summary-express-shipping-div"
            >
              <div class="container__cart-summary-shipping-input-and-text-flex">
                <input
                  class="container__cart-summary-express-shipping-input container__cart-summary-shipping-input"
                  type="radio"
                />
                <span class="container__cart-summary-shipping-text"
                  >Express shipping</span
                >
                <span class="container__cart-summary-shipping-price"
                  >+$15.00</span
                >
              </div>
            </div>
          </div>
          <div class="container__cart-summary-totals-flex">
            <div
              class="container__cart-summary-total-flex container__cart-summary-subtotal-flex"
            >
              <span class="container__cart-summary-total-text">Subtotal</span>
              <span
                class="container__cart-summary-total-cost container__cart-summary-subtotal-cost"
                >${{ subTotal.toFixed(2) }}</span
              >
            </div>
            <div class="container__cart-summary-total-flex">
              <span class="container__cart-summary-total-text">Total</span>
              <span
                class="container__cart-summary-total-cost container__cart-summary-total-cost"
                >${{ total.toFixed(2) }}</span
              >
            </div>
          </div>
          <button class="container__cart-summary-btn">Checkout</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "../UI/CartList.vue";
export default {
  name: "CartPage",
  components: { CartList },
  data() {
    return {
      products: JSON.parse(localStorage.getItem("cart")) || [],
      selectedShipping: "free-shipping",
      subTotal: 0,
      total: 0,
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    removeProduct(id) {
      this.products = this.products.filter((product) => {
        return product.id !== id;
      });
      localStorage.setItem("cart", JSON.stringify(this.products));
    },
    calculateTotals() {
      this.subTotal = 0;
      this.total = 0;
      this.products.forEach((product) => {
        this.subTotal += parseFloat(
          parseFloat(product.previousPrice.replace("$", "")) * product.qty
        );
        this.total += parseFloat(
          parseFloat(product.currentPrice.replace("$", "")) * product.qty
        );
      });
      const deliveryCost =
        this.selectedShipping === "express-shipping" ? 15 : 0;
      this.subTotal += deliveryCost;
      this.total += deliveryCost;
    },
  },
  mounted() {
    this.calculateTotals();
    document
      .querySelector(".container__cart-summary-free-shipping-div")
      .addEventListener("click", () => {
        document.querySelector(
          ".container__cart-summary-free-shipping-div"
        ).style.background = "#f3f5f7";
        document.querySelector(
          ".container__cart-summary-express-shipping-div"
        ).style.background = "transparent";
        document.querySelector(
          ".container__cart-summary-free-shipping-input"
        ).checked = true;
        document.querySelector(
          ".container__cart-summary-express-shipping-input"
        ).checked = false;
        this.selectedShipping = "free-shipping";
        this.calculateTotals();
      });
    document
      .querySelector(".container__cart-summary-express-shipping-div")
      .addEventListener("click", () => {
        document.querySelector(
          ".container__cart-summary-express-shipping-div"
        ).style.background = "#f3f5f7";
        document.querySelector(
          ".container__cart-summary-free-shipping-div"
        ).style.background = "transparent";
        document.querySelector(
          ".container__cart-summary-express-shipping-input"
        ).checked = true;
        document.querySelector(
          ".container__cart-summary-free-shipping-input"
        ).checked = false;
        this.selectedShipping = "express-shipping";
        this.calculateTotals();
      });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 0rem 2rem;
}
.container__go-back-btn {
  @include button;
  gap: 0.375rem;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #605f5f;
}
.container__title {
  display: block;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000;
}
.container__sub-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #121212;
}
.container__coupon-section {
  margin-top: 3rem;
}
.container__coupon-title-and-subtitle {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__coupon-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container__coupon-subtitle {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
}
.container__coupon-form {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
.container__coupon-icon {
  position: absolute;
  margin-top: 0.875rem;
  margin-left: 1rem;
}
.container__coupon-input {
  @include input;
  border: 1px solid #6c7275;
  padding: 0.75rem 4.188rem 0.75rem 3rem;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #6c7275;
}
.container__coupon-input:focus {
  outline: 1px solid #121212;
}
.container__coupon-btn {
  position: absolute;
  @include button;
  right: 1rem;
  margin-top: -2.1rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: $black;
}
.container__cart-summary-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #6c7275;
  border-radius: 0.375rem;
  margin-bottom: 5rem;
}
.container__cart-summary-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__cart-summary-shipping-divs-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container__cart-summary-shipping-div {
  border: 1px solid #6c7275;
  border-radius: 0.25rem;
  padding: 1rem;
  cursor: pointer;
}
.container__cart-summary-free-shipping-div {
  background: #f3f5f7;
}
.container__cart-summary-shipping-input-and-text-flex {
  display: flex;
  gap: 0.75rem;
}
.container__cart-summary-shipping-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin: 0rem;
  flex-shrink: 0;
  border: 1px solid black;
  border-radius: 50%;
  outline: none;
}
.container__cart-summary-shipping-input[type="radio"]:checked::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #121212;
}
.container__cart-summary-shipping-text,
.container__cart-summary-shipping-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__cart-summary-totals-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.container__cart-summary-total-flex {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container__cart-summary-subtotal-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: 2.6rem;
}
.container__cart-summary-total-text,
.container__cart-summary-total-cost {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $black;
}
.container__cart-summary-btn {
  @include button;
  width: 100%;
  background: $black;
  padding: 0.875rem 0rem;
  border-radius: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0rem 2.5rem;
  }
  .container__title {
    font-size: 3.375rem;
  }
  .container__coupon-title {
    font-size: 1.25rem;
  }
  .container__coupon-subtitle,
  .container__cart-summary-shipping-text,
  .container__cart-summary-total-text,
  .container__cart-summary-total-cost,
  .container__cart-summary-shipping-price {
    font-size: 1rem;
  }
  .container__cart-summary-title {
    font-size: 1.25rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem 10rem;
  }
  .container__items-list-and-coupon-and-cart-summary-sections-flex {
    display: flex;
    gap: 4rem;
  }
  .container__coupon-and-cart-summary-sections-flex {
    display: flex;
    flex-direction: column;
  }
  .container__coupon-section {
    margin-top: 0rem;
  }
  .container__cart-summary-section {
    width: 413px;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0rem 15.938rem;
  }
}
</style>
