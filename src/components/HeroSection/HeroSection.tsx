import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

function HeroSection() {
  return (
    <VStack px="1rem" h="40vh" justify="center">
      <Heading fontSize={["5xl", "5xl", "6xl", "6xl"]} textAlign="center">
        Inverse Cramer ETF
      </Heading>
      <Text align="center" px="1rem" maxW="60rem" py="0.5rem">
        Trade against the most legendary trader at being highly wrong to ever live.
      </Text>
      <HStack pt="0.5rem">
        <Button colorScheme="blue">Live Signals</Button>
        <Button>Discord</Button>
      </HStack>
    </VStack>
  );
}

export default HeroSection;
