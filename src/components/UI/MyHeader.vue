<template>
  <header class="header">
    <div class="header__main-flex">
      <div class="header__burger-btn-and-logo-flex">
        <button @click="showBurgerMenu" class="header__burger-btn">
          <img src="imgs/burger-btn.svg" alt="" />
        </button>
        <span class="header__logo">3legant.</span>
      </div>
      <nav>
        <div class="header__section-titles-flex-from1440px">
          <button
            @click="goToHomePage"
            class="header__section-titles-btn-from1440px"
          >
            Home
          </button>
          <button
            @click="goToShopPage"
            class="header__section-titles-btn-from1440px"
          >
            Shop
          </button>
          <button
            @click="goToBlogPage"
            class="header__section-titles-btn-from1440px"
          >
            Blog
          </button>
          <button
            @click="goToContactUsPage"
            class="header__section-titles-btn-from1440px"
          >
            Contact Us
          </button>
        </div>
      </nav>
      <div class="header__icons-flex">
        <div
          @click="goToMyAccountPage"
          class="header__search-icon-btn-and-users-profile-btn-flex-1440px"
        >
          <button class="header__search-icon-btn-1440px">
            <img src="imgs/search-icon.svg" alt="" />
          </button>
          <button
            @click="goToLoginOrRegistrationPage"
            class="header__users-profile-btn-1440px"
          >
            <img src="imgs/users-profile-icon.svg" alt="" />
          </button>
        </div>
        <div
          @click="goToWishlistPage"
          class="header__savings-icon-btn-and-savings-items-counter-btn-flex"
        >
          <button class="header__savings-icon-btn">
            <img src="imgs/savings-icon.svg" alt="" />
          </button>
          <button class="header__savings-items-counter-circle-btn">
            <span class="header__savings-items-counter-circle-btn-text">{{
              this.totalQtyOfFavorites.totalQtyOfFavorites
            }}</span>
          </button>
        </div>
        <div
          @click="goToCartPage"
          class="header__cart-icon-btn-and-cart-items-counter-btn-flex"
        >
          <button class="header__cart-icon-btn">
            <img src="imgs/cart-icon.svg" alt="" />
          </button>
          <button class="header__cart-items-counter-circle-btn">
            <span class="header__cart-items-counter-circle-btn-text">{{
              this.totalQtyOfCartProducts.totalQtyOfCartProducts
            }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import routesMixin from "@/mixins/routes.js";
export default {
  name: "MyHeader",
  mixins: [routesMixin],
  computed: {
    ...mapState(["totalQtyOfCartProducts"]),
    ...mapState(["totalQtyOfFavorites"]),
  },
  methods: {
    showBurgerMenu() {
      document.querySelector(".burger-menu__shadow").style.display = "block";
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
        this.updateTotalQtyOfCartProducts(0);
      }
    },
    ...mapMutations(["updateTotalQtyOfFavorites"]),
    async updateTotalQty() {
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
      } else {
        this.updateTotalQtyOfFavorites(0);
      }
    },
    goToCartPage() {
      this.$router.push("/CartPage");
      window.scrollTo(0, 0);
    },
    goToWishlistPage() {
      this.$router.push("/WishlistPage");
      window.scrollTo(0, 0);
    },
    goToMyAccountPage() {
      this.$router.push("/MyAccountPage");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.updateTotalQtyOfProducts();
    this.updateTotalQty();
  },
};
</script>

<style lang="scss">
@import "@/assets/App.scss";
.header {
  padding: 1rem 2rem;
}
.header__main-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__burger-btn-and-logo-flex {
  display: flex;
  gap: 0.25rem;
}
.header__burger-btn {
  @include button;
}
.header__logo {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.15rem;
}
.header__icons-flex {
  display: flex;
  gap: 0.81rem;
}
.header__cart-icon-btn-and-cart-items-counter-btn-flex,
.header__savings-icon-btn-and-savings-items-counter-btn-flex {
  display: flex;
  align-items: center;
  gap: 0.31rem;
  cursor: pointer;
}
.header__cart-icon-btn,
.header__savings-icon-btn {
  @include button;
}
.header__cart-items-counter-circle-btn,
.header__savings-items-counter-circle-btn {
  @include button;
  background: $black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
}
.header__section-titles-flex-from1440px,
.header__search-icon-btn-and-users-profile-btn-flex-1440px {
  display: none;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .header {
    padding: 1rem 2.5rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .header {
    padding: 1rem 10rem;
  }
  .header__burger-btn {
    display: none;
  }
  .header__logo {
    font-size: 1.5rem;
  }
  .header__icons-flex {
    gap: 1rem;
  }
  .header__search-icon-btn-and-users-profile-btn-flex-1440px {
    display: block;
  }
  .header__search-icon-btn-and-users-profile-btn-flex-1440px {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .header__search-icon-btn-1440px,
  .header__users-profile-btn-1440px {
    @include button;
  }
  .header__section-titles-flex-from1440px {
    display: block;
  }
  .header__section-titles-flex-from1440px {
    display: flex;
    gap: 2.5rem;
  }
  .header__section-titles-btn-from1440px {
    @include button;
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #6c7275;
  }
  .header__section-titles-btn-from1440px:hover {
    color: $black;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .header {
    padding: 1rem 15.938rem;
  }
}
</style>
