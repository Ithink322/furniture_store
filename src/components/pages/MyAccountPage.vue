<template>
  <div class="container">
    <go-back-btn></go-back-btn>
    <h1 class="container__title">My Account</h1>
    <div class="container__account-nav-and-section-main-flex">
      <nav class="container__account-nav">
        <div class="container__account-avatar-and-icon-and-name-flex">
          <div class="container__account-avatar-and-icon-flex">
            <img :src="userAvatar" alt="" class="container__account-avatar" />
            <img
              src="imgs/add-an-avatar-icon.svg"
              alt=""
              class="container__account-add-avatar-icon"
              @click="uploadAvatar"
            />
          </div>
          <span class="container__account-name">{{ name }}</span>
        </div>
        <div class="dropdown">
          <button class="dropdown__button">
            <span class="dropdown__button-text">Account</span>
            <img
              class="dropdown__button-arrow"
              src="imgs/dropdown-arrow.svg"
              alt=""
            />
          </button>
          <ul class="dropdown__list">
            <li
              class="dropdown__list-item"
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              @click="selectOption(option)"
            >
              {{ option.value }}
            </li>
          </ul>
        </div>
        <div class="container__account-titles-flex">
          <span
            @click="addBorder('account')"
            class="container__account-title container__account-account-title container__account-account-title-border"
            >Account</span
          >
          <span
            @click="addBorder('address')"
            class="container__account-title container__account-address-title"
            >Address</span
          >
          <span
            @click="addBorder('orders')"
            class="container__account-title container__account-orders-title"
            >Orders</span
          >
          <span
            @click="addBorder('log out')"
            class="container__account-title container__account-logout-title"
          >
            <span v-if="this.name === 'Log In please'">Log In</span>
            <span v-else>Log Out</span></span
          >
        </div>
      </nav>
      <section v-if="isAccountSectonVisible" class="container__account-section">
        <div
          class="container__account-section-input-titles-and-inputs-flex container__account-section-input-titles-and-inputs-flex-margintop-from1024px"
        >
          <span class="container__account-section-title">Account Details</span>
          <div class="container__account-section-input-title-and-input-flex">
            <span class="container__account-section-input-title"
              >FIRST NAME *</span
            >
            <input
              placeholder="First name"
              type="text"
              class="container__account-section-input"
            />
          </div>
          <div class="container__account-section-input-title-and-input-flex">
            <span class="container__account-section-input-title"
              >LAST NAME *</span
            >
            <input
              placeholder="Last name"
              type="text"
              class="container__account-section-input"
            />
          </div>
          <div class="container__account-section-input-title-and-input-flex">
            <span class="container__account-section-input-title"
              >DISPLAY NAME *</span
            >
            <input
              placeholder="Display name"
              type="text"
              class="container__account-section-input"
            />
            <span
              placeholder="Display name"
              class="container__account-section-input-subtext"
              >This will be how your name will be displayed in the account
              section and in reviews</span
            >
          </div>
          <div class="container__account-section-input-title-and-input-flex">
            <span class="container__account-section-input-title">EMAIL *</span>
            <input
              placeholder="Email"
              type="text"
              class="container__account-section-input"
            />
          </div>
        </div>
        <div class="container__account-section-input-titles-and-inputs-flex">
          <span class="container__account-section-title">Account Details</span>
          <div class="container__account-section-input-title-and-input-flex">
            <span class="container__account-section-input-title"
              >OLD PASSWORD</span
            >
            <input
              placeholder="Old password"
              type="text"
              class="container__account-section-input"
            />
          </div>
          <div class="container__account-section-input-title-and-input-flex">
            <span class="container__account-section-input-title"
              >NEW PASSWORD</span
            >
            <input
              placeholder="New password"
              type="text"
              class="container__account-section-input"
            />
          </div>
          <div class="container__account-section-input-title-and-input-flex">
            <span class="container__account-section-input-title"
              >REPEAT NEW PASSWORD</span
            >
            <input
              placeholder="Repeat new password"
              type="text"
              class="container__account-section-input"
            />
          </div>
          <button class="container__account-section-save-changes-btn">
            Save changes
          </button>
        </div>
      </section>
      <section
        v-if="isAddressesSectonVisible"
        class="container__addresses-section"
      >
        <div class="container__addresses-section-title-and-addresses-divs">
          <span class="container__addresses-section-title">Addresses</span>
          <div
            class="container__addresses-section-address-divs-flex-from1024px"
          >
            <div class="container__addresses-section-address-div">
              <div
                class="container__addresses-section-address-div-title-and-edit-btn-flex"
              >
                <span class="container__addresses-section-address-div-title"
                  >Billing Address</span
                >
                <button
                  class="container__addresses-section-address-div-edit-btn container__addresses-section-address-div-billing-address-edit-btn"
                  @click="focusOnBillingTextarea"
                >
                  <img src="imgs/edit-icon.svg" alt="" />Edit
                </button>
              </div>
              <div
                class="container__addresses-section-address-div-textarea-and-name-flex"
              >
                <span class="container__addresses-section-address-div-name"
                  >Vitaliy Nelubov</span
                >
                <textarea
                  class="container__addresses-section-address-div-textarea container__addresses-section-address-div-billing-address-textarea"
                  ref="billingTextarea"
                  v-model="billingTextareaContent"
                  @input="adjustBillingTextareaHeight"
                ></textarea>
              </div>
            </div>
            <div class="container__addresses-section-address-div">
              <div
                class="container__addresses-section-address-div-title-and-edit-btn-flex"
              >
                <span class="container__addresses-section-address-div-title"
                  >Shipping Address</span
                >
                <button
                  class="container__addresses-section-address-div-edit-btn container__addresses-section-address-div-shipping-address-edit-btn"
                  @click="focusOnShippingTextarea"
                >
                  <img src="imgs/edit-icon.svg" alt="" />Edit
                </button>
              </div>
              <div
                class="container__addresses-section-address-div-textarea-and-name-flex"
              >
                <span class="container__addresses-section-address-div-name"
                  >Vitaliy Nelubov</span
                >
                <textarea
                  class="container__addresses-section-address-div-textarea container__addresses-section-address-div-shipping-address-textarea"
                  ref="shippingTextarea"
                  v-model="shippingTextareaContent"
                  @input="adjustShippingTextareaHeight"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-if="isOrdersSectonVisible" class="container__orders-section">
        <span class="container__orders-title">Orders History</span>
        <div class="container__orders-list-titles-flex-from1024px">
          <span class="container__orders-list-title">Number ID</span>
          <span class="container__orders-list-title">Dates</span>
          <span
            class="container__orders-list-title container__orders-list-title-status"
            >Status</span
          >
          <span
            class="container__orders-list-title container__orders-list-title-price"
            >Price</span
          >
        </div>
        <orders-list></orders-list>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import goBackBtn from "../UI/GoBackBtn.vue";
import OrdersList from "../UI/OrdersList.vue";
export default {
  name: "MyAccountPage",
  components: { goBackBtn, OrdersList },
  data() {
    return {
      userAvatar: "imgs/plus-on-black-back.png",
      name: localStorage.getItem("name") || "Log In please",
      isAccountSectonVisible: true,
      isAddressesSectonVisible: false,
      isOrdersSectonVisible: false,
      billingTextareaContent:
        localStorage.getItem("billingTextareaContent") || "",
      shippingTextareaContent:
        localStorage.getItem("shippingTextareaContent") || "",
    };
  },
  computed: {
    options() {
      return [
        { value: "Account" },
        { value: "Address" },
        { value: "Orders" },
        { value: this.name === "Log In please" ? "Log In" : "Log Out" },
      ];
    },
  },
  methods: {
    uploadAvatar() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("avatar", file);

        axios
          .post("http://localhost:5000/auth/upload-avatar", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log("Avatar uploaded successfully");
            this.userAvatar = response.data.avatar.data;
          })
          .catch((error) => {
            console.error("Error uploading avatar:", error);
          });
      };
      input.click();
    },
    selectOption(option) {
      if (option.value === "Account") {
        this.isAccountSectonVisible = true;
        this.isAddressesSectonVisible = false;
        this.isOrdersSectonVisible = false;
      } else if (option.value === "Address") {
        this.isAddressesSectonVisible = true;
        this.isAccountSectonVisible = false;
        this.isOrdersSectonVisible = false;
      } else if (option.value === "Orders") {
        this.isOrdersSectonVisible = true;
        this.isAddressesSectonVisible = false;
        this.isAccountSectonVisible = false;
      } else if (option.value === "Log Out" || option.value === "Log In") {
        this.$router.push("/LoginOrRegistrationPage");
        window.scrollTo(0, 0);
      }
    },
    addBorder(header) {
      const headers = document.querySelectorAll(".container__account-title");
      headers.forEach((element) => {
        if (element.textContent.toLowerCase() === header) {
          element.classList.add("container__account-account-title-border");
        } else {
          element.classList.remove("container__account-account-title-border");
        }
      });
      if (header === "account") {
        this.isAccountSectonVisible = true;
        this.isAddressesSectonVisible = false;
        this.isOrdersSectonVisible = false;
      } else if (header === "address") {
        this.isAddressesSectonVisible = true;
        this.isAccountSectonVisible = false;
        this.isOrdersSectonVisible = false;
      } else if (header === "orders") {
        this.isOrdersSectonVisible = true;
        this.isAddressesSectonVisible = false;
        this.isAccountSectonVisible = false;
      } else if (header === "log out") {
        this.$router.push("/LoginOrRegistrationPage");
        window.scrollTo(0, 0);
      }
    },
    adjustBillingTextareaHeight() {
      this.$refs.billingTextarea.style.height = "auto";
      this.$refs.billingTextarea.style.height =
        this.$refs.billingTextarea.scrollHeight + "px";
      localStorage.setItem(
        "billingTextareaContent",
        this.billingTextareaContent
      );
    },
    adjustShippingTextareaHeight() {
      this.$refs.shippingTextarea.style.height = "auto";
      this.$refs.shippingTextarea.style.height =
        this.$refs.shippingTextarea.scrollHeight + "px";
      localStorage.setItem(
        "shippingTextareaContent",
        this.shippingTextareaContent
      );
    },
    focusOnBillingTextarea() {
      document
        .querySelector(
          ".container__addresses-section-address-div-billing-address-textarea"
        )
        .focus();
    },
    focusOnShippingTextarea() {
      document
        .querySelector(
          ".container__addresses-section-address-div-shipping-address-textarea"
        )
        .focus();
    },
  },
  mounted() {
    const dropDownBtn = document.querySelector(".dropdown__button"),
      dropDownList = document.querySelector(".dropdown__list"),
      dropDownListItems = document.querySelectorAll(".dropdown__list-item"),
      dropdownText = document.querySelector(".dropdown__button-text");
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.add("dropdown__button--active");
    });
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function () {
        dropdownText.innerText = this.innerText;
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 0 2rem;
}
.container__title {
  display: block;
  text-align: center;
  margin: 2.5rem 0rem;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000;
}
.container__account-nav {
  border-radius: 0.5rem;
  padding: 2.5rem 1rem;
  background: #f3f5f7;
}
.container__account-avatar-and-icon-and-name-flex {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
}
.container__account-avatar-and-icon-flex {
  display: flex;
  justify-content: center;
}
.container__account-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.container__account-add-avatar-icon {
  position: absolute;
  margin-left: 3rem;
  margin-top: 3.2rem;
  cursor: pointer;
}
.container__account-name {
  display: block;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
}
.dropdown__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  border: 2px solid #6c7275;
  border-radius: 0.5rem;
  height: 48px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  margin-top: 2.5rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
}
.dropdown__button img {
  pointer-events: none;
}
.dropdown__button:focus,
.dropdown__button--active {
  outline: none;
}
.dropdown__list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: 1.5px solid #f3f5f7;
  box-shadow: 0px 64px 64px -48px rgba(15, 15, 15, 0.1);
  background: #fff;
  margin-top: 0.5rem;
  padding: 0.5rem;
  list-style-type: none;
}
.dropdown__list {
  display: none;
}
.dropdown__list--visible {
  display: flex;
}
.dropdown__list-item {
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
  padding: 0.5rem;
}
.dropdown__list-item:hover {
  border-radius: 0.5rem;
  background-color: #f3f5f7;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #141718;
}
.container__account-titles-flex {
  display: none;
}
.container__account-section {
  margin-bottom: 5rem;
  width: 100%;
}
.container__account-section-title {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
}
.container__account-section-input-titles-and-inputs-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;
}
.container__account-section-input-title-and-input-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container__account-section-input-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6c7275;
}
.container__account-section-input {
  @include input;
  padding: 0.6rem 1rem;
  border: 1px solid #cbcbcb;
  border-radius: 0.375rem;
  outline: none;
}
.container__account-section-input:focus {
  outline: 1px solid #121212;
}
.container__account-section-input-subtext {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #6c7275;
  transform: skew(-8deg);
}
.container__account-section-save-changes-btn {
  @include button;
  background: $black;
  width: 183px;
  height: 52px;
  border-radius: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}
.container__addresses-section {
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
}
.container__addresses-section-title-and-addresses-divs {
  display: flex;
  flex-direction: column;
  gap: 1.438rem;
}
.container__addresses-section-title {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
}
.container__addresses-section-address-divs-flex-from1024px {
  display: flex;
  flex-direction: column;
  gap: 1.438rem;
}
.container__addresses-section-address-div {
  padding: 1rem;
  border: 1px solid #6c7275;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
}
.container__addresses-section-address-div-title-and-edit-btn-flex {
  display: flex;
  justify-content: space-between;
}
.container__addresses-section-address-div-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
}
.container__addresses-section-address-div-edit-btn {
  @include button;
  gap: 0.25rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #6c7275;
}
.container__addresses-section-address-div-textarea-and-name-flex {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.container__addresses-section-address-div-textarea {
  height: auto;
  resize: none;
  overflow-y: hidden;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #000000;
}
.container__addresses-section-address-div-name {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #000000;
}
.container__orders-section {
  margin-top: 2.5rem;
  margin-bottom: 5rem;
  width: 100%;
}
.container__orders-title {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
}
.container__orders-list-titles-flex-from1024px {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0 2.5rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container__account-nav-and-section-main-flex {
    display: flex;
    gap: 4.5rem;
  }
  .container__account-nav {
    width: 262px;
    height: 420px;
    flex-shrink: 0;
  }
  .dropdown {
    display: none;
  }
  .container__account-titles-flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.5rem;
  }
  .container__account-title {
    position: relative;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #6c7275;
    cursor: pointer;
  }
  .container__account-account-title {
    color: $black;
  }
  .container__account-account-title-border::after {
    content: "";
    position: absolute;
    width: 100%;
    border: 1px solid $black;
    left: 0rem;
    margin-top: 2.1rem;
  }
  .container__account-section-input-titles-and-inputs-flex-margintop-from1024px {
    margin-top: 0rem;
  }
  .container__addresses-section {
    margin-top: 0rem;
    margin-bottom: 17rem;
  }
  .container__addresses-section-address-divs-flex-from1024px {
    flex-direction: row;
  }
  .container__addresses-section-address-div {
    width: 293px;
  }
  .container__orders-section {
    margin-top: 0rem;
    margin-bottom: 18rem;
  }
  .container__orders-list-titles-flex-from1024px {
    position: relative;
    display: flex;
    gap: 8rem;
    margin-top: 2.5rem;
  }
  .container__orders-list-titles-flex-from1024px::after {
    content: "";
    position: absolute;
    width: 100%;
    border: 1px solid #ebf0f3;
    left: 0rem;
    margin-top: 1.6rem;
  }
  .container__orders-list-title {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: #6c7275;
  }
  .container__orders-list-title-status {
    margin-left: 2.1rem;
  }
  .container__orders-list-title-price {
    margin-left: -1.4rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem 10rem;
  }
  .container__addresses-section {
    margin-bottom: 18.3rem;
  }
  .container__addresses-section-address-div {
    width: 342px;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 0rem 15.938rem;
  }
}
</style>
