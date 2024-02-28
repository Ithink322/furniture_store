<template>
  <div>
    <div class="container__description-and-rating-and-user-name-flex">
      <div class="container__user-avatar-rating-and-user-name-flex">
        <img :src="review.avatar" alt="" class="container__user-avatar" />
        <div class="container__rating-and-user-name-flex">
          <span class="container__user-name">{{ review.name }}</span>
          <star-rating
            :star-size="16"
            :show-rating="false"
            :activeColor="'#343839'"
            :rating="review.selectedRating"
            :read-only="true"
          ></star-rating>
        </div>
      </div>
      <span class="container__description">{{ review.description }}</span>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";
export default {
  name: "ReviewItem",
  components: { StarRating },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container__description-and-rating-and-user-name-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__description-and-rating-and-user-name-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid rgb(190, 197, 201);
  bottom: -1rem;
}
.container__user-avatar-rating-and-user-name-flex {
  display: flex;
  gap: 1rem;
}
.container__user-avatar {
  border-radius: 50%;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
}
.container__rating-and-user-name-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__user-name {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
}
.container__description {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__user-avatar-rating-and-user-name-flex {
    gap: 2.5rem;
  }
  .container__description {
    margin-left: 7.05rem;
  }
  .container__description-and-rating-and-user-name-flex::after {
    bottom: -1.5rem;
  }
}
</style>
