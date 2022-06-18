import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  console.log(onChangeColor);

  // invoke onChangeColor and pass in a random color as the argument
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  // * When the div in the Child component is clicked, it will use the
  // onChangeColor variable to determine what function to run
  // * onChangeColor is a prop that is passed down from the Parent
  // component, which references the handleChangeColor function
  // * The handleChangeColor function is the function that will actually
  // run when the div is clicked, and will update state in the Parent component
  // return (
  //   <div
  //     onClick={onChangeColor}
  //     className="child"
  //     style={{ backgroundColor: color }}
  //   />
  // );
  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
