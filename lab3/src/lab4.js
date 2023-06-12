class Course {
  constructor() {
    this.duration = 49;
  }
  printDuration() {
    console.log(`duration=${this.duration}`);
  }
}
class ReactCourse extends Course {
  constructor() {
    super();
    this.name = "react";
  }
  printCourse() {
    console.log(`course name=${this.name}`);
  }
}

const c1 = new Course();
c1.printDuration();
console.log(typeof c1, c1);
const c2 = {};
console.log(typeof c2, c2);
const c3 = new ReactCourse();
c3.printDuration();
c3.printCourse();
