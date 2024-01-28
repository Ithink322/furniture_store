<template>
  <footer class="footer">
    <div class="footer__logo-border-title-and-titles-btns-flex">
      <div class="footer__logo-border-title-flex">
        <span class="footer__logo">3legant.</span>
        <div class="footer__border"></div>
        <span class="footer__title">Gift & Decoration Store</span>
      </div>
      <div class="footer__titles-btns-flex">
        <button class="footer__title-btn">Home</button>
        <button class="footer__title-btn">Shop</button>
        <button class="footer__title-btn">Blog</button>
        <button class="footer__title-btn">Contact Us</button>
      </div>
    </div>
    <div
      class="footer__container-wide-border-and-social-media-icons-and-privacy-policy-and-terms-of-use-and-copyright"
    >
      <div class="footer__wide-border"></div>
      <div
        class="footer__social-media-icons-and-privacy-policy-and-terms-of-use-and-copyright-flex"
      >
        <div class="footer__social-media-icons-and-privacy-policy-flex">
          <div class="footer__social-media-icons-flex">
            <button class="footer__social-media-icons-btn">
              <img src="imgs/instagram-black-icon.svg" alt="" />
            </button>
            <button class="footer__social-media-icons-btn">
              <img src="imgs/facebook-black-icon.svg" alt="" />
            </button>
            <button class="footer__social-media-icons-btn">
              <img src="imgs/youtube-black-icon.svg" alt="" />
            </button>
          </div>
          <div class="footer__privacy-policy-and-terms-of-use-flex">
            <span class="footer__privacy-policy">Privacy Policy</span>
            <span class="footer__terms-of-use">Terms of Use</span>
          </div>
        </div>
        <span class="footer__copyright"
          >Copyright © 2023 3legant. All rights reserved</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style lang="scss">
@import "@/assets/App.scss";
.footer {
  background: #232627;
  padding: 3rem 2rem;
}
.footer__logo-border-title-flex {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}
.footer__logo {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
}
.footer__border {
  width: 24px;
  border: 1px solid #6c7275;
  margin: 0 auto;
}
.footer__title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #e8ecef;
}
.footer__titles-btns-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2.5rem 0rem;
}
.footer__title-btn {
  @include button;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #fefefe;
}
.footer__container-wide-border-and-social-media-icons-and-privacy-policy-and-terms-of-use-and-copyright {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.footer__wide-border {
  width: 100%;
  border: 1px solid #6c7275;
}
.footer__social-media-icons-flex {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.footer__social-media-icons-btn {
  @include button;
}
.footer__privacy-policy-and-terms-of-use-flex {
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  margin-top: 2rem;
}
.footer__privacy-policy,
.footer__terms-of-use {
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fefefe;
}
.footer__copyright {
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #e8ecef;
  text-align: center;
  margin-top: 1.75rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .footer {
    background: $black;
  }
  .footer__logo-border-title-flex {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .footer__border {
    rotate: 90deg;
    margin: 0;
  }
  .footer__logo-border-title-and-titles-btns-flex {
    display: flex;
    justify-content: space-between;
  }
  .footer__titles-btns-flex {
    flex-direction: row;
    gap: 2.5rem;
    margin: 0rem;
  }
  .footer__container-wide-border-and-social-media-icons-and-privacy-policy-and-terms-of-use-and-copyright {
    margin-top: 3.06rem;
  }
  .footer__social-media-icons-and-privacy-policy-and-terms-of-use-and-copyright-flex {
    display: flex;
    align-items: center;
    gap: 1.75rem;
  }
  .footer__social-media-icons-and-privacy-policy-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    order: 2;
  }
  .footer__social-media-icons-flex {
    position: absolute;
    right: 2rem;
  }
  .footer__privacy-policy-and-terms-of-use-flex {
    order: 1;
    margin-top: 0rem;
  }
  .footer__copyright {
    order: 1;
    margin-top: 0rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .footer {
    padding: 3rem 4rem;
  }
  .footer__logo-border-title-flex {
    gap: 2rem;
  }
  .footer__social-media-icons-flex {
    right: 4rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .footer {
    padding: 5rem 10rem 2rem 10rem;
  }
  .footer__social-media-icons-flex {
    right: 10rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .footer {
    padding: 5rem 15.938rem 2rem 15.938rem;
  }
  .footer__social-media-icons-flex {
    right: 15.938rem;
  }
}
</style>
