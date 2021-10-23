import { useState } from "react";
import classes from "./TextArea.module.css";
import TextAreaHeading from "./TextAreaHeading";
import TextPage from "./TextPage";

function TextArea(props) {
  let [page, setPage] = useState("home.jsx");
  let [selected, setSelected] = useState(false);

  let fileNames = [
    "home.jsx",
    "about.html",
    "contact.css",
    "project.js",
    "articles.json",
    "github.md",
  ];

  let onClickHandler = (event) => {
    setPage(event.target.innerHTML);
    console.log(event.target.innerHTML);
  };

  return (
    <div className={`${classes.textArea} ${props.className}`}>
      <div className={classes.headings}>
        {fileNames.map((name) => {
          return (
            <TextAreaHeading name={name} onClick={onClickHandler} page={page} />
          );
        })}
      </div>

      {<TextPage page={page} />}
    </div>
  );
}

export default TextArea;
