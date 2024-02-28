<template>
  <div @click="goToCurrentProductPage" class="container__new-arrivals-card">
    <div class="container__new-arrivals-card-new-div">
      <span class="container__new-arrivals-card-new-text">NEW</span>
    </div>
    <div class="container__new-arrivals-card-sale-div">
      <span class="container__new-arrivals-card-sale-text">-50%</span>
    </div>
    <button
      @click.stop="addToWishlist(product)"
      class="container__new-arrivals-card-wishlist-btn"
    >
      <img :src="currentIcon" alt="" />
    </button>
    <img :src="product.hero" alt="" class="container__new-arrivals-card-hero" />
    <button
      @click.stop="addToCart(product)"
      class="container__new-arrivals-card-add-to-cart-btn"
      :data-productId="product.id"
    >
      <span class="container__new-arrivals-card-add-to-cart-btn-nonactive"
        >Add to cart</span
      >
      <span class="container__new-arrivals-card-add-to-cart-btn-active"
        >In cart</span
      >
    </button>
    <div class="container__new-arrivals-card-rating-and-title-and-prices-flex">
      <star-rating
        :star-size="16"
        :show-rating="false"
        :activeColor="'#343839'"
        :rating="getAverageRating(product)"
        :read-only="true"
      ></star-rating>
      <span class="container__new-arrivals-card-title">{{
        product.title
      }}</span>
      <div class="container__new-arrivals-card-prices-flex">
        <span class="container__new-arrivals-card-current-price">{{
          product.currentPrice
        }}</span>
        <span class="container__new-arrivals-card-previous-price">{{
          product.previousPrice
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";
import { mapMutations, mapActions } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";
export default {
  name: "MoreProductsItem",
  components: { StarRating },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      WhishListIconDisabled: "imgs/whishlist-icon.svg",
      WhishListIconActivated: "imgs/whishlist-icon-activated.svg",
      currentIcon: "imgs/whishlist-icon.svg",
      reviews: [],
    };
  },
  methods: {
    fetchReviews() {
      axios
        .get(
          `http://localhost:5000/reviews/collect?productId=${this.product.id}`
        )
        .then((response) => {
          this.reviews = response.data;
        })
        .catch((e) => {
          console.error("Error fetching reviews:", e);
        });
    },
    ...mapActions(["selectProduct"]),
    goToCurrentProductPage() {
      this.selectProduct(this.product);
      this.$router.push("/CurrentProductPage");
      window.scrollTo(0, 0);
    },
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    async addToCart(product) {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          await axios.post("http://localhost:5000/cart/add", {
            userId: localStorage.getItem("userId"),
            productId: product.id,
            hero: product.hero,
            title: product.title,
            category: product.category,
            startColor: product.startColor,
            currentPrice: product.currentPrice,
            previousPrice: product.previousPrice,
            qty: 1,
            description: product.description,
            colors: product.colors,
            measurements: product.measurements,
          });
          const response = await axios.get(
            `http://localhost:5000/cart/get?userId=${userId}`
          );
          let products = response.data;
          let totalQty = 0;
          products.forEach((product) => {
            totalQty += Number(product.qty);
          });
          this.updateTotalQtyOfCartProducts(totalQty);
          console.log("Product added to cart successfully");
        } catch (error) {
          console.error("Error adding product to cart:", error);
        }
      } else {
        iziToast.settings({
          position: "bottomRight",
        });
        iziToast.info({
          title: "Important message",
          message:
            "You must be authorized in order to add products in your cart!",
        });
      }
      this.updateAddToCartButtons();
    },
    async updateAddToCartButtons() {
      let products = [];
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/cart/get?userId=${userId}`
          );
          products = response.data;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
      let cartItems = products;
      let cartItemIds = cartItems.map((item) => item.productId);
      let addToCartBtns = document.querySelectorAll(
        ".container__new-arrivals-card-add-to-cart-btn"
      );

      addToCartBtns.forEach((addToCartBtn) => {
        let card = addToCartBtn.closest(".container__new-arrivals-card");
        let activeBtn = card.querySelector(
          ".container__new-arrivals-card-add-to-cart-btn-active"
        );
        let nonActiveBtn = card.querySelector(
          ".container__new-arrivals-card-add-to-cart-btn-nonactive"
        );

        let productId = addToCartBtn.getAttribute("data-productId");
        if (cartItemIds.includes(parseInt(productId))) {
          activeBtn.style.display = "block";
          nonActiveBtn.style.display = "none";
        } else {
          activeBtn.style.display = "none";
          nonActiveBtn.style.display = "flex";
        }
      });
    },
    ...mapMutations(["updateTotalQtyOfFavorites"]),
    async updateTotalQtyOfWhishlist() {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await axios.get(
          `http://localhost:5000/wishlist/get?userId=${userId}`
        );
        let favorites = response.data;
        let totalQty = 0;
        favorites.forEach((favorite) => {
          totalQty += Number(favorite.qty);
        });
        this.updateTotalQtyOfFavorites(totalQty);
      }
    },
    async addToWishlist(product) {
      const userId = localStorage.getItem("userId");
      if (this.currentIcon === this.WhishListIconDisabled) {
        if (userId) {
          try {
            await axios.post("http://localhost:5000/wishlist/add", {
              userId: userId,
              productId: product.id,
              hero: product.hero,
              title: product.title,
              category: product.category,
              startColor: product.startColor,
              currentPrice: product.currentPrice,
              previousPrice: product.previousPrice,
              qty: 1,
              description: product.description,
              colors: product.colors,
              measurements: product.measurements,
            });
            this.updateTotalQtyOfWhishlist();
            const response = await axios.get(
              `http://localhost:5000/wishlist/get?userId=${userId}`
            );
            console.log(
              "Product added to wishlist successfully:",
              response.data
            );
          } catch (error) {
            console.error("Error adding product to wishlist:", error);
          }
          this.currentIcon = this.WhishListIconActivated;
        } else {
          iziToast.settings({
            position: "bottomRight",
          });
          iziToast.info({
            title: "Important message",
            message:
              "You must be authorized in order to add products in your wishlist!",
          });
        }
      } else {
        this.currentIcon = this.WhishListIconDisabled;
        this.removeFromFavorites(product);
        this.updateTotalQtyOfWhishlist();
      }
      this.updateTotalQtyOfWhishlist();
    },
    async removeFromFavorites(product) {
      const productId = product.id;
      const userId = localStorage.getItem("userId");
      try {
        const response = await axios.delete(
          `http://localhost:5000/wishlist/delete/${productId}/${userId}`
        );
        console.log(
          "Product deleted successfully from wishlist:",
          response.data
        );
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
    async checkFavoriteHeartStatus(product) {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await axios.get(
          `http://localhost:5000/wishlist/get?userId=${userId}`
        );
        let favorites = response.data;
        if (favorites) {
          return favorites.some(
            (favorite) => favorite.productId === product.id
          );
        }
        return false;
      }
    },
    async updateFavoriteHeartStatus(product) {
      this.currentIcon = (await this.checkFavoriteHeartStatus(product))
        ? this.WhishListIconActivated
        : this.WhishListIconDisabled;
    },
  },
  computed: {
    getAverageRating() {
      return (product) => {
        const itemReviews = this.reviews.filter(
          (review) => review.productId === product.id
        );
        if (itemReviews.length === 0) {
          return 0;
        } else {
          const totalRating = itemReviews.reduce(
            (acc, review) => acc + review.selectedRating,
            0
          );
          return totalRating / itemReviews.length;
        }
      };
    },
  },
  created() {
    this.fetchReviews();
    this.updateFavoriteHeartStatus(this.product);
  },
  mounted() {
    this.updateAddToCartButtons();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__new-arrivals-card {
  width: 231px;
}
.container__new-arrivals-card-new-div {
  position: relative;
  background: #fff;
  border-radius: 4px;
  width: fit-content;
  padding: 4px 14px;
  z-index: 2;
  margin-top: 1rem;
  margin-left: 1rem;
}
.container__new-arrivals-card-new-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: $black;
}
.container__new-arrivals-card-sale-div {
  position: relative;
  background: #38cb89;
  border-radius: 4px;
  width: fit-content;
  padding: 4px 14px;
  z-index: 2;
  margin-top: 0.5rem;
  margin-left: 1rem;
}
.container__new-arrivals-card-sale-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fefefe;
}
.container__new-arrivals-card-wishlist-btn {
  position: relative;
  @include button;
  background: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.12);
  margin-left: 11.5rem;
  margin-top: -4.2rem;
  z-index: 2;
}
.container__item-card-wishlist-icon {
  width: 21px;
  height: 17px;
}
.container__new-arrivals-card-hero {
  margin-top: -2.8rem;
  width: 231px;
  height: 308px;
}
.container__new-arrivals-card-add-to-cart-btn {
  position: relative;
  @include button;
  background: $black;
  border-radius: 8px;
  width: 202.786px;
  height: 40.582px;
  margin-left: 0.88rem;
  margin-top: -4rem;
  z-index: 2;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}
.container__new-arrivals-card-add-to-cart-btn-active {
  display: none;
}
.container__new-arrivals-card-rating-and-title-and-prices-flex {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 1.45rem;
}
.container__new-arrivals-card-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container__new-arrivals-card-prices-flex {
  display: flex;
  gap: 0.75rem;
}
.container__new-arrivals-card-current-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__new-arrivals-card-previous-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
  text-decoration-line: line-through;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container__new-arrivals-card {
    width: 262px;
  }
  .container__new-arrivals-card-hero {
    width: 262px;
    height: 349px;
    object-fit: cover;
  }
  .container__new-arrivals-card-wishlist-btn {
    margin-left: 13.5rem;
  }
  .container__new-arrivals-card-add-to-cart-btn {
    margin-left: 1.91rem;
  }
}
</style>
