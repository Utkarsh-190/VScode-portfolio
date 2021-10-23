import classes from "./TextAreaHeading.module.css";

function TextAreaHeading(props) {
  return <span className={classes.heading}>{props.name}</span>;
}

export default TextAreaHeading;
