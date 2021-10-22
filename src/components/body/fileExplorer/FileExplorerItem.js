import classes from "./FileExplorerItem.module.css";

function FileExplorerItem(props) {
  return <div className={classes.fileItem}>{props.name}</div>;
}

export default FileExplorerItem;
