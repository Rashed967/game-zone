import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwicth = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dard Mode</Text>
    </HStack>
  );
};

export default ColorModeSwicth;
