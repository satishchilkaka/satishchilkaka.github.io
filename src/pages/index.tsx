import { Heading, Text, VStack } from '@chakra-ui/react';
import Layout from '../components/Layout';

export default function AboutMe() {
  return (
    <Layout>
      <VStack spacing={8} align="flex-start">
        <Heading as="h1" size="2xl">About Me</Heading>
        <Text fontSize="lg">
          Hi, I am a passionate Frontend Developer with expertise in React, TypeScript, and Chakra UI.
        </Text>
        <Text fontSize="lg">
          I have a strong background in building interactive and responsive web applications. My goal is to create user-friendly and aesthetically pleasing digital experiences.
        </Text>
        <Text fontSize="lg">
          In addition to my development skills, I am always eager to learn new technologies and improve my existing knowledge.
        </Text>
      </VStack>
    </Layout>
  );
}
