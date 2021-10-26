import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.contactPage}>
      <div className={classes.socials}>
        <div>Reach Out Via Socials</div>
        <div>blah blah socials</div>
      </div>

      <div className={classes.form}>
        <div>Or Fill Out The Form</div>
        <div>blah blah form</div>
      </div>
    </div>
  );
}

export default Contact;
