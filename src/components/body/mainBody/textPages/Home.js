import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.homePage}>
      <div className={classes.background}>I BUILD WEBSITE</div>

      <div className={classes.foreground}>
        <div className={classes.intro}>
          <div>UTKARSH TYAGI</div>
          <div>FRONTEND WEB DEVELOPER</div>
          <div className={classes.buttons}>
            <button>View Work</button>
            <button>Contact Me</button>
          </div>
        </div>
        <div className={classes.design}>Design</div>
      </div>
    </div>
  );
}

export default Home;
