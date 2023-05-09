const url = "../data/data.json";
const container = document.getElementById("container");

function fetchData() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      response.map((el, index) => {
        const list = document.createElement("div");
        if (index == 12) {
          list.innerHTML = `제 이름은 ${el.name}이고, 저는${el.state}입니다. 좋아하는 과일은 ${el.fruit}이 아닌데..`;
        } else {
          list.innerHTML = `제 이름은 ${el.name}이고, 저는${el.state}입니다. 좋아하는 과일은 ${el.fruit}입니다`;
        }
        container.appendChild(list);
        console.log(el);
      });
    })
    .catch((error) => {
      console.log(error);
      container.innerText = "에러가 나타났다.";
    });
}
