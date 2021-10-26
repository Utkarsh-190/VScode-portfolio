import classes from "./ProjectCard.module.css";
import Tag from "./Tag";

function ProjectCard(props) {
  return (
    <div className={classes.projectCard}>
      <img src="" alt="project image" />
      <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>

        <div className={classes.tags}>
          {props.project.tags.map((tag) => {
            return <Tag tag={tag} />;
          })}
        </div>

        <div className={classes.links}>
          <a href={props.project.links.source}>Source Code</a>
          <a href={props.project.links.live}>Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
