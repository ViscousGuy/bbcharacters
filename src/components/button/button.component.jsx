import React from "react";

const onButtonClick = (props) => {
  return () => {
    props.onButtonClick(props.displayValue);
  };
};

export const Button = (props) => {
  return <button onClick={onButtonClick(props)}>{props.displayValue}</button>;
};
