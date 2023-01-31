import { Flex, Image, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
function NavBar() {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" py="1rem">
      <Flex justifyContent="space-between" alignItems="center" w="90%">
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Image src="/logo.png" alt="Inverse Cramer logo" w="2.5rem" />
        </Link>
        <Flex justify="center" align="center">
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
