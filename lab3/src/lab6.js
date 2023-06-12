const numbers = [3, 1, 4, 1, 5, 6];

const newNumbers = [...numbers, 55, 33];

console.log(newNumbers);

const course = {
  name: "react",

  id: "REACT_1",
};

const fullCourse = {
  ...course,

  duration: 35,
};

console.log(fullCourse);

const filter = (...numbers) => {
  return numbers.filter((e) => e >= 10);
};

console.log("filter usage:", filter(5, 10, 2, 3, 4, 100, 37, 2, 9, 3, 4, 7));
