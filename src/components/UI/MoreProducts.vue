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
      <more-products-item
        v-for="product in products"
        :product="product"
        :key="product"
      ></more-products-item>
    </div>
  </div>
</template>

<script>
import MoreProductsItem from "../UI/MoreProductsItem.vue";
export default {
  name: "MoreProducts",
  components: { MoreProductsItem },
  data() {
    return {
      products: [
        {
          id: 121,
          hero: "imgs/new-arrivals-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
        {
          id: 122,
          hero: "imgs/new-arrivals-card-hero-2.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
        {
          id: 123,
          hero: "imgs/new-arrivals-card-hero-3.svg",
          title: "Beige Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
        {
          id: 124,
          hero: "imgs/new-arrivals-card-hero-4.svg",
          title: "Bamboo basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
        {
          id: 125,
          hero: "imgs/new-arrivals-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
        {
          id: 126,
          hero: "imgs/new-arrivals-card-hero-2.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
        {
          id: 127,
          hero: "imgs/new-arrivals-card-hero-3.svg",
          title: "Beige Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
        {
          id: 128,
          hero: "imgs/new-arrivals-card-hero-4.svg",
          title: "Bamboo basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
        },
      ],
    };
  },
  computed: {
    product() {
      return JSON.parse(localStorage.getItem("CurrentProduct"));
    },
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
</style>
