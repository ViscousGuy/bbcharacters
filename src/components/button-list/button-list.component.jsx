import React from "react";
import { Button } from "./../button/button.component";

import "../button-list/button-list.styles.css";
export const ButtonList = (props) => {
  let rows = [];
  let totalButtons = Math.ceil(props.totalCharacters / 10);
  let onButtonClick = props.onButtonClick;

  for (let i = 1; i <= totalButtons; i++) {
    rows.push(
      <Button displayValue={i} key={i} onButtonClick={onButtonClick} />
    );
  }

  return <div className="button-list">{rows}</div>;
};
