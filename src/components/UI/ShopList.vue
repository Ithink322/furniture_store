<template>
  <div class="container__items-list-grid-1-col" id="list-grid">
    <transition-group name="item-list">
      <shop-item
        v-for="item in sortedItems"
        :item="item"
        :key="item.id"
      ></shop-item>
    </transition-group>
  </div>
</template>

<script>
import ShopItem from "../UI/ShopItem.vue";
export default {
  name: "ShopList",
  components: { ShopItem },
  props: {
    sortedItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item-list-item {
  display: inline-block;
  margin-right: 10px;
}
.item-list-enter-active,
.item-list-leave-active {
  transition: all 0.6s ease;
}
.item-list-enter-from,
.item-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.item-list-move {
  transition: transform 0.6s ease;
}
.container__items-list-grid-1-col {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  row-gap: 1.5rem;
  margin: 2.5rem 0rem;
}
.container__items-list-grid-2-cols {
  display: grid;
  grid-template-columns: repeat(2, 48.65%);
  column-gap: 0.5rem;
  row-gap: 1rem;
  margin: 2.5rem 0rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container__items-list-grid-2-cols {
    grid-template-columns: repeat(2, 48.2%);
    gap: 1.5rem;
  }
  .container__items-list-grid-3-cols {
    display: grid;
    grid-template-columns: repeat(3, 31%);
    gap: 1.5rem;
    margin: 2.5rem 0rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__items-list-grid-2-cols {
    grid-template-columns: repeat(2, 48.75%);
  }
  .container__items-list-grid-3-cols {
    grid-template-columns: repeat(3, 31.6%);
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container__items-list-grid-1-col {
    grid-template-columns: repeat(1, 100%);
    margin-left: 21rem;
  }
  .container__items-list-grid-2-cols {
    grid-template-columns: repeat(2, 48.5%);
    margin-left: 21rem;
  }
  .container__items-list-grid-3-cols {
    grid-template-columns: repeat(3, 31.3%);
    margin-left: 21rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container__items-list-grid-2-cols {
    grid-template-columns: repeat(2, 48.9%);
  }
  .container__items-list-grid-3-cols {
    grid-template-columns: repeat(3, 31.85%);
  }
}
</style>
