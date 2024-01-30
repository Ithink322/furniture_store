<template>
  <div class="app">
    <sales v-if="!hideComponents"></sales>
    <my-header v-if="!hideComponents"></my-header>
    <burger-menu v-if="!hideComponents"></burger-menu>
    <main>
      <router-view></router-view>
    </main>
    <my-footer v-if="!hideComponents"></my-footer>
  </div>
</template>

<script>
import Sales from "./components/UI/Sales.vue";
import MyHeader from "./components/UI/MyHeader.vue";
import BurgerMenu from "./components/UI/BurgerMenu.vue";
import MyFooter from "./components/UI/MyFooter.vue";
export default {
  name: "App",
  components: { Sales, MyHeader, BurgerMenu, MyFooter },
  computed: {
    hideComponents() {
      return this.$route.meta.hideComponents;
    },
  },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  /* outline: solid 1px red; */
}
body {
  min-width: 20em;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-family: "Inter", sans-serif;
  font-family: "Poppins", sans-serif;
  font-family: "Space Grotesk", sans-serif;
}
</style>
