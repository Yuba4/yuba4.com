import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const NavBar: React.FC = () => {
  return (
    <Box>
      <Flex
        sx={{
          backgroundColor: "white",
        }}
      >
        <Flex>
          <Text>Yuba4.dev</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
