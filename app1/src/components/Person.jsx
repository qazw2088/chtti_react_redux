import React, { useState } from "react";
import "./Person.css";

const Person = (props) => {
  //let publisher = "marvel studio"
  const [vendor, setVendor] = useState({
    publisher: "marvel studio",
    studio: "Disney",
    deliber: "Uber",
    snack: "Mos Burger",
  });
  const switchVendorHandler = () => {
    setVendor({
      ...vendor,
      publisher: "DC comics",
    });
  };
  const showVendor = () => console.log("vendor=", vendor);
  return (
    <div className="Person">
      <h3>
        Publisher={vendor.publisher}, studio={vendor.studio}
      </h3>
      <button onClick={switchVendorHandler}>Change league</button>
      <button onClick={showVendor}>show vendor</button>
      <h1 onClick={props.clickCallback}>I am {props.name}</h1>
      <p>I am {props.age} years old</p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        My job is {props.children}
      </p>
      <p>I am in chtti, I attended {Math.floor(Math.random() * 5)} courses</p>
    </div>
  );
};

export default Person;
