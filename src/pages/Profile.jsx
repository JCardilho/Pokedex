import React from "react";
import Navbar from "../components/Navbar";
import { Box, Container, Paper, Typography } from "@mui/material";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  console.log(pokemonData.sprites.front_def);
  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column"   justifyContent="center" alingnItens="center" p={5}>
            <Typography variant="h4">{pokemonData.name}</Typography>
            <Box display="flex" m={5}>
              <Box        
                  component="img"
                  width="100%"
                  height="100%"
                  src={pokemonData.sprites.front_default}
                  />
                  <PokemonTable pokemonData={pokemonData} />
              </Box>
            </Box>
        </Paper>
        
      </Container>
    </>
  );
};
