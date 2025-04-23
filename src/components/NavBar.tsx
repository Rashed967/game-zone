import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/chakra-ui.png";
import ColorModeSwicth from "./ColorModeSwicth";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwicth />
    </HStack>
  );
};

export default NavBar;
