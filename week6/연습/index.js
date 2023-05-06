import ToDo from "./DOM/ToDo.js";
import Star from "./star.js";

for (let x = 0; x < 150; x++) {
  new Star();
}

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value.includes(",")) {
      const todos = input.value.split(",");
      todos.forEach((todo) => {
        todo && new ToDo(todo);
      });
    } else {
      new ToDo(input.value);
    }
    input.value = "";
  }
});
