import { Box } from "@mui/material";
import Heading from "../MainComponents/Heading/Heading";
import Project from "../MainComponents/Project/Project";
import { Language } from "@mui/icons-material";

import project0Img from "../../assets/images/project-0.png";
import project1Img from "../../assets/images/project-1.png";
import project2Img from "../../assets/images/project-2.png";
import project3Img from "../../assets/images/project-3.png";

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      icon: <Language />,
      category: "Web App",
      image: project0Img,
      title: "bookstore",
      info: "Online Book Store built with PHP and MySQL.",
      tags: ["php", "mysql", "web", "bookstore"],
    },
    {
      icon: <Language />,
      category: "Web App",
      image: project3Img,
      title: "Codelink",
      info: "A Social Media App Using Php , js And Mysql",
      tags: ["php", "javascript", "mysql", "css", "sql"],
    },
    {
      icon: <Language />,
      category: "Web App",
      image: project1Img,
      title: "codeQuery",
      info: "Q&A platform for developers with voting and badges.",
      tags: ["php", "twig", "web", "qa", "forum"],
    },
    {
      icon: <Language />,
      category: "Web App",
      image: project2Img,
      title: "Linko",
      info: "Real-time chat application built with React, Node.js, and MongoDB.",
      tags: ["react", "nodejs", "mongodb", "web", "chat"],
      externalLink: "https://linko-k9bk.onrender.com",
    },
  ];

  return (
    <Box className="projects-page">
      <Heading
        text="A selection of my recent work in web and desktop application development."
        heading="Featured Projects"
      />

      <Box className="contents">
        <Box className="projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
