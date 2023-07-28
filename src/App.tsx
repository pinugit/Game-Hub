import { Grid, GridItem, Show } from "@chakra-ui/react";
import NevBar from "./component/NevBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NevBar />
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
