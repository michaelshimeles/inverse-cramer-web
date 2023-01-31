import { Avatar } from "@chakra-ui/avatar";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  LinkBox,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Button, Progress, useColorModeValue } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";

function LiveSignalsCard() {
  return (
    <Box w="90%" maxW="40rem">
      <Flex
        px={4}
        py={2}
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        shadow="sm"
        rounded="sm"
        w="100%"
        justify="center"
        align="space-between"
        direction="column"
      >
        <Flex>
          <HStack>
            <Avatar src="/jim.jpg" />
            <Box>
              <LinkBox w="max-content" _hover={{ textDecoration: "underline" }}>
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  textColor={useColorModeValue("black", "white")}
                >
                  Signal
                </Text>
              </LinkBox>

              <Text
                as="i"
                color="whiteAlpha.700"
                fontSize="xs"
                textColor={useColorModeValue("black", "white")}
              >
                Address
              </Text>
            </Box>
          </HStack>
          <Flex ml="auto">
            <VStack ml={4} align="flex-start" w="10rem" py="0.25rem">
              <Flex direction="column" gap="0.25rem" w="full">
                <Text
                  as="i"
                  fontWeight="semibold"
                  fontSize="xs"
                  textColor={useColorModeValue("black", "white")}
                >
                  Confidence
                </Text>
                <Progress
                  size="xs"
                  value={23}
                  rounded="sm"
                  colorScheme="green"
                />
              </Flex>
              <Flex direction="column" gap="0.25rem" w="full">
                <Text
                  as="i"
                  fontWeight="semibold"
                  fontSize="xs"
                  textColor={useColorModeValue("black", "white")}
                >
                  Risk
                </Text>
                <Progress size="xs" value={88} rounded="sm" colorScheme="red" />
              </Flex>
            </VStack>
          </Flex>
        </Flex>
        <Divider my={2} />
        <Flex>
          <HStack>
            <Tag colorScheme="green" fontWeight="semibold" rounded="sm">
              Bullish
            </Tag>
            <Tag colorScheme="red" fontWeight="semibold" rounded="sm">
              Bearish
            </Tag>
          </HStack>
          <HStack ml="auto">
            <Text m="auto" as="i" color="whiteAlpha.400" fontSize="xs">
              Received mins ago
            </Text>
            <Link
              href="https://twitter.com/jimcramer"
              _hover={{ textDecoration: "none" }}
            >
              <Button size="sm">View Tweet</Button>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default LiveSignalsCard;
