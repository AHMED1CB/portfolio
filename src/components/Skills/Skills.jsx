import { Box, Typography } from "@mui/material";
import "./Skills.css";
import Heading from "../MainComponents/Heading/Heading";
import Progress from "../MainComponents/Progress/Progress";
const Skills = () => {
  const frontendSkills = [
    { name: "ReactJs", value: 90 },
    { name: "Typescript", value: 60 },
    { name: "Tailwind CSS", value: 90 },
    { name: "Material UI", value: 80 },
  ];

  const backendSkills = [
    { name: "Node.js / Express", value: 85 },
    { name: "ElectronJs", value: 75 },
    { name: "Laravel", value: 85 },
  ];

  const devopsSkills = [{ name: "Git / Github", value: 90 }];

  return (
    <Box className="skills-page">
      <Heading
        text="A breakdown of my technical skills and proficiency levels across different domains."
        heading="Technical Proficiency"
      />

      <Box className="contents">
        <Box className="progress-container">
          <Typography variant="h2" className="progress-title">
            Frontend Development
          </Typography>

          <Box className="progress-items">
            {frontendSkills.map((item, i) => (
              <Progress key={i} progress={item.value} name={item.name} />
            ))}
          </Box>
        </Box>

        <Box className="progress-container">
          <Typography variant="h2" className="progress-title">
            Backend & Desktop
          </Typography>

          <Box className="progress-items">
            {backendSkills.map((item, i) => (
              <Progress key={i} progress={item.value} name={item.name} />
            ))}
          </Box>
        </Box>

        <Box className="progress-container">
          <Typography variant="h2" className="progress-title">
            Tools & DevOps
          </Typography>

          <Box className="progress-items">
            {devopsSkills.map((item, i) => (
              <Progress key={i} progress={item.value} name={item.name} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
