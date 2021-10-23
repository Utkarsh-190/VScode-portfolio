import classes from "./TextArea.module.css";
import TextAreaHeading from "./TextAreaHeading";

function TextArea(props) {
  let fileNames = [
    "home.jsx",
    "about.html",
    "contact.css",
    "project.js",
    "acticles.json",
    "github.md",
  ];

  return (
    <div className={`${classes.textArea} ${props.className}`}>
      <div className={classes.headings}>
        {fileNames.map((name) => {
          return <TextAreaHeading name={name} />;
        })}
      </div>
    </div>
  );
}

export default TextArea;
