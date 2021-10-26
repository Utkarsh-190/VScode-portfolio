import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.contactPage}>
      <div className={classes.socials}>
        <div>Reach Out Via Socials</div>
        <div>
          <div>
            <span>.socials </span>
            {"{"}
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;website:{" "}
            <a href="https://www.google.com" target="_blank">
              utkarsh.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;email:{" "}
            <a href="mailto:utkarshtyagi62@gmail.com" target="_blank">
              utkarshtyagi62@gmail.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;github:{" "}
            <a href="https://github.com/Utkarsh-190" target="_blank">
              Utkarsh-190
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/utkarsh-tyagi-190/"
              target="_blank"
            >
              utkarsh.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;twitter:{" "}
            <a href="https://twitter.com/_utkarsh_tyagi" target="_blank">
              _utkarsh_tyagi
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;website:{" "}
            <a href="https://www.google.com" target="_blank">
              utkarsh.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;website:{" "}
            <a href="https://www.google.com" target="_blank">
              utkarsh.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;website:{" "}
            <a href="https://www.google.com" target="_blank">
              utkarsh.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;website:{" "}
            <a href="https://www.google.com" target="_blank">
              utkarsh.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;website:{" "}
            <a href="https://www.google.com" target="_blank">
              utkarsh.com
            </a>
            ;
          </div>

          <div>{"}"}</div>
        </div>
      </div>

      <div className={classes.form}>
        <div>Or Fill Out The Form</div>
        <div>blah blah form</div>
      </div>
    </div>
  );
}

export default Contact;
