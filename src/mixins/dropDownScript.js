export default {
  mounted() {
    const dropDownBtn = document.querySelector(".dropdown__button"),
      dropDownList = document.querySelector(".dropdown__list"),
      dropDownListItems = document.querySelectorAll(".dropdown__list-item"),
      dropdownText = document.querySelector(".dropdown__button-text");
    const slider = document.querySelector(".container-catalog__slider-flex"),
      apllyFiltersBtn = document.querySelector(".container__apply-filters-btn");
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.add("dropdown__button--active");
      if (slider && apllyFiltersBtn) {
        slider.classList.toggle("container__prices-slider-styles-from1440px");
        apllyFiltersBtn.classList.toggle(
          "container__apply-filters-btn-styles-from1440px"
        );
      }
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
