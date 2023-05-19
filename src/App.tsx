import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          // mobile devices
          base: `"nav" "main"`,

          // large devices, > 1024px
          lg: `"nav  nav" "aside  main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        {/* will only be shown on lg screens and bigger */}
        <Show above="lg">
          {" "}
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box marginBottom={4}>
            <GameHeading />
            <Flex marginBottom={1}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
