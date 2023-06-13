import React, { useState } from "react";

const Person = (props) => {
  // let publisher = "marvel studio";
  const [vendor, setVendor] = useState({ publisher: "marvel studio" });
  const switchVendorHandler = () => {
    console.log("original publisher=", vendor.publisher);
    // vendor.publisher = "DC commic"; //WRONG!!!!
    setVendor({ publisher: "DC commic" });
    console.log("after change, publisher=", vendor.publisher);
  };
  console.log(`inside Person, prpos.name=${props.name}`);
  return (
    <div>
      <h3>Publisher={vendor.publisher}</h3>
      <button onClick={switchVendorHandler}>Change league</button>
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
