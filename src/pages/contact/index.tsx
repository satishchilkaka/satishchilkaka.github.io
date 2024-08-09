import { Button, FormControl, FormLabel, Input, Textarea, VStack, Container } from '@chakra-ui/react';
import Layout from '@/components/Layout';

export default function ContactMe() {
  return (
    <Layout>
      <Container maxW="container.md" py={8}> 
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
          <Button bg="black" color="white" _hover={{ bg: "gray.700" }} size="md">
  Send
</Button>

        </VStack>
      </Container>
    </Layout>
  );
}
