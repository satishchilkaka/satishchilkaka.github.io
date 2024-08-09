import { Box, Flex, Button, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavBar = () => {
  return (
    <Box bg="black" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" color="white">Satish Chilkaka</Box>
        <Stack direction="row" spacing={4}>
          <Button
            as={NextLink}
            href="/"
            size="md"
            colorScheme="white"
            variant="outline"
            _hover={{ bg: "white", color: "black" }}
            borderColor="white"
            color="white"
          >
            About Me
          </Button>
          <Button
            as={NextLink}
            href="/contact"
            size="md"
            colorScheme="white"
            variant="outline"
            _hover={{ bg: "white", color: "black" }}
            borderColor="white"
            color="white"
          >
            Contact Me
          </Button>
          <Button
            as={NextLink}
            href="/publications"
            size="md"
            colorScheme="white"
            variant="outline"
            _hover={{ bg: "white", color: "black" }}
            borderColor="white"
            color="white"
          >
            Publications
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
