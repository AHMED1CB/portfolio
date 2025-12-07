import { Box, Button, Typography } from "@mui/material";
import "./Contact.css";
import Heading from "../MainComponents/Heading/Heading";
import {
  EmailOutlined,
  GitHub,
  Instagram,
  LocationOnOutlined,
} from "@mui/icons-material";
const Contact = () => {
  return (
    <Box className="contact-page">
      <Heading
        text="Have a project in mind or want to discuss a collaboration? I'd love to hear from you.Email Me"
        heading="Get in Touch"
      />

      <Box className="contents">
        <Box className="info">
          <Box className="email">
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

          <Box className="location">
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
          <Typography className="section-heading" variant="h3">
            Connect with me
          </Typography>

          <Box className="links">
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
