import './App.css';

import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex bgColor="black" p={5} alignItems="center" >
      <Box>
        <Text fontSize="20"  className="nav" fontWeight="bold">Web site</Text>
      </Box>
      <Spacer />
      <Box mx={4} fontSize="20" className="nav">
        <Text>Home</Text>
      </Box>
      <Box mx={4} Size="20" className="nav">
        <Text>About</Text>
      </Box>
      <Box mx={4} Size="20" className="nav">
        <Text>Pages</Text>
      </Box>
      <Box mx={4} Size="20" className="nav">
        <Text>About us</Text>
      </Box>
      <Box mx={4} Size="20" className="nav">
        <Text>Contact</Text>
      </Box>
    </Flex>
  );
}

export default Navbar;