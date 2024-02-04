<template>
  <form @submit.prevent="submitReview"></form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.vue-star-rating-rating-text {
  display: none;
}
</style>
