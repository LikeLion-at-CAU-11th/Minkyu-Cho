import CarCount from "./CarDOM/CarCount.js";
import CarInput from "./CarDOM/CarInput.js";
import CarShow from "./CarDOM/CarShow.js";
import CarList from "./CarDOM/Carlist.js";

const input = document.querySelector("#name");
const carName = document.querySelector("#carName");
const trial = document.querySelector("#trial");
const num = document.querySelector("#num");
let race = new CarList();

carName.addEventListener("click", () => {
  CarInput(race, input.value);
});

trial.addEventListener("click", () => {
  if (isNaN(parseInt(num.value)) || num.value.length == 0) {
    alert("숫자를 입력해주세요");
    num.value = "";
  } else {
    for (let i = 0; i < parseInt(num.value); i++) {
      for (let j = 0; j < race.Cars.length; j++) {
        const cars = race.Cars[j];
        new CarShow(cars);
      }
      document.body.appendChild(document.createElement("br"));
    }
    CarCount(race);
    document.body.appendChild(document.createElement("br"));
    input.value = "";
    num.value = "";
    race = new CarList();
  }
});
