import classes from "./TextArea.module.css";
import TextAreaHeading from "./TextAreaHeading";
import TextPage from "./TextPage";

function TextArea(props) {
  let fileNames = [
    "home.jsx",
    "about.html",
    "contact.css",
    "project.js",
    "articles.json",
    "github.md",
  ];

  let onClickHandler = (event) => {
    // console.log(event.target.innerHTML);
    props.onFileChange(event);
  };

  return (
    <div className={`${classes.textArea} ${props.className}`}>
      <div className={classes.headings} onClick={onClickHandler}>
        {fileNames.map((name) => {
          return (
            <TextAreaHeading
              name={name}
              onClick={onClickHandler}
              page={props.page}
            />
          );
        })}
      </div>

      {<TextPage page={props.page} />}
    </div>
  );
}

export default TextArea;
