import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { GameGenre } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: GameGenre) => void;
  selectedGenre: GameGenre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  console.log(selectedGenre);
  const { data, error, isLoading } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data?.map((genre) => (
        <ListItem key={genre.id}>
          <HStack my={3}>
            <Image
              boxSize="36px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant={"link"}
              fontSize={"lg"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
