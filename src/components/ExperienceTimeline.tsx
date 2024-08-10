import { Box, VStack, Text, Heading, HStack, Divider } from '@chakra-ui/react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "NeuroFlex",
      date: "May 2023 - Present"
    },
    {
      title: "Lead Automation Engineer",
      company: "Sherpa",
      date: "Jan 2021 - Apr 2023"
    },
    {
      title: "Senior Quality Assurance Analyst",
      company: "AutoServe1",
      date: "Jul 2016 - Dec 2020"
    },
    {
      title: "Quality Analyst",
      company: "SwaBz Systems",
      date: "Jan 2016 - Jun 2016"
    },
    {
      title: "Software Quality Assurance Analyst",
      company: "Mdreams (D3)",
      date: "Jun 2015 - Dec 2015"
    },
    {
      title: "Software Quality Assurance Analyst",
      company: "H-Line Soft Solutions",
      date: "Dec 2011 - Jul 2013"
    }
  ];

  return (
    <VStack
      spacing={4}
      align="stretch"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: '45px',
        left: '10px',
        bottom: 0,
        width: '2px',
        bg: 'gray.300'
      }}
    >
      <Heading as="h2" size="lg" mb={5}>Professional Experience</Heading>
      {experiences.map((exp, index) => (
        <HStack key={index} spacing={4} align="center" position="relative">
          {/* The line dot */}
          <Box
            position="absolute"
            
            top="40px"
            left="3px"
            width="10px"
            height="10px"
            bg="gray.300"
            borderRadius="50%"
            zIndex={1}
          />

          <Box ml="30px">
            <Heading as="h3" size="md">{exp.title}</Heading>
            <Text fontSize="sm" color="gray.500">{exp.company} - {exp.date}</Text>
          </Box>
        </HStack>
      ))}
    </VStack>
  );
};

export default ExperienceTimeline;
