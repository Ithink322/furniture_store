export default {
  mounted() {
    /* change background color and img color if user clicked on .container__grid-cols-btn starts */
    const buttons = document.querySelectorAll(".container__grid-cols-btn");
    buttons.forEach((button) => {
      const paths = button.querySelectorAll("path");
      button.addEventListener("click", function () {
        buttons.forEach((b) => {
          const otherPaths = b.querySelectorAll("path");
          if (b !== button) {
            b.style.backgroundColor = "transparent";
            otherPaths.forEach((path) => {
              path.setAttribute("fill", "#6C7275"); // перекрасить остальные изображения в серый
            });
          } else {
            paths.forEach((path) => {
              path.setAttribute("fill", "#141718"); // перекрасить выбранные изображения в чёрный
            });
          }
        });
        button.style.background = "#E8ECEF";
      });
    });
    /* change background color and img color if user clicked on .container__grid-cols-btn ends */
  },
};
