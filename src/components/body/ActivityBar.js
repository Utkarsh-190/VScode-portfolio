import classes from "./ActivityBar.module.css";

function ActivityBar(props) {
  return <div className={`${classes.activityBar} ${props.className}`}>AB</div>;
}

export default ActivityBar;
