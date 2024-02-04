<template>
  <div class="container__new-arrivals-title-and-more-products-btn-flex">
    <h2 class="container__new-arrivals-title">New Arrivals</h2>
    <button
      @click="goToShopPage"
      class="container__new-arrivals-more-products-btn"
    >
      More Products
      <img src="imgs/arrow-right-black.svg" alt="" />
    </button>
  </div>
  <div class="container__new-arrivals-cards-overflow">
    <button class="container__new-arrivals-prev-btn">
      <img src="imgs/arrow-left.svg" alt="" />
    </button>
    <button class="container__new-arrivals-next-btn">
      <img src="imgs/arrow-right.svg" alt="" />
    </button>
    <div class="container__new-arrivals-cards-flex">
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button
          @click="toggleIconWishList"
          class="container__new-arrivals-card-wishlist-btn"
        >
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-1.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title">Loveseat Sofa</span>
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$199.00</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$400.00</span
            >
          </div>
        </div>
      </div>
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button class="container__new-arrivals-card-wishlist-btn">
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-2.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title">Table Lamp</span>
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$24.99</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$50.00</span
            >
          </div>
        </div>
      </div>
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button class="container__new-arrivals-card-wishlist-btn">
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-3.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title"
            >Beige Table Lamp</span
          >
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$24.99</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$50.00</span
            >
          </div>
        </div>
      </div>
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button class="container__new-arrivals-card-wishlist-btn">
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-4.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title">Bamboo basket</span>
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$34.99</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$70.00</span
            >
          </div>
        </div>
      </div>
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button class="container__new-arrivals-card-wishlist-btn">
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-1.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title">Lovely Sofa</span>
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$999.00</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$2000.00</span
            >
          </div>
        </div>
      </div>
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button class="container__new-arrivals-card-wishlist-btn">
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-2.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title"
            >Table Lamp V2.0</span
          >
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$29.99</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$60.00</span
            >
          </div>
        </div>
      </div>
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button class="container__new-arrivals-card-wishlist-btn">
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-3.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title"
            >Beige Table Lamp V2.0</span
          >
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$50.00</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$100.00</span
            >
          </div>
        </div>
      </div>
      <div class="container__new-arrivals-card">
        <div class="container__new-arrivals-card-new-div">
          <span class="container__new-arrivals-card-new-text">NEW</span>
        </div>
        <div class="container__new-arrivals-card-sale-div">
          <span class="container__new-arrivals-card-sale-text">-50%</span>
        </div>
        <button class="container__new-arrivals-card-wishlist-btn">
          <img :src="currentIcon" alt="" />
        </button>
        <img
          src="imgs/new-arrivals-card-hero-4.svg"
          alt=""
          class="container__new-arrivals-card-hero"
        />
        <button class="container__new-arrivals-card-add-to-cart-btn">
          Add to cart
        </button>
        <div
          class="container__new-arrivals-card-rating-and-title-and-prices-flex"
        >
          <div class="container__new-arrivals-card-rating-flex">
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
            <img src="imgs/Star-icon.svg" alt="" />
          </div>
          <span class="container__new-arrivals-card-title"
            >Bamboo basket V2.0</span
          >
          <div class="container__new-arrivals-card-prices-flex">
            <span class="container__new-arrivals-card-current-price"
              >$15.00</span
            >
            <span class="container__new-arrivals-card-previous-price"
              >$30.00</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreProducts",
  data() {
    return {
      WhishListIconDisabled: "/imgs/whishlist-icon.svg",
      WhishListIconActivated: "/imgs/whishlist-icon-activated.svg",
      currentIcon: "/imgs/whishlist-icon.svg",
    };
  },
  mounted() {
    /* touchscreen for .container__new-arrivals-cards-overflow starts */
    let slides = document.querySelectorAll(".container__new-arrivals-card");
    let gap = window.getComputedStyle(
      document.querySelector(".container__new-arrivals-cards-flex")
    );
    let flex_gap = parseInt(gap.getPropertyValue("gap"));
    let slideWidth = slides[0].offsetWidth + flex_gap;
    if (window.innerWidth < 1440) {
      let slider = document.querySelector(
          ".container__new-arrivals-cards-overflow"
        ),
        sliderContainer = document.querySelector(
          ".container__new-arrivals-cards-flex"
        );
      let currentIndex = 0;
      sliderContainer.style.transform = "translateX(0)";

      slider.addEventListener("touchstart", handleTouchStart, false);
      slider.addEventListener("touchmove", handleTouchMove, false);

      let startX = null;

      function handleTouchStart(event) {
        startX = event.touches[0].clientX;
      }

      function handleTouchMove(event) {
        if (!startX) {
          return;
        }

        let currentX = event.touches[0].clientX;
        let diffX = startX - currentX;

        if (diffX > 0 && currentIndex < slides.length - 1) {
          currentIndex++;
          startX = null;
          moveSlider();
        } else if (diffX < 0 && currentIndex > 0) {
          currentIndex--;
          startX = null;
          moveSlider();
        }
      }

      function moveSlider() {
        let translateX = -currentIndex * slideWidth;
        sliderContainer.style.transform = "translateX(" + translateX + "px)";
      }
      /* touchscreen for .container__new-arrivals-cards-overflow ends */
    } else {
      /* carousel for .container__new-arrivals-cards-flex from 1440px starts */
      const prevButton = document.querySelector(
          ".container__new-arrivals-prev-btn"
        ),
        nextButton = document.querySelector(
          ".container__new-arrivals-next-btn"
        ),
        carouselContainer = document.querySelector(
          ".container__new-arrivals-cards-flex"
        );
      let currentPosition = 0,
        currentIndex = 0;

      prevButton.addEventListener("click", () => {
        currentIndex--;
        currentPosition += slideWidth;
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
          currentPosition = -slideWidth * (slides.length - 1);
        }
        carouselContainer.style.transform = `translateX(${currentPosition}px)`;
      });
      nextButton.addEventListener("click", () => {
        currentIndex++;
        currentPosition -= slideWidth;
        if (currentIndex === slides.length) {
          currentIndex = 0;
          currentPosition = 0;
        }
        carouselContainer.style.transform = `translateX(${currentPosition}px)`;
      });
      /* carousel for .container__new-arrivals-cards-flex from 1440px ends */
    }
  },
  methods: {
    goToShopPage() {
      this.$router.push("/ShopPage");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__new-arrivals-title-and-more-products-btn-flex {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.container__new-arrivals-title {
  font-family: "Poppins", sans-serif;
  font-size: 2.125rem;
  font-weight: 500;
  color: #000;
  line-height: 2.375rem;
  margin-top: 0rem;
  margin-bottom: 2.5rem;
}
.container__new-arrivals-more-products-btn {
  @include button;
  gap: 0.25rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: $black;
  white-space: nowrap;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
}
.container__new-arrivals-cards-overflow {
  overflow: hidden;
  height: 400px;
}
.container__new-arrivals-prev-btn,
.container__new-arrivals-next-btn {
  display: none;
}
.container__new-arrivals-cards-flex {
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease-in-out;
}
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
  .container__new-arrivals-title {
    font-size: 2.5rem;
  }
  .container__new-arrivals-more-products-btn {
    font-size: 1rem;
  }
  .container__new-arrivals-cards-flex {
    height: 450px;
  }
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

  /* 1440px = 90em */
  @media (min-width: 90em) {
    .container__new-arrivals-prev-btn {
      @include button;
      position: absolute;
      margin-top: 9.5rem;
      margin-left: 0.5rem;
      z-index: 2;
    }
    .container__new-arrivals-next-btn {
      @include button;
      position: absolute;
      margin-top: 9.5rem;
      right: 10.5rem;
      z-index: 2;
    }
  }

  /* 1920px = 120em */
  @media (min-width: 120em) {
    .container__new-arrivals-next-btn {
      right: 16.438rem;
    }
  }
}
</style>
