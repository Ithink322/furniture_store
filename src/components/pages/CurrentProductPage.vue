<template>
  <div class="container">
    <div class="container__carousel-and-main-flex-flex">
      <div class="container__carousel-and-mini-carousel-flex">
        <div class="container__carousel">
          <button class="container__carousel-prev-btn">
            <img src="imgs/arrow-left.svg" alt="" />
          </button>
          <button class="container__carousel-next-btn">
            <img src="imgs/arrow-right.svg" alt="" />
          </button>
          <div class="container__carousel-flex">
            <div class="container__carousel-card">
              <div>
                <div class="container__new-arrivals-card-new-div">
                  <span class="container__new-arrivals-card-new-text">NEW</span>
                </div>
                <div class="container__new-arrivals-card-sale-div">
                  <span class="container__new-arrivals-card-sale-text"
                    >-50%</span
                  >
                </div>
              </div>
              <img
                :src="product.hero"
                alt=""
                class="container__carousel-hero"
              />
            </div>
            <div class="container__carousel-card">
              <div>
                <div class="container__new-arrivals-card-new-div">
                  <span class="container__new-arrivals-card-new-text">NEW</span>
                </div>
                <div class="container__new-arrivals-card-sale-div">
                  <span class="container__new-arrivals-card-sale-text"
                    >-50%</span
                  >
                </div>
              </div>
              <img
                :src="product.hero"
                alt=""
                class="container__carousel-hero"
              />
            </div>
            <div class="container__carousel-card">
              <div>
                <div class="container__new-arrivals-card-new-div">
                  <span class="container__new-arrivals-card-new-text">NEW</span>
                </div>
                <div class="container__new-arrivals-card-sale-div">
                  <span class="container__new-arrivals-card-sale-text"
                    >-50%</span
                  >
                </div>
              </div>
              <img
                :src="product.hero"
                alt=""
                class="container__carousel-hero"
              />
            </div>
            <div class="container__carousel-card">
              <div>
                <div class="container__new-arrivals-card-new-div">
                  <span class="container__new-arrivals-card-new-text">NEW</span>
                </div>
                <div class="container__new-arrivals-card-sale-div">
                  <span class="container__new-arrivals-card-sale-text"
                    >-50%</span
                  >
                </div>
              </div>
              <img
                :src="product.hero"
                alt=""
                class="container__carousel-hero"
              />
            </div>
            <div class="container__carousel-card">
              <div>
                <div class="container__new-arrivals-card-new-div">
                  <span class="container__new-arrivals-card-new-text">NEW</span>
                </div>
                <div class="container__new-arrivals-card-sale-div">
                  <span class="container__new-arrivals-card-sale-text"
                    >-50%</span
                  >
                </div>
              </div>
              <img
                :src="product.hero"
                alt=""
                class="container__carousel-hero"
              />
            </div>
            <div class="container__carousel-card">
              <div>
                <div class="container__new-arrivals-card-new-div">
                  <span class="container__new-arrivals-card-new-text">NEW</span>
                </div>
                <div class="container__new-arrivals-card-sale-div">
                  <span class="container__new-arrivals-card-sale-text"
                    >-50%</span
                  >
                </div>
              </div>
              <img
                :src="product.hero"
                alt=""
                class="container__carousel-hero"
              />
            </div>
          </div>
        </div>
        <div class="container__carousel-mini">
          <div class="container__carousel-mini-flex">
            <img
              :src="product.hero"
              alt=""
              class="container__carousel-mini-hero container__carousel-mini-hero-active"
            />
            <img
              :src="product.hero"
              alt=""
              class="container__carousel-mini-hero"
            />
            <img
              :src="product.hero"
              alt=""
              class="container__carousel-mini-hero"
            />
            <img
              :src="product.hero"
              alt=""
              class="container__carousel-mini-hero"
            />
            <img
              :src="product.hero"
              alt=""
              class="container__carousel-mini-hero"
            />
            <img
              :src="product.hero"
              alt=""
              class="container__carousel-mini-hero"
            />
          </div>
        </div>
      </div>
      <div class="container__main-flex">
        <div class="container__info-and-measurements-and-colors-flex">
          <div
            class="container__rating-and-title-and-description-and-prices-flex"
          >
            <div class="container__rating-flex">
              <img src="imgs/Star-icon.svg" alt="" />
              <img src="imgs/Star-icon.svg" alt="" />
              <img src="imgs/Star-icon.svg" alt="" />
              <img src="imgs/Star-icon.svg" alt="" />
              <img src="imgs/Star-icon.svg" alt="" />
            </div>
            <span class="container__title">{{ product.title }}</span>
            <span class="container__description">{{
              product.description
            }}</span>
            <div class="container__prices-flex">
              <span class="container__current-price">{{
                product.currentPrice
              }}</span>
              <span class="container__previous-price">{{
                product.previousPrice
              }}</span>
            </div>
          </div>
          <div class="container__measurements-flex">
            <span class="container__measurements-text">Measurements</span>
            <span class="container__measurements">{{
              product.measurements
            }}</span>
          </div>
          <div class="container__colors-flex">
            <div class="container__choose-color-btn-and-text-flex">
              <button class="container__choose-color-btn">
                Choose color <img src="imgs/big-right-arrow.svg" alt="" />
              </button>
              <span class="container__color-text">{{
                product.startColor
              }}</span>
            </div>
            <div class="container__colors-rects-flex">
              <div
                class="container__color-rect container__color-rect-styles"
                :style="{ background: product.colors[0] }"
              ></div>
              <div
                class="container__color-rect"
                :style="{ background: product.colors[1] }"
              ></div>
              <div
                class="container__color-rect"
                :style="{ background: product.colors[2] }"
              ></div>
              <div
                class="container__color-rect"
                :style="{ background: product.colors[3] }"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="container__counter-and-wishlist-btn-and-add-to-cart-btn-flex"
        >
          <div class="container__counter-and-wishlist-btn-flex">
            <div class="container__counter">
              <button class="cotainer__minus-btn">
                <img src="imgs/minus-icon.svg" alt="" />
              </button>
              <span class="container__counter-text">1</span>
              <button class="cotainer__plus-btn">
                <img src="imgs/plus-icon.svg" alt="" />
              </button>
            </div>
            <button class="cotainer__wishlist-btn">
              <img src="imgs/wishlist-black-icon.svg" alt="" /> Wishlist
            </button>
          </div>
          <button class="container__add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="container__category-flex">
          <span class="container__category-title">CATEGORY</span>
          <span class="container__category-text">{{ product.category }}</span>
        </div>
      </div>
    </div>
    <div class="container__dropdowns-flex">
      <div class="container__dropdown-flex container__dropdown-flex-active">
        <span class="container__dropdown-title">Additional Info</span>
        <button class="container__dropdown-btn">
          <img
            class="container__dropdown-icon"
            src="imgs/dropdown-arrow-gray.svg"
            alt=""
          />
        </button>
      </div>
      <div class="container__dropdown-details-flex">
        <span class="container__dropdown-details-title">Details</span>
        <span class="container__dropdown-details-description">{{
          product.description
        }}</span>
      </div>
      <div @click="showQuestions" class="container__dropdown-flex">
        <span class="container__dropdown-title"
          >Questions({{ this.questions.length }})</span
        >
        <button class="container__dropdown-btn">
          <img
            class="container__dropdown-icon"
            src="imgs/dropdown-arrow-gray.svg"
            alt=""
          />
        </button>
      </div>
      <div @click="showReviews" class="container__dropdown-flex">
        <span class="container__dropdown-title">Reviews()</span>
        <button class="container__dropdown-btn">
          <img
            class="container__dropdown-icon"
            src="imgs/dropdown-arrow-gray.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    <div class="container__dropdown-details-flex-from1024px">
      <span class="container__dropdown-details-title">Details</span>
      <span class="container__dropdown-details-description">{{
        product.description
      }}</span>
    </div>
    <section class="container__questions-section" v-if="isQuestionsVisible">
      <question-form @askQuestion="askQuestion"></question-form>
      <questions-list :questions="questions"></questions-list>
    </section>
    <section v-if="isReviewsVisible" class="container__reviews-section">
      <review-form></review-form>
      <reviews-list></reviews-list>
    </section>
    <more-products></more-products>
    <div class="container__margin"></div>
    <news-letter></news-letter>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QuestionForm from "../UI/QuestionForm.vue";
import QuestionsList from "../UI/QuestionsList.vue";
import ReviewForm from "../UI/ReviewForm.vue";
import MoreProducts from "../UI/MoreProducts.vue";
import NewsLetter from "../UI/NewsLetter.vue";
export default {
  name: "CurrentProductPage",
  components: {
    QuestionForm,
    QuestionsList,
    ReviewForm,
    MoreProducts,
    NewsLetter,
  },
  data() {
    return {
      isQuestionsVisible: false,
      questions: [],
      isReviewsVisible: false,
    };
  },
  computed: {
    ...mapGetters(["getSelectedProduct"]),
    product() {
      return JSON.parse(localStorage.getItem("CurrentProduct"));
    },
  },
  mounted() {
    /* carousel with arrows for .container__carousel-flex starts */
    let carouselContainer = document.querySelector(".container__carousel-flex"),
      carouselMiniContainer = document.querySelector(
        ".container__carousel-mini-flex"
      ),
      MiniSlides = document.querySelectorAll(".container__carousel-mini-hero"),
      MiniGap = window.getComputedStyle(
        document.querySelector(".container__carousel-mini-flex")
      ),
      prevButton = document.querySelector(".container__carousel-prev-btn"),
      nextButton = document.querySelector(".container__carousel-next-btn"),
      carouselItems = document.querySelectorAll(".container__carousel-card"),
      currentPosition = 0,
      currentMiniPosition = 0;
    let flex_MiniGap = parseInt(MiniGap.getPropertyValue("gap"));
    let slideWidth = MiniSlides[0].offsetWidth + flex_MiniGap;

    prevButton.addEventListener("click", () => {
      currentPosition += 100;
      currentMiniPosition += slideWidth;
      if (currentPosition > 0) {
        currentPosition = -100 * (carouselItems.length - 1);
        currentMiniPosition = -slideWidth * (carouselItems.length - 1);
      }
      carouselContainer.style.transform = `translateX(${currentPosition}%)`;
      carouselMiniContainer.style.transform = `translateX(${currentMiniPosition}px)`;

      MiniSlides.forEach((slide, index) => {
        slide.classList.remove("container__carousel-mini-hero-active");
        if (index === Math.abs(currentPosition / 100)) {
          slide.classList.add("container__carousel-mini-hero-active");
        }
      });
    });

    nextButton.addEventListener("click", () => {
      currentPosition -= 100;
      currentMiniPosition -= slideWidth;
      if (currentPosition < -100 * (carouselItems.length - 1)) {
        currentPosition = 0;
        currentMiniPosition = 0;
      }
      carouselContainer.style.transform = `translateX(${currentPosition}%)`;
      carouselMiniContainer.style.transform = `translateX(${currentMiniPosition}px)`;

      MiniSlides.forEach((slide, index) => {
        slide.classList.remove("container__carousel-mini-hero-active");
        if (index === Math.abs(currentPosition / 100)) {
          slide.classList.add("container__carousel-mini-hero-active");
        }
      });
    });
    /* carousel with arrows for .container__carousel-flex ends */

    /* emphasize div when user choose color starts */
    const buttons = document.querySelectorAll(".container__color-rect");
    let colorText = document.querySelector(".container__color-text");
    const colorNames = {
      "rgb(255, 0, 0)": "Red",
      "rgb(0, 0, 0)": "Black",
      "rgb(255, 255, 255)": "White",
      "rgb(245, 245, 220)": "Beige",
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) =>
          btn.classList.remove("container__color-rect-active")
        );
        buttons.forEach((btn) =>
          btn.classList.remove("container__color-rect-styles")
        );
        button.classList.add("container__color-rect-active");
        const btnColor = window.getComputedStyle(button).backgroundColor;
        colorText.innerText = colorNames[btnColor];
      });
    });
    /* emphasize div when user choose color ends */

    /* counter .container-current-item__info-details-counter starts */
    const minusBtn = document.querySelector(".cotainer__minus-btn"),
      plusBtn = document.querySelector(".cotainer__plus-btn");
    let counterText = document.querySelector(".container__counter-text"),
      count = 1;
    minusBtn.onclick = () => {
      if (count > 1) {
        count--;
        counterText.innerText = count;
      }
    };
    plusBtn.onclick = () => {
      count++;
      counterText.innerText = count;
    };
    /* counter .container-current-item__info-details-counter ends */

    /* change colors if user clicked on one of the flex containers starts */
    let containers = document.querySelectorAll(".container__dropdown-flex");

    containers.forEach((container) => {
      container.addEventListener("click", function () {
        let isBlack =
          this.querySelector(".container__dropdown-title").style.color ===
          "black";
        let arrowIcon = this.querySelector(".container__dropdown-icon");
        if (isBlack) {
          this.querySelector(".container__dropdown-title").style.color =
            "#6c7275";
          arrowIcon.src = "imgs/dropdown-arrow-gray.svg";
          container.classList.remove("container__border-bottom");
        } else {
          this.querySelector(".container__dropdown-title").style.color =
            "black";
          arrowIcon.src = "imgs/dropdown-arrow-black.svg";
          container.classList.add("container__border-bottom");
        }
      });
    });
    /* change colors if user clicked on one of the flex containers ends */

    /* show details if user clicked on one of the first flex container starts */
    containers[0].addEventListener("click", function () {
      let isBlack =
        this.querySelector(".container__dropdown-title").style.color ===
        "black";
      if (isBlack) {
        if (window.innerWidth < 1024) {
          document.querySelector(
            ".container__dropdown-details-flex"
          ).style.display = "flex";
        } else {
          document.querySelector(
            ".container__dropdown-details-flex-from1024px"
          ).style.display = "flex";
        }
      } else {
        if (window.innerWidth < 1024) {
          document.querySelector(
            ".container__dropdown-details-flex"
          ).style.display = "none";
        } else {
          document.querySelector(
            ".container__dropdown-details-flex-from1024px"
          ).style.display = "none";
        }
      }
    });
    /* show details if user clicked on one of the first flex container ends */
  },
  created() {
    this.questions = JSON.parse(localStorage.getItem("questions")) || [];
  },
  methods: {
    showQuestions() {
      this.isQuestionsVisible = !this.isQuestionsVisible;
    },
    askQuestion(question) {
      this.questions.push(question);
      localStorage.setItem("questions", JSON.stringify(this.questions));
    },
    showReviews() {
      this.isReviewsVisible = !this.isReviewsVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 0rem 2rem;
}
.container__carousel {
  overflow: hidden;
  margin-top: 1rem;
}
.container__carousel-prev-btn {
  @include button;
  position: absolute;
  margin-top: 9.5rem;
  margin-left: 0.5rem;
  z-index: 2;
}
.container__carousel-next-btn {
  @include button;
  position: absolute;
  margin-top: 9.5rem;
  right: 2.5rem;
  z-index: 2;
}
.container__carousel-prev-btn img,
.container__carousel-next-btn img {
  width: 60px;
  height: 60px;
}
.container__carousel-flex {
  display: flex;
  transition: transform 0.67s ease;
}
.container__carousel-card {
  flex-shrink: 0;
  flex-basis: auto;
  width: 100%;
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
.container__carousel-hero {
  flex-shrink: 0;
  flex-basis: auto;
  width: 100%;
  margin-top: -5.1rem;
}
.container__carousel-mini {
  overflow: hidden;
  margin-top: 0.5rem;
}
.container__carousel-mini-flex {
  display: flex;
  transition: transform 0.67s ease;
  gap: 0.5rem;
}
.container__carousel-mini-hero {
  width: 70px;
  height: 70px;
  object-fit: cover;
  flex-shrink: 0;
}
.container__carousel-mini-hero-active {
  border: 2px solid #000;
}
.container__info-and-measurements-and-colors-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.container__rating-and-title-and-description-and-prices-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
.container__rating-flex {
  display: flex;
  gap: 0.25rem;
}
.container__title {
  font-family: "Inter", sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  color: $black;
}
.container__description {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: $black;
}
.container__prices-flex {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.container__current-price {
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: $black;
}
.container__previous-price {
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #6c7275;
  text-decoration: line-through;
}
.container__measurements-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__measurements-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
}
.container__measurements {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #000;
}
.container__colors-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__choose-color-btn-and-text-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__choose-color-btn {
  @include button;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #6c7275;
}
.container__color-text {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #000;
}
.container__colors-rects-flex {
  display: flex;
  gap: 0.5rem;
}
.container__color-rect {
  width: 40px;
  height: 40px;
  border: 1px solid #000;
}
.container__color-rect-styles {
  border: 2px solid blue;
}
.container__color-rect-active {
  border: 2px solid blue;
}
.container__counter-and-wishlist-btn-and-add-to-cart-btn-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
}
.container__counter-and-wishlist-btn-and-add-to-cart-btn-flex::after {
  content: "";
  position: absolute;
  border: 1px solid #d4dadd;
  width: 100%;
  margin-top: 7.7rem;
}
.container__counter-and-wishlist-btn-flex {
  display: flex;
  gap: 0.5rem;
}
.container__counter {
  background: #f5f5f5;
  border-radius: 0.25rem;
  padding: 0.75rem 0.5rem;
  width: 80px;
  display: flex;
  gap: 0.813rem;
}
.cotainer__minus-btn {
  @include button;
}
.container__counter-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #121212;
}
.cotainer__plus-btn {
  @include button;
}
.cotainer__wishlist-btn {
  @include button;
  gap: 0.5rem;
  border: 2px solid $black;
  width: 100%;
  border-radius: 0.25rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: $black;
}
.container__add-to-cart-btn {
  @include button;
  background: $black;
  border-radius: 0.25rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  width: 100%;
  padding: 0.75rem 0rem;
}
.container__category-flex {
  display: flex;
  gap: 3.625rem;
  margin-top: 3rem;
}
.container__category-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
.container__category-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: $black;
}
.container__dropdowns-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 5rem;
}
.container__dropdown-flex {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.container__dropdown-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid rgb(190, 197, 201);
  margin-top: 1.875rem;
}
.container__dropdown-flex-active {
  color: $black;
}
.container__dropdown-title {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: #6c7275;
  white-space: nowrap;
}
.container__dropdown-btn {
  @include button;
  width: 24px;
  height: 24px;
}
.container__dropdown-flex.container__border-bottom::after {
  border: 1px solid black;
}
.container__dropdown-details-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__dropdown-details-flex {
  display: none;
}
.container__dropdown-details-flex-from1024px {
  display: none;
}
.container__dropdown-details-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
}
.container__dropdown-details-description {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
}
.container__margin {
  margin-top: 5rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0rem 2.5rem;
  }
  .container__carousel {
    width: 300px;
  }
  .container__carousel-prev-btn {
    margin-top: 11rem;
  }
  .container__carousel-next-btn {
    margin-top: 11rem;
    left: 17rem;
    right: 0rem;
  }
  .container__carousel-card {
    height: 400px;
    width: 300px;
  }
  .container__carousel-hero {
    height: 400px;
    width: 300px;
    object-fit: cover;
  }
  .container__carousel-mini {
    width: 300px;
  }
  .container__carousel-and-main-flex-flex {
    display: flex;
    gap: 2rem;
  }
  .container__main-flex {
    display: flex;
    flex-direction: column;
  }
  .container__colors-rects-flex {
    gap: 1rem;
  }
  .container__counter-and-wishlist-btn-flex {
    gap: 1.5rem;
  }
  .container__counter {
    gap: 1.5rem;
    width: fit-content;
  }
  .container__dropdowns-flex {
    width: 300px;
    margin-top: -9.15rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__carousel-and-main-flex-flex {
    gap: 3.938rem;
  }
  .container__carousel {
    width: 400px;
  }
  .container__carousel-card {
    height: 528px;
    width: 400px;
  }
  .container__carousel-hero {
    height: 528px;
    width: 400px;
  }
  .container__carousel-prev-btn {
    margin-top: 15rem;
  }
  .container__carousel-next-btn {
    margin-top: 15rem;
    left: 23.4rem;
  }
  .container__dropdowns-flex {
    position: relative;
    margin-top: 2rem;
    flex-direction: row;
    gap: 5rem;
    width: 100%;
  }
  .container__dropdowns-flex::before {
    content: "";
    position: absolute;
    width: 100%;
    border: 1px solid rgb(190, 197, 201);
    margin-top: 1.86rem;
  }
  .container__dropdown-btn {
    display: none;
  }
  .container__dropdown-details-flex-from1024px {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: -3rem;
    margin-bottom: 2rem;
  }
  .container__dropdown-details-flex-from1024px {
    display: none;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem 10rem;
  }
  .container__carousel-mini {
    margin-top: 1.5rem;
  }
  .container__carousel-mini-flex {
    gap: 1.5rem;
  }
  .container__new-arrivals-card-new-div {
    margin-top: 2rem;
    margin-left: 2rem;
  }
  .container__new-arrivals-card-sale-div {
    margin-left: 2rem;
  }
  .container__carousel {
    width: 547px;
  }
  .container__carousel-card {
    height: 728px;
    width: 547px;
  }
  .container__carousel-hero {
    margin-top: -5.6rem;
    height: 728px;
    width: 547px;
  }
  .container__carousel-mini {
    width: 547px;
  }
  .container__carousel-mini-hero {
    width: 167px;
    height: 167px;
  }
  .container__carousel-prev-btn {
    margin-top: 21.4rem;
  }
  .container__carousel-next-btn {
    margin-top: 21.4rem;
    margin-left: 16.5rem;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0rem 15.938rem;
  }
  .container__carousel-next-btn {
    margin-left: 22.4rem;
  }
}
</style>
