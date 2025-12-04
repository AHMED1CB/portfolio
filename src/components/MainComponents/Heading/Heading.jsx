import { Box, Typography } from "@mui/material";

import './Heading.css'
const Heading = ({ heading, text }) => {
  return (
    <Box className="heading">
      <Typography variant="h2" className={"heading-title"}>
        {heading}
      </Typography>
      <Typography variant="span" className={"heading-info"}>
        {text}
      </Typography>
    </Box>
  );
};

export default Heading;
