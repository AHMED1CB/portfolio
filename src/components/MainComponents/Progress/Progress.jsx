import { Box, LinearProgress, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Progress.css";

gsap.registerPlugin(ScrollTrigger);

const Progress = ({ progress, name, className = "" }) => {
  const itemRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const progressBar = progressBarRef.current.querySelector('.MuiLinearProgress-bar');
      
      if (progressBar) {
        gsap.fromTo(
          progressBar,
          { transform: 'translateX(-100%)' },
          {
            transform: `translateX(-${100 - progress}%)`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      
      const dataAttr = itemRef.current;
      gsap.fromTo(
        dataAttr,
        { '--progress': 0 },
        {
          '--progress': progress,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: function() {
            const currentValue = Math.round(gsap.getProperty(dataAttr, '--progress'));
            dataAttr.setAttribute('data-progress', `${currentValue}%`);
          }
        }
      );
    });

    return () => ctx.revert();
  }, [progress]);

  return (
    <Box 
      ref={itemRef}
      className={`item ${className}`} 
      data-progress={`${progress}%`}
    >
      <Typography component="span" className="progress-item-name">
        {name}
      </Typography>

      <LinearProgress
        ref={progressBarRef}
        variant="determinate"
        value={progress}
        className="progress-bar"
      />
    </Box>
  );
};

export default Progress;