<template>
  <main class="container">
    <section class="container__our-mission">
      <h1 class="container__title">
        We believe in sustainable decor. We’re passionate about life at home.
      </h1>
      <span class="container__text"
        >Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present</span
      >
    </section>
    <section class="container__about-us">
      <img class="container__about-us-hero" src="imgs/sales-hero.svg" alt="" />
      <div class="container__about-us-div">
        <div class="container__about-us-div-title-text-flex">
          <span class="container__about-us-div-title">About Us</span>
          <span class="container__about-us-div-text"
            >3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019.<br class="container__about-us-div-text-br" />
            Our customer service is always prepared to support you 24/7</span
          >
        </div>
        <button class="container__about-us-div-btn">
          Shop Now <img src="imgs/arrow-right-black.svg" alt="" />
        </button>
      </div>
    </section>
    <section class="container__contact-us">
      <span class="container__contact-us-title">Contact Us</span>
      <div class="container__contact-us-cards-flex">
        <div class="container__contact-us-card">
          <div class="container__contact-us-card-icon-and-text-flex">
            <img src="imgs/store-icon.svg" alt="" />
            <span class="container__contact-us-card-text">Address</span>
          </div>
          <span class="container__contact-us-card-subtext"
            >234 Hai Trieu, Ho Chi Minh City, Viet Nam</span
          >
        </div>
        <div class="container__contact-us-card">
          <div class="container__contact-us-card-icon-and-text-flex">
            <img src="imgs/call-icon.svg" alt="" />
            <span class="container__contact-us-card-text">Contact Us</span>
          </div>
          <span class="container__contact-us-card-subtext"
            >+84 234 567 890
          </span>
        </div>
        <div class="container__contact-us-card">
          <div class="container__contact-us-card-icon-and-text-flex">
            <img src="imgs/mail-icon.svg" alt="" />
            <span class="container__contact-us-card-text">Email</span>
          </div>
          <span class="container__contact-us-card-subtext"
            >hello@3legant.com
          </span>
        </div>
      </div>
    </section>
    <section class="container__send-a-message">
      <div class="container__send-a-message-map-and-form-flex">
        <iframe
          class="container__send-a-message-how-to-get-there"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.517278631509!2d106.7048196!3d10.7716371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3acf87eaeb%3A0xc969a1975f3be32a!2sBitexco%20Financial%20Tower!5e0!3m2!1sru!2sru!4v1706445918813!5m2!1sru!2sru"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <form class="container__send-a-message-form">
          <div class="container__send-a-message-form-main-flex">
            <div class="container__send-a-message-form-flex">
              <span class="container__send-a-message-title">FULL NAME</span>
              <input
                type="text"
                class="container__send-a-message-input"
                placeholder="Your Name"
              />
            </div>
            <div class="container__send-a-message-form-flex">
              <span class="container__send-a-message-title">EMAIL ADDRESS</span>
              <input
                type="text"
                class="container__send-a-message-input"
                placeholder="Your Email"
              />
            </div>
            <div class="container__send-a-message-form-flex">
              <span class="container__send-a-message-title">MESSAGE</span>
              <textarea
                class="container__send-a-message-textarea"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <button class="container__send-a-message-btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
    <section class="container__advantages">
      <div class="container__advantages-cards-flex">
        <div class="container__advantages-card">
          <img src="imgs/advantage-fast-delivery-icon.svg" alt="" />
          <div class="container__advantages-card-title-and-text-flex">
            <span class="container__advantages-card-title">Free Shipping</span>
            <span class="container__advantages-card-text"
              >Order above $200</span
            >
          </div>
        </div>
        <div class="container__advantages-card">
          <img src="imgs/advantage-money-back-icon.svg" alt="" />
          <div class="container__advantages-card-title-and-text-flex">
            <span class="container__advantages-card-title">Money-back</span>
            <span class="container__advantages-card-text"
              >30 days guarantee</span
            >
          </div>
        </div>
        <div class="container__advantages-card">
          <img src="imgs/advantage-lock-icon.svg" alt="" />
          <div class="container__advantages-card-title-and-text-flex">
            <span class="container__advantages-card-title"
              >Secure Payments</span
            >
            <span class="container__advantages-card-text"
              >Secured by Stripe</span
            >
          </div>
        </div>
        <div class="container__advantages-card">
          <img src="imgs/advantage-call-icon.svg" alt="" />
          <div class="container__advantages-card-title-and-text-flex">
            <span class="container__advantages-card-title">24/7 Support</span>
            <span class="container__advantages-card-text"
              >Phone and Email support</span
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 2rem 2rem 0rem 2rem;
}
.container__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: $black;
  line-height: 2.125rem;
  margin: 0rem;
  margin-bottom: 1.5rem;
}
.container__text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: $black;
}
.container__about-us {
  margin: 2.5rem 0rem;
}
.container__about-us-hero {
  width: 100%;
}
.container__about-us-div {
  background: #f3f5f7;
  margin-top: -0.3rem;
  padding: 4rem 1rem;
}
.container__about-us-div-title-text-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__about-us-div-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #121212;
}
.container__about-us-div-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #343839;
}
.container__about-us-div-btn {
  @include button;
  gap: 0.25rem;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #121212;
}
.container__contact-us-title {
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #121212;
  text-align: center;
}
.container__contact-us-cards-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.5rem 0rem;
}
.container__contact-us-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #f3f5f7;
}
.container__contact-us-card img {
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
.container__contact-us-card-icon-and-text-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container__contact-us-card-text {
  display: block;
  font-family: "Inter", sans-serif;
  line-height: 1rem;
  font-weight: 700;
  color: #6c7275;
  text-align: center;
}
.container__contact-us-card-subtext {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $black;
  display: block;
  text-align: center;
}
.container__send-a-message-how-to-get-there {
  width: 100%;
}
.container__send-a-message-form-main-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}
.container__send-a-message-form-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container__send-a-message-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6c7275;
}
.container__send-a-message-input {
  @include input;
  border: 1px solid #cbcbcb;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
}
.container__send-a-message-textarea {
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #cbcbcb;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #6c7275;
}
.container__send-a-message-btn {
  @include button;
  padding: 0.5rem 2.5rem;
  border-radius: 0.5rem;
  background: $black;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  margin: 0 auto;
}
.container__advantages {
  position: relative;
  left: -2rem;
  width: calc(100% + 4rem);
  margin-top: 2.5rem;
  background: #f3f5f7;
  padding: 2rem;
}
.container__advantages-cards-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.container__advantages-card {
  width: 45.3%;
}
.container__advantages-card-title-and-text-flex {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.container__advantages-card-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
.container__advantages-card-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #6c7275;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 2rem 2.5rem 0rem 2.5rem;
  }

  .container__title {
    font-size: 2.5rem;
  }
  .container__contact-us-title {
    font-size: 2.5rem;
  }
  .container__contact-us-cards-flex {
    flex-direction: row;
    gap: 1rem;
  }
  .container__contact-us-card {
    width: 33%;
  }
  .container__send-a-message-map-and-form-flex {
    display: flex;
    gap: 1.5rem;
  }
  .container__send-a-message-how-to-get-there {
    order: 2;
  }
  .container__send-a-message-form-main-flex {
    margin-top: 0rem;
  }
  .container__advantages {
    left: -2.5rem;
    width: calc(100% + 5rem);
  }
  .container__advantages-card {
    padding: 1rem 2rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container__title {
    font-size: 2.5rem;
  }
  .container__about-us {
    display: flex;
  }
  .container__about-us-div {
    padding: 4rem 4.5rem;
    margin-top: 0rem;
  }
  .container__about-us-div-title {
    font-size: 2.5rem;
  }
  .container__about-us-div-text {
    font-size: 1rem;
  }
  .container__send-a-message-btn {
    margin: 0rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 2rem 10rem 0rem 10rem;
  }
  .container__title {
    font-size: 3.375rem;
    line-height: 3.625rem;
  }
  .container__about-us-div {
    padding: 4rem 25rem 4rem 4.5rem;
  }
  .container__send-a-message-form-main-flex {
    gap: 1.5rem;
    width: 500px;
  }
  .container__advantages {
    left: -10rem;
    width: calc(100% + 20rem);
    padding: 1rem 10rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    padding: 2rem 15.938rem 0rem 15.938rem;
  }
  .container__title {
    font-size: 3.375rem;
    line-height: 3.625rem;
  }
  .container__about-us-div {
    padding: 4rem 25rem 4rem 4.5rem;
  }
  .container__send-a-message-form-main-flex {
    gap: 1.5rem;
    width: 500px;
  }
  .container__advantages {
    left: -15.938rem;
    width: calc(100% + 31.876rem);
    padding: 1rem 15.938rem;
  }
}
</style>
