let x1 = 5;
const x2 = 5;
x1 += 1;
console.log(`x1=${x1}`);
//x2 += 1
console.log(`x2=${x2}`);
let y1 = { age: 5 };
const y2 = { age: 5 };
console.log(`y1.age=${y1.age}, y2.age=${y2.age}`);
y1.age = 6;
y2.age = 7;
console.log(`[2]y1.age=${y1.age}, y2.age=${y2.age}`);
y1 = { name: "Mark" };
console.log(`[3] now y1.name=${y1.name}`);
y2 = { name: "John" };
