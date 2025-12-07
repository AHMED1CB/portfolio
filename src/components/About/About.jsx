import { Box, Button, IconButton, Typography } from "@mui/material";
import { GitHub, Instagram, ArrowForward, ViewInAr } from "@mui/icons-material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./about.css";

export default () => {
  const tagRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const heading3Ref = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          heading1Ref.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          heading2Ref.current,
          { opacity: 0, x: -50, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          heading3Ref.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        )
        .fromTo(
          socialsRef.current.children,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );

      const buttons = buttonsRef.current.querySelectorAll("button");
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });

      const socials = socialsRef.current.querySelectorAll("button");
      socials.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });
      });

      gsap.to(tagRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box className="about-page">
      <Box className="contents">
        <span ref={tagRef} className="tag-hire">
          Available for Hire
        </span>

        <Box className="heading-text">
          <Typography ref={heading1Ref} variant="h2">
            Building
          </Typography>
          <Typography ref={heading2Ref} variant="h2" className="colored">
            Digital Experiences
          </Typography>
          <Typography ref={heading3Ref} variant="h2">
            that Matter
          </Typography>
        </Box>

        <Typography ref={descRef} variant="p" className="descreption">
          I'm a Fullstack Web & Electron.js Developer crafting high-performance
          applications for web and desktop.
        </Typography>

        <Box ref={buttonsRef} className="buttons">
          <Button className="btn-projects" endIcon={<ArrowForward />}>
            View Projects
          </Button>
          <Button className="btn-contact">Contact Me</Button>
        </Box>

        <Box ref={socialsRef} className="social-links">
          <IconButton
            onClick={() => window.open("https://github.com/AHMED1CB", "_blank")}
            className="github"
          >
            <GitHub />
          </IconButton>
          <IconButton
            className="instagram"
            onClick={() => window.open("https://instagram.com/8ti5r", "_blank")}
          >
            <Instagram />
          </IconButton>
          <IconButton
            className="codepen"
            onClick={() => window.open("https://codepen.io/ahmed1cb", "_blank")}
          >
            <ViewInAr />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
