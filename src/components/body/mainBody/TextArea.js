import { useState } from "react";
import classes from "./TextArea.module.css";
import TextAreaHeading from "./TextAreaHeading";

function TextArea(props) {
  let [page, setPage] = useState("home.jsx");

  let fileNames = [
    "home.jsx",
    "about.html",
    "contact.css",
    "project.js",
    "acticles.json",
    "github.md",
  ];

  let onClickHandler = (event) => {
    setPage(event);
    console.log(page);
  };

  return (
    <div className={`${classes.textArea} ${props.className}`}>
      <div className={classes.headings}>
        {fileNames.map((name) => {
          return <TextAreaHeading name={name} onClick={onClickHandler} />;
        })}
      </div>

      {/* {<TextPage page={page} />} */}
    </div>
  );
}

export default TextArea;
