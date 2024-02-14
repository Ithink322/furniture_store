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
          :rating="getAverageRating(item.id)"
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
      averageRatings: {},
      WhishListIconDisabled: "/imgs/whishlist-icon.svg",
      WhishListIconActivated: "/imgs/whishlist-icon-activated.svg",
      currentIcon: "/imgs/whishlist-icon.svg",
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  },
  methods: {
    ...mapActions(["selectProduct"]),
    goToCurrentProductPage() {
      this.selectProduct(this.item);
      this.$router.push("/CurrentProductPage");
      window.scrollTo(0, 0);
    },
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    addToCart(item) {
      let cart = JSON.parse(localStorage.getItem("cart"));

      let newItem = [
        {
          id: item.id,
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
        },
      ];

      if (!cart) {
        localStorage.setItem("cart", JSON.stringify(newItem));
      } else {
        cart.forEach((itemInCart) => {
          if (itemInCart.id === item.id) {
            itemInCart.qty = Number(itemInCart.qty) + Number(1);
            newItem = null;
          }
        });

        Array.prototype.push.apply(cart, newItem);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      let totalQty = 0;
      let products = JSON.parse(localStorage.getItem("cart"));
      products.forEach((product) => {
        totalQty += Number(product.qty);
      });
      this.updateTotalQtyOfCartProducts(totalQty);
      this.updateAddToCartButtons();
    },
    updateAddToCartButtons() {
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      let cartItemIds = cartItems.map((item) => item.id);
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
    getAverageRating(productId) {
      const filteredReviews = this.reviews.filter(
        (review) => review.productId === productId
      );

      if (filteredReviews.length === 0) {
        return 0;
      }

      const totalRating = filteredReviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );

      const averageRating = totalRating / filteredReviews.length;
      return averageRating;
    },
    ...mapMutations(["updateTotalQtyOfFavorites"]),
    addToWishlist(item) {
      if (this.currentIcon === this.WhishListIconDisabled) {
        let favorites = localStorage.getItem("favorites");

        let newFavorite = [
          {
            id: item.id,
            hero: item.hero,
            title: item.title,
            selectedColor: this.item.startColor,
            currentPrice: item.currentPrice,
            category: item.category,
            previousPrice: item.previousPrice,
            qty: 1,
            description: item.description,
            colors: item.colors,
            measurements: item.measurements,
          },
        ];

        if (!favorites) {
          localStorage.setItem("favorites", JSON.stringify(newFavorite));
        } else {
          favorites = JSON.parse(favorites);

          if (
            !favorites.some((favorite) => favorite.id === newFavorite[0].id)
          ) {
            favorites.push(newFavorite[0]);
            localStorage.setItem("favorites", JSON.stringify(favorites));
          }
        }

        this.currentIcon = this.WhishListIconActivated;
      } else {
        this.currentIcon = this.WhishListIconDisabled;
        this.removeFromFavorites(item);
      }
      let length = 0,
        favorites = JSON.parse(localStorage.getItem("favorites"));
      favorites.forEach((favorite) => {
        length += Number(favorite.qty);
      });
      this.updateTotalQtyOfFavorites(length);
    },
    removeFromFavorites(item) {
      let favorites = localStorage.getItem("favorites");

      if (favorites) {
        favorites = JSON.parse(favorites);
        favorites = favorites.filter((favorite) => favorite.id !== item.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
      this.$emit("remove-from-favorites", this.item);
    },
    checkFavoriteHeartStatus(item) {
      let favorites = localStorage.getItem("favorites");
      if (favorites) {
        favorites = JSON.parse(favorites);
        return favorites.some((favorite) => favorite.id === item.id);
      }
      return false;
    },
    updateFavoriteHeartStatus(item) {
      this.currentIcon = this.checkFavoriteHeartStatus(item)
        ? this.WhishListIconActivated
        : this.WhishListIconDisabled;
    },
  },
  computed: {
    product() {
      return JSON.parse(localStorage.getItem("CurrentProduct"));
    },
    reviews() {
      return JSON.parse(localStorage.getItem("reviews")) || [];
    },
    filteredReviews() {
      return this.reviews.filter((review) => review.id === this.product.id);
    },
    /* averageRatings() {
      const averageRatings = [];

      for (const product of this.sortedItems) {
        const filteredReviews = this.reviews.filter(
          (review) => review.productId === product.id
        );

        if (filteredReviews.length === 0) {
          averageRatings.push({ productId: product.id, averageRating: 0 });
        } else {
          const totalRating = filteredReviews.reduce(
            (acc, review) => acc + review.rating,
            0
          );

          const averageRating = totalRating / filteredReviews.length;
          averageRatings.push({ productId: product.id, averageRating });
        }
      }

      return averageRatings;
    }, */
    /* averageRating() {
      if (this.filteredReviews.length === 0) {
        return 0;
      }

      const totalRating = this.filteredReviews.reduce(
        (acc, review) => acc + review.selectedRating,
        0
      );
      return totalRating / this.filteredReviews.length;
    }, */
  },
  created() {
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
