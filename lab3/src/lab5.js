class Course {
  duration = 49;
  printDuration = () => {
    console.log(`duration=${this.duration}`);
  };
}

class ReactCourse extends Course {
  name = "React";
  printCourse = () => {
    console.log(`course name =${this.name}`);
  };
}

const c1 = new Course();
c1.printDuration();
const c2 = new ReactCourse();
c2.printDuration();
c2.printCourse();
