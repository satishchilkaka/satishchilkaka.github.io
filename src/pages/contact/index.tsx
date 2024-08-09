import { Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';
import Layout from '@/components/Layout';

export default function ContactMe() {
  return (
    <Layout>
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message" />
        </FormControl>
        <Button colorScheme="teal" size="md">Send</Button>
      </VStack>
    </Layout>
  );
}
