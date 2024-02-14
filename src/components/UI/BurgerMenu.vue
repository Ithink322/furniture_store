<template>
  <div class="burger-menu__shadow">
    <div class="burger-menu">
      <div class="burger-menu__main-flex">
        <div class="burger-menu__logo-and-cross-btn-flex">
          <span class="burger-menu__logo">3legant.</span>
          <button class="burger-menu__cross-btn">
            <img src="imgs/x-icon.svg" alt="" />
          </button>
        </div>
        <form class="burger-menu__search-form">
          <img
            src="imgs/search-icon.svg"
            alt=""
            class="burger-menu__search-icon"
          />
          <input
            placeholder="Search"
            type="text"
            class="burger-menu__search-input"
          />
        </form>
        <div class="burger-menu__titles-btns">
          <button @click="goToHomePage" class="burger-menu__title-btn">
            Home
          </button>
          <button @click="goToShopPage" class="burger-menu__title-btn">
            Shop
          </button>
          <button @click="goToBlogPage" class="burger-menu__title-btn">
            Blog
          </button>
          <button
            @click="goToContactUsPage"
            class="burger-menu__title-btn"
            style="border-bottom: 2px solid transparent"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div class="burger-menu__btns-and-social-media">
        <div class="burger-menu__users-profile-and-cart-and-savings-btns">
          <button class="burger-menu__users-profile-btn">
            <span>My account</span>
            <img src="imgs/users-profile-icon.svg" alt="" />
          </button>
          <button @click="goToCartPage" class="burger-menu__cart-btn">
            <span>Cart</span>
            <div class="burger-menu__cart-icon-and-items-counter-circle-flex">
              <img src="imgs/cart-icon.svg" alt="" />
              <div class="burger-menu__cart-items-counter-circle">
                <span>{{
                  this.totalQtyOfCartProducts.totalQtyOfCartProducts
                }}</span>
              </div>
            </div>
          </button>
          <button @click="goToWishlistPage" class="burger-menu__savings-btn">
            <span>Wishlist</span>
            <div
              class="burger-menu__savings-icon-and-savings-items-counter-circle-flex"
            >
              <img src="imgs/savings-icon.svg" alt="" />
              <div class="burger-menu__savings-items-counter-circle">
                <span>{{ this.totalQtyOfFavorites.totalQtyOfFavorites }}</span>
              </div>
            </div>
          </button>
        </div>
        <button
          @click="goToLoginOrRegistrationPage"
          class="burger-menu__sign-in-btn"
        >
          Sign in
        </button>
        <div class="burger-menu__social-media-flex">
          <img src="imgs/instagram-white-icon.svg" alt="" />
          <img src="imgs/facebook-white-icon.svg" alt="" />
          <img src="imgs/youtube-white-icon.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import $ from "jquery";
import routesMixin from "@/mixins/routes.js";
export default {
  name: "BurgerMenu",
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  },
  mixins: [routesMixin],
  computed: {
    ...mapState(["totalQtyOfCartProducts"]),
    ...mapState(["totalQtyOfFavorites"]),
  },
  methods: {
    ...mapMutations(["updateTotalQtyOfCartProducts"]),
    updateTotalQtyOfProducts() {
      let totalQty = 0;
      let products = JSON.parse(localStorage.getItem("cart"));
      if (products !== null) {
        products.forEach((product) => {
          totalQty += Number(product.qty);
        });
        this.updateTotalQtyOfCartProducts(totalQty);
      }
    },
    ...mapMutations(["updateTotalQtyOfFavorites"]),
    updateTotalQty() {
      this.updateTotalQtyOfFavorites(this.favorites.length);
    },
    goToCartPage() {
      this.$router.push("/CartPage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu__shadow").style.display = "none";
    },
    goToWishlistPage() {
      this.$router.push("/WishlistPage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu__shadow").style.display = "none";
    },
  },
  mounted() {
    this.updateTotalQtyOfProducts();
    this.updateTotalQty();
    $(function () {
      $(".header__burger-btn").click(function () {
        $(".burger-menu__shadow").fadeIn(0);
      });
    });
    $(function () {
      $(".burger-menu__cross-btn").click(function () {
        $(".burger-menu__shadow").fadeOut(120);
      });
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/App.scss";
.burger-menu__shadow {
  display: none;
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.32);
  top: 0rem;
  height: 100%;
  z-index: 3;
}
.burger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  background: #fff;
  padding: 1.25rem;
  height: 100%;
}
.burger-menu__main-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.burger-menu__logo-and-cross-btn-flex {
  display: flex;
  justify-content: space-between;
}
.burger-menu__logo {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
}
.burger-menu__cross-btn {
  @include button;
}
.burger-menu__cross-btn img {
  width: 24px;
  height: 24px;
}
.burger-menu__search-form {
  display: flex;
  align-items: center;
}
.burger-menu__search-icon {
  position: absolute;
  margin-left: 1rem;
}
.burger-menu__search-input {
  padding: 1rem 0rem 1rem 3rem;
  border-radius: 6px;
  border: 1px solid #6c7275;
  outline: none;
  height: 46px;
  width: 100%;
}
.burger-menu__titles-btns button {
  border-bottom: 2px solid #e8ecef;
  padding-bottom: 20px;
}
.burger-menu__title-btn {
  @include button;
  justify-content: left;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  width: 100%;
}
.burger-menu__users-profile-and-cart-and-savings-btns button {
  border-bottom: 2px solid #e8ecef;
  padding-bottom: 10px;
}
.burger-menu__users-profile-btn,
.burger-menu__cart-btn,
.burger-menu__savings-btn {
  @include button;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: #6c7275;
}
.burger-menu__cart-icon-and-items-counter-circle-flex {
  display: flex;
  align-items: center;
  gap: 0.313rem;
}
.burger-menu__cart-items-counter-circle,
.burger-menu__savings-items-counter-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0rem;
  cursor: pointer;
  background: $black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
}
.burger-menu__savings-icon-and-savings-items-counter-circle-flex {
  display: flex;
  align-items: center;
  gap: 0.313rem;
}
.burger-menu__sign-in-btn {
  @include button;
  background: $black;
  width: 100%;
  border-radius: 6px;
  padding: 0.625rem 1.625rem;
  margin-top: 1.67rem;
  margin-bottom: 1.21rem;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;
}
.burger-menu__social-media-flex {
  display: flex;
  gap: 1.5rem;
}
.burger-menu__social-media-flex img {
  cursor: pointer;
}
/* 375px = 23.438em */
@media (min-width: 23.43em) {
  .burger-menu {
    width: 343px;
  }
}
</style>
