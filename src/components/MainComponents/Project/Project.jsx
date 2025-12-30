import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Project.css";
import { GitHub, OpenInNew } from "@mui/icons-material";

const Project = ({
  icon,
  category,
  image,
  title,
  info,
  tags,
  externalLink = "",
}) => {
  const projectRef = useRef(null);
  const imageRef = useRef(null);
  const actionsRef = useRef(null);
  const tagsRef = useRef(null);

  const openRepo = () => {
    let link = `https://github.com/AHMED1CB/${title}`;
    window.open(link, "_blank", "noopener");
  };

  const openLink = () => {
    if (externalLink) {
      window.open(externalLink, "_blank", "noopener");
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const project = projectRef.current;
      const img = imageRef.current;
      const actions = actionsRef.current;
      const tags = tagsRef.current?.children;

      project.addEventListener("mouseenter", () => {
        gsap.to(project, {
          y: -8,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(img, {
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(actions.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });

        if (tags) {
          gsap.to(tags, {
            y: -3,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          });
        }
      });

      project.addEventListener("mouseleave", () => {
        gsap.to(project, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(img, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(actions.children, {
          opacity: 0,
          y: -10,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.in",
        });

        if (tags) {
          gsap.to(tags, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      const buttons = actions.querySelectorAll("button");
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.15,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });
      });

      gsap.set([project, img, tags?.children], { y: 0, scale: 1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={projectRef} className="project">
      <Box className="project-head">
        <Box ref={actionsRef} className="actions">
          {externalLink.trim() && (
            <IconButton className="open-external" onClick={openLink}>
              <OpenInNew />
            </IconButton>
          )}
          <IconButton className="open-external" onClick={openRepo}>
            <GitHub />
          </IconButton>
        </Box>
        <Box className="project-category">
          {icon} {category}
        </Box>

        <Avatar ref={imageRef} src={image} className="project-image" />
      </Box>

      <Box className="project-body">
        <Typography variant="h3" className="project-title">
          {title}
        </Typography>

        <Typography variant="p" className="project-info">
          {info}
        </Typography>
      </Box>

      <Box className="project-footer">
        <Box ref={tagsRef} className="project-tags">
          {tags.map((tag) => {
            return (
              <Typography key={tag} component="span" className="project-tag">
                {tag}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
