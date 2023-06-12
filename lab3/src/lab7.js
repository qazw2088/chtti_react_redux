const array1 = ["hello", "world"];
console.log(typeof array1, Array.isArray(array1));
const [a, b] = array1;
console.log(typeof a, typeof b, a, b);
const [c, , d] = ["Sun", "Mon", "Tue"];
console.log(`c=${c}`, `d=${d}`);

function checkUserIsValid() {
  //...
  //...
  const user = { id: 42, is_verified: true };
  return user;
}

const result = checkUserIsValid();
console.log(typeof result, result, result.id, result.is_verified);

const { id, is_verified } = checkUserIsValid();
console.log(`after destruct, id=${id}, is_verified=${is_verified}`);
const qualifiedEmployees = () => {
  //after some calculation
  return [15, 29, 8, 42, 51];
};
const [n1, n2, n3] = qualifiedEmployees();
console.log(`3rd is ${n3}`);
console.log(`2nd is ${n2}`);
console.log(`1st is ${n1}`);

const getTeamLeader = () => {
  return { name: "Mark", age: 47 };
};
const { name } = getTeamLeader();
const { age } = getTeamLeader();
console.log(`name=${name}, age=${age}`);
