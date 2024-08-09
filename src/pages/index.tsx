import { Heading, Text, VStack } from '@chakra-ui/react';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">Welcome to My Portfolio</Heading>
        <Text fontSize="xl">I am a Frontend Developer skilled in React, TypeScript, and Chakra UI.</Text>
        {/* Add more sections here */}
      </VStack>
    </Layout>
  );
}
