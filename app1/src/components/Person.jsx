import React from "react";

const Person = (props) => {
  console.log(`inside Person, prpos.name=${props.name}`);
  return (
    <div>
      <p>I am {props.name}</p>
      <p>I am {props.age} years old</p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        My job is {props.children}
      </p>
      <p>I am in chtti, I attended {Math.floor(Math.random() * 5)} courses</p>
    </div>
  );
};

export default Person;
