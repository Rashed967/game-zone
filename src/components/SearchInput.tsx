import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!inputRef.current) return;
    onSearch(inputRef.current.value);
  };

  return (
    <Box width={"100%"}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={20}
            placeholder="Search games..."
            variant={"filled"}
            ref={inputRef}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
