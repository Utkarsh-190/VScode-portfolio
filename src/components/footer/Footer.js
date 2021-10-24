import classes from "./Footer.module.css";
import GitCompareIcon from "../icons/GitComapareIcon";
import WarningIcon from "../icons/WarningIcon";
import ErrorIcon from "../icons/ErrorIcon";
import GitCompareIcon from "../icons/";
import GitCompareIcon from "../icons/GitComapareIcon";
import GitCompareIcon from "../icons/GitComapareIcon";

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.left}>
          <div className={classes.main}>
            <GitCompareIcon />
          </div>
          <div>0</div>
          <div>0</div>
        </div>

        <div className={classes.right}>
          <div>Powered by React.js</div>
          <div>Prettier</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
