import CarDiv from "./CarDiv.js";

class CarShow {
  constructor(parameter) {
    this.line = new CarDiv("", "flex").node;
    const innerText = new CarDiv(parameter.name + ":");
    const goOrnot = new CarDiv(
      parseInt(Math.random() * 9) >= 4
        ? "-".repeat(++parameter.num)
        : "-".repeat(parameter.num)
    );
    [innerText, goOrnot].forEach((e) => {
      this.line.appendChild(e.node);
    });
    document.body.appendChild(this.line);
  }
}

export default CarShow;
