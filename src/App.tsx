import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GameGenre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: GameGenre | null;
  platform: Platform | null;
}

function App() {
  const [gameQeury, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <NavBar />
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
        <PlatformSelector
          onSlectPlatform={(platform) =>
            setGameQuery({ ...gameQeury, platform })
          }
          selectedPlatform={gameQeury.platform}
        />
        <GameGrid gameQuery={gameQeury} />
      </GridItem>
    </Grid>
  );
}

export default App;
