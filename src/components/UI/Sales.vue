<template>
  <div v-if="salesIsVisible" class="sales">
    <div class="sales__main-flex">
      <div class="sales__sales-icon-and-text-and-shop-now-btn-from1024px-flex">
        <img class="sales__sales-icon" src="imgs/sales-icon.svg" alt="" />
        <span class="sales__sales-text"
          >30% off storewide — Limited time!
        </span>
        <button @click="goToShopPage" class="sales__shop-now-btn-from1024px">
          Shop Now
          <img src="imgs/blue-arrow.svg" alt="" />
        </button>
      </div>
      <button @click="hideSales" class="sales__cross-btn">
        <img src="imgs/x-icon.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sales",
  data() {
    return {
      salesIsVisible: true,
    };
  },
  methods: {
    hideSales() {
      this.salesIsVisible = false;
      sessionStorage.setItem("salesIsVisible", this.salesIsVisible);
    },
    goToShopPage() {
      this.$router.push("/ShopPage");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    if (sessionStorage.getItem("salesIsVisible")) {
      this.salesIsVisible = JSON.parse(
        sessionStorage.getItem("salesIsVisible")
      );
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/App.scss";
.sales {
  background: #f3f5f7;
  padding: 0.5rem 0.6rem;
}
.sales__main-flex {
  display: flex;
  justify-content: space-between;
}
.sales__sales-icon-and-text-and-shop-now-btn-from1024px-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.sales__sales-icon {
  width: 16px;
  height: 16px;
}
.sales__sales-text {
  white-space: nowrap;
}
.sales__shop-now-btn-from1024px {
  display: none;
}
.sales__cross-btn {
  @include button;
}
/* 375px = 23.438em */
@media (min-width: 23.43em) {
  .sales {
    padding: 0.5rem 2rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .sales__main-flex {
    justify-content: center;
  }
  .sales__cross-btn {
    position: absolute;
    right: 2rem;
    margin-top: 0.2rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .sales__shop-now-btn-from1024px {
    display: block;
  }
  .sales__shop-now-btn-from1024px {
    @include button;
    display: flex;
    gap: 0.25rem;
    color: #377dff;
    white-space: nowrap;
    border-bottom: 1px solid #377dff;
  }
}
</style>
