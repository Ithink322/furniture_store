<template>
  <form
    v-if="name"
    @submit.prevent="makeReview"
    class="container__questions-form"
  >
    <span class="container__review-form-title">Make your own review</span>
    <div class="container__review-form-rating-text-and-rating-fle">
      <span class="container__review-form-rating-text">Rate the product</span>
      <star-rating
        :star-size="16"
        :show-rating="false"
        :activeColor="'#343839'"
        @rating-selected="updateRating"
      />
    </div>
    <textarea
      v-model="description"
      class="container__review-form-text-area"
      cols="30"
      rows="10"
      placeholder="Write your review"
    ></textarea>
    <button type="submit" class="container__write-review-btn">
      Write Review
    </button>
    <div class="dropdown">
      <button class="dropdown__button">
        <span class="dropdown__button-text">Choose to sort reviews</span>
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
          @click="selectOption(option.value)"
        >
          {{ option.value }}
        </li>
      </ul>
    </div>
  </form>
  <span v-else class="container__reviews-non-authorized-user-text"
    >Please log In to make a review.</span
  >
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";
export default {
  components: { StarRating },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      avatar: "",
      name: localStorage.getItem("name"),
      description: "",
      selectedRating: 0,
      reviewsAdded: 0,
    };
  },
  computed: {
    options() {
      return [
        { value: "Newest" },
        { value: "Oldest" },
        { value: "Min Rating" },
        { value: "Max Rating" },
      ];
    },
  },
  methods: {
    makeReview() {
      if (this.description.trim() !== "" && this.selectedRating !== 0) {
        const userId = localStorage.getItem("userId");
        if (userId) {
          axios
            .get(`http://localhost:5000/auth/get-avatar?userId=${userId}`)
            .then((response) => {
              const currentDate = new Date();
              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };
              const formattedDate = currentDate.toLocaleDateString(
                "en-US",
                options
              );

              this.avatar = response.data.avatar;

              axios
                .post("http://localhost:5000/reviews/create", {
                  userId: userId,
                  productId: this.productId,
                  avatar: this.avatar,
                  name: this.name,
                  description: this.description,
                  selectedRating: this.selectedRating,
                  date: formattedDate,
                })
                .then((response) => {
                  this.$emit("reviewsAdded");
                  this.$emit("review-added");
                  iziToast.settings({
                    position: "bottomRight",
                  });
                  iziToast.success({
                    title: "Succeed",
                    message: "Your review was published successfully!",
                  });
                  console.log(
                    "Review was published successfully:",
                    response.data
                  );
                })
                .catch((error) => {
                  console.error("Error creating review", error);
                });
              this.description = "";
            })
            .catch((error) => {
              console.error("Error fetching avatar:", error);
            });
        }
      }
    },
    updateRating(rating) {
      this.selectedRating = rating;
    },
    selectOption(option) {
      this.$emit("reviewOption", option);
    },
  },
  mounted() {
    const dropDownBtn = document.querySelector(".dropdown__button"),
      dropDownList = document.querySelector(".dropdown__list"),
      dropDownListItems = document.querySelectorAll(".dropdown__list-item"),
      dropdownText = document.querySelector(".dropdown__button-text");
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.add("dropdown__button--active");
    });
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function () {
        dropdownText.innerText = this.innerText;
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container__questions-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container__review-form-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
}
.container__review-form-rating-text-and-rating-fle {
  display: flex;
  gap: 1rem;
}
.container__review-form-rating-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: $black;
}
.container__review-form-text-area {
  border-radius: 0.375rem;
  border: 2px solid #b3bcc5;
  padding: 0.313rem 0.625rem;
}
.container__review-form-text-area:focus {
  border: 2px solid $black;
  outline: none;
}
.container__write-review-btn {
  @include button;
  width: 100%;
  background: $black;
  border-radius: 0.5rem;
  padding: 0.625rem 1rem;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}
.container__reviews-non-authorized-user-text {
  display: block;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
}
.dropdown__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  border: 2px solid #e8ecef;
  border-radius: 0.5rem;
  height: 48px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  margin-top: 2.5rem;
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
  cursor: pointer;
}
.dropdown__list-item:hover {
  border-radius: 0.5rem;
  background-color: #f3f5f7;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #141718;
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__write-review-btn {
    width: 280px;
    margin-left: auto;
  }
  .dropdown__button,
  .dropdown__list {
    width: 256px;
    margin-left: auto;
  }
}
</style>
