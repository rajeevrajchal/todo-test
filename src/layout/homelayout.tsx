import React from 'react';
import { Container, VStack } from '@chakra-ui/react';

interface HomeLayoutProps {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Container maxW={['container.md', 'container.lg']} mt={16}>
      <VStack spacing={8} align="stretch">
        {children}
      </VStack>
    </Container>
  );
};

export default HomeLayout;
