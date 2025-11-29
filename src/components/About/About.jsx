import { Box, Button, IconButton, Typography } from "@mui/material";
import { GitHub, Instagram, ArrowForward, ViewInAr } from "@mui/icons-material";
import "./about.css";

export default () => {
  return (
    <Box className="about-page">
      <Box className="contents">
        <span className="tag-hire">Available for Hire</span>

        <Box className="heading-text">
          <Typography variant="h2">Building</Typography>
          <Typography variant="h2" className="colored">
            Digital Experiences
          </Typography>
          <Typography variant="h2">that Matter</Typography>
        </Box>

        <Typography variant="p" className="descreption">
          I'm a Fullstack Web & Electron.js Developer crafting high-performance
          applications for web and desktop.
        </Typography>

        <Box className="buttons">
          <Button className="btn-projects" endIcon={<ArrowForward />}>
            View Projects
          </Button>
          <Button className="btn-contact">Contact Me</Button>
        </Box>

        <Box className="social-links">
          <IconButton className="github">
            <GitHub />
          </IconButton>
          <IconButton className="instagram">
            <Instagram />
          </IconButton>
          <IconButton className="codepen">
            <ViewInAr />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
