import { Heading, Text, VStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../components/Layout';

export default function AboutMe() {
  return (
    <Layout>
      <VStack spacing={8} align="flex-start">
        <Heading as="h1" size="2xl">Senior Software Quality Assurance Engineer & Automation Specialist</Heading>
        <Text fontSize="lg">
          Hi, I am Satish Chilkaka, a Senior Software Quality Assurance Engineer with over 9 years of experience in ensuring outstanding application quality across mixed Agile and traditional development methodologies.
        </Text>
        <Text fontSize="lg">
          I specialize in UI automation testing using tools such as NodeJS, JavaScript, TypeScript, Cypress, and Playwright, as well as REST API testing with Postman, NodeJS, Python, and Axios. My experience spans across API, functional, end-to-end, regression, performance, and user acceptance testing for web applications.
        </Text>
        <Text fontSize="lg">
          Throughout my career, I have demonstrated the ability to identify and resolve critical bugs, collaborate effectively with development teams, and champion proactive quality assurance practices. I am also skilled in enhancing application health monitoring capabilities by integrating monitoring tools such as Grafana, Prometheus, and SonarCloud.
        </Text>
        <Text fontSize="lg">
          I have a proven track record of developing automated test suites from scratch using TypeScript, Cypress, and Playwright, and implementing complex CI/CD pipelines in Bitbucket and Jenkins. My hands-on experience includes contributing to unit tests (Python, Jest) and end-to-end tests (Cypress, TypeScript) for both frontend and backend applications.
        </Text>
        <Text fontSize="lg">
          I am passionate about staying up-to-date with the latest testing methodologies and tools, and I continuously seek to improve my skills and knowledge in the ever-evolving field of software quality assurance.
        </Text>
        <Text fontSize="lg">
          You can learn more about my professional experience on my <Link href="https://www.linkedin.com/in/satishchilkaka" color="teal.500">LinkedIn</Link> profile, check out my projects on <Link href="https://github.com/Satishchilkaka" color="teal.500">GitHub</Link>, or <NextLink href="/contact" passHref><Link color="teal.500">contact me</Link></NextLink>.
        </Text>
      </VStack>
    </Layout>
  );
}
