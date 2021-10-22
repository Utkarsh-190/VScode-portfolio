import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.left}>
          <div>main</div>
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
