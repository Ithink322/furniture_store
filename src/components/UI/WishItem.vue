<template>
  <div
    @click="goToCurrentProductPage"
    class="container__items-list-remove-btn-and-hero-and-details-and-add-to-cart-btn-flex"
  >
    <div class="container__items-list-remove-btn-and-hero-and-details-flex">
      <button
        @click.stop="removeFromFavorites(item.productId)"
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
      @click.stop="addToCart(item)"
      class="container__items-list-add-to-cart-btn"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";
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
    async removeFromFavorites(productId) {
      const userId = localStorage.getItem("userId");
      try {
        const response = await axios.delete(
          `http://localhost:5000/wishlist/delete/${productId}/${userId}`
        );
        console.log(
          "Product deleted successfully from wishlist:",
          response.data
        );
        this.$emit("remove-from-favorites", productId);
        this.updateTotalQty();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    async updateTotalQty() {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/wishlist/get?userId=${userId}`
          );
          let favorites = response.data;
          this.updateTotalQtyOfFavorites(favorites.length);
        } catch (error) {
          console.error("Error fetching wishlist products:", error);
        }
      } else {
        console.log("You're not authorized");
      }
    },
    async addToCart(item) {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          await axios.post("http://localhost:5000/cart/add", {
            userId: localStorage.getItem("userId"),
            productId: item.id,
            hero: item.hero,
            title: item.title,
            category: item.category,
            startColor: item.selectedColor,
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
