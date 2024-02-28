<template>
  <div class="container__reviews-list">
    <transition-group name="items-list">
      <reviews-item
        v-for="review in reviews"
        :review="review"
        :key="review._id"
      ></reviews-item>
    </transition-group>
  </div>
</template>

<script>
import axios from "axios";
import ReviewsItem from "../UI/ReviewItem.vue";
export default {
  name: "ReviewsList",
  components: { ReviewsItem },
  props: {
    productId: {
      type: Number,
      required: true,
    },
    reviewOption: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    fetchReviews() {
      axios
        .get(
          `http://localhost:5000/reviews/collect?productId=${this.productId}`
        )
        .then((response) => {
          this.reviews = response.data.map((review) => {
            review.avatar = `data:image/jpeg;base64,${review.avatar}`;
            return review;
          });
          if (this.reviews.length > 0) {
            console.log("Reviews were fetched succsessfully!", response.data);
          }
        })
        .catch((e) => {
          console.error("Error fetching reviews:", e);
        });
    },
    sortReviews() {
      if (this.reviewOption === "Min Rating") {
        this.reviews = [...this.reviews].sort(
          (a, b) => a.selectedRating - b.selectedRating
        );
      } else if (this.reviewOption === "Max Rating") {
        this.reviews = [...this.reviews].sort(
          (a, b) => b.selectedRating - a.selectedRating
        );
      } else if (this.reviewOption === "Newest") {
        this.reviews = [...this.reviews].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      } else if (this.reviewOption === "Oldest") {
        this.reviews = [...this.reviews].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      }
    },
  },
  watch: {
    reviewOption: function (newOption) {
      this.sortReviews();
    },
  },
  mounted() {
    this.fetchReviews();
  },
};
</script>

<style lang="scss" scoped>
.items-list-enter-active,
.items-list-leave-active {
  transition: all 0.6s ease;
}
.items-list-enter-from,
.items-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.items-list-move {
  transition: transform 0.6s ease;
}
.container__reviews-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0rem 5rem 0rem;
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__reviews-list {
    gap: 3rem;
  }
}
</style>
