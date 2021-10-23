// import classes from "./TextAreaHeading.module.css";
import "./TextAreaHeading.css";
import classNames from "classnames";
import html from "../../../public/images/techImages/html_icon.svg";
import css from "../../../public/images/techImages/css_icon.svg";
import js from "../../../public/images/techImages/js_icon.svg";
import json from "../../../public/images/techImages/json_icon.svg";
import md from "../../../public/images/techImages/markdown_icon.svg";
import react from "../../../public/images/techImages/react_icon.svg";

function TextAreaHeading(props) {
  let selected = props.name === props.page;

  // console.log(selected);
  // console.log("name: ", props.name);
  // console.log("page: ", props.page);

  let image;
  if (props.name === "home.jsx") {
    image = <img src={react} />;
  } else if (props.name === "about.html") {
    image = <img src={html} />;
  } else if (props.name === "contact.css") {
    image = <img src={css} />;
  } else if (props.name === "project.js") {
    image = <img src={js} />;
  } else if (props.name === "articles.json") {
    image = <img src={json} />;
  } else if (props.name === "github.md") {
    image = <img src={md} />;
  }

  return (
    <div // className={`${classes.heading} ${true ? "classes.selected" : ""}`}
      className={classNames({
        heading: true,
        selected: selected,
      })}
      // onClick={props.onClick}
    >
      {image}
      <a>{props.name}</a>
    </div>
  );
}

export default TextAreaHeading;
