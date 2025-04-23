import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/chakra-ui.png";
import ColorModeSwicth from "./ColorModeSwicth";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwicth />
    </HStack>
  );
};

export default NavBar;
