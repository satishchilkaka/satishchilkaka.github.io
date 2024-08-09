import { ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Box>
    <Container maxW="container.md" py={8}>
      {children}
    </Container>
  </Box>
);

export default Layout;
