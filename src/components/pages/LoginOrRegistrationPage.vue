<template>
  <nav class="authorization" v-if="isUserRegistered">
    <div class="logo-and-hero-flex">
      <span class="logo">3legant.</span>
      <img
        class="hero-from320px"
        src="imgs/login-or-register-hero-from320px.svg"
        alt=""
      />
      <img
        class="hero-from1024px"
        src="imgs/login-or-register-hero-from1024px.svg"
        alt=""
      />
    </div>
    <div class="container">
      <span class="container__title">Sign In</span>
      <div class="container__main-flex">
        <div class="container__prescription-and-sign-up-or-sign-in-btn-flex">
          <div class="container__prescription">Don’t have an accout yet?</div>
          <button
            @click="updatePageToSignUp"
            class="container__sign-in-or-sing-up-btn--green"
          >
            Sign up
          </button>
        </div>
        <form @submit.prevent class="container__input-form">
          <input
            placeholder="Your username"
            class="container__input"
            type="text"
            v-model="username"
          />
        </form>
        <form @submit.prevent class="container__input-form">
          <input
            type="password"
            placeholder="Password"
            class="container__input container__input-password"
            v-model="password"
          />
        </form>
        <button
          class="container__password-toggle-btn container__password-toggle-authorization-btn"
        >
          <img
            src="imgs/opened-eye.png"
            alt=""
            class="container__password-opened-eye-icon container__password-opened-eye-icon-auth"
          />
          <img
            src="imgs/closed-eye.png"
            alt=""
            class="container__password-closed-eye-icon container__password-closed-eye-icon-auth"
          />
        </button>
        <div class="container__checkbox-and-forgot-password-btn-flex">
          <div class="container__checkbox-and-text-flex">
            <input
              class="container__checkbox container__checkbox-sign-in"
              type="checkbox"
            />
            <span class="container__checkbox-text">Remember me</span>
          </div>
          <button class="container__forgot-password-btn">
            Forgot password?
          </button>
        </div>
        <div @click="signIn" class="container__sign-in-or-sign-up-btn">
          Sign in
        </div>
      </div>
    </div>
  </nav>
  <nav class="registration" v-else>
    <div class="logo-and-hero-flex">
      <span class="logo">3legant.</span>
      <img
        class="hero-from320px"
        src="imgs/login-or-register-hero-from320px.svg"
        alt=""
      />
      <img
        class="hero-from1024px"
        src="imgs/login-or-register-hero-from1024px.svg"
        alt=""
      />
    </div>
    <div class="container">
      <span class="container__title">Sign Up</span>
      <div class="container__main-flex">
        <div class="container__prescription-and-sign-up-or-sign-in-btn-flex">
          <div class="container__prescription">Already have an account?</div>
          <button
            @click="updatePageToSignIn"
            class="container__sign-in-or-sing-up-btn--green"
          >
            Sign In
          </button>
        </div>
        <form @submit.prevent class="container__input-form">
          <input
            placeholder="Your name"
            class="container__input"
            type="text"
            v-model="name"
          />
        </form>
        <form @submit.prevent class="container__input-form">
          <input
            placeholder="Username"
            class="container__input"
            type="text"
            v-model="username"
          />
        </form>
        <form @submit.prevent class="container__input-form">
          <input
            placeholder="Email address"
            class="container__input"
            type="text"
            v-model="email"
          />
        </form>
        <form @submit.prevent class="container__input-form">
          <input
            type="password"
            placeholder="Password"
            class="container__input container__input-password"
            v-model="password"
          />
        </form>
        <button class="container__password-toggle-btn">
          <img
            src="imgs/opened-eye.png"
            alt=""
            class="container__password-opened-eye-icon"
          />
          <img
            src="imgs/closed-eye.png"
            alt=""
            class="container__password-closed-eye-icon"
          />
        </button>
        <div class="container__checkbox-and-forgot-password-btn-flex">
          <div class="container__checkbox-and-text-flex">
            <input
              class="container__checkbox container__checkbox-sign-up"
              type="checkbox"
            />
            <span class="container__checkbox-text"
              >I agree with
              <span class="container__checkbox-text-span">Privacy Policy</span>
              and
              <span class="container__checkbox-text-span"
                >Terms of Use</span
              ></span
            >
          </div>
        </div>
        <div @click="signUp" class="container__sign-in-or-sign-up-btn">
          Sign up
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginOrRegistrationPage",
  data() {
    return {
      isUserRegistered: true,
      name: "",
      email: "",
      username: "",
      password: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("click", (e) => {
        if (e.target.closest(".container__password-toggle-btn")) {
          const passwordInput = document.querySelector(
              ".container__input-password"
            ),
            eyeOpenIcon = document.querySelector(
              ".container__password-opened-eye-icon"
            ),
            eyeClosedIcon = document.querySelector(
              ".container__password-closed-eye-icon"
            );
          if (passwordInput.getAttribute("type") === "password") {
            passwordInput.setAttribute("type", "text");
            eyeOpenIcon.style.display = "block";
            eyeClosedIcon.style.display = "none";
          } else {
            passwordInput.setAttribute("type", "password");
            eyeOpenIcon.style.display = "none";
            eyeClosedIcon.style.display = "block";
          }
        }
      });
    });
  },
  methods: {
    updatePageToSignUp() {
      this.isUserRegistered = !this.isUserRegistered;
    },
    updatePageToSignIn() {
      this.isUserRegistered = !this.isUserRegistered;
    },
    async registerUser(name, email, username, password) {
      try {
        if (!name) {
          console.log("Please enter name.");
        }
        if (!email) {
          console.log("Please enter email.");
        }
        if (!username) {
          console.log("Please enter username.");
        }
        if (!password) {
          console.log("Please enter password.");
        }
        const response = await axios.post(
          "http://localhost:5000/auth/registration",
          {
            name: name,
            email: email,
            username: username,
            password: password,
          }
        );
        if (response) {
          this.isUserRegistered = !this.isUserRegistered;
        }
        console.log(response.data.message);
      } catch (error) {
        if (error.response.status === 400) {
          if (
            error.response.data.message ===
            "User with this email already registered"
          ) {
            console.log("User with this email already registered.");
          } else if (error.response.data.errors[0].msg === "Invalid email") {
            console.log("Invalid email.");
          }
          if (
            error.response.data.message ===
            "Password must be between 4 and 21 characters"
          ) {
            console.log("Password must be between 4 and 21 characters.");
          }
          if (
            error.response.data.message === "User with this name already exists"
          ) {
            console.log("User with this name already exists.");
          }
        } else {
          console.error("Error in registerUser() method:", error);
        }
      }
    },
    async loginUser(username, password) {
      try {
        if (!username) {
          console.log("Please enter username.");
        }
        if (!password) {
          console.log("Please enter password.");
        }
        const response = await axios.post("http://localhost:5000/auth/login", {
          username: username,
          password: password,
        });
        const { token, name } = response.data;
        if (name) {
          localStorage.setItem("name", name);
        }
        if (token) {
          this.$router.push("/");
          window.scrollTo(0, 0);
        }
      } catch (error) {
        if (error.response.status === 400) {
          if (error.response.data.message === "Invalid password") {
            console.log("Invalid password.");
          }
          if (
            error.response.data.message === `User ${username} not found` &&
            username
          ) {
            console.log("User not found.");
          }
          if (
            error.response.data.message ===
            "Password must be between 4 and 21 characters"
          ) {
            console.log("Password must be between 4 and 21 characters.");
          }
        } else {
          console.error("Error in loginUser() method:", error);
        }
      }
    },
    async signIn() {
      try {
        await this.loginUser(this.username, this.password);
      } catch (error) {
        console.error(error);
      }
    },
    async signUp() {
      const checkbox = document.querySelector(".container__checkbox-sign-up");
      if (!checkbox.checked) {
        console.log(
          "Please agree with privacy policy and terms of use before proceeding."
        );
      }
      try {
        await this.registerUser(
          this.name,
          this.email,
          this.username,
          this.password
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.logo-and-hero-flex {
  display: flex;
  flex-direction: column;
}
.logo {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  position: relative;
  margin: 0 auto;
  margin-top: 2rem;
  z-index: 2;
}
.hero-from320px {
  position: relative;
  width: 100%;
  top: -4.2rem;
}
.hero-from1024px {
  display: none;
}
.container {
  padding: 2.5rem 2rem;
  margin-top: -4.2rem;
}
.container__title {
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: $black;
}
.container__main-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.container__prescription-and-sign-up-or-sign-in-btn-flex {
  display: flex;
  gap: 0.25rem;
  margin-top: 1.5rem;
}
.container__prescription {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
}
.container__sign-in-or-sing-up-btn--green {
  @include button;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #38cb89;
}
.container__input {
  @include input;
  width: 100%;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
}
.container__input-form::after {
  content: "";
  position: absolute;
  margin-top: 2rem;
  left: 2.15rem;
  right: 2rem;
  border-bottom: 1px solid rgb(201, 206, 209);
}
.container__password-toggle-btn {
  @include button;
  position: absolute;
  margin-top: 14.9rem;
  right: 2rem;
}
.container__password-toggle-authorization-btn {
  margin-top: 8rem;
}
.container__password-opened-eye-icon {
  display: none;
  width: 24px;
  height: 24px;
}
.container__password-closed-eye-icon {
  width: 24px;
  height: 24px;
}
.container__checkbox-and-forgot-password-btn-flex {
  display: flex;
  justify-content: space-between;
}
.container__checkbox-and-text-flex {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.container__checkbox {
  border: 1px solid #6c7275;
  width: 24px;
  height: 24px;
}
.container__checkbox-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
}
.container__checkbox-text-span {
  font-weight: 600;
  color: $black;
}
.container__forgot-password-btn {
  @include button;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: $black;
}
.container__sign-in-or-sign-up-btn {
  @include button;
  border-radius: 0.5rem;
  background: $black;
  padding: 0.625rem 2.5rem;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 2.5rem 4rem;
  }
  .container__input-form::after {
    left: 4.17rem;
    right: 4rem;
  }
  .container__password-toggle-btn {
    @include button;
    position: absolute;
    margin-top: 14.9rem;
    right: 4rem;
  }
  .container__password-opened-eye-icon {
    display: none;
    width: 24px;
    height: 24px;
  }
  .container__password-closed-eye-icon-auth,
  .container__password-opened-eye-icon-auth {
    margin-top: -12.4rem;
  }
  .container__checkbox-and-forgot-password-btn-flex {
    display: flex;
    justify-content: space-between;
  }
  .container__checkbox-and-text-flex {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .container__checkbox {
    border: 1px solid #6c7275;
    width: 32px;
    height: 32px;
  }
  .container__checkbox-text {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #6c7275;
  }
  .container__checkbox-text-span {
    font-weight: 600;
    color: $black;
  }
  .container__forgot-password-btn {
    @include button;
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: $black;
  }
  .container__sign-in-or-sign-up-btn {
    @include button;
    border-radius: 0.5rem;
    background: $black;
    padding: 0.625rem 2.5rem;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
  }
  /* 1024px = 64em */
  @media (min-width: 64em) {
    .logo-and-hero-flex {
      width: 50%;
    }
    .hero-from320px {
      display: none;
    }
    .hero-from1024px {
      display: block;
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0rem;
      object-fit: cover;
    }
    .container {
      position: absolute;
      width: 50%;
      height: 100%;
      margin-left: 50%;
      top: 0rem;
      margin-top: 0rem;
      padding: 9rem 4rem;
    }
  }

  /* 1440px = 90em */
  @media (min-width: 90em) {
    .container {
      padding: 9rem 6rem;
    }
    .container__input-form::after {
      left: 6.17rem;
      right: 6rem;
    }
    .container__password-toggle-btn {
      right: 6rem;
    }
  }

  /* 1920px = 120em */
  @media (min-width: 120em) {
    .container {
      padding: 9rem 10rem;
    }
    .container__input-form::after {
      left: 10.17rem;
      right: 10rem;
    }
    .container__password-toggle-btn {
      right: 10rem;
    }
  }
}
</style>
