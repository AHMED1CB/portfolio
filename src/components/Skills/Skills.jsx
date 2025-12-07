import { Box, Typography } from "@mui/material";
import "./Skills.css";
import Heading from "../MainComponents/Heading/Heading";
import Progress from "../MainComponents/Progress/Progress";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headingRef = useRef(null);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);

  const frontendSkills = [
    { name: "ReactJs", value: 90 },
    { name: "Typescript", value: 60 },
    { name: "Tailwind CSS", value: 90 },
    { name: "Material UI", value: 80 },
  ];

  const backendSkills = [
    { name: "Node.js / Express", value: 85 },
    { name: "ElectronJs", value: 75 },
    { name: "Laravel", value: 85 },
  ];

  const devopsSkills = [{ name: "Git / Github", value: 90 }];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      const containers = [container1Ref.current, container2Ref.current, container3Ref.current];
      
      containers.forEach((container, index) => {
        
        const title = container.querySelector(".progress-title");
        gsap.fromTo(
          title,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        
        const progressItems = container.querySelectorAll(".progress-items > *");
        gsap.fromTo(
          progressItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        
        Array.from(progressItems).forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, {
              x: 10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          item.addEventListener("mouseleave", () => {
            gsap.to(item, {
              x: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      });

      
      containers.forEach((container) => {
        container.addEventListener("mouseenter", () => {
          gsap.to(container, {
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        container.addEventListener("mouseleave", () => {
          gsap.to(container, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box className="skills-page">
      <Box ref={headingRef}>
        <Heading
          text="A breakdown of my technical skills and proficiency levels across different domains."
          heading="Technical Proficiency"
        />
      </Box>

      <Box className="contents">
        <Box ref={container1Ref} className="progress-container">
          <Typography variant="h2" className="progress-title">
            Frontend Development
          </Typography>

          <Box className="progress-items">
            {frontendSkills.map((item, i) => (
              <Progress key={i} progress={item.value} name={item.name} />
            ))}
          </Box>
        </Box>

        <Box ref={container2Ref} className="progress-container">
          <Typography variant="h2" className="progress-title">
            Backend & Desktop
          </Typography>

          <Box className="progress-items">
            {backendSkills.map((item, i) => (
              <Progress key={i} progress={item.value} name={item.name} />
            ))}
          </Box>
        </Box>

        <Box ref={container3Ref} className="progress-container">
          <Typography variant="h2" className="progress-title">
            Tools & DevOps
          </Typography>

          <Box className="progress-items">
            {devopsSkills.map((item, i) => (
              <Progress key={i} progress={item.value} name={item.name} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;