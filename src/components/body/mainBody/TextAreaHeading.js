import classes from "./TextAreaHeading.module.css";

function TextAreaHeading(props) {
  const handler = (event) => {
    props.onClick(props.name);
  };

  return (
    <span className={classes.heading} onClick={handler}>
      {props.name}
    </span>
  );
}

export default TextAreaHeading;
