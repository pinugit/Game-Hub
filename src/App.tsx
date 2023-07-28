import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="blue" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="red" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="coral" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
