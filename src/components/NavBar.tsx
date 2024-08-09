import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavBar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" color="white">Satish Chilkaka</Box>
        <Stack direction="row" spacing={4}>
          <NextLink href="/" passHref>
            <Link color="white">About Me</Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link color="white">Contact Me</Link>
          </NextLink>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
