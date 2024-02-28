<template>
  <div @click="goToCurrentProductPage" class="container__item-card">
    <div class="container__item-card-new-and-sale-divs-flex">
      <div class="container__item-card-new-div">
        <span class="container__item-card-new-text">NEW</span>
      </div>
      <div class="container__item-card-sale-div">
        <span class="container__item-card-sale-text">-50%</span>
      </div>
    </div>
    <div class="container__item-card-main-flex">
      <img :src="item.hero" alt="" class="container__item-card-hero" />
      <div
        class="container__item-card-rating-and-title-and-wishlist-btn-and-prices-and-desctiption-flex"
      >
        <star-rating
          :star-size="16"
          :show-rating="false"
          :activeColor="'#343839'"
          :rating="getAverageRating(item)"
          :read-only="true"
        ></star-rating>
        <div class="container__item-card-title-and-whishlist-btn-flex">
          <span class="container__item-card-title">{{ item.title }}</span>
          <button
            @click.stop="addToWishlist(item)"
            class="container__item-card-wishlist-btn"
          >
            <img
              class="container__item-card-wishlist-icon"
              :src="currentIcon"
              alt=""
            />
          </button>
        </div>
        <div class="container__item-card-prices-flex">
          <span class="container__item-card-current-price">{{
            item.currentPrice
          }}</span>
          <span class="container__item-card-previous-price">{{
            item.previousPrice
          }}</span>
        </div>
        <span class="container__item-card-description">{{
          item.description
        }}</span>
      </div>
      <button
        @click.stop="addToCart(item)"
        class="container__item-card-add-to-cart-btn"
        :data-productId="item.id"
      >
        <span class="container__item-card-add-to-cart-btn-non-active"
          >Add to cart</span
        >
        <span class="container__item-card-add-to-cart-btn-active">In cart</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";
import { mapActions, mapMutations } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";
export default {
  name: "ShopItem",
  components: { StarRating },
  props: {
    item: {
      type: Object,
      required: true,
    },
    sortedItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      WhishListIconDisabled: "/imgs/whishlist-icon.svg",
      WhishListIconActivated: "/imgs/whishlist-icon-activated.svg",
      currentIcon: "/imgs/whishlist-icon.svg",
      reviews: [],
    };
  },
  methods: {
    fetchReviews() {
      axios
        .get(`http://localhost:5000/reviews/collect?productId=${this.item.id}`)
        .then((response) => {
          this.reviews = response.data;
        })
        .catch((e) => {
          console.error("Error fetching reviews:", e);
        });
    },
    ...mapActions(["selectProduct"]),
    goToCurrentProductPage() {
      this.selectProduct(this.item);
      this.$router.push("/CurrentProductPage");
      window.scrollTo(0, 0);
    },
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    async addToCart(item) {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          await axios.post("http://localhost:5000/cart/add", {
            userId: userId,
            productId: item.id,
            hero: item.hero,
            title: item.title,
            category: item.category,
            startColor: item.startColor,
            currentPrice: item.currentPrice,
            previousPrice: item.previousPrice,
            qty: 1,
            description: item.description,
            colors: item.colors,
            measurements: item.measurements,
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
        ".container__item-card-add-to-cart-btn"
      );

      addToCartBtns.forEach((addToCartBtn) => {
        let card = addToCartBtn.closest(".container__item-card");
        let activeBtn = card.querySelector(
          ".container__item-card-add-to-cart-btn-active"
        );
        let nonActiveBtn = card.querySelector(
          ".container__item-card-add-to-cart-btn-non-active"
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
    async addToWishlist(item) {
      const userId = localStorage.getItem("userId");
      if (this.currentIcon === this.WhishListIconDisabled) {
        if (userId) {
          try {
            await axios.post("http://localhost:5000/wishlist/add", {
              userId: userId,
              productId: item.id,
              hero: item.hero,
              title: item.title,
              category: item.category,
              startColor: item.startColor,
              currentPrice: item.currentPrice,
              previousPrice: item.previousPrice,
              qty: 1,
              description: item.description,
              colors: item.colors,
              measurements: item.measurements,
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
        this.removeFromFavorites(item);
        this.updateTotalQtyOfWhishlist();
      }
      this.updateTotalQtyOfWhishlist();
    },
    async removeFromFavorites(item) {
      const productId = item.id;
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
    async checkFavoriteHeartStatus(item) {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await axios.get(
          `http://localhost:5000/wishlist/get?userId=${userId}`
        );
        let favorites = response.data;
        if (favorites) {
          return favorites.some((favorite) => favorite.productId === item.id);
        }
        return false;
      }
    },
    async updateFavoriteHeartStatus(item) {
      this.currentIcon = (await this.checkFavoriteHeartStatus(item))
        ? this.WhishListIconActivated
        : this.WhishListIconDisabled;
    },
  },
  computed: {
    getAverageRating() {
      return (item) => {
        const itemReviews = this.reviews.filter(
          (review) => review.productId === item.id
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
    this.updateFavoriteHeartStatus(this.item);
  },
  mounted() {
    this.updateAddToCartButtons();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__item-card {
  position: relative;
  cursor: pointer;
}
.container__item-card-new-and-sale-divs-flex {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 71px;
}
.container__item-card-new-div {
  background: #fff;
  border-radius: 0.25rem;
  padding: 0.25rem 0.875rem;
  z-index: 2;
}
.container__item-card-new-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: $black;
}
.container__item-card-sale-div {
  background: #38cb89;
  border-radius: 0.25rem;
  padding: 0.25rem 0.875rem;
  z-index: 2;
}
.container__item-card-sale-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fefefe;
}
.container__item-card-main-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__item-card-rating-and-title-and-wishlist-btn-and-prices-and-desctiption-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__item-card-title-and-whishlist-btn-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container__item-card-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container__item-card-wishlist-btn {
  @include button;
  padding: 0.375rem;
}
.container__item-card-wishlist-icon {
  width: 21px;
  height: 17px;
}
.container__item-card-styles-for-wishlist-btn-in-2-cols-grid {
  position: absolute;
  top: 0.625rem;
  right: 0.375rem;
}
.container__item-card-prices-flex {
  display: flex;
  gap: 0.75rem;
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
.container__item-card-description {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
.container__item-card-add-to-cart-btn {
  @include button;
  background: $black;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fefefe;
}
.container__item-card-add-to-cart-btn-active {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container__item-card-add-to-cart-btn-styles-from768px {
    position: absolute;
    bottom: 6.4rem;
    left: 1rem;
    width: calc(100% - 2rem);
  }
}
</style>
