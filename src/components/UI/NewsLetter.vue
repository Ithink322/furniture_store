<template>
  <section class="container__Newsletter">
    <img src="imgs/email-back.svg" alt="" class="container__Newsletter-hero" />
    <div class="container__Newsletter-titles-form-flex">
      <div class="container__Newsletter-titles-flex">
        <span class="container__Newsletter-title">Join Our Newsletter</span>
        <span class="container__Newsletter-subtitle">
          Sign up for deals, new products and promotions
        </span>
      </div>
      <form class="container__Newsletter-form">
        <div class="container__Newsletter-form-icon-and-input-btn-flex">
          <img
            class="container__Newsletter-form-icon"
            src="imgs/email-icon.svg"
            alt=""
          />
          <input
            class="container__Newsletter-form-input"
            type="text"
            placeholder="Email address"
          />
          <button class="container__Newsletter-form-btn">Signup</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsLetter",
};
</script>

<style lang="scss">
@import "@/assets/App.scss";
.container__Newsletter {
  position: relative;
  left: -2rem;
  width: calc(100% + 4rem);
  background: #f2f4f6;
  padding: 5.9375rem 2rem;
}
.container__Newsletter-hero {
  display: none;
}
.container__Newsletter-titles-form-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.container__Newsletter-titles-flex {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
}
.container__Newsletter-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: $black;
  white-space: nowrap;
}
.container__Newsletter-subtitle {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $black;
}
.container__Newsletter-form {
  border-bottom: 1px solid rgba(108, 114, 117, 0.5);
  padding-bottom: 15px;
}
.container__Newsletter-form-icon-and-input-btn-flex {
  display: flex;
  gap: 0.5rem;
}
.container__Newsletter-form-input {
  @include input;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #6c7275;
  width: 64%;
}
.container__Newsletter-form-btn {
  position: absolute;
  right: 2rem;
  @include button;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #6c7275;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container__Newsletter {
    left: -2.5rem;
    width: calc(100% + 5rem);
    padding: 5.9375rem 14rem;
  }
  .container__Newsletter-form-btn {
    right: 14rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container__Newsletter {
    padding: 0rem 20rem 0rem 20rem;
  }
  .container__Newsletter-hero {
    display: block;
    position: relative;
    left: -20rem;
    width: calc(100% + 40rem);
  }
  .container__Newsletter-form-btn {
    right: 20rem;
  }
  .container__Newsletter-titles-flex {
    margin-top: -12rem;
    z-index: 2;
  }
  .container__Newsletter-form {
    z-index: 2;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container__Newsletter-hero {
    left: -27.5rem;
    width: calc(100% + 55rem);
  }
  .container__Newsletter-titles-flex {
    margin-top: -15rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container__Newsletter {
    padding: 0rem 30rem 0rem 30rem;
  }
  .container__Newsletter-form-btn {
    right: 30rem;
  }
  .container__Newsletter-hero {
    left: -43.45rem;
    width: calc(100% + 86.9rem);
  }
  .container__Newsletter-titles-flex {
    margin-top: -15rem;
  }
}
</style>
