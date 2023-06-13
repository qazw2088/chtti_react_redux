let number1 = 1;

const number2 = number1;

console.log(`number1=${number1}, number2=${number2}`);

number1 = 888;

console.log(`[2]umber1=${number1}, number2=${number2}`);

const p1 = { name: "Mark" };

const p2 = p1;

const p3 = { ...p1 };

console.log(`p1=${p1.name}, p2=${p2.name}, p3=${p3.name}`);

p2.name = "John";

console.log(`[2]p1=${p1.name}, p2=${p2.name}, p3=${p3.name}`);
