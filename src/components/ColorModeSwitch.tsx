import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <FaSun />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <FaMoon />
      {/* <Text whiteSpace="nowrap">color mode</Text> */}
    </HStack>
  );
};

export default ColorModeSwitch;
