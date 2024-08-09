import { Box, VStack, Text, Heading, StackDivider } from '@chakra-ui/react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Senior Quality Assurance Engineer - NeuroFlex",
      date: "May 2023 - Present",
      description: "Designed and maintained automated test suites from scratch using TypeScript and Cypress/Playwright, employing a BDD approach. Integrated Grafana, Prometheus, and SonarCloud for application health monitoring."
    },
    {
      title: "Lead Quality Automation Engineer - Sherpa",
      date: "Jan 2021 - Apr 2023",
      description: "Led the creation of automation test cases from scratch using JavaScript/TypeScript with Cypress & Playwright. Conducted REST API end-to-end testing and ensured integration with CI/CD pipelines using GitHub Actions and Jenkins."
    },
    {
      title: "Senior Quality Assurance Analyst - AutoServe1",
      date: "Jul 2016 - Dec 2020",
      description: "Developed, expanded, and executed test plans and scripts aligned with Agile user stories. Designed and improved manual/automated tests with Node.js and Cypress, boosting coverage and reducing testing time."
    },
    {
      title: "Quality Analyst - SwaBz Systems",
      date: "Jan 2016 - Jun 2016",
      description: "Developed test plans and cases aligned with requirements. Automated test cases using Selenium and conducted thorough smoke testing on new builds."
    },
    {
      title: "Software Quality Assurance Analyst - Mdreams (D3)",
      date: "Jun 2015 - Dec 2015",
      description: "Developed test plans and cases based on business user stories and design specifications. Conducted manual testing and reported defects using HP Quality Center and JIRA."
    },
    {
      title: "Software Quality Assurance Analyst - H-Line Soft Solutions",
      date: "Dec 2011 - Jul 2013",
      description: "Conducted manual and automated testing to ensure application quality across web and Windows platforms. Managed test cases and verified requirements using HP Quality Center."
    }
  ];

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Heading as="h2" size="lg">Professional Experience</Heading>
      {experiences.map((exp, index) => (
        <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">{exp.title}</Heading>
          <Text fontSize="sm" color="gray.500">{exp.date}</Text>
          <Text mt={2}>{exp.description}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ExperienceTimeline;
