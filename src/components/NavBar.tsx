import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack paddingRight="5px" marginRight={5} marginLeft={3}>
      <VStack width="90px">
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <Box fontSize="11px" color="deeppink" fontWeight="bold">
          <a href="https://www.evanmarie.com">Evan Marie</a>
        </Box>
      </VStack>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
