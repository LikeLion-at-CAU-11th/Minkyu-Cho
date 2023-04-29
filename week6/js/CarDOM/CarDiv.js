import CarDOM from "./CarDOM.js";

class CarDiv extends CarDOM {
  constructor(innerText, className) {
    super("div", innerText, className);
  }
}

export default CarDiv;
