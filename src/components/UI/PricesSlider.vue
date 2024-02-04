<template>
  <div class="container-catalog__slider-flex">
    <div class="container-catalog__slider-range-inputs">
      <input
        type="number"
        min="3.99"
        max="299.00"
        placeholder="3.99"
        class="container-catalog__slider-range-input"
        id="input-0"
        ref="minPrice"
      />
      <div class="container-catalog__slider-range-border"></div>
      <input
        type="number"
        min="3.99"
        max="299.00"
        placeholder="299.00"
        class="container-catalog__slider-range-input"
        id="input-1"
        ref="maxPrice"
      />
    </div>
    <div class="container-catalog__slider-range" id="range-slider"></div>
  </div>
</template>

<script>
import noUiSlider from "nouislider";
export default {
  name: "PricesSlider",
  mounted() {
    const rangeSlider = document.getElementById("range-slider");
    noUiSlider.create(rangeSlider, {
      start: [3.99, 299.0],
      connect: true,
      step: 1,
      range: {
        min: [3.99],
        max: [299.0],
      },
    });

    const input0 = document.getElementById("input-0"),
      input1 = document.getElementById("input-1");
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on("update", (values, handle) => {
      inputs[handle].value = values[handle];
    });

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  },
};
</script>

<style lang="scss">
.container-catalog__slider-flex {
  display: none;
}
/* 1440px = 90em */
@media (min-width: 90em) {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .container-catalog__slider-flex {
    display: block;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    margin-top: 8rem;
  }
  .container-catalog__slider-range {
    width: 259px;
    margin-left: 0rem;
  }
  .container-catalog__slider-range-inputs {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .container-catalog__slider-range-input {
    border: none;
    width: 116px;
    height: 30px;
    border-radius: 0.25rem;
    padding: 0rem 0.875rem;
    border: 1px solid #141718;
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: #141718;
  }
  .container-catalog__slider-range-border {
    width: 19px;
    height: 2px;
    border-radius: 1px;
    background: #141718;
  }
  .noUi-target {
    background-color: #6c7275;
    border: none;
    height: 2px;
  }
  .noUi-connect {
    background-color: #141718;
  }
  .noUi-handle::after,
  .noUi-handle::before {
    display: none;
  }
  .noUi-handle {
    box-shadow: none;
    border-radius: 50%;
    border: 2px solid #141718;
    background-color: #fff;
    cursor: pointer;
  }
  .noUi-base {
    width: 240px;
    margin-left: 15rem;
  }
  .noUi-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -0.6rem;
  }
}
</style>
