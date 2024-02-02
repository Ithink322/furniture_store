<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CurrentProductPage",
  computed: {
    ...mapGetters(["getSelectedProduct"]),
    Product() {
      return JSON.parse(localStorage.getItem("CurrentProduct"));
    },
  },
};
</script>

<style lang="scss" scoped></style>
