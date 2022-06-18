import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  // initial value for color state
  const [color, setColor] = useState(randomColor);
  // store the color of the Child in the state of the Parent component
  const [childrenColor, setChildrenColor] = useState("#FFF");


  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    // update color state to a new value
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

  // We want to run handleChangeColor() function when either Child component
  // is clicked. So we are going to pass this state changing function as a
  // prop to both Child components.
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
