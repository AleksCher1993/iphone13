export const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Плохи дела!!!");
      }
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => console.error(error.message))
    .finally(() => console.log("Finally"));
};
