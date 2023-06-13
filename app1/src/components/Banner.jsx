import React from "react";

function Banner(props) {
  return (
    <div>
      <input type="text" onChange={props.inputCallback} value={props.value} />
    </div>
  );
}

export default Banner;
