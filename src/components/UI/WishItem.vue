<template>
  <div
    @click="goToCurrentProductPage"
    class="container__items-list-remove-btn-and-hero-and-details-and-add-to-cart-btn-flex"
  >
    <div class="container__items-list-remove-btn-and-hero-and-details-flex">
      <button
        @click="removeFromFavorites(item)"
        class="container__items-list-remove-btn"
      >
        <img src="imgs/x-icon-gray.svg" alt="" />
      </button>
      <img :src="item.hero" alt="" class="container__items-list-hero" />
      <div class="container__items-list-details-flex">
        <span
          @click="goToCurrentProductPage"
          class="container__items-list-title"
          >{{ item.title }}</span
        >
        <span class="container__items-list-color"
          >Color: {{ item.selectedColor }}</span
        >
        <span class="container__items-list-price">{{ item.currentPrice }}</span>
      </div>
    </div>
    <button
      @click="addToCart(item)"
      class="container__items-list-add-to-cart-btn"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "WishItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["updateTotalQtyOfFavorites"]),
    removeFromFavorites(item) {
      let favorites = localStorage.getItem("favorites");

      if (favorites) {
        favorites = JSON.parse(favorites);
        favorites = favorites.filter((favorite) => favorite.id !== item.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        let length = 0;
        favorites.forEach((favorite) => {
          length += Number(favorite.qty);
        });
        this.updateTotalQtyOfFavorites(length);
      }
      this.$emit("remove-from-favorites", this.item);
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
    },
    ...mapActions(["selectProduct"]),
    goToCurrentProductPage() {
      this.selectProduct(this.item);
      this.$router.push("/CurrentProductPage");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__items-list-remove-btn-and-hero-and-details-and-add-to-cart-btn-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__items-list-remove-btn-and-hero-and-details-and-add-to-cart-btn-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: 10.4rem;
}
.container__items-list-remove-btn-and-hero-and-details-flex {
  display: flex;
  gap: 1rem;
}
.container__items-list-remove-btn {
  @include button;
}
.container__items-list-hero {
  width: 80px;
  height: 96px;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
  margin-left: 0.313rem;
}
.container__items-list-details-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__items-list-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
  cursor: pointer;
}
.container__items-list-title:hover {
  color: rgb(212, 40, 204);
}
.container__items-list-color {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
.container__items-list-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $black;
}
.container__items-list-add-to-cart-btn {
  @include button;
  width: 100%;
  background: $black;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container__items-list-remove-btn-and-hero-and-details-and-add-to-cart-btn-flex {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .container__items-list-remove-btn-and-hero-and-details-and-add-to-cart-btn-flex::after {
    content: "";
    margin-top: 8.2rem;
  }
  .container__items-list-add-to-cart-btn {
    width: 140px;
    height: 40px;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container__items-list-price {
    position: absolute;
    margin-left: 13.125rem;
    margin-top: 2.5rem;
  }
}
</style>
