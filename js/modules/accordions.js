export const accordions = () => {
  const characteristicsItems = document.querySelectorAll(
    ".characteristics__item"
  );

  characteristicsItems.forEach((elem) => {
    const ciButton = elem.querySelector(".characteristics__title");
    const ciContent = elem.querySelector(".characteristics__description");

    ciButton.addEventListener("click", () => {
      characteristicsItems.forEach((el) => {
        if (elem === el) return;
        el.querySelector(".characteristics__title").classList.remove("active");
        const btn = el.querySelector(".characteristics__description");
        btn.classList.remove("open");
        btn.style.height = "";
      });

      if (ciContent.classList.contains("open")) {
        ciContent.style.height = "";
      } else {
        ciContent.style.height = ciContent.scrollHeight + "px";
      }
      ciContent.classList.toggle("open");
      ciButton.classList.toggle("active");
    });
  });
};
