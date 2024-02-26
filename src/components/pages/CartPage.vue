<template>
  <div class="container">
    <go-back-btn></go-back-btn>
    <h1 class="container__title">{{ titleSection }}</h1>
    <section class="container__stages-overflow">
      <div class="container__stages-flex">
        <div
          @click="showShoppingCart"
          class="container__stage-flex container__shopping-cart-stage-flex"
        >
          <div
            class="container__stage-circle container__shopping-cart-stage-circle"
          >
            <span
              class="container__stage-circle-num container__shopping-cart-stage-circle-num"
              >1</span
            ><img
              class="container__stage-tick container__shopping-cart-stage-tick"
              src="imgs/white-tick.svg"
              alt=""
            />
          </div>
          <span
            class="container__stage-text container__shopping-cart-stage-text"
            >Shopping cart</span
          >
        </div>
        <div
          @click="showCheckoutDetails"
          class="container__stage-flex container__checkout-details-stage-flex"
        >
          <div
            class="container__stage-circle container__checkout-details-stage-circle"
          >
            <span
              class="container__stage-circle-num container__checkout-details-stage-circle-num"
              >2</span
            ><img
              class="container__stage-tick container__checkout-details-stage-tick"
              src="imgs/white-tick.svg"
              alt=""
            />
          </div>
          <span
            class="container__stage-text container__checkout-details-stage-text"
            >Checkout details</span
          >
        </div>
        <div class="container__stage-flex container__order-complete-stage-flex">
          <div
            class="container__stage-circle container__order-complete-stage-circle"
          >
            <span
              class="container__stage-circle-num container__order-complete-stage-circle-num"
              >3</span
            ><img
              class="container__stage-tick container__order-complete-stage-tick"
              src="imgs/white-tick.svg"
              alt=""
            />
          </div>
          <span
            class="container__stage-text container__order-complete-stage-text"
            >Order complete</span
          >
        </div>
      </div>
    </section>
    <section
      v-if="isShoppingCartVisible"
      class="container__shopping-cart-section"
    >
      <span class="container__sub-title">Products</span>
      <div
        class="container__items-list-and-coupon-and-cart-summary-sections-flex"
      >
        <span
          v-if="this.products.length === 0 && this.userId"
          class="container__items-list-empty"
          >Your cart is empty. Add something cool!</span
        >
        <span
          v-if="!this.userId"
          class="container__items-list-non-authorized-user"
          >You can't add products to your cart without authorization!</span
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
            <form @submit.prevent="applyCoupone" class="container__coupon-form">
              <img
                class="container__coupon-icon"
                src="imgs/coupon-icon.svg"
                alt=""
              />
              <input
                placeholder="Coupon Code"
                class="container__coupon-input"
                type="text"
                v-model="userCouponeCode"
              />
              <button @click="applyCoupone" class="container__coupon-btn">
                Apply
              </button>
            </form>
          </section>
          <section class="container__cart-summary-section">
            <span class="container__cart-summary-title">Cart summary</span>
            <div class="container__cart-summary-shipping-divs-flex">
              <div
                class="container__cart-summary-shipping-div container__cart-summary-free-shipping-div"
              >
                <div
                  class="container__cart-summary-shipping-input-and-text-flex"
                >
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
                <div
                  class="container__cart-summary-shipping-input-and-text-flex"
                >
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
                <div
                  class="container__cart-summary-total-disount-and-cost-flex"
                >
                  <span
                    v-if="this.isCouponeActivated"
                    class="container__cart-summary-total-disount"
                    >-${{ discountSubTotal
                    }}<br
                      class="container__cart-summary-total-disount-br-to-375px"
                    />
                    [Remove]</span
                  >
                  <span
                    class="container__cart-summary-total-cost container__cart-summary-subtotal-cost"
                    >${{ subTotal.toFixed(2) }}</span
                  >
                </div>
              </div>
              <div class="container__cart-summary-total-flex">
                <span class="container__cart-summary-total-text">Total</span>
                <div
                  class="container__cart-summary-total-disount-and-cost-flex"
                >
                  <span
                    v-if="this.isCouponeActivated"
                    class="container__cart-summary-total-disount"
                    >-${{ discount
                    }}<br
                      class="container__cart-summary-total-disount-br-to-375px"
                    />
                    [Remove]</span
                  >
                  <span
                    class="container__cart-summary-total-cost container__cart-summary-total-cost"
                    >${{ total.toFixed(2) }}</span
                  >
                </div>
              </div>
            </div>
            <button
              @click="showCheckoutDetails"
              class="container__cart-summary-btn"
            >
              Checkout
            </button>
          </section>
        </div>
      </div>
    </section>
    <section
      v-if="isCheckoutDetailsVisible"
      class="container__checkout-details-section"
    >
      <div class="container__forms-and-items-list-and-place-order-btn-flex">
        <div class="container__forms-flex">
          <form
            @submit.prevent
            class="container__checkout-details-contact-info-form"
          >
            <span class="container__title-form">Contact Infomation</span>
            <div class="container__two-inputs-flex">
              <div class="container__input-title-and-input-flex">
                <span class="container__input-title">FIRST Name</span>
                <input
                  placeholder="First name"
                  type="text"
                  class="container__input"
                />
              </div>
              <div class="container__input-title-and-input-flex">
                <span class="container__input-title">LAST Name</span>
                <input
                  placeholder="Last name"
                  type="text"
                  class="container__input"
                />
              </div>
            </div>
            <div class="container__input-title-and-input-flex">
              <span class="container__input-title">PHONE NUMBER</span>
              <input
                placeholder="Phone number"
                type="text"
                class="container__input"
              />
            </div>
            <div class="container__input-title-and-input-flex">
              <span class="container__input-title">EMAIL ADDRESS</span>
              <input
                placeholder="Your Email"
                type="text"
                class="container__input"
              />
            </div>
          </form>
          <form @submit.prevent class="container__shipping-address-form">
            <span class="container__title-form">Shipping Address</span>
            <div class="container__input-title-and-input-flex">
              <span class="container__input-title">STREET ADRESS *</span>
              <input
                placeholder="Street Address"
                type="text"
                class="container__input"
              />
            </div>
            <div class="dropdown">
              <button @click="dropdownCountries" class="dropdown__button">
                <span class="dropdown__button-text">Country</span>
                <img
                  class="dropdown__button-arrow"
                  src="imgs/dropdown-arrow.svg"
                  alt=""
                />
              </button>
              <ul class="dropdown__list">
                <li
                  class="dropdown__list-item"
                  v-for="option in options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.value }}
                </li>
              </ul>
            </div>
            <div class="container__input-title-and-input-flex">
              <span class="container__input-title">TOWN / CITY *</span>
              <input
                placeholder="Town / City"
                type="text"
                class="container__input"
              />
            </div>
            <div class="container__two-inputs-flex">
              <div class="container__input-title-and-input-flex">
                <span class="container__input-title">STATE</span>
                <input
                  placeholder="State"
                  type="text"
                  class="container__input"
                />
              </div>
              <div class="container__input-title-and-input-flex">
                <span class="container__input-title">ZIP CODE</span>
                <input
                  placeholder="Zip Code"
                  type="text"
                  class="container__input"
                />
              </div>
            </div>
            <div class="container__checkbox-and-text-flex">
              <input type="checkbox" class="container__checkbox" />
              <span class="container__checkbox-text"
                >Use a different billing address (optional)</span
              >
            </div>
          </form>
          <form
            @submit.prevent
            class="container__checkout-details-payment-form"
          >
            <span class="container__title-form">Payment method</span>
            <div class="container__checkout-details-payment-divs-flex">
              <div
                class="container__checkout-details-payment-div container__checkout-details-pay-by-card-credit-div"
              >
                <input
                  class="container__checkout-details-pay-by-card-input container__checkout-details-payment-input"
                  type="radio"
                  checked
                />
                <span class="container__checkout-details-payment-text"
                  >Pay by Card Credit</span
                >
              </div>
              <div
                class="container__checkout-details-payment-div container__checkout-details-paypal-div"
              >
                <input
                  class="container__checkout-details-paypal-card-input container__checkout-details-payment-input"
                  type="radio"
                />
                <span class="container__checkout-details-payment-text"
                  >Paypal</span
                >
              </div>
            </div>
            <div class="container__input-title-and-input-flex">
              <span class="container__input-title">Card Number</span>
              <input
                placeholder="9999 9999 9999 9999"
                type="text"
                class="container__input"
                v-model="cardNumber"
                @input="formatCardNumber"
              />
            </div>
            <div class="container__two-inputs-flex">
              <div class="container__input-title-and-input-flex">
                <span class="container__input-title">Expiration date</span>
                <input
                  placeholder="MM/YY"
                  type="text"
                  class="container__input"
                  v-model="expiryDate"
                  @input="formatExpiryDate"
                />
              </div>
              <div class="container__input-title-and-input-flex">
                <span class="container__input-title">CVC</span>
                <input
                  placeholder="CVC code"
                  type="text"
                  class="container__input"
                  v-model="cvcCode"
                  @input="limitCvcCode"
                />
              </div>
            </div>
          </form>
        </div>
        <section class="container__checkout-details-order-summary-section">
          <span class="container__title-form">Order summary</span>
          <span
            v-if="this.products.length === 0"
            class="container__checkout-details-order-summary-empty-text"
            >Your cart is empty. Add something cool!</span
          >
          <summary-list
            :products="products"
            :calculateTotals="calculateTotals"
            @productRemoved="removeProduct"
          ></summary-list>
          <div class="container__checkout-details-order-summary-details-flex">
            <div
              v-if="this.isCouponeActivated"
              class="container__checkout-details-order-summary-details-coupone-main-flex"
            >
              <div
                class="container__checkout-details-order-summary-details-coupone-icon-and-text-flex"
              >
                <img src="imgs/coupon-black-icon.svg" alt="" />
                <span
                  class="container__checkout-details-order-summary-details-coupone-text"
                  >{{ couponCode }}</span
                >
              </div>
              <span
                class="container__checkout-details-order-summary-details-coupone-coupone-price"
                >-${{ discount
                }}<br
                  class="container__checkout-details-order-summary-details-coupone-coupone-price-br-to-375px"
                />
                [Remove]</span
              >
            </div>
            <div
              class="container__checkout-details-order-summary-details-text-and-price-flex container__checkout-details-order-summary-details-text-and-price-shipping-flex"
            >
              <span
                class="container__checkout-details-order-summary-details-text"
                >Shipping</span
              >
              <div
                class="container__checkout-details-order-summary-details-price"
              >
                {{ selectedShipping }}
              </div>
            </div>
            <div class="container__checkout-details-order-summary-details-flex">
              <div
                class="container__checkout-details-order-summary-details-text-and-price-flex"
              >
                <span
                  class="container__checkout-details-order-summary-details-paypall-text"
                  >Total</span
                >
                <div
                  class="container__checkout-details-order-summary-details-price"
                >
                  ${{ total.toFixed(2) }}
                </div>
              </div>
            </div>
          </div>
        </section>
        <button
          @click="showOrderComplete"
          class="container__checkout-details-order-summary-place-order-btn"
        >
          Place order
        </button>
      </div>
    </section>
    <section
      v-if="isOrderCompleteVisible"
      class="container__order-complete-section"
    >
      <div class="container__order-complete-order">
        <div class="container__order-complete-order-title-and-text">
          <span class="container__order-complete-order-title"
            >Thank you! 🎉</span
          >
          <span class="container__order-complete-order-text"
            >Your order has been received</span
          >
        </div>
        <div class="container__order-complete-order-items-flex">
          <div
            v-for="product in products"
            :key="product.productId"
            class="container__order-complete-order-item"
          >
            <img
              :src="product.hero"
              alt=""
              class="container__order-complete-order-items-hero"
            />
            <div class="container__order-complete-order-items-qty-back">
              <span class="container__order-complete-order-items-qty">{{
                product.qty
              }}</span>
            </div>
          </div>
        </div>
        <div class="container__order-complete-order-details-main-flex">
          <div class="container__order-complete-order-details-flex">
            <span class="container__order-complete-order-details-title"
              >Order code:</span
            >
            <span class="container__order-complete-order-details-text"
              >#{{ orderId }}</span
            >
          </div>
          <div class="container__order-complete-order-details-flex">
            <span class="container__order-complete-order-details-title"
              >Date:</span
            >
            <span class="container__order-complete-order-details-text">{{
              formattedDate
            }}</span>
          </div>
          <div class="container__order-complete-order-details-flex">
            <span class="container__order-complete-order-details-title"
              >Total:</span
            >
            <span class="container__order-complete-order-details-text"
              >${{ total.toFixed(2) }}</span
            >
          </div>
          <div class="container__order-complete-order-details-flex">
            <span class="container__order-complete-order-details-title"
              >Payment method:</span
            >
            <span class="container__order-complete-order-details-text">{{
              payment
            }}</span>
          </div>
        </div>
        <button
          class="container__order-complete-order-details-purchase-history-btn"
        >
          Purchase history
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import GoBackBtn from "../UI/GoBackBtn.vue";
import CartList from "../UI/CartList.vue";
import SummaryList from "../UI/SummaryList.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CartPage",
  components: { GoBackBtn, CartList, SummaryList },
  data() {
    return {
      userId: localStorage.getItem("userId"),
      products: [],
      titleSection: "Cart",
      options: [
        { value: "Canada" },
        { value: "USA" },
        { value: "Australia" },
        { value: "Denmark" },
        { value: "Sweden" },
        { value: "Switzerland" },
        { value: "France" },
        { value: "Netherlands" },
        { value: "Poland" },
        { value: "Germany" },
      ],
      selectedShipping: "Free",
      subTotal: 0,
      total: 0,
      isShoppingCartVisible: true,
      isCheckoutDetailsVisible: false,
      isOrderCompleteVisible: false,
      couponCode: "Minecraft25",
      userCouponeCode: "",
      discount: 0,
      discountSubTotal: 0,
      isCouponeActivated: false,
      orderId: Date.now(),
      payment: "Pay by Card Credit",
      name: localStorage.getItem("name"),
      formattedDate: "",
      deliveryStatus: "In process",
      cardNumber: "",
      expiryDate: "",
      cvcCode: "",
    };
  },
  computed: {
    ...mapState(["totalQtyOfCartProducts"]),
  },
  methods: {
    async fetchProducts() {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/cart/get?userId=${userId}`
          );
          this.products = response.data;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
        this.updateTotalQtyOfProducts();
      }
    },
    removeProduct(productId) {
      this.products = this.products.filter((product) => {
        return product.productId !== productId;
      });
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
      if (this.couponCode === this.userCouponeCode) {
        this.discount = parseFloat(
          (this.total / 100) * this.couponCode.match(/\d+/g).join("")
        ).toFixed(2);
        this.discountSubTotal = parseFloat(
          (this.subTotal / 100) * this.couponCode.match(/\d+/g).join("")
        ).toFixed(2);
        this.subTotal = parseFloat(
          this.subTotal -
            (this.subTotal / 100) * this.couponCode.match(/\d+/g).join("")
        );
        this.total = parseFloat(
          this.total -
            (this.total / 100) * this.couponCode.match(/\d+/g).join("")
        );
      }
      const deliveryCost = this.selectedShipping === "$15.00" ? 15 : 0;
      this.subTotal += deliveryCost;
      this.total += deliveryCost;
    },
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    updateTotalQtyOfProducts() {
      let totalQty = 0;
      if (this.products !== null) {
        this.products.forEach((product) => {
          totalQty += Number(product.qty);
        });
        this.updateTotalQtyOfCartProducts(totalQty);
      }
    },
    showShoppingCart() {
      this.updateTotalQtyOfProducts();
      this.calculateTotals();
      this.titleSection = "Cart";
      this.isShoppingCartVisible = true;
      this.isCheckoutDetailsVisible = false;
      this.isOrderCompleteVisible = false;
      document
        .querySelector(".container__shopping-cart-stage-circle")
        .classList.remove("container__stage-green-circle");
      document.querySelector(
        ".container__shopping-cart-stage-circle-num"
      ).style.display = "block";
      document.querySelector(
        ".container__shopping-cart-stage-tick"
      ).style.display = "none";
      document
        .querySelector(".container__shopping-cart-stage-text")
        .classList.remove("container__stage-green-text");
      document
        .querySelector(".container__shopping-cart-stage-flex")
        .classList.remove("container__border-bottom-green-stage-flex");
      document
        .querySelector(".container__checkout-details-stage-circle")
        .classList.remove("container__stage-black-circle");
      document
        .querySelector(".container__checkout-details-stage-text")
        .classList.remove("container__stage-black-text");
      document.querySelector(
        ".container__checkout-details-stage-circle-num"
      ).style.display = "block";
      document.querySelector(
        ".container__checkout-details-stage-tick"
      ).style.display = "none";
      document
        .querySelector(".container__checkout-details-stage-flex")
        .classList.remove("container__border-bottom-black-stage-flex");
      document
        .querySelector(".container__checkout-details-stage-circle")
        .classList.remove("container__stage-green-circle");
      document
        .querySelector(".container__checkout-details-stage-text")
        .classList.remove("container__stage-green-text");
      document
        .querySelector(".container__checkout-details-stage-flex")
        .classList.remove("container__border-bottom-green-stage-flex");
      document
        .querySelector(".container__order-complete-stage-circle")
        .classList.remove("container__stage-black-circle");
      document
        .querySelector(".container__order-complete-stage-text")
        .classList.remove("container__stage-black-text");
      document
        .querySelector(".container__order-complete-stage-flex")
        .classList.remove("container__border-bottom-black-stage-flex");
      this.$nextTick(() => {
        this.addEventListenersRadioBtns();
        this.removeEventListenersRadioBtns();
      });
    },
    showCheckoutDetails() {
      if (this.products.length > 0) {
        this.updateTotalQtyOfProducts();
        window.scrollTo(0, 0);
        this.titleSection = "Check Out";
        this.isShoppingCartVisible = false;
        this.isCheckoutDetailsVisible = true;
        this.isOrderCompleteVisible = false;
        document
          .querySelector(".container__shopping-cart-stage-circle")
          .classList.add("container__stage-green-circle");
        document.querySelector(
          ".container__shopping-cart-stage-circle-num"
        ).style.display = "none";
        document.querySelector(
          ".container__shopping-cart-stage-tick"
        ).style.display = "block";
        document
          .querySelector(".container__shopping-cart-stage-text")
          .classList.add("container__stage-green-text");
        document
          .querySelector(".container__shopping-cart-stage-flex")
          .classList.add("container__border-bottom-green-stage-flex");
        document
          .querySelector(".container__checkout-details-stage-circle")
          .classList.remove("container__stage-green-circle");
        document
          .querySelector(".container__checkout-details-stage-text")
          .classList.remove("container__stage-green-text");
        document.querySelector(
          ".container__checkout-details-stage-circle-num"
        ).style.display = "block";
        document.querySelector(
          ".container__checkout-details-stage-tick"
        ).style.display = "none";
        document
          .querySelector(".container__checkout-details-stage-flex")
          .classList.remove("container__border-bottom-green-stage-flex");
        document
          .querySelector(".container__checkout-details-stage-circle")
          .classList.add("container__stage-black-circle");
        document
          .querySelector(".container__checkout-details-stage-text")
          .classList.add("container__stage-black-text");
        document
          .querySelector(".container__checkout-details-stage-flex")
          .classList.add("container__border-bottom-black-stage-flex");
        document
          .querySelector(".container__order-complete-stage-circle")
          .classList.add("container__stage-gray-circle");
        document
          .querySelector(".container__order-complete-stage-text")
          .classList.add("container__stage-gray-text");
        document
          .querySelector(".container__order-complete-stage-flex")
          .classList.add("container__border-bottom-transparent-stage-flex");
        this.$nextTick(() => {
          this.removeEventListenersRadioBtns();
          this.addEventListenersPaymentRadioBtns();
        });
        if (window.innerWidth < 1024) {
          let sliderTrack = document.querySelector(".container__stages-flex");
          sliderTrack.style.transform = `translateX(${-288}px)`;
        }
      }
    },
    async showOrderComplete() {
      if (this.products.length > 0 && this.name !== null) {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const currentDate = new Date();
        const month = months[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        this.formattedDate = `${month} ${day}, ${year}`;
        window.scrollTo(0, 0);
        try {
          const response = await axios.post(
            "http://localhost:5000/orders/create",
            {
              userId: localStorage.getItem("userId"),
              orderId: this.orderId,
              date: this.formattedDate,
              deliveryStatus: this.deliveryStatus,
              total: this.total,
              payment: this.payment,
              name: this.name,
            }
          );

          console.log("Order created successfully:", response.data);
        } catch (error) {
          console.error("Error creating order:", error);
        }
        this.titleSection = "Complete!";
        this.isShoppingCartVisible = false;
        this.isCheckoutDetailsVisible = false;
        this.isOrderCompleteVisible = true;
        document
          .querySelector(".container__shopping-cart-stage-circle")
          .classList.add("container__stage-green-circle");
        document.querySelector(
          ".container__shopping-cart-stage-circle-num"
        ).style.display = "none";
        document.querySelector(
          ".container__shopping-cart-stage-tick"
        ).style.display = "block";
        document
          .querySelector(".container__shopping-cart-stage-text")
          .classList.add("container__stage-green-text");
        document
          .querySelector(".container__shopping-cart-stage-flex")
          .classList.add("container__border-bottom-green-stage-flex");
        document
          .querySelector(".container__checkout-details-stage-circle")
          .classList.add("container__stage-green-circle");
        document.querySelector(
          ".container__checkout-details-stage-circle-num"
        ).style.display = "none";
        document.querySelector(
          ".container__checkout-details-stage-tick"
        ).style.display = "block";
        document
          .querySelector(".container__checkout-details-stage-text")
          .classList.add("container__stage-green-text");
        document
          .querySelector(".container__checkout-details-stage-flex")
          .classList.add("container__border-bottom-green-stage-flex");
        document
          .querySelector(".container__order-complete-stage-circle")
          .classList.remove("container__stage-gray-circle");
        document
          .querySelector(".container__order-complete-stage-text")
          .classList.remove("container__stage-gray-text");
        document
          .querySelector(".container__order-complete-stage-flex")
          .classList.remove("container__border-bottom-transparent-stage-flex");
        document
          .querySelector(".container__order-complete-stage-circle")
          .classList.add("container__stage-black-circle");
        document
          .querySelector(".container__order-complete-stage-text")
          .classList.add("container__stage-black-text");
        document
          .querySelector(".container__order-complete-stage-flex")
          .classList.add("container__border-bottom-black-stage-flex");
        this.$nextTick(() => {
          this.removeEventListenersRadioBtns();
          this.removeEventListenersRadioBtns();
        });
        if (window.innerWidth < 1024) {
          let sliderTrack = document.querySelector(".container__stages-flex");
          sliderTrack.style.transform = `translateX(${-576}px)`;
        }
        setTimeout(() => {
          this.products = [];
          this.titleSection = "Cart";
          this.isShoppingCartVisible = true;
          this.isCheckoutDetailsVisible = false;
          this.isOrderCompleteVisible = false;
        }, 15000);
      }
    },
    applyCoupone() {
      this.calculateTotals();
      if (this.couponCode === this.userCouponeCode) {
        this.isCouponeActivated = true;
      } else {
        this.isCouponeActivated = false;
      }
    },
    addEventListenersRadioBtns() {
      const freeShippingDiv = document.querySelector(
        ".container__cart-summary-free-shipping-div"
      );
      const expressShippingDiv = document.querySelector(
        ".container__cart-summary-express-shipping-div"
      );

      const freeShippingClickHandler = () => {
        freeShippingDiv.style.background = "#f3f5f7";
        expressShippingDiv.style.background = "transparent";
        document.querySelector(
          ".container__cart-summary-free-shipping-input"
        ).checked = true;
        document.querySelector(
          ".container__cart-summary-express-shipping-input"
        ).checked = false;
        this.selectedShipping = "Free";
        this.calculateTotals();
      };

      const expressShippingClickHandler = () => {
        expressShippingDiv.style.background = "#f3f5f7";
        freeShippingDiv.style.background = "transparent";
        document.querySelector(
          ".container__cart-summary-express-shipping-input"
        ).checked = true;
        document.querySelector(
          ".container__cart-summary-free-shipping-input"
        ).checked = false;
        this.selectedShipping = "$15.00";
        this.calculateTotals();
      };

      freeShippingDiv.addEventListener("click", freeShippingClickHandler);
      expressShippingDiv.addEventListener("click", expressShippingClickHandler);

      if (this.selectedShipping === "Free") {
        freeShippingDiv.style.background = "#f3f5f7";
        expressShippingDiv.style.background = "transparent";
        document.querySelector(
          ".container__cart-summary-free-shipping-input"
        ).checked = true;
        document.querySelector(
          ".container__cart-summary-express-shipping-input"
        ).checked = false;
      } else if (this.selectedShipping === "$15.00") {
        expressShippingDiv.style.background = "#f3f5f7";
        freeShippingDiv.style.background = "transparent";
        document.querySelector(
          ".container__cart-summary-express-shipping-input"
        ).checked = true;
        document.querySelector(
          ".container__cart-summary-free-shipping-input"
        ).checked = false;
      }
    },
    removeEventListenersRadioBtns() {
      const freeShippingDiv = document.querySelector(
        ".container__cart-summary-free-shipping-div"
      );
      const expressShippingDiv = document.querySelector(
        ".container__cart-summary-express-shipping-div"
      );
      if (freeShippingDiv) {
        freeShippingDiv.removeEventListener(
          "click",
          this.freeShippingClickHandler
        );
        expressShippingDiv.removeEventListener(
          "click",
          this.expressShippingClickHandler
        );
      }
    },
    sliderStages() {
      if (window.innerWidth < 1024) {
        let slider = document.querySelector(".container__stages-overflow"),
          sliderTrack = slider.querySelector(".container__stages-flex"),
          slides = [...slider.querySelectorAll(".container__stage-flex")],
          slideWidth = 288,
          slideIndex = 0,
          posInit = 0,
          posX1 = 0,
          posX2 = 0,
          posY1 = 0,
          posY2 = 0,
          posFinal = 0,
          isSwipe = false,
          isScroll = false,
          allowSwipe = true,
          transition = true,
          nextTrf = 0,
          prevTrf = 0,
          lastTrf = (slides.length - 1) * slideWidth,
          posThreshold = slides[0].offsetWidth * 0.35,
          trfRegExp = /([-0-9.]+(?=px))/,
          swipeStartTime,
          swipeEndTime,
          getEvent = function () {
            return event.type.search("touch") !== -1 ? event.touches[0] : event;
          },
          slide = function () {
            if (transition) {
              sliderTrack.style.transition = "transform .5s";
            }
            sliderTrack.style.transform = `translate3d(-${
              slideIndex * slideWidth
            }px, 0px, 0px)`;
          },
          swipeStart = function () {
            let evt = getEvent();

            if (allowSwipe) {
              swipeStartTime = Date.now();

              transition = true;

              nextTrf = (slideIndex + 1) * -slideWidth;
              prevTrf = (slideIndex - 1) * -slideWidth;

              posInit = posX1 = evt.clientX;
              posY1 = evt.clientY;

              sliderTrack.style.transition = "";

              document.addEventListener("touchmove", swipeAction);
              document.addEventListener("mousemove", swipeAction);
              document.addEventListener("touchend", swipeEnd);
              document.addEventListener("mouseup", swipeEnd);
            }
          },
          swipeAction = function () {
            let evt = getEvent(),
              style = sliderTrack.style.transform,
              transform = +style.match(trfRegExp)[0];

            posX2 = posX1 - evt.clientX;
            posX1 = evt.clientX;

            posY2 = posY1 - evt.clientY;
            posY1 = evt.clientY;

            if (!isSwipe && !isScroll) {
              let posY = Math.abs(posY2);
              if (posY > 7 || posX2 === 0) {
                isScroll = true;
                allowSwipe = false;
              } else if (posY < 7) {
                isSwipe = true;
              }
            }

            if (isSwipe) {
              if (slideIndex === 0) {
                if (posInit < posX1) {
                  setTransform(transform, 0);
                  return;
                } else {
                  allowSwipe = true;
                }
              }

              if (slideIndex === slides.length - 1) {
                if (posInit > posX1) {
                  setTransform(transform, lastTrf);
                  return;
                } else {
                  allowSwipe = true;
                }
              }

              if (
                (posInit > posX1 && transform < nextTrf) ||
                (posInit < posX1 && transform > prevTrf)
              ) {
                reachEdge();
                return;
              }

              sliderTrack.style.transform = `translate3d(${
                transform - posX2
              }px, 0px, 0px)`;
            }
          },
          swipeEnd = function () {
            posFinal = posInit - posX1;

            isScroll = false;
            isSwipe = false;

            document.removeEventListener("touchmove", swipeAction);
            document.removeEventListener("mousemove", swipeAction);
            document.removeEventListener("touchend", swipeEnd);
            document.removeEventListener("mouseup", swipeEnd);

            if (allowSwipe) {
              swipeEndTime = Date.now();
              if (
                Math.abs(posFinal) > posThreshold ||
                swipeEndTime - swipeStartTime < 300
              ) {
                if (posInit < posX1) {
                  slideIndex--;
                } else if (posInit > posX1) {
                  slideIndex++;
                }
              }

              if (posInit !== posX1) {
                allowSwipe = false;
                slide();
              } else {
                allowSwipe = true;
              }
            } else {
              allowSwipe = true;
            }
          },
          setTransform = function (transform, comapreTransform) {
            if (transform >= comapreTransform) {
              if (transform > comapreTransform) {
                sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
              }
            }
            allowSwipe = false;
          },
          reachEdge = function () {
            transition = false;
            swipeEnd();
            allowSwipe = true;
          };
        sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";

        sliderTrack.addEventListener(
          "transitionend",
          () => (allowSwipe = true)
        );
        slider.addEventListener("touchstart", swipeStart);
        slider.addEventListener("mousedown", swipeStart);
      }
    },
    dropdownCountries() {
      const dropDownBtn = document.querySelector(".dropdown__button"),
        dropDownList = document.querySelector(".dropdown__list"),
        dropDownListItems = document.querySelectorAll(".dropdown__list-item"),
        dropdownText = document.querySelector(".dropdown__button-text");
      dropDownList.classList.toggle("dropdown__list--visible");
      dropDownBtn.classList.add("dropdown__button--active");
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function () {
          dropdownText.innerText = this.innerText;
        });
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Tab" || e.key === "Escape") {
          dropDownBtn.classList.remove("dropdown__button--active");
          dropDownList.classList.remove("dropdown__list--visible");
        }
      });
    },
    addEventListenersPaymentRadioBtns() {
      const CardPaymentDiv = document.querySelector(
        ".container__checkout-details-pay-by-card-credit-div"
      );
      const PaypallPaymentDiv = document.querySelector(
        ".container__checkout-details-paypal-div"
      );

      const CardPaymentClickHandler = () => {
        CardPaymentDiv.style.background = "#f3f5f7";
        PaypallPaymentDiv.style.background = "transparent";
        document.querySelector(
          ".container__checkout-details-pay-by-card-input"
        ).checked = true;
        document.querySelector(
          ".container__checkout-details-paypal-card-input"
        ).checked = false;
        this.payment = "Pay by Card Credit";
        this.calculateTotals();
      };

      const PaypallPaymentClickHandler = () => {
        PaypallPaymentDiv.style.background = "#f3f5f7";
        CardPaymentDiv.style.background = "transparent";
        document.querySelector(
          ".container__checkout-details-paypal-card-input"
        ).checked = true;
        document.querySelector(
          ".container__checkout-details-pay-by-card-input"
        ).checked = false;
        this.payment = "Paypal";
        this.calculateTotals();
      };

      if (CardPaymentDiv) {
        CardPaymentDiv.addEventListener("click", CardPaymentClickHandler);
        PaypallPaymentDiv.addEventListener("click", PaypallPaymentClickHandler);

        if (this.payment === "Pay by Card Credit") {
          CardPaymentDiv.style.background = "#f3f5f7";
          PaypallPaymentDiv.style.background = "transparent";
          document.querySelector(
            ".container__checkout-details-pay-by-card-input"
          ).checked = true;
          document.querySelector(
            ".container__checkout-details-paypal-card-input"
          ).checked = false;
        } else if (this.payment === "Paypal") {
          PaypallPaymentDiv.style.background = "#f3f5f7";
          CardPaymentDiv.style.background = "transparent";
          document.querySelector(
            ".container__checkout-details-paypal-card-input"
          ).checked = true;
          document.querySelector(
            ".container__checkout-details-pay-by-card-input"
          ).checked = false;
        }
      }
    },
    removeEventListenersPaymentRadioBtns() {
      const CardPaymentDiv = document.querySelector(
        ".container__checkout-details-pay-by-card-credit-div"
      );
      const PaypallPaymentDiv = document.querySelector(
        ".container__cart-summary-express-shipping-div"
      );
      if (CardPaymentDiv) {
        CardPaymentDiv.removeEventListener(
          "click",
          this.CardPaymentClickHandler
        );
        PaypallPaymentDiv.removeEventListener(
          "click",
          this.PaypallPaymentClickHandler
        );
      }
    },
    formatCardNumber() {
      let formattedNumber = this.cardNumber.replace(/\D/g, "");
      formattedNumber = formattedNumber.slice(0, 16);
      formattedNumber = formattedNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
      this.cardNumber = formattedNumber;
    },
    formatExpiryDate() {
      let formattedDate = this.expiryDate.replace(/\D/g, "");
      formattedDate = formattedDate.slice(0, 4);
      const month = parseInt(formattedDate.slice(0, 2));
      if (month > 12) {
        formattedDate = "12" + formattedDate.slice(2);
      }
      if (formattedDate.length > 2) {
        formattedDate =
          formattedDate.slice(0, 2) + "/" + formattedDate.slice(2);
      }
      this.expiryDate = formattedDate;
    },
    limitCvcCode() {
      let formattedCode = this.cvcCode.replace(/\D/g, "");
      formattedCode = formattedCode.slice(0, 3);
      this.cvcCode = formattedCode;
    },
  },
  async mounted() {
    await this.fetchProducts();
    this.updateTotalQtyOfProducts();
    this.calculateTotals();
    this.sliderStages();
    this.removeEventListenersRadioBtns();
    this.addEventListenersRadioBtns();
    this.removeEventListenersPaymentRadioBtns();
    this.addEventListenersPaymentRadioBtns();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 0rem 2rem;
}
.container__title {
  display: block;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000;
  margin-top: 2.5rem;
}
.container__items-list-empty,
.container__checkout-details-order-summary-empty-text,
.container__items-list-non-authorized-user {
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
}
.container__stages-overflow {
  overflow-x: hidden;
}
.container__stages-flex {
  display: flex;
  gap: 2rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6.5rem;
  height: 100px;
  transition: transform 0.67s ease;
}
.container__stage-flex {
  position: relative;
  display: flex;
  gap: 1.063rem;
  align-items: center;
  width: 256px;
  flex-shrink: 0;
}
.container__shopping-cart-stage-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid $black;
  margin-top: 5.9rem;
}
.container__shopping-cart-stage-flex,
.container__checkout-details-stage-flex {
  cursor: pointer;
}
.container__border-bottom-black-stage-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid $black;
  margin-top: 5.9rem;
}
.container__border-bottom-green-stage-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #38cb89;
  margin-top: 5.9rem;
}
.container__border-bottom-transparent-stage-flex::after {
  border: 1px solid transparent;
}
.container__stage-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  background: #b1b5c3;
}
.container__shopping-cart-stage-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  background: #23262f;
}
.container__stage-black-circle {
  background: #23262f;
}
.container__stage-green-circle {
  background: #38cb89;
}
.container__stage-gray-circle {
  background: #b1b5c3;
}
.container__stage-circle-num {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #fcfcfd;
}
.container__stage-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #b1b5c3;
}
.container__shopping-cart-stage-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #23262f;
}
.container__stage-black-text {
  color: #23262f;
}
.container__stage-green-text {
  color: #38cb89;
}
.container__stage-gray-text {
  color: #b1b5c3;
}
.container__stage-tick {
  display: none;
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
.container__cart-summary-shipping-input,
.container__checkout-details-payment-input {
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
.container__cart-summary-shipping-input[type="radio"]:checked::before,
.container__checkout-details-payment-input[type="radio"]:checked::before {
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
.container__cart-summary-total-disount-and-cost-flex {
  display: flex;
  gap: 0.5rem;
}
.container__cart-summary-total-disount {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #38cb89;
  width: fit-content;
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
.container__forms-and-items-list-and-place-order-btn-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 5rem;
}
.container__forms-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.container__checkout-details-contact-info-form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  border: 1px solid #6c7275;
  border-radius: 0.375rem;
  margin-top: -4rem;
}
.container__title-form {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container__two-inputs-flex {
  display: flex;
  gap: 0.5rem;
}
.container__input-title-and-input-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container__input-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6c7275;
}
.container__input {
  @include input;
  border: 1px solid #cbcbcb;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
}
.container__input:focus {
  outline: 1px solid #121212;
}
.container__shipping-address-form,
.container__checkout-details-payment-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #6c7275;
  border-radius: 0.375rem;
}
.dropdown__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  border: 1px solid #cbcbcb;
  border-radius: 0.5rem;
  height: 48px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
  white-space: nowrap;
}
.dropdown__button img {
  pointer-events: none;
}
.dropdown__button:focus,
.dropdown__button--active {
  outline: none;
}
.dropdown__list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: 1.5px solid #f3f5f7;
  box-shadow: 0px 64px 64px -48px rgba(15, 15, 15, 0.1);
  background: #fff;
  margin-top: 0.5rem;
  padding: 0.5rem;
  list-style-type: none;
}
.dropdown__list {
  display: none;
}
.dropdown__list--visible {
  display: flex;
}
.dropdown__list-item {
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
  padding: 0.5rem;
}
.dropdown__list-item:hover {
  border-radius: 0.5rem;
  background-color: #f3f5f7;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #141718;
}
.container__checkbox-and-text-flex {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.container__checkbox {
  width: 16px;
  height: 16px;
  border: 1.5px solid #6c7275;
  border-radius: 0.25rem;
  flex-shrink: 0;
}
.container__checkbox-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
.container__checkout-details-payment-divs-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.container__checkout-details-payment-div {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0.875rem;
  border: 1px solid #6c7275;
  border-radius: 0.25rem;
}
.container__checkout-details-pay-by-card-credit-div {
  background: #f3f5f7;
}
.container__checkout-details-payment-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__checkout-details-order-summary-details-flex {
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
}
.container__checkout-details-order-summary-details-coupone-main-flex {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container__checkout-details-order-summary-details-coupone-main-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: 3rem;
}
.container__checkout-details-order-summary-details-coupone-icon-and-text-flex {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.container__checkout-details-order-summary-details-coupone-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: $black;
}
.container__checkout-details-order-summary-details-coupone-coupone-price {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #38cb89;
}
.container__checkout-details-order-summary-details-text-and-price-flex {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.container__checkout-details-order-summary-details-text-and-price-shipping-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: 2rem;
}
.container__checkout-details-order-summary-details-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: $black;
}
.container__checkout-details-order-summary-details-paypall-text {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: $black;
}
.container__checkout-details-order-summary-details-price {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container__checkout-details-order-summary-place-order-btn {
  @include button;
  background: $black;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.75rem 2.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}
.container__order-complete-section {
  margin-top: -4rem;
}
.container__order-complete-order {
  padding: 1rem;
  border: 1px solid #e8ecef;
  border-radius: 0.25rem;
  margin-bottom: 5rem;
  box-shadow: 0px 0px 24px -10px #121212;
}
.container__order-complete-order-title-and-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__order-complete-order-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #6c7275;
}
.container__order-complete-order-text {
  font-family: "Poppins", sans-serif;
  font-size: 2.125rem;
  font-weight: 500;
  color: #23262f;
  line-height: 2.375rem;
}
.container__order-complete-order-items-flex {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}
.container__order-complete-order-item {
  width: fit-content;
}
.container__order-complete-order-items-hero {
  width: 80px;
  height: 96px;
  object-fit: cover;
}
.container__order-complete-order-items-qty-back {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $black;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin-top: -7rem;
  margin-left: 4.4rem;
}
.container__order-complete-order-items-qty {
  font-family: "Inter", sans-serif;
  font-size: 0.625rem;
  font-weight: 600;
  color: #fcfcfd;
}
.container__order-complete-order-details-main-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
}
.container__order-complete-order-details-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__order-complete-order-details-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: 3.55rem;
}
.container__order-complete-order-details-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6c7275;
}
.container__order-complete-order-details-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__order-complete-order-details-purchase-history-btn {
  @include button;
  background: $black;
  width: 100%;
  border-radius: 5rem;
  padding: 0.75rem 2.5rem;
  margin-top: 3.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}
/* 350px = 21.875em */
@media (min-width: 21.875em) {
  .container__checkout-details-order-summary-section {
    padding: 1rem;
    border: 1px solid #6c7275;
    border-radius: 0.375rem;
    width: 100%;
    margin-bottom: 5rem;
  }
}
/* 375px = 23.438em */
@media (min-width: 23.438em) {
  .container__checkout-details-order-summary-details-coupone-coupone-price-br-to-375px {
    display: none;
  }
  .container__cart-summary-total-disount-br-to-375px {
    display: none;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0rem 2.5rem;
  }
  .container__title {
    font-size: 3.375rem;
    margin-bottom: 2.5rem;
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

/* 1024px = 64em */
@media (min-width: 64em) {
  .container__stages {
    justify-content: center;
  }
  .container__order-complete-order {
    width: 738px;
    padding: 5rem 5.938rem;
    margin: 0rem auto 5rem auto;
  }
  .container__order-complete-order-title,
  .container__order-complete-order-text {
    display: block;
    text-align: center;
  }
  .container__order-complete-order-items-flex {
    width: fit-content;
    margin: 2.5rem auto 0rem auto;
  }
  .container__order-complete-order-details-main-flex {
    width: 310px;
    margin: 2.5rem auto 0rem auto;
  }
  .container__order-complete-order-details-purchase-history-btn {
    width: 213px;
    margin: 3.5rem auto 0rem auto;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem 10rem;
  }
  .container__items-list-empty {
    position: absolute;
    margin-top: 6rem;
    margin-left: 10rem;
  }
  .container__items-list-non-authorized-user {
    position: absolute;
    margin-top: 6rem;
    margin-left: 6.5rem;
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
  .container__title-form {
    font-size: 1.25rem;
  }
  .container__forms-and-items-list-and-place-order-btn-flex {
    flex-direction: row;
    gap: 4rem;
    margin-bottom: 0rem;
  }
  .container__checkout-details-contact-info-form,
  .container__shipping-address-form,
  .container__checkout-details-payment-form {
    width: 643px;
  }
  .container__forms-flex {
    margin-bottom: 14.75rem;
  }
  .container__checkout-details-order-summary-section {
    height: fit-content;
    margin-top: -4rem;
  }
  .container__checkout-details-order-summary-place-order-btn {
    position: absolute;
    width: 643px;
    margin-top: 78.2rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0rem 15.938rem;
  }
  .container__items-list-non-authorized-user {
    margin-left: 15.5rem;
  }
}
</style>
