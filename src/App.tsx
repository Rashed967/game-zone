import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="gray">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="olive">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="orange">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
