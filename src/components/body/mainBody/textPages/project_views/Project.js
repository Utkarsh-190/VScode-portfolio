import classes from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import expenseImage from "../../../../../public/images/projects images/purple_color_money_symbol.jpg";
import movieImage from "../../../../../public/images/projects images/blue_color_movie_symbol.jpg";
import forwardImage from "../../../../../public/images/projects images/red_color_shopping_cart.png";
import galleryImage from "../../../../../public/images/projects images/grey_color_camera_symbol.png";

function Project() {
  let projectsData = [
    {
      title: "Expense Tracker",
      description: "Website to manage your expenses",
      image: expenseImage,
      tags: ["react", "html", "css", "javascript"],
      links: {
        source: "https://github.com/Utkarsh-190/Expense-Tracker",
        live: "#",
      },
    },
    {
      title: "MovieInfo",
      description:
        "Website to search for movies and get all details about movie",
      image: movieImage,
      tags: ["javascript", "html", "css", "axios", "jquery", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/MovieInfo",
        live: "https://utkarsh-190.github.io/MovieInfo/",
      },
    },
    {
      title: "Forward",
      description: "Developed frontend of website to buy products online",
      image: forwardImage,
      tags: ["javascript", "html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Productathon",
        live: "https://utkarsh-190.github.io/Productathon/",
      },
    },
    {
      title: "Image Gallery",
      description: "Website to showcase your photography skills",
      image: galleryImage,
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
