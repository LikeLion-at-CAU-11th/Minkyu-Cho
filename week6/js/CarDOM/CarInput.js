class RaceList {
  constructor(inputName, inputNum) {
    this.name = inputName;
    this.num = inputNum;
  }
}
const CarInput = (race, input) => {
  if (input.includes(",")) {
    let names = input.split(",");
    for (let i = 0; i < names.length; i++) {
      if (names[i].length > 5) {
        alert("5자 이내로 입력해주세요");
        names = [];
        break;
      }
    }
    if (names.length !== 0) {
      alert("들어갔습니다. 시도할 횟수를 입력하세요");
      return names.forEach((e) => {
        e && race.enroll(new RaceList(e, 0));
      });
    }
  } else {
    if (input.length == 0 || input.length > 5) {
      alert("입력해주시거나 5자 이하로 입력해주세요");
      return;
    } else {
      alert("들어갔습니다. 시도할 횟수를 입력하세요");
      return race.enroll(new RaceList(input, 0));
    }
  }
};

export default CarInput;
