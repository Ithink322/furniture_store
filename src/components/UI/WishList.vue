<template>
  <div class="container__items-list">
    <transition-group name="items-list">
      <wish-item
        v-for="item in favorites"
        :key="item.id"
        :item="item"
        @remove-from-favorites="removeFromFavorites"
      ></wish-item>
    </transition-group>
  </div>
</template>

<script>
import WishItem from "../UI/WishItem.vue";
export default {
  name: "WishList",
  components: { WishItem },
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  },
  methods: {
    removeFromFavorites(item) {
      this.favorites = this.favorites.filter(
        (favorite) => favorite.id !== item.id
      );
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
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
.container__items-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin-top: 1.75rem;
  margin-bottom: 6rem;
}
.container__items-list::before {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #ebf0f3;
  margin-top: -1.25rem;
}
</style>
