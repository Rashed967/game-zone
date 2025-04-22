import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data?.map((d) => (
        <ListItem key={d.id}>
          <HStack my={3}>
            <Image boxSize="36px" borderRadius={8} src={d.image_background} />
            <Text fontSize={"lg"}>{d.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
