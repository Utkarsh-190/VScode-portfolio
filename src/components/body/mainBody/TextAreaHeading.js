import { useState } from "react";
import classes from "./TextAreaHeading.module.css";

function TextAreaHeading(props) {
  // let [selected, setSelected] = useState(false);

  return (
    <span
      className={`
        ${classes.heading} 
        ${props.page == props.name ? "classes.selected" : ""} 
        ${2 > 1 ? "classes.yes" : "classes.no"}
      `}
      onClick={props.onClick}
    >
      {props.name}
    </span>
  );
}

export default TextAreaHeading;
