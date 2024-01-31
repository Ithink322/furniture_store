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
  mounted() {
    /* let btn3cols = document.querySelector(".container__grid-3-cols-btn"),
      btn2cols = document.querySelector(".container__grid-2-cols-btn"),
      btn1col = document.querySelector(".container__grid-1-col-btn"),
      grid = document.querySelector(".container__items-list-grid-1-col"),
      description = document.querySelectorAll(
        ".container-item-card-description"
      ),
      textsFlex = document.querySelectorAll(
        ".container-item-card-new-and-sale-divs-flex"
      );
    let isElVisible = true;
    btn3cols.addEventListener("click", () => {
      grid.classList.remove("container__items-list-grid-2-cols");
      grid.classList.remove("container__items-list-grid-1-col");
      grid.classList.add("container__items-list-grid-3-cols");
      isElVisible = false;
      if (!isElVisible) {
        textsFlex.forEach((el) => (el.style.display = "flex"));
        description.forEach((el) => (el.style.display = "none"));
      }
    });
    btn2cols.addEventListener("click", () => {
      grid.classList.remove("container__items-list-grid-3-cols");
      grid.classList.remove("container__items-list-grid-1-col");
      grid.classList.add("container__items-list-grid-2-cols");
      isElVisible = false;
      if (!isElVisible) {
        textsFlex.forEach((el) => (el.style.display = "none"));
        description.forEach((el) => (el.style.display = "none"));
      }
    });
    btn1col.addEventListener("click", () => {
      grid.classList.remove("container__items-list-grid-3-cols");
      grid.classList.remove("container__items-list-grid-2-cols");
      grid.classList.add("container__items-list-grid-1-col");
      isElVisible = true;
      if (isElVisible) {
        textsFlex.forEach((el) => (el.style.display = "flex"));
        description.forEach((el) => (el.style.display = "block"));
      }
    }); */
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
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__items-list-grid-3-cols {
    grid-template-columns: repeat(3, 31.5%);
    column-gap: 1.56rem;
    row-gap: 2.5rem;
    margin: 2.5rem 0rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container__items-list-grid-2-cols {
    grid-template-columns: repeat(2, 48.9%);
  }
  .container__items-list-grid-3-cols {
    grid-template-columns: repeat(3, 31.83%);
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container__items-list-grid-2-cols {
    grid-template-columns: repeat(2, 49.1%);
  }
  .container__items-list-grid-3-cols {
    grid-template-columns: repeat(3, 32.15%);
  }
}
</style>
