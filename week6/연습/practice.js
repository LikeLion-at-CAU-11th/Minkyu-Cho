class ClassRoom {
  constructor() {
    this.Students = [];
  }
  enroll(student) {
    this.Students.push(student);
  }
  clean() {
    this.Students.forEach((student) => {
      student.cleaning();
    });
  }
}

class Student {
  constructor(inputName, inputAge) {
    this.name = inputName;
    this.age = inputAge;
  }
  cleaning() {
    console.log(`${this.name}, 청소할게요`);
  }
}

class WindowCleaning extends Student {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }
  cleaning() {
    console.log(`${this.name} 창문 닦을게요`);
  }
}

class DeskCleaning extends Student {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }
  cleaning() {
    console.log(`${this.name} 책상 닦을게요`);
  }
}

class ToiletCleaning extends Student {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }
  cleaning() {
    console.log(`화장실 하기 싫다....`);
  }
}
const VanVan = new ClassRoom();
const John = new Student("John", 17);
const Amy = new WindowCleaning("Amy", 13);
const Jenny = new DeskCleaning("Jenny", 18);
const Gale = new ToiletCleaning("Gale", 15);
[John, Amy, Jenny, Gale].forEach((e) => {
  VanVan.enroll(e);
});
console.log(VanVan);

VanVan.clean();

//전역 스코프는 모든 곳을 넘나든다... 이걸 해결하기 위해 모듈을 지원하게 된다.
//script type="module" 하면 독립적으로 작동하도록 도와준다.
