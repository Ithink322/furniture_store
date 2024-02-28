<template>
  <div class="container">
    <img
      src="imgs/shop-page-hero-from320px.svg"
      alt=""
      class="container__hero-from320px"
    />
    <img
      src="imgs/shop-page-hero-from1024px.svg"
      alt=""
      class="container__hero-from1024px"
    />
    <span class="container__title">Shop Page</span>
    <span class="container__text"
      >Let’s design the place you<br class="container__text-br" />
      always imagined.</span
    >
    <nav class="container__nav">
      <div class="dropdown-title-and-dropdown-flex">
        <span class="dropdown-title">CATEGORIES</span>
        <div class="dropdown">
          <button class="dropdown__button">
            <span class="dropdown__button-text">All rooms</span>
            <img
              class="dropdown__button-arrow"
              src="imgs/dropdown-arrow.svg"
              alt=""
            />
          </button>
          <ul class="dropdown__list">
            <li
              class="dropdown__list-item"
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              @click="filterCategories(option.value)"
            >
              {{ option.value }}
            </li>
          </ul>
        </div>
      </div>
      <div class="container__selected-category">{{ selectedCategory }}</div>
      <div class="container__filter-btn-and-grid-cols-btns-and-sort-btns-flex">
        <div class="container__filter-btn-and-grid-cols-btns-flex">
          <button class="container__filter-btn">
            <img
              src="imgs/filter-icon.svg"
              alt=""
              class="container__filter-btn-icon"
            />
            Filter
          </button>
          <div class="container__grid-cols-btns-flex">
            <button
              @click="changeStylesForShopCard(btn3cols)"
              class="container__grid-3-cols-btn container__grid-cols-btn"
              style="background: #e8ecef"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1.5 3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H6C6.39782 1.5 6.77936 1.65804 7.06066 1.93934C7.34196 2.22064 7.5 2.60218 7.5 3V6C7.5 6.39782 7.34196 6.77936 7.06066 7.06066C6.77936 7.34196 6.39782 7.5 6 7.5H3C2.60218 7.5 2.22064 7.34196 1.93934 7.06066C1.65804 6.77936 1.5 6.39782 1.5 6V3ZM9 3C9 2.60218 9.15804 2.22064 9.43934 1.93934C9.72064 1.65804 10.1022 1.5 10.5 1.5H13.5C13.8978 1.5 14.2794 1.65804 14.5607 1.93934C14.842 2.22064 15 2.60218 15 3V6C15 6.39782 14.842 6.77936 14.5607 7.06066C14.2794 7.34196 13.8978 7.5 13.5 7.5H10.5C10.1022 7.5 9.72064 7.34196 9.43934 7.06066C9.15804 6.77936 9 6.39782 9 6V3ZM16.5 3C16.5 2.60218 16.658 2.22064 16.9393 1.93934C17.2206 1.65804 17.6022 1.5 18 1.5H21C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V6C22.5 6.39782 22.342 6.77936 22.0607 7.06066C21.7794 7.34196 21.3978 7.5 21 7.5H18C17.6022 7.5 17.2206 7.34196 16.9393 7.06066C16.658 6.77936 16.5 6.39782 16.5 6V3ZM1.5 10.5C1.5 10.1022 1.65804 9.72064 1.93934 9.43934C2.22064 9.15804 2.60218 9 3 9H6C6.39782 9 6.77936 9.15804 7.06066 9.43934C7.34196 9.72064 7.5 10.1022 7.5 10.5V13.5C7.5 13.8978 7.34196 14.2794 7.06066 14.5607C6.77936 14.842 6.39782 15 6 15H3C2.60218 15 2.22064 14.842 1.93934 14.5607C1.65804 14.2794 1.5 13.8978 1.5 13.5V10.5ZM9 10.5C9 10.1022 9.15804 9.72064 9.43934 9.43934C9.72064 9.15804 10.1022 9 10.5 9H13.5C13.8978 9 14.2794 9.15804 14.5607 9.43934C14.842 9.72064 15 10.1022 15 10.5V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H10.5C10.1022 15 9.72064 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V10.5ZM16.5 10.5C16.5 10.1022 16.658 9.72064 16.9393 9.43934C17.2206 9.15804 17.6022 9 18 9H21C21.3978 9 21.7794 9.15804 22.0607 9.43934C22.342 9.72064 22.5 10.1022 22.5 10.5V13.5C22.5 13.8978 22.342 14.2794 22.0607 14.5607C21.7794 14.842 21.3978 15 21 15H18C17.6022 15 17.2206 14.842 16.9393 14.5607C16.658 14.2794 16.5 13.8978 16.5 13.5V10.5ZM1.5 18C1.5 17.6022 1.65804 17.2206 1.93934 16.9393C2.22064 16.658 2.60218 16.5 3 16.5H6C6.39782 16.5 6.77936 16.658 7.06066 16.9393C7.34196 17.2206 7.5 17.6022 7.5 18V21C7.5 21.3978 7.34196 21.7794 7.06066 22.0607C6.77936 22.342 6.39782 22.5 6 22.5H3C2.60218 22.5 2.22064 22.342 1.93934 22.0607C1.65804 21.7794 1.5 21.3978 1.5 21V18ZM9 18C9 17.6022 9.15804 17.2206 9.43934 16.9393C9.72064 16.658 10.1022 16.5 10.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V21C15 21.3978 14.842 21.7794 14.5607 22.0607C14.2794 22.342 13.8978 22.5 13.5 22.5H10.5C10.1022 22.5 9.72064 22.342 9.43934 22.0607C9.15804 21.7794 9 21.3978 9 21V18ZM16.5 18C16.5 17.6022 16.658 17.2206 16.9393 16.9393C17.2206 16.658 17.6022 16.5 18 16.5H21C21.3978 16.5 21.7794 16.658 22.0607 16.9393C22.342 17.2206 22.5 17.6022 22.5 18V21C22.5 21.3978 22.342 21.7794 22.0607 22.0607C21.7794 22.342 21.3978 22.5 21 22.5H18C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21V18Z"
                  id="icon"
                  fill="#141718"
                />
              </svg>
            </button>
            <button
              @click="changeStylesForShopCard(btn2cols)"
              class="container__grid-2-cols-btn container__grid-cols-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.159C10.7629 14.581 11 15.1533 11 15.75V19.25C11 19.8467 10.7629 20.419 10.341 20.841C9.91903 21.2629 9.34674 21.5 8.75 21.5H5.25C4.65326 21.5 4.08097 21.2629 3.65901 20.841C3.23705 20.419 3 19.8467 3 19.25V15.75C3 15.1533 3.23705 14.581 3.65901 14.159C4.08097 13.7371 4.65326 13.5 5.25 13.5H8.75ZM18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.159C20.7629 14.581 21 15.1533 21 15.75V19.25C21 19.8467 20.7629 20.419 20.341 20.841C19.919 21.2629 19.3467 21.5 18.75 21.5H15.25C14.6533 21.5 14.081 21.2629 13.659 20.841C13.2371 20.419 13 19.8467 13 19.25V15.75C13 15.1533 13.2371 14.581 13.659 14.159C14.081 13.7371 14.6533 13.5 15.25 13.5H18.75ZM8.75 3.5C9.34674 3.5 9.91903 3.73705 10.341 4.15901C10.7629 4.58097 11 5.15326 11 5.75V9.25C11 9.84674 10.7629 10.419 10.341 10.841C9.91903 11.2629 9.34674 11.5 8.75 11.5H5.25C4.65326 11.5 4.08097 11.2629 3.65901 10.841C3.23705 10.419 3 9.84674 3 9.25V5.75C3 5.15326 3.23705 4.58097 3.65901 4.15901C4.08097 3.73705 4.65326 3.5 5.25 3.5H8.75ZM18.75 3.5C19.3467 3.5 19.919 3.73705 20.341 4.15901C20.7629 4.58097 21 5.15326 21 5.75V9.25C21 9.84674 20.7629 10.419 20.341 10.841C19.919 11.2629 19.3467 11.5 18.75 11.5H15.25C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25V5.75C13 5.15326 13.2371 4.58097 13.659 4.15901C14.081 3.73705 14.6533 3.5 15.25 3.5H18.75Z"
                  id="icon"
                  fill="#6C7275"
                />
              </svg>
            </button>
            <button
              @click="changeStylesForShopCard(btn1col)"
              class="container__grid-1-col-btn container__grid-cols-btn"
              style="background: #e8ecef"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12.9999 15.75C12.9999 15.1533 13.237 14.581 13.659 14.159C14.0809 13.7371 14.6532 13.5 15.2499 13.5L18.7499 13.5C19.3467 13.5 19.919 13.7371 20.3409 14.159C20.7629 14.581 20.9999 15.1533 20.9999 15.75L20.9999 19.25C20.9999 19.8467 20.7629 20.419 20.3409 20.841C19.919 21.2629 19.3467 21.5 18.7499 21.5L15.2499 21.5C14.6532 21.5 14.0809 21.2629 13.659 20.841C13.237 20.419 12.9999 19.8467 12.9999 19.25L12.9999 15.75ZM12.9999 5.75C12.9999 5.15326 13.237 4.58097 13.6589 4.15901C14.0809 3.73705 14.6532 3.5 15.2499 3.5L18.7499 3.5C19.3467 3.5 19.919 3.73705 20.3409 4.15901C20.7629 4.58097 20.9999 5.15326 20.9999 5.75L20.9999 9.25C20.9999 9.84674 20.7629 10.419 20.3409 10.841C19.919 11.2629 19.3467 11.5 18.7499 11.5L15.2499 11.5C14.6532 11.5 14.0809 11.2629 13.6589 10.841C13.237 10.419 12.9999 9.84674 12.9999 9.25L12.9999 5.75ZM2.99994 15.75C2.99994 15.1533 3.23699 14.581 3.65895 14.159C4.08091 13.7371 4.6532 13.5 5.24994 13.5L8.74994 13.5C9.34668 13.5 9.91897 13.7371 10.3409 14.159C10.7629 14.581 10.9999 15.1533 10.9999 15.75L10.9999 19.25C10.9999 19.8467 10.7629 20.419 10.3409 20.841C9.91897 21.2629 9.34668 21.5 8.74994 21.5L5.24994 21.5C4.6532 21.5 4.08091 21.2629 3.65895 20.841C3.23699 20.419 2.99994 19.8467 2.99994 19.25L2.99994 15.75ZM2.99994 5.75C2.99994 5.15326 3.23699 4.58097 3.65895 4.15901C4.08091 3.73705 4.6532 3.5 5.24994 3.5L8.74994 3.5C9.34668 3.5 9.91897 3.73705 10.3409 4.15901C10.7629 4.58097 10.9999 5.15326 10.9999 5.75L10.9999 9.25C10.9999 9.84674 10.7629 10.419 10.3409 10.841C9.91897 11.2629 9.34668 11.5 8.74994 11.5L5.24994 11.5C4.6532 11.5 4.08091 11.2629 3.65895 10.841C3.23699 10.419 2.99994 9.84674 2.99994 9.25L2.99994 5.75Z"
                  id="icon"
                  fill="#141718"
                />
                <path
                  d="M5.99994 21.5L5.99994 13.502L17.9999 13.502L17.9999 21.5L5.99994 21.5Z"
                  id="icon"
                  fill="#141718"
                />
                <path
                  d="M5.99994 11.498L5.99994 3.5L17.9999 3.5L17.9999 11.498L5.99994 11.498Z"
                  id="icon"
                  fill="#141718"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="container__sort-by-price-and-sort-by-rating-flex">
          <button
            @click="sortByPriceMinMax"
            class="container__sort-by-price-btn"
          >
            Sort by price
            <img
              class="container__sort-by-price-icon"
              src="imgs/sort-arrow.svg"
              alt=""
            />
          </button>
          <button
            @click="sortByRatingMinMax"
            class="container__sort-by-rating-btn"
          >
            Sort by<br
              class="container__sort-by-rating-btn-br-from320px-to375px"
            />
            rating
            <img
              class="container__sort-by-rating-icon"
              src="imgs/sort-arrow.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
    <prices-slider ref="pricesSlider"></prices-slider>
    <button @click="applyFilters" class="container__apply-filters-btn">
      Применить
    </button>
    <shop-list :sortedItems="sortedItems"></shop-list>
    <div
      v-if="this.sortedItems.length === 0"
      class="container__show-this-div-if-sorted-items-is-empty"
    ></div>
    <button @click="loadMoreProducts" class="container__show-more-btn">
      Show more
    </button>
    <div class="container__show-more-text-loading" v-show="isProductLoading">
      Идёт загрузка...
    </div>
    <news-letter></news-letter>
  </div>
</template>

<script>
import axios from "axios";
import dropDownScript from "@/mixins/dropDownScript.js";
import columnsBtns from "@/mixins/columnsBtns.js";
import PricesSlider from "../UI/PricesSlider.vue";
import ShopList from "../UI/ShopList.vue";
import NewsLetter from "../UI/NewsLetter.vue";
export default {
  name: "ShopPage",
  components: { PricesSlider, ShopList, NewsLetter },
  data() {
    return {
      btn3cols: "btn3cols",
      btn2cols: "btn2cols",
      btn1col: "btn1col",
      options: [
        { value: "All rooms" },
        { value: "Living Room" },
        { value: "Bedroom" },
        { value: "Bathroom" },
        { value: "Dinning" },
        { value: "Outdoor" },
        { value: "Kitchen" },
      ],
      selectedCategory: "All rooms",
      sortedItems: [
        {
          id: 1,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 2,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 3,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 4,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 5,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 6,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 7,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 8,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 9,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 10,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 11,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 12,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
      ],
      items: [
        {
          id: 13,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 14,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 15,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 16,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 17,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 18,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 19,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 20,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 21,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 22,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 23,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 24,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 25,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 26,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 27,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 28,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 29,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 30,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 31,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 32,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 33,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 34,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 35,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 36,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 37,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 38,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 39,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 40,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 41,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 42,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 43,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 44,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 45,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 46,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 47,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 48,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 49,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 50,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 51,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 52,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 53,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 54,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 55,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 56,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 57,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 58,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 59,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 60,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 61,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 62,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 63,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 64,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 65,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 66,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 67,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 68,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 69,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 70,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 71,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 72,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 73,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 74,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 75,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 76,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 77,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 78,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 79,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 80,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 81,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 82,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 83,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 84,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 85,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 86,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 87,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 88,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 89,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 90,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 91,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 92,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 93,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 94,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 95,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 96,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 97,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 98,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 99,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 100,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 101,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 102,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 103,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 104,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 105,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 106,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 107,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 108,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 109,
          hero: "imgs/shop-card-hero-1.svg",
          title: "Loveseat Sofa",
          currentPrice: "$199.00",
          previousPrice: "$400.00",
          description:
            "A comfortable and stylish armchair designed for one person, perfect for relaxation and adding a touch of elegance to any room.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 110,
          hero: "imgs/shop-card-hero-2.svg",
          title: "Luxury Sofa",
          currentPrice: "$299.00",
          previousPrice: "$500.00",
          description:
            "A modern armchair with sturdy legs, providing stability and support while offering a contemporary design element to your living space.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 111,
          hero: "imgs/shop-card-hero-3.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A functional lamp designed for illuminating your workspace, providing focused light for reading, studying, or working on your computer.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 112,
          hero: "imgs/shop-card-hero-4.svg",
          title: "Cozy Sofa",
          currentPrice: "$299.00",
          previousPrice: "$600.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Dinning",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 113,
          hero: "imgs/shop-card-hero-5.svg",
          title: "White Drawer unit",
          currentPrice: "$89.99",
          previousPrice: "$180.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 114,
          hero: "imgs/shop-card-hero-6.svg",
          title: "Black Tray table",
          currentPrice: "$19.99",
          previousPrice: "$40.00",
          description:
            "A versatile and convenient table with a removable tray top, ideal for serving food and drinks, or as a portable surface for working or dining.",
          category: "Living Room",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 115,
          hero: "imgs/shop-card-hero-7.svg",
          title: "Table Lamp",
          currentPrice: "$19.00",
          previousPrice: "$40.00",
          description:
            "A stylish and versatile lighting solution, featuring a tall stand with sturdy legs, providing ample illumination and adding a touch of elegance to any room.",
          category: "Outdoor",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 116,
          hero: "imgs/shop-card-hero-8.svg",
          title: "Black Brow Side table",
          currentPrice: "$16.99",
          previousPrice: "$34.00",
          description:
            "A sleek and sophisticated table with a black finish, perfect for adding a modern and minimalist aesthetic to your Living Room or office.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 117,
          hero: "imgs/shop-card-hero-9.svg",
          title: "Light Beige Pillow",
          currentPrice: "$3.99",
          previousPrice: "$8.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 118,
          hero: "imgs/shop-card-hero-10.svg",
          title: "Table Lamp",
          currentPrice: "$39.99",
          previousPrice: "$80.00",
          description:
            "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
          category: "Bathroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 119,
          hero: "imgs/shop-card-hero-11.svg",
          title: "Bamboo Basket",
          currentPrice: "$9.99",
          previousPrice: "$20.00",
          description:
            "A durable and eco-friendly basket made from bamboo, ideal for storing and organizing various items while adding a natural and rustic touch to your space.",
          category: "Kitchen",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
        {
          id: 120,
          hero: "imgs/shop-card-hero-12.svg",
          title: "Off-white Pillow",
          currentPrice: "$7.99",
          previousPrice: "$16.00",
          description:
            "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
          category: "Bedroom",
          measurements: "17 1/2x20 5/8 ",
          startColor: "Black",
          colors: ["black", "white", "red", "beige"],
          averageRating: 0,
        },
      ],
      isProductLoading: false,
      productsPerPage: 12,
      page: 1,
      sortState: false,
      ratingSortState: false,
      originalItemsPriceSort: [],
      reviews: [],
    };
  },
  mixins: [dropDownScript, columnsBtns],
  computed: {
    sortedItems() {
      if (!this.selectedCategory || this.selectedCategory === "All rooms") {
        this.changeStylesForShopCard();
        return this.sortedItems;
      } else {
        this.changeStylesForShopCard();
        return this.sortedItems.filter(
          (item) => item.category === this.selectedCategory
        );
      }
    },
    getAverageRating() {
      return (item) => {
        const itemReviews = this.reviews.filter(
          (review) => review.productId === item.id
        );
        if (itemReviews.length === 0) {
          return 0;
        } else {
          const totalRating = itemReviews.reduce(
            (acc, review) => acc + review.selectedRating,
            0
          );
          return totalRating / itemReviews.length;
        }
      };
    },
  },
  methods: {
    fetchReviews() {
      this.sortedItems.forEach((item) => {
        axios
          .get(`http://localhost:5000/reviews/collect?productId=${item.id}`)
          .then((response) => {
            this.reviews = response.data;
            item.rating = this.getAverageRating(item);
          })
          .catch((e) => {
            console.error("Error fetching reviews:", e);
          });
      });
    },
    filterCategories(Category) {
      this.selectedCategory = Category;
    },
    async loadMoreProducts() {
      this.isProductLoading = true;
      const startIndex = (this.page - 1) * this.productsPerPage,
        endIndex = this.page * this.productsPerPage;
      const moreProducts = await new Promise((resolve) =>
        setTimeout(() => resolve(this.items.slice(startIndex, endIndex)), 1000)
      );
      this.page++;
      this.sortedItems = [...this.sortedItems, ...moreProducts];
      this.isProductLoading = false;
      this.originalItemsPriceSort = [
        ...this.originalItemsPriceSort,
        ...moreProducts,
      ];
      this.changeStylesForShopCard();
    },
    changeStylesForShopCard(button) {
      this.$nextTick(() => {
        let grid = document.getElementById("list-grid"),
          description = document.querySelectorAll(
            ".container__item-card-description"
          ),
          textsFlex = document.querySelectorAll(
            ".container__item-card-new-and-sale-divs-flex"
          ),
          wishListBtn = document.querySelectorAll(
            ".container__item-card-wishlist-btn"
          );
        if (button === "btn3cols") {
          grid.classList.remove("container__items-list-grid-2-cols");
          grid.classList.remove("container__items-list-grid-1-col");
          grid.classList.add("container__items-list-grid-3-cols");
          textsFlex.forEach((el) => (el.style.display = "flex"));
          wishListBtn.forEach((el) =>
            el.classList.add(
              "container__item-card-styles-for-wishlist-btn-in-2-cols-grid"
            )
          );
          description.forEach((el) => (el.style.display = "none"));
        } else if (button === "btn2cols") {
          grid.classList.remove("container__items-list-grid-3-cols");
          grid.classList.remove("container__items-list-grid-1-col");
          grid.classList.add("container__items-list-grid-2-cols");
          textsFlex.forEach((el) => (el.style.display = "none"));
          wishListBtn.forEach((el) =>
            el.classList.add(
              "container__item-card-styles-for-wishlist-btn-in-2-cols-grid"
            )
          );
          description.forEach((el) => (el.style.display = "none"));
        } else if (button === "btn1col") {
          grid.classList.remove("container__items-list-grid-3-cols");
          grid.classList.remove("container__items-list-grid-2-cols");
          grid.classList.add("container__items-list-grid-1-col");
          textsFlex.forEach((el) => (el.style.display = "flex"));
          wishListBtn.forEach((el) =>
            el.classList.remove(
              "container__item-card-styles-for-wishlist-btn-in-2-cols-grid"
            )
          );
          description.forEach((el) => (el.style.display = "block"));
        }
        if (grid.classList.contains("container__items-list-grid-1-col")) {
          textsFlex.forEach((el) => (el.style.display = "flex"));
          wishListBtn.forEach((el) =>
            el.classList.remove(
              "container__item-card-styles-for-wishlist-btn-in-2-cols-grid"
            )
          );
          description.forEach((el) => (el.style.display = "block"));
        } else if (
          grid.classList.contains("container__items-list-grid-2-cols")
        ) {
          textsFlex.forEach((el) => (el.style.display = "none"));
          wishListBtn.forEach((el) =>
            el.classList.add(
              "container__item-card-styles-for-wishlist-btn-in-2-cols-grid"
            )
          );
          description.forEach((el) => (el.style.display = "none"));
        } else if (
          grid.classList.contains("container__items-list-grid-3-cols")
        ) {
          textsFlex.forEach((el) => (el.style.display = "flex"));
          wishListBtn.forEach((el) =>
            el.classList.add(
              "container__item-card-styles-for-wishlist-btn-in-2-cols-grid"
            )
          );
          description.forEach((el) => (el.style.display = "none"));
        }
        if (
          (window.innerWidth >= 768 && button === "btn2cols") ||
          (window.innerWidth >= 768 &&
            grid.classList.contains("container__items-list-grid-2-cols"))
        ) {
          textsFlex.forEach((el) => (el.style.display = "flex"));
          document
            .querySelectorAll(".container__item-card-add-to-cart-btn")
            .forEach((btn) =>
              btn.classList.add(
                "container__item-card-add-to-cart-btn-styles-from768px"
              )
            );
          document
            .querySelectorAll(".container__item-card-add-to-cart-btn")
            .forEach((btn) => (btn.style.bottom = "6.4rem"));
        } else if (
          (window.innerWidth >= 768 && button === "btn3cols") ||
          (window.innerWidth >= 768 &&
            grid.classList.contains("container__items-list-grid-3-cols"))
        ) {
          document
            .querySelectorAll(".container__item-card-add-to-cart-btn")
            .forEach((btn) =>
              btn.classList.add(
                "container__item-card-add-to-cart-btn-styles-from768px"
              )
            );
          document
            .querySelectorAll(".container__item-card-add-to-cart-btn")
            .forEach((btn) => (btn.style.bottom = "6.4rem"));
        } else if (
          (window.innerWidth >= 768 && button === "btn1col") ||
          (window.innerWidth >= 768 &&
            grid.classList.contains("container__items-list-grid-1-col"))
        ) {
          document
            .querySelectorAll(".container__item-card-add-to-cart-btn")
            .forEach((btn) =>
              btn.classList.add(
                "container__item-card-add-to-cart-btn-styles-from768px"
              )
            );
          document
            .querySelectorAll(".container__item-card-add-to-cart-btn")
            .forEach((btn) => (btn.style.bottom = "9.4rem"));
        }
      });
    },
    sortByPriceMinMax() {
      this.sortState = !this.sortState;
      let sortByPriceArrow = document.querySelector(
        ".container__sort-by-price-icon"
      );
      if (this.sortState) {
        sortByPriceArrow.style.rotate = "180deg";
        this.sortedItems = [...this.sortedItems].sort(
          (a, b) =>
            parseFloat(a.currentPrice.replace("$", "")) -
            parseFloat(b.currentPrice.replace("$", ""))
        );
      } else {
        sortByPriceArrow.style.rotate = "0deg";
        this.sortedItems = [...this.sortedItems].sort(
          (a, b) =>
            parseFloat(b.currentPrice.replace("$", "")) -
            parseFloat(a.currentPrice.replace("$", ""))
        );
      }
    },
    sortByRatingMinMax() {
      this.ratingSortState = !this.ratingSortState;
      let sortByRatingArrow = document.querySelector(
        ".container__sort-by-rating-icon"
      );
      if (this.ratingSortState) {
        sortByRatingArrow.style.rotate = "180deg";
        this.sortedItems = [...this.sortedItems].sort(
          (a, b) => a.rating - b.rating
        );
      } else {
        sortByRatingArrow.style.rotate = "0deg";
        this.sortedItems = [...this.sortedItems].sort(
          (a, b) => b.rating - a.rating
        );
      }
    },
    applyFilters() {
      /* filter prices in priceSlider starts */
      const pricesSlider = this.$refs.pricesSlider,
        minPrice = parseInt(pricesSlider.$refs.minPrice.value),
        maxPrice = parseInt(pricesSlider.$refs.maxPrice.value);
      this.sortedItems = this.originalItemsPriceSort.filter((item) => {
        const itemPrice = parseFloat(item.currentPrice.replace("$", ""));
        return itemPrice >= minPrice && itemPrice <= maxPrice;
      });
      /* filter prices in priceSlider ends */
    },
  },
  created() {
    this.originalItemsPriceSort = [...this.sortedItems];
    this.fetchReviews();
  },
  mounted() {
    if (window.innerWidth >= 768) {
      let grid = document.getElementById("list-grid");
      grid.classList.remove("container__items-list-grid-1-col");
      grid.classList.remove("container__items-list-grid-2-cols");
      grid.classList.add("container__items-list-grid-3-cols");
      document.querySelector(".container__grid-1-col-btn").style.background =
        "transparent";
      document
        .querySelectorAll(".container__grid-1-col-btn path")
        .forEach((path) => {
          path.setAttribute("fill", "#6C7275");
        });
      document
        .querySelectorAll(".container-item-card-add-to-cart-btn")
        .forEach((btn) =>
          btn.classList.add(
            "container-item-card-add-to-cart-btn-styles-from768px"
          )
        );
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 0rem 2rem;
}
.container__hero-from320px {
  width: 100%;
}
.container__hero-from1024px {
  display: none;
}
.container__title {
  display: block;
  text-align: center;
  margin-top: -11rem;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000;
}
.container__text {
  display: block;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #121212;
}
.container__nav {
  margin-bottom: 2rem;
}
.dropdown-title-and-dropdown-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 6rem;
}
.dropdown-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #6c7275;
}
.dropdown__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  border: 2px solid #6c7275;
  border-radius: 0.5rem;
  height: 48px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
}
.dropdown__button img {
  pointer-events: none;
}
.dropdown__button:focus,
.dropdown__button--active {
  outline: none;
}
.dropdown__list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: 1.5px solid #f3f5f7;
  box-shadow: 0px 64px 64px -48px rgba(15, 15, 15, 0.1);
  background: #fff;
  margin-top: 0.5rem;
  padding: 0.5rem;
  list-style-type: none;
}
.dropdown__list {
  display: none;
}
.dropdown__list--visible {
  display: flex;
}
.dropdown__list-item {
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
  padding: 0.5rem;
}
.dropdown__list-item:hover {
  border-radius: 0.5rem;
  background-color: #f3f5f7;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #141718;
}
.container__selected-category {
  display: none;
}
.container__filter-btn-and-grid-cols-btns-flex {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0.5rem 0rem;
}
.container__filter-btn-and-grid-cols-btns-flex::before {
  content: "";
  position: absolute;
  margin-top: -0.5rem;
  left: 2.15rem;
  right: 2rem;
  border: 1px solid #f3f5f7;
  widows: 100%;
}
.container__filter-btn-and-grid-cols-btns-flex::after {
  content: "";
  position: absolute;
  margin-top: 3.2rem;
  left: 2.15rem;
  right: 2rem;
  border: 1px solid #f3f5f7;
  widows: 100%;
}
.container__filter-btn {
  @include button;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #121212;
}
.container__sort-by-price-and-sort-by-rating-flex {
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
}
.container__sort-by-price-btn,
.container__sort-by-rating-btn {
  @include button;
  gap: 0.25rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #121212;
}
.container__grid-cols-btns-flex {
  display: flex;
}
.container__grid-3-cols-btn,
.container__grid-2-cols-btn,
.container__grid-1-col-btn {
  @include button;
  padding: 0.53125rem;
  border: 1px solid #e8ecef;
}
.container__grid-3-cols-btn {
  display: none;
}
.container__apply-filters-btn {
  display: none;
}
.container__show-more-btn {
  @include button;
  border-radius: 5rem;
  border: 1px solid $black;
  padding: 0.5rem 2.5rem;
  margin: 0 auto;
  margin-bottom: 5rem;
}
.container__show-more-text-loading {
  margin-top: -1rem;
  margin-bottom: 2rem;
}
/* 335px = 20.938em */
@media (min-width: 20.938em) {
  .container__sort-by-rating-btn-br-from320px-to375px {
    display: none;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0rem 2.5rem;
  }
  .container__hero-from320px {
    height: 392px;
    object-fit: cover;
  }
  .container__title {
    font-size: 3.375rem;
    margin-top: -16rem;
  }
  .container__text {
    font-size: 1.25rem;
    margin-top: 0rem;
  }
  .container__text-br {
    display: none;
  }
  .container__nav {
    margin-top: 11.5rem;
  }
  .container__filter-btn-and-grid-cols-btns-flex::before,
  .container__filter-btn-and-grid-cols-btns-flex::after {
    left: 2.65rem;
    right: 2.5rem;
  }
  .container__grid-3-cols-btn {
    display: block;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container__hero-from320px {
    display: none;
  }
  .container__hero-from1024px {
    display: block;
    width: 100%;
    height: 392px;
    object-fit: cover;
  }
  .container__nav {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .container__filter-btn-and-grid-cols-btns-and-sort-btns-flex {
    display: flex;
    gap: 1.875rem;
    margin-top: 1.8rem;
  }
  .container__filter-btn-and-grid-cols-btns-flex {
    margin-top: 0rem;
    gap: 2rem;
    padding: 0rem;
    order: 2;
  }
  .container__filter-btn-and-grid-cols-btns-flex::before,
  .container__filter-btn-and-grid-cols-btns-flex::after {
    display: none;
  }
  .container__sort-by-price-and-sort-by-rating-flex {
    margin-top: 0rem;
    height: 46px;
  }
  .dropdown-title-and-dropdown-flex {
    margin-top: 0rem;
  }
  .dropdown {
    width: 312px;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem 10rem;
  }
  .container__nav {
    align-items: center;
  }
  .container__selected-category {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: #000;
  }
  .dropdown-title-and-dropdown-flex {
    position: absolute;
    top: 38.3rem;
  }
  .container__apply-filters-btn {
    display: block;
    position: absolute;
    @include button;
    border: 2px solid #6c7275;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    margin-top: 15rem;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #121212;
  }
  .container__prices-slider-styles-from1440px {
    margin-top: 29rem;
  }
  .container__apply-filters-btn-styles-from1440px {
    margin-top: 36rem;
  }
  .container__show-this-div-if-sorted-items-is-empty {
    height: 400px;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0rem 15.938rem;
  }
}
</style>
