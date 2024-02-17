<template>
  <form @submit.prevent="makeReview" class="container__questions-form">
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
      v-model="review.description"
      class="container__review-form-text-area"
      cols="30"
      rows="10"
      placeholder="Write your review"
    ></textarea>
    <button type="submit" class="container__write-review-btn">
      Write Review
    </button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";

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
      review: {
        name: localStorage.getItem("name"),
        selectedRating: 0,
        description: "",
      },
    };
  },
  methods: {
    ...mapMutations(["addReview"]),
    makeReview() {
      if (
        this.review.description.trim() !== "" &&
        this.review.selectedRating !== 0
      ) {
        this.review.id = this.productId;
        this.$emit("makeReview", this.review);
        this.addReview(this.review);
        this.review = {
          name: "",
          selectedRating: 0,
          description: "",
        };
      }
    },
    updateRating(rating) {
      this.review.selectedRating = rating;
    },
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
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__write-review-btn {
    width: 280px;
    margin-left: auto;
  }
}
</style>
