import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px" marginRight={3}>
      <a href="/">
        <Image src={logo} boxSize="60px" />
      </a>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
