import classes from "./FileExplorerItem.module.css";

function FileExplorerItem(props) {
  return <button className={classes.fileItem}>{props.name}</button>;
}

export default FileExplorerItem;
