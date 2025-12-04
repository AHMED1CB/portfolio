import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import "./Project.css";
import { GitHub, OpenInNew } from "@mui/icons-material";

const Project = ({ icon, category, image, title, info, tags }) => {
  return (
    <Box className="project">
      <Box className="project-head">
        <Box className="actions">
          <IconButton className="open-external">
            <OpenInNew />
          </IconButton>

          <IconButton className="open-external">
            <GitHub />
          </IconButton>
        </Box>
        <Box className="project-category">
          {icon} {category}
        </Box>
        <Avatar src={image} className="project-image" />

        
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
        <Box className="project-tags">
          {tags.map((tag) => {
            return (
              <Typography key={tag} variant="span" className="project-tag">
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
