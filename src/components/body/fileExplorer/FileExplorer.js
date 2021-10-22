import classes from "./FileExplorer.module.css";
import FileExplorerItem from "./FileExplorerItem";

function FileExplorer(props) {
  let fileNames = [
    "home.jsx",
    "about.html",
    "contact.css",
    "project.js",
    "acticles.json",
    "github.md",
  ];

  return (
    <div className={`${classes.fileExplorer} ${props.className}`}>
      <div className={classes.explorerHead}>EXPLORER</div>
      <div className={classes.portfolioDropDown}>PORTFOLIO</div>

      <div className={classes.fileItems}>
        {fileNames.map((name) => {
          return <FileExplorerItem name={name} />;
        })}
      </div>
    </div>
  );
}

export default FileExplorer;
