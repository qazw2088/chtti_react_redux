import React, { useState } from "react";
import "./Person.css";
import styled from "styled-components";
// import Radium from "radium";

const StyledDiv = styled.div`
  background-color: aqua;
  margin: auto;
  width: 60%;
  border: 3px solid #ff00ff;
  box-shadow: 0 2px 3px #ffcc00;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) : {
    width: 400px;
  }
`;

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
    <StyledDiv>
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
    </StyledDiv>
  );
};

export default Person;
