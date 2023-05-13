import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      {/* Chakra button example: 
      <Button colorScheme="teal" size="sm"> 
        Amazing App
      </Button>*/}

      {/* Grid areas before setting to be responsive:
      <Grid templateAreas={`"nav  nav" "aside  main"`}> 
      MORE INFO ON RESPONSIVE STYLES:
      ** https://chakra-ui.com/docs/styled-system/responsive-styles ** */}

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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        {/* will only be shown on lg screens and bigger */}
        <Show above="lg">
          {" "}
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={9}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={1}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

/* Genre Selection Explained:
1) GenreList has the command onSelectGenre which notifies the parent, App.tsx, that
    a genre has been selected.
2) App.tsx gets notified a genre has been selected and setSelectedGenre passes the
    genre that has been selected.
3) The causes the App component to re-render, at which point, the newly selected genre
    is passed to the GameGrid in the next render
4) The GameGrid takes the selected genre and passes it to the useGames hook
5) useGames passes the selected genre to the useData hook as a query parameter
6) The useData hook is flexible in that it takes parameters and data requests
    and an array of dependencies, any changes in which, causes the effect to
    rerun and refetch the data from the server
*/
