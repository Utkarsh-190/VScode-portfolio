import classes from "./TextArea.module.css";

function TextArea(props) {
  return <div className={`${classes.textArea} ${props.className}`}>TA</div>;
}

export default TextArea;
