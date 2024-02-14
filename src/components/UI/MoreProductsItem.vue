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
      <div class="container__new-arrivals-card-rating-flex">
        <img src="imgs/Star-icon.svg" alt="" />
        <img src="imgs/Star-icon.svg" alt="" />
        <img src="imgs/Star-icon.svg" alt="" />
        <img src="imgs/Star-icon.svg" alt="" />
        <img src="imgs/Star-icon.svg" alt="" />
      </div>
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
import { mapMutations, mapActions } from "vuex";
export default {
  name: "MoreProductsItem",
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
    };
  },
  methods: {
    ...mapActions(["selectProduct"]),
    goToCurrentProductPage() {
      this.selectProduct(this.product);
      this.$router.push("/CurrentProductPage");
      window.scrollTo(0, 0);
    },
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    addToCart(product) {
      let cart = localStorage.getItem("cart");

      let newItem = [
        {
          id: product.id,
          hero: product.hero,
          title: product.title,
          category: product.category,
          startColor: product.startColor,
          currentPrice: product.currentPrice,
          previousPrice: product.previousPrice,
          description: product.description,
          colors: product.colors,
          measurements: product.measurements,
          qty: 1,
        },
      ];
      if (!cart) {
        localStorage.setItem("cart", JSON.stringify(newItem));
      } else {
        cart = JSON.parse(cart);

        cart.forEach((itemInCart) => {
          if (itemInCart.id === product.id) {
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
    addToWishlist(product) {
      if (this.currentIcon === this.WhishListIconDisabled) {
        let favorites = localStorage.getItem("favorites");

        let newFavorite = [
          {
            id: product.id,
            hero: product.hero,
            title: product.title,
            selectedColor: this.product.startColor,
            currentPrice: product.currentPrice,
            category: product.category,
            previousPrice: product.previousPrice,
            qty: 1,
            description: product.description,
            colors: product.colors,
            measurements: product.measurements,
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

        this.removeFromFavorites(product);
      }
      let length = 0,
        favorites = JSON.parse(localStorage.getItem("favorites"));
      favorites.forEach((favorite) => {
        length += Number(favorite.qty);
      });
      this.updateTotalQtyOfFavorites(length);
    },
    removeFromFavorites(product) {
      let favorites = localStorage.getItem("favorites");

      if (favorites) {
        favorites = JSON.parse(favorites);
        favorites = favorites.filter((favorite) => favorite.id !== product.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
      this.$emit("remove-from-favorites", this.product);
    },
    checkFavoriteHeartStatus(product) {
      let favorites = localStorage.getItem("favorites");
      if (favorites) {
        favorites = JSON.parse(favorites);
        return favorites.some((favorite) => favorite.id === product.id);
      }
      return false;
    },
    updateFavoriteHeartStatus(product) {
      this.currentIcon = this.checkFavoriteHeartStatus(product)
        ? this.WhishListIconActivated
        : this.WhishListIconDisabled;
    },
  },
  created() {
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
}
.container__new-arrivals-card-rating-flex {
  display: flex;
  gap: 0.125rem;
  margin-top: 1.63rem;
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
