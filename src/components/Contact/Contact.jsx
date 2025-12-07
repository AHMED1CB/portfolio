import { Box, Button, Typography } from "@mui/material";
import "./Contact.css";
import Heading from "../MainComponents/Heading/Heading";
import {
  EmailOutlined,
  GitHub,
  Instagram,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headingRef = useRef(null);
  const emailBoxRef = useRef(null);
  const locationBoxRef = useRef(null);
  const socialHeadingRef = useRef(null);
  const socialLinksRef = useRef(null);

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

      
      gsap.fromTo(
        emailBoxRef.current,
        { opacity: 0, x: -100, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: emailBoxRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      gsap.fromTo(
        locationBoxRef.current,
        { opacity: 0, x: -100, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: locationBoxRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      gsap.fromTo(
        socialHeadingRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      const buttons = socialLinksRef.current.querySelectorAll("button");
      gsap.fromTo(
        buttons,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialLinksRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      const infoBoxes = [emailBoxRef.current, locationBoxRef.current];
      infoBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
          gsap.to(box, {
            scale: 1.03,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(box.querySelector(".icon"), {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });

        box.addEventListener("mouseleave", () => {
          gsap.to(box, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(box.querySelector(".icon"), {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });
      });

      
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.08,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(btn.querySelector("svg"), {
            x: 3,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(btn.querySelector("svg"), {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      
      gsap.to(emailBoxRef.current.querySelector(".icon"), {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(locationBoxRef.current.querySelector(".icon"), {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box className="contact-page">
      <Box ref={headingRef}>
        <Heading
          text="Have a project in mind or want to discuss a collaboration? I'd love to hear from you.Email Me"
          heading="Get in Touch"
        />
      </Box>

      <Box className="contents">
        <Box className="info">
          <Box ref={emailBoxRef} className="email">
            <Box className="icon">
              <EmailOutlined className="inner-icon" />
            </Box>
            <Box className="text">
              <Typography variant={"h4"} className="info-heading">
                Email Me
              </Typography>
              <Typography component={"p"} className="info-desc">
                For general inquiries and collaborations
              </Typography>

              <Typography component={"span"} className="info-data">
                contact@example.com
              </Typography>
            </Box>
          </Box>

          <Box ref={locationBoxRef} className="location">
            <Box className="icon">
              <LocationOnOutlined className="inner-icon" />
            </Box>
            <Box className="text">
              <Typography variant={"h4"} className="info-heading">
                Location
              </Typography>
              <Typography component={"p"} className="info-desc">
                Based in Riyadh , SA
              </Typography>

              <Typography component={"span"} className="info-data">
                Available for remote work worldwide
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="social-links">
          <Typography
            ref={socialHeadingRef}
            className="section-heading"
            variant="h3"
          >
            Connect with me
          </Typography>

          <Box ref={socialLinksRef} className="links">
            <Button
              startIcon={<GitHub />}
              onClick={() =>
                window.open("https://github.com/AHMED1CB", "_blank")
              }
            >
              GitHub
            </Button>
            <Button
              startIcon={<Instagram />}
              onClick={() =>
                window.open("https://instagram.com/8ti5r", "_blank")
              }
            >
              Instagram
            </Button>
            <Button
              startIcon={<EmailOutlined />}
              onClick={() =>
                window.open("mailto:ah8438263@gmail.com", "_blank")
              }
            >
              Email
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;