import classes from "./Body.module.css";
import ActivityBar from "./ActivityBar";
import FileExplorer from "./fileExplorer/FileExplorer";
import TextArea from "./mainBody/TextArea";

function Body() {
  return (
    <div className={classes.body}>
      <ActivityBar className={classes.activityBar} />
      <FileExplorer className={classes.fileExplorer} />
      <TextArea className={classes.textArea} />
    </div>
  );
}

export default Body;
