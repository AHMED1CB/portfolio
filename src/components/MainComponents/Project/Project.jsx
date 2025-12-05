import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
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
  const openRepo = () => {
    let link = `https://github.com/AHMED1CB/${title}`;

    window.open(link, "_blank", "noopener");
  };

  const openLink = () => {
    if (externalLink) {
      window.open(externalLink, "_blank", "noopener");
    }
  };
  return (
    <Box className="project">
      <Box className="project-head">
        <Box className="actions">
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
