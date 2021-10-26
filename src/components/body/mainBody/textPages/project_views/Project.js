import classes from "./Project.module.css";
import ProjectCard from "./ProjectCard";

function Project() {
  let projectsData = [
    {
      title: "Expense Tracker",
      description: "Website to manage your expenses",
      tags: ["react"],
      links: {
        source: "https://github.com/Utkarsh-190/Expense-Tracker",
        live: "#",
      },
    },
    {
      title: "MovieInfo",
      description:
        "Website to search for movies and get all details about movie",
      tags: ["javascript", "html", "css", "axios", "jquery", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/MovieInfo",
        live: "https://utkarsh-190.github.io/MovieInfo/",
      },
    },
    {
      title: "Forward",
      description: "Developed frontend of website to buy products online",
      tags: ["javascript", "html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Productathon",
        live: "https://utkarsh-190.github.io/Productathon/",
      },
    },
    {
      title: "Image Gallery",
      description: "Website to showcase your photography skills",
      tags: ["html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Image-Gallery",
        live: "https://utkarsh-190.github.io/Image-Gallery/",
      },
    },
    {
      title: "Image Gallery",
      description: "Website to showcase your photography skills",
      tags: ["html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Image-Gallery",
        live: "https://utkarsh-190.github.io/Image-Gallery/",
      },
    },
    {
      title: "Image Gallery",
      description: "Website to showcase your photography skills",
      tags: ["html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Image-Gallery",
        live: "https://utkarsh-190.github.io/Image-Gallery/",
      },
    },
    {
      title: "Image Gallery",
      description: "Website to showcase your photography skills",
      tags: ["html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Image-Gallery",
        live: "https://utkarsh-190.github.io/Image-Gallery/",
      },
    },
    {
      title: "Image Gallery",
      description: "Website to showcase your photography skills",
      tags: ["html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Image-Gallery",
        live: "https://utkarsh-190.github.io/Image-Gallery/",
      },
    },
  ];
  return (
    <div className={classes.projectPage}>
      {projectsData.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Project;
