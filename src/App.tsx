import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GameGenre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: GameGenre | null;
  platform: Platform | null;
  sortOption: string;
  searchText: string;
}

function App() {
  const [gameQeury, setGameQuery] = useState<GameQuery>({} as GameQuery);
  console.log(gameQeury.searchText);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1rf",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQeury, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px={5} my={3}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQeury, genre })}
            selectedGenre={gameQeury.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" mx={2}>
        <Flex mb={3}>
          <Box mr={3}>
            <PlatformSelector
              onSlectPlatform={(platform) =>
                setGameQuery({ ...gameQeury, platform })
              }
              selectedPlatform={gameQeury.platform}
            />
          </Box>
          <SortSelector
            onSortSelect={(sortOption) =>
              setGameQuery({ ...gameQeury, sortOption })
            }
            sortOrder={gameQeury.sortOption}
          />
        </Flex>
        <GameGrid gameQuery={gameQeury} />
      </GridItem>
    </Grid>
  );
}

export default App;
