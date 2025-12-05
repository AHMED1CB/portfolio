import { Box, LinearProgress, Typography } from "@mui/material";
import "./Progress.css";

const Progress = ({ progress, name, className = "" }) => {
  return (
    <Box className={`item ${className}`} data-progress={`${progress}%`}>
      <Typography component="span" className="progress-item-name">
        {name}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progress}
        className="progress-bar"
      />
    </Box>
  );
};

export default Progress;
