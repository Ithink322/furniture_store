export default {
  methods: {
    goToHomePage() {
      this.$router.push("/");
      document.querySelector(".burger-menu__shadow").style.display = "none";
      window.scrollTo(0, 0);
    },
    goToShopPage() {
      this.$router.push("/ShopPage");
      document.querySelector(".burger-menu__shadow").style.display = "none";
      window.scrollTo(0, 0);
    },
    goToBlogPage() {
      this.$router.push("/BlogPage");
      document.querySelector(".burger-menu__shadow").style.display = "none";
      window.scrollTo(0, 0);
    },
    goToContactUsPage() {
      this.$router.push("/ContactUsPage");
      document.querySelector(".burger-menu__shadow").style.display = "none";
      window.scrollTo(0, 0);
    },
    goToLoginOrRegistrationPage() {
      this.$router.push("/LoginOrRegistrationPage");
      document.querySelector(".burger-menu__shadow").style.display = "none";
      window.scrollTo(0, 0);
    },
  },
};
