import { Heading, Text, VStack, Link, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import ExperienceTimeline from '../components/ExperienceTimeline';

export default function AboutMe() {
  return (
    <Layout>
      <Flex
        direction={{ base: 'column', md: 'row' }}  
        gap={8}
        align="flex-start"
        justify="space-between"
      >
      
        <Box flex="2">
          <VStack gap={8} align="flex-start">
            <Heading as="h1" size="2xl">Hi, I am Satish Chilkaka
            </Heading>
            <Text fontSize="2xl">
              Senior Software Engineer
              </Text>
          
             
          
          </VStack>
        </Box>

        <Box flex="1" mr={{ md: 8 }} mb={{ base: 8, md: 0 }}>  
          <ExperienceTimeline />
        </Box>
      </Flex>
    </Layout>
  );
}
