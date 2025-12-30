import { Box } from "@mui/material";
import Heading from "../MainComponents/Heading/Heading";
import Project from "../MainComponents/Project/Project";
import { Language } from "@mui/icons-material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project0Img from "../../assets/images/project-0.png";
import project1Img from "../../assets/images/project-1.png";
import project2Img from "../../assets/images/project-2.png";
import project3Img from "../../assets/images/project-3.png";

import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const headingRef = useRef(null);
  const projectsRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      const projectCards = projectsRef.current.children;
      
      gsap.fromTo(
        projectCards,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      Array.from(projectCards).forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box className="projects-page">
      <Box ref={headingRef}>
        <Heading
          text="A selection of my recent work in web and desktop application development."
          heading="Featured Projects"
        />
      </Box>

      <Box className="contents">
        <Box ref={projectsRef} className="projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;