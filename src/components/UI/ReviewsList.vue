<template>
  <div class="container__reviews-list">
    <reviews-item
      v-for="review in filteredReviews"
      :review="review"
      :key="review.id"
    ></reviews-item>
  </div>
</template>

<script>
import ReviewsItem from "../UI/ReviewItem.vue";
export default {
  name: "ReviewsList",
  components: { ReviewsItem },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    reviews() {
      return JSON.parse(localStorage.getItem("reviews")) || [];
    },
    filteredReviews() {
      return this.reviews.filter((review) => review.id === this.productId);
    },
  },
};
</script>

<style lang="scss" scoped>
.container__reviews-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0rem 5rem 0rem;
}
</style>
