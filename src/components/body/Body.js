import { useState } from "react";
import classes from "./Body.module.css";
import ActivityBar from "./activityBar/ActivityBar";
import FileExplorer from "./fileExplorer/FileExplorer";
import TextArea from "./mainBody/TextArea";

function Body() {
  let [page, setPage] = useState("home.jsx");

  let fileChangeHandler = (event) => {
    console.log(event.target.innerHTML);
    setPage(event.target.innerHTML);
  };

  return (
    <div className={classes.body}>
      <ActivityBar
        className={classes.activityBar}
        onFileChange={fileChangeHandler}
        page={page}
      />
      <FileExplorer
        className={classes.fileExplorer}
        onFileChange={fileChangeHandler}
        page={page}
      />
      <TextArea
        className={classes.textArea}
        onFileChange={fileChangeHandler}
        page={page}
      />
    </div>
  );
}

export default Body;
