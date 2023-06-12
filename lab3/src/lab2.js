function displayCourseName(name) {
  console.log(`course name=${name}`);
}
const displayCourseName2 = (name) => {
  console.log(`[2]course name=${name}`);
};
const displayCourseName3 = (name) => {
  console.log(`[3]course name=${name}`);
};
const displayCourseName4 = () => {
  console.log(`[4]course name=CHTTI`);
};
const displayCourseName5 = () => () => {
  console.log("[5] course name = HOF");
};
displayCourseName("React and Redux in action");
displayCourseName2("React and Redux in action");
displayCourseName2();
displayCourseName2("React", "Redux", "in action");
displayCourseName3("React and redux in action");
displayCourseName4();
console.log(typeof displayCourseName5, typeof displayCourseName5());
const f1 = displayCourseName5();
f1();
displayCourseName5()();
