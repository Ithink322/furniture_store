<template>
  <div class="app">
    <sales></sales>
    <my-header></my-header>
    <burger-menu></burger-menu>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sales from "./components/UI/Sales.vue";
import MyHeader from "./components/UI/MyHeader.vue";
import BurgerMenu from "./components/UI/BurgerMenu.vue";
export default {
  name: "App",
  components: { Sales, MyHeader, BurgerMenu },
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
