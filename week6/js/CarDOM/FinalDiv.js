import CarDiv from "./CarDiv.js";

class FinalDiv {
  constructor(parameter) {
    this.line = new CarDiv("최종 우승자 : ", "flex").node;
    const innerText = new CarDiv(parameter);
    [innerText].forEach((e) => {
      this.line.appendChild(e.node);
    });
    document.body.appendChild(this.line);
  }
}

export default FinalDiv;
