import FinalDiv from "./FinalDiv.js";

const CarCount = (race) => {
  const arr = [];
  for (let i = 0; i < race.Cars.length; i++) {
    arr.push(race.Cars[i].num);
  }
  const count = Math.max(...arr);
  const indexes = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === count) {
      indexes.push(race.Cars[index].name);
    }
  }
  return new FinalDiv(indexes);
};

export default CarCount;
