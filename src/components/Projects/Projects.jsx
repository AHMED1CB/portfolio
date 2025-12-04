import { Box } from "@mui/material";
import Heading from "../MainComponents/Heading/Heading";
import Project from "../MainComponents/Project/Project";
import { Language } from "@mui/icons-material";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      icon: <Language />,
      category: "Web App",
      image: "../../src/assets/images/project-0.png",
      title: "bookstore",
      info: "Online Book Store built with PHP and MySQL.",
      tags: ["php", "mysql", "web", "bookstore"],
    },
    {
      icon: <Language />,
      category: "Web App",
      image: "../../src/assets/images/project-3.png",
      title: "youtube-clone-client",
      info: "YouTube Clone built using ReactJs, Material-UI, and Redux.",
      tags: ["react", "javascript", "redux", "web", "clone"],
    },
    {
      icon: <Language />,
      category: "Web App",
      image: "../../src/assets/images/project-1.png",
      title: "codeQuery",
      info: "Q&A platform for developers with voting and badges.",
      tags: ["php", "twig", "web", "qa", "forum"],
    },
    {
      icon: <Language />,
      category: "Web App",
      image: "../../src/assets/images/project-2.png",
      title: "Linko",
      info: "Real-time chat application built with React, Node.js, and MongoDB.",
      tags: ["react", "nodejs", "mongodb", "web", "chat"],
    },
  ];

  return (
    <Box className="projects-page">
      <Heading
        text={
          "A selection of my recent work in web and desktop application development."
        }
        heading={"Featured Projects"}
      />
      <Box className="contents">
        <Box className="projects">
          {projects.map((project) => {
            return (
              <Project
                key={project.title}
                icon={project.icon}
                title={project.title}
                info={project.info}
                tags={project.tags}
                image={project.image}
                category={project.category}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
