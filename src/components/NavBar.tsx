import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chakra-ui.png";
import ColorModeSwicth from "./ColorModeSwicth";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack mx={4} mb={3}>
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwicth />
    </HStack>
  );
};

export default NavBar;
