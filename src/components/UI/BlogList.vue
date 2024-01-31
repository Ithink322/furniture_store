<template>
  <div class="container__blog-list-grid container__blog-list">
    <transition-group name="item-list">
      <blog-item
        v-for="item in sortedBlogs"
        :item="item"
        :key="item.id"
      ></blog-item>
    </transition-group>
  </div>
</template>

<script>
import BlogItem from "../UI/BlogItem.vue";
export default {
  name: "BlogList",
  components: { BlogItem },
  props: {
    sortedBlogs: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    let btn3cols = document.querySelector(".container__grid-3-cols-btn"),
      btn2cols = document.querySelector(".container__grid-2-cols-btn"),
      btn1col = document.querySelector(".container__grid-1-col-btn"),
      grid = document.querySelector(".container__blog-list");
    btn3cols.addEventListener("click", () => {
      grid.classList.remove("container__blog-list-grid-2-cols");
      grid.classList.remove("container__blog-list-grid-1-col");
      grid.classList.add("container__blog-list-grid");
    });
    btn2cols.addEventListener("click", () => {
      grid.classList.remove("container__blog-list-grid");
      grid.classList.remove("container__blog-list-grid-1-col");
      grid.classList.add("container__blog-list-grid-2-cols");
    });
    btn1col.addEventListener("click", () => {
      grid.classList.remove("container__blog-list-grid");
      grid.classList.remove("container__blog-list-grid-2-cols");
      grid.classList.add("container__blog-list-grid-1-col");
    });
  },
};
</script>

<style lang="scss">
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
.container__blog-list-grid {
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container__blog-list-grid {
    grid-template-columns: repeat(3, 31.75%);
    row-gap: 1.5rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container__blog-list-grid {
    grid-template-columns: repeat(3, 31.5%);
    column-gap: 1.56rem;
    row-gap: 2.5rem;
  }
  .container__blog-list-grid-2-cols {
    display: grid;
    grid-template-columns: repeat(2, 48.65%);
    column-gap: 1.56rem;
    row-gap: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
  .container__blog-list-grid-1-col {
    display: grid;
    grid-template-columns: repeat(1, auto);
    column-gap: 1.56rem;
    row-gap: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container__blog-list-grid {
    grid-template-columns: repeat(3, 31.83%);
  }
  .container__blog-list-grid-2-cols {
    grid-template-columns: repeat(2, 48.9%);
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container__blog-list-grid {
    grid-template-columns: repeat(3, 32.15%);
  }
  .container__blog-list-grid-2-cols {
    grid-template-columns: repeat(2, 49.1%);
  }
}
</style>
