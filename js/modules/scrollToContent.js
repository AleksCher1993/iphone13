//Плавный скролинг до контента(sstc- "scroll-smoth-to-content")

//Обязательно подключить по cdn seamless-scroll-polyfill для плавного скролинга для Большинства браузеров

//установить ссылкам для плавного скролинга дата атрибут data-sstc и присвоить класс контента data-sstc=".content" или
//присвоить id контента data-sstc="#content"

//Контенту установить класс например class="content" или id="content"

//Все скрипт находит дата атрибут и скролит на контент где установлен данный класс или id

export const scrollToContent = () => {
  const dataSetElement = document.querySelectorAll("[data-sstc]");
  seamless.polyfill();

  if (dataSetElement) {
    dataSetElement.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        seamless.elementScrollIntoView(
          document.querySelector(elem.dataset.sstc),
          {
            behavior: "smooth",
            block: "start",
          }
        );
      });
    });
  } else console.log("not element");
};
