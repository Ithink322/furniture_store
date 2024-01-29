<template>
  <div class="container">
    <div class="container__advertises-touch-circle"></div>
    <div class="container__slider-advertises-overflow">
      <div class="container__slider-advertises-flex">
        <img
          src="imgs/HomePage-advertise-slide-from320px.svg"
          alt=""
          class="container__slider-advertise-slide container__slider-advertise-slide-from320px"
        />
        <img
          src="imgs/HomePage-advertise-slide-from320px.svg"
          alt=""
          class="container__slider-advertise-slide container__slider-advertise-slide-from320px"
        />
        <img
          src="imgs/HomePage-advertise-slide-from320px.svg"
          alt=""
          class="container__slider-advertise-slide container__slider-advertise-slide-from320px"
        />
        <img
          src="imgs/HomePage-advertise-slide-from1024px.svg"
          alt=""
          class="container__slider-advertise-slide container__slider-advertise-slide-from1024px"
        />
        <img
          src="imgs/HomePage-advertise-slide-from1024px.svg"
          alt=""
          class="container__slider-advertise-slide container__slider-advertise-slide-from1024px"
        />
        <img
          src="imgs/HomePage-advertise-slide-from1024px.svg"
          alt=""
          class="container__slider-advertise-slide container__slider-advertise-slide-from1024px"
        />
      </div>
      <button class="container__slider-advertise-prev-btn">
        <img src="imgs/arrow-left.svg" alt="" />
      </button>
      <button class="container__slider-advertise-next-btn">
        <img src="imgs/arrow-right.svg" alt="" />
      </button>
    </div>
    <div class="indicators-flex-slider">
      <span class="indicator-slider active"></span>
      <span class="indicator-slider"></span>
      <span class="indicator-slider"></span>
    </div>
    <div class="container__title-and-subtitle-flex">
      <h1 class="container__title">
        Simply Unique<span class="container__title-span">/</span
        ><br class="container__title-br-from1920px" />
        Simply Better<span class="container__title-span">.</span>
      </h1>
      <h2 class="container__subtitle">
        <span class="container__subtitle-span">3legant</span> is a gift &
        decorations store based in HCMC, Vietnam. Est since 2019.
      </h2>
    </div>
    <section class="container__sections-grid-area">
      <div class="container__section-card container__section-card--big">
        <span class="container__section-card-title">Living Room</span>
        <button class="container__section-card-shop-now-btn">
          Shop Now
          <img src="imgs/arrow-right-black.svg" alt="" />
        </button>
        <img
          class="container__section-card-hero"
          src="imgs/section-card-1.svg"
          alt=""
        />
      </div>
      <div class="container__section-card container__section-card--small-1">
        <span class="container__section-card-title">Bedroom</span>
        <button class="container__section-card-shop-now-btn">
          Shop Now
          <img src="imgs/arrow-right-black.svg" alt="" />
        </button>
        <img
          class="container__section-card-hero"
          src="imgs/section-card-2.svg"
          alt=""
        />
      </div>
      <div class="container__section-card container__section-card--small-2">
        <span class="container__section-card-title">Kitchen</span>
        <button class="container__section-card-shop-now-btn">
          Shop Now
          <img src="imgs/arrow-right-black.svg" alt="" />
        </button>
        <img
          class="container__section-card-hero"
          src="imgs/section-card-3.svg"
          alt=""
        />
      </div>
    </section>
    <section class="container__new-arrivals">
      <div class="container__new-arrivals-title-and-more-products-btn-flex">
        <h2 class="container__new-arrivals-title">New Arrivals</h2>
        <button class="container__new-arrivals-more-products-btn">
          More Products
          <img src="imgs/arrow-right-black.svg" alt="" />
        </button>
      </div>
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
            <span class="container__new-arrivals-card-title"
              >Loveseat Sofa</span
            >
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
            <span class="container__new-arrivals-card-title"
              >Bamboo basket</span
            >
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
    </section>
    <section class="container__advantages">
      <div class="container__advantage-cards-flex">
        <div class="container__advantage-card">
          <div class="container__advantage-card-icon-and-titles-flex">
            <img
              class="container__advantage-card-icon"
              src="imgs/advantage-fast-delivery-icon.svg"
              alt=""
            />
            <div class="container__advantage-card-titles-flex">
              <span class="container__advantage-card-title">Free Shipping</span>
              <span class="container__advantage-card-subtitle"
                >Order above $200</span
              >
            </div>
          </div>
        </div>
        <div class="container__advantage-card">
          <div class="container__advantage-card-icon-and-titles-flex">
            <img src="imgs/advantage-money-back-icon.svg" alt="" />
            <div class="container__advantage-card-titles-flex">
              <span class="container__advantage-card-title">Money-back </span>
              <span class="container__advantage-card-subtitle"
                >30 days guarantee</span
              >
            </div>
          </div>
        </div>
        <div class="container__advantage-card">
          <div class="container__advantage-card-icon-and-titles-flex">
            <img src="imgs/advantage-lock-icon.svg" alt="" />
            <div class="container__advantage-card-titles-flex">
              <span class="container__advantage-card-title"
                >Secure Payments
              </span>
              <span class="container__advantage-card-subtitle"
                >Secured by Stripe</span
              >
            </div>
          </div>
        </div>
        <div class="container__advantage-card">
          <div class="container__advantage-card-icon-and-titles-flex">
            <img src="imgs/advantage-call-icon.svg" alt="" />
            <div class="container__advantage-card-titles-flex">
              <span class="container__advantage-card-title">24/7 Support</span>
              <span class="container__advantage-card-subtitle"
                >Phone and Email support</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container__sales">
      <img src="imgs/sales-hero.svg" alt="" class="container__sales-hero" />
      <div class="container__sales-desctiption">
        <div class="container__sales-desctiption-titles-and-text-flex">
          <span class="container__sales-desctiption-title"
            >SALE UP TO 35% OFF</span
          >
          <span class="container__sales-desctiption-subtitle"
            >HUNDREDS of New lower prices!</span
          >
          <span class="container__sales-desctiption-text"
            >It’s more affordable than ever to give every room in your home a
            stylish makeover</span
          >
        </div>
        <button class="container__sales-desctiption-shop-now-btn">
          Shop Now <img src="imgs/arrow-right-black.svg" alt="" />
        </button>
      </div>
    </section>
    <section class="container__articles">
      <div class="container__articles-title-and-more-articles-btn-flex">
        <h2 class="container__articles-title">Articles</h2>
        <button class="container__articles-more-articles-btn">
          More Articles <img src="imgs/arrow-right-black.svg" alt="" />
        </button>
      </div>
      <div class="container__article-cards-flex">
        <div class="container__article-card">
          <div class="container__article-card-hero-and-title-and-btn-flex">
            <img
              src="imgs/article-hero-1.svg"
              alt=""
              class="container__article-card-hero"
            />
            <div class="container__article-card-title-and-flex">
              <span class="container__article-card-title"
                >7 ways to decor your home</span
              >
              <button class="container__article-card-btn">
                Read More <img src="imgs/arrow-right-black.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="container__article-card">
          <div class="container__article-card-hero-and-title-and-btn-flex">
            <img
              src="imgs/article-hero-2.svg"
              alt=""
              class="container__article-card-hero"
            />
            <div class="container__article-card-title-and-flex">
              <span class="container__article-card-title"
                >Kitchen organization</span
              >
              <button class="container__article-card-btn">
                Read More <img src="imgs/arrow-right-black.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="container__article-card">
          <div class="container__article-card-hero-and-title-and-btn-flex">
            <img
              src="imgs/article-hero-3.svg"
              alt=""
              class="container__article-card-hero"
            />
            <div class="container__article-card-title-and-flex">
              <span class="container__article-card-title"
                >Decor your bedroom</span
              >
              <button class="container__article-card-btn">
                Read More <img src="imgs/arrow-right-black.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NewsLetter></NewsLetter>
  </div>
</template>

<script>
import NewsLetter from "../UI/NewsLetter.vue";
export default {
  name: "HomePage",
  components: { NewsLetter },
  data() {
    return {
      WhishListIconDisabled: "/imgs/whishlist-icon.svg",
      WhishListIconActivated: "/imgs/whishlist-icon-activated.svg",
      currentIcon: "/imgs/whishlist-icon.svg",
    };
  },
  mounted() {
    let slider = document.querySelector(
        ".container__slider-advertises-overflow"
      ),
      sliderContainer = document.querySelector(
        ".container__slider-advertises-flex"
      ),
      slides = document.querySelectorAll(".container__slider-advertise-slide");
    if (window.innerWidth < 1024) {
      slides = document.querySelectorAll(
        ".container__slider-advertise-slide-from320px:not([style*='display: none'])"
      );
    } else {
      slides = document.querySelectorAll(
        ".container__slider-advertise-slide-from1024px:not([style*='display: none'])"
      );
    }
    if (window.innerWidth < 1440) {
      /* touchscreen for .slider__advertises-overflow starts */
      let slideWidth = slides[0].offsetWidth;
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
        const indicators = document.querySelectorAll(".indicator-slider");
        function showIndicator(index) {
          indicators.forEach((indicator, i) => {
            if (i === index) {
              indicator.classList.add("active");
            } else {
              indicator.classList.remove("active");
            }
          });
        }
        showIndicator(currentIndex);
      }
      /* touchscreen for .slider__advertises-overflow ends */
      if (window.innerWidth < 1440) {
        /* The appearance of .slider__advertises-touch-circle from 320px to 1440px starts */
        let advertise_circle = document.querySelector(
          ".container__advertises-touch-circle"
        );
        slider.addEventListener("touchstart", function (e) {
          let slider_backIdeas = slider.getBoundingClientRect();
          let x = e.touches[0].clientX - slider_backIdeas.left + 17;
          let y = e.touches[0].clientY - slider_backIdeas.top + 81;
          advertise_circle.style.left = x + "px";
          advertise_circle.style.top = y + "px";
          advertise_circle.style.transform = "scale(1)";
          advertise_circle.style.display = "block";

          setTimeout(function () {
            advertise_circle.style.transform = "scale(2)"; // Увеличиваем размер круга
            advertise_circle.style.opacity = "80%"; // Устанавливаем прозрачность круга
          }, 10);
        });
        slider.addEventListener("touchmove", function (e) {
          let slider_backIdeas = slider.getBoundingClientRect();
          let x = e.touches[0].clientX - slider_backIdeas.left + 17;
          let y = e.touches[0].clientY - slider_backIdeas.top + 81;
          advertise_circle.style.left = x + "px";
          advertise_circle.style.top = y + "px";
          advertise_circle.style.transform = "scale(1)";
        });
        slider.addEventListener("touchend", function () {
          advertise_circle.style.transform = "scale(0.9)";
          advertise_circle.style.display = "none";
        });
        /* The appearance of .slider__advertises-touch-circle from 320px to 1440px ends */
      }
    } else {
      /* carousel for .container__slider-advertises-flex from 1440px starts */
      const prevButton = document.querySelector(
          ".container__slider-advertise-prev-btn"
        ),
        nextButton = document.querySelector(
          ".container__slider-advertise-next-btn"
        ),
        carouselContainer = document.querySelector(
          ".container__slider-advertises-flex"
        );
      let currentPosition = 0,
        currentIndex = 0;

      function updateSlider(direction) {
        if (direction === "prev") {
          currentIndex--;
          currentPosition += 100;
          if (currentIndex < 0) {
            currentIndex = slides.length - 1;
            currentPosition = -100 * (slides.length - 1);
          }
        } else {
          currentIndex++;
          currentPosition -= 100;
          if (currentIndex === slides.length) {
            currentIndex = 0;
            currentPosition = 0;
          }
        }
        carouselContainer.style.transform = `translateX(${currentPosition}%)`;
        updateIndicators();
      }

      function updateIndicators() {
        const indicators = document.querySelectorAll(".indicator-slider");
        indicators.forEach((indicator, i) => {
          if (i === currentIndex) {
            indicator.classList.add("active");
          } else {
            indicator.classList.remove("active");
          }
        });
      }

      prevButton.addEventListener("click", () => {
        updateSlider("prev");
      });

      nextButton.addEventListener("click", () => {
        updateSlider("next");
      });
      /* carousel for .container__slider-advertises-flex from 1440px ends */
    }
  },
  methods: {
    toggleIconWishList() {
      if (this.currentIcon === this.favouriteIconDisabled) {
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 0rem 2rem;
}
.container__slider-advertises-overflow {
  overflow: hidden;
}
.container__slider-advertises-flex {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.container__slider-advertise-slide-from1024px {
  display: none;
}
.container__slider-advertise-slide {
  flex-shrink: 0;
  width: 100%;
}
.container__advertises-touch-circle {
  display: none;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1a1a25;
  transform: scale(0);
  transition: transform 0.2s ease-out;
  z-index: 2;
}
.indicators-flex-slider {
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: -1rem;
  width: 100%;
  left: 0rem;
}
.indicator-slider {
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
}
.indicator-slider.active {
  width: 30px;
}
.container__slider-advertise-prev-btn,
.container__slider-advertise-next-btn {
  display: none;
}
.container__title {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: $black;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.container__title-span {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: #6c7275;
}
.container__title-br-from1920px {
  display: none;
}
.container__subtitle {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
  margin: 0rem;
}
.container__subtitle-span {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #343839;
}
.container__section-card--big {
  grid-area: big-card;
}
.container__section-card--small-1 {
  grid-area: small-card-1;
}
.container__section-card--small-2 {
  grid-area: small-card-2;
}
.container__sections-grid-area {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, auto);
  grid-template-areas:
    "big-card"
    "small-card-1"
    "small-card-2";
  gap: 1rem;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
}
.container__section-card {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.container__section-card-title {
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: $black;
  margin-left: 2rem;
  margin-top: 2rem;
}
.container__section-card-shop-now-btn {
  position: absolute;
  @include button;
  gap: 0.25rem;
  margin-left: 2rem;
  margin-top: 4.63rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: $black;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
}
.container__section-card-hero {
  margin-top: 0rem;
  width: 100%;
}
.container__new-arrivals-title-and-more-products-btn-flex {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
//
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
.container__new-arrivals-cards-flex {
  display: flex;
  gap: 1rem;
  overflow: hidden;
  overflow-x: scroll;
  height: 400px;
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
.container__advantages {
  margin-top: 4rem;
  margin-bottom: 3rem;
}
.container__advantage-cards-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.container__advantage-card {
  background: #f3f5f7;
  padding: 2rem 1rem;
  height: 198px;
  width: 48.44%;
}
.container__advantage-card-icon-and-titles-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__advantage-card-icon-and-titles-flex img {
  width: 48px;
  height: 48px;
}
.container__advantage-card-titles-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__advantage-card-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__advantage-card-subtitle {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
}
.container__sales {
  margin-bottom: 2.5rem;
}
.container__sales-hero {
  display: block;
  position: relative;
  left: -2rem;
  width: calc(100% + 4rem);
}
.container__sales-desctiption {
  position: relative;
  left: -2rem;
  width: calc(100% + 4rem);
  background: #f3f5f7;
  padding: 3.66rem 2rem;
  margin-top: -0.3rem;
}
.container__sales-desctiption-titles-and-text-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__sales-desctiption-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #377dff;
}
.container__sales-desctiption-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 2.125rem;
  font-weight: 500;
  color: $black;
}
.container__sales-desctiption-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: $black;
}
.container__sales-desctiption-shop-now-btn {
  @include button;
  margin-top: 1.5rem;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
}
.container__articles {
  margin-bottom: 2.5rem;
}
.container__articles-title-and-more-articles-btn-flex {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 2.5rem;
}
.container__articles-title {
  font-family: "Poppins", sans-serif;
  font-size: 2.125rem;
  font-weight: 500;
  color: #000;
  margin: 0rem;
}
.container__articles-more-articles-btn {
  @include button;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
}
.container__article-cards-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.container__article-card-hero-and-title-and-btn-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__article-card-hero {
  width: 100%;
}
.container__article-card-title-and-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__article-card-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #23262f;
}
.container__article-card-btn {
  @include button;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
}
/* 375px = 23.438em */
@media (min-width: 23.43em) {
  .container__title,
  .container__title-span {
    font-size: 2.5rem;
  }
  .container__subtitle,
  .container__subtitle-span {
    font-size: 0.75rem;
  }
  .container__section-card-title {
    font-size: 1.75rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0rem 2.5rem;
  }
  .container__slider-advertises-flex {
    height: 536px;
  }
  .container__slider-advertise-slide {
    object-fit: cover;
  }
  .indicators-flex-slider {
    margin-top: -2rem;
  }
  .container__title-and-subtitle-flex {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .container__sections-grid-area {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "big-card small-card-1"
      "big-card small-card-2";
    gap: 1.5rem;
  }
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
  .container__advantage-cards-flex {
    flex-wrap: nowrap;
    gap: 1rem;
  }
  .container__sales-hero,
  .container__sales-desctiption {
    left: -2.5rem;
    width: calc(100% + 5rem);
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__slider-advertise-slide-from320px {
    display: none;
  }
  .container__slider-advertise-slide-from1024px {
    display: block;
  }
  .container__title,
  .container__title-span {
    font-size: 4.5rem;
  }
  .container__subtitle,
  .container__subtitle-span {
    font-size: 1rem;
  }
  .container__section-card-title {
    font-size: 2.125rem;
  }
  .container__section-card-shop-now-btn {
    font-size: 1rem;
    margin-top: 5.6rem;
  }
  .container__advantage-cards-flex {
    gap: 1.5rem;
  }
  .container__advantage-card {
    padding: 3rem 2rem;
  }
  .container__sales {
    position: relative;
    display: flex;
  }
  .container__sales-hero {
    margin-right: -5rem;
  }
  .container__sales-desctiption {
    left: 2.5rem;
    margin-right: 0rem;
    margin-top: 0rem;
    padding: 5rem 10rem 2rem 4.5rem;
  }
  .container__article-cards-flex {
    flex-direction: row;
  }
  .container__article-card {
    width: 100%;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem 10rem;
  }
  .container__slider-advertise-prev-btn,
  .container__slider-advertise-next-btn {
    display: block;
    @include button;
  }
  .container__slider-advertise-prev-btn {
    position: absolute;
    margin-top: -19rem;
    margin-left: 1.7rem;
  }
  .container__slider-advertise-next-btn {
    position: absolute;
    margin-top: -19rem;
    right: 11.7rem;
  }
  .container__sales-hero {
    margin-right: 0rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: 532px;
    object-fit: cover;
  }
  .container__sales-desctiption {
    left: -10rem;
    width: calc(100% + 20rem);
    margin-right: -20rem;
    height: 532px;
    padding: 5rem 0rem 2rem 4.5rem;
  }
  .container__sales-desctiption-titles-and-text-flex {
    padding-right: 15rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0rem 15.938rem;
  }
  .container__slider-advertises-flex {
    height: 700px;
  }
  .container__slider-advertise-prev-btn {
    position: absolute;
    margin-top: -24rem;
    margin-left: 1.7rem;
  }
  .container__slider-advertise-next-btn {
    position: absolute;
    margin-top: -24rem;
    right: 17.638rem;
  }
  .container__title-and-subtitle-flex {
    justify-content: space-between;
  }
  .container__title-br-from1920px {
    display: block;
  }
  .container__subtitle,
  .container__subtitle-span {
    font-size: 1.125rem;
  }
  .container__sales-hero {
    left: -15.938rem;
    width: calc(100% + 31.876rem);
  }
  .container__sales-desctiption {
    left: -15.938rem;
    width: calc(100% + 31.876rem);
    margin-right: -31.876rem;
  }
  .container__sales-desctiption-titles-and-text-flex {
    padding-right: 35rem;
  }
}
</style>
