import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            //alignItens="center"
            p={5}
          >
            <Typography
              variant="h4"
              align="center"
              style={{ margin: "0 10px" }}
            >
              {pokemonData.name}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "colum",
                  md: "row",
                },
              }}
            >
              <Box
                component="img"
                width="50%"
                height="100%"
                src={pokemonData.sprites.front_default}
              />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
              <Box display="flex" justifyContent="space-between">
                <Box
                  component="img"
                  width="25%"
                  height="25%"
                  src={pokemonData.sprites.front_female}
                />
                <Box
                  component="img"
                  width="25%"
                  height="25%"
                  src={pokemonData.sprites.front_shiny}
                />
                <Box
                  component="img"
                  width="25%"
                  height="25%"
                  src={pokemonData.sprites.front_shiny_female}
                />
              </Box>

              <Divider>Ataque</Divider>

              <Box textAlign="center" marginTop="15">
                {pokemonData.moves.map((moveData, Key) => (
                  <Chip
                    key={Key}
                    sx={{ m: "5px" }}
                    label={moveData.move.name}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
