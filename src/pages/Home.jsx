import { Box, Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router-dom";

export const Home = ({setPokemonData}) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((res) => {
        const data = res.data.results;
        const allpokemon = data.map(async (pokemon) => {
          const results = await axios.get(pokemon.url);
          return {
            ...results.data,
            ...pokemon,
          };
        });
        Promise.all(allpokemon).then((res) => {
          setPokemons(res);
          
        });
      })
      .catch((err) => console.log(err));
  };

  const pokemonFilter = (search) => {
    let filteredPokemons = [];
    for (let i in pokemons) {
      const pokemonName = pokemons[i].name.toLowerCase();
      if (pokemonName.includes(search.toLowerCase())) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    if (filteredPokemons.length === 0 && !search) {
      setFilteredPokemons(undefined);
      return;
    }
    setFilteredPokemons(filteredPokemons);
  };

  const pokemonPickHnadler = (pokemon) => {
    setPokemonData(pokemon)
    navigate("/profile")
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {pokemons.length <= 0 ? (
            <Skeletons />
          ) : filteredPokemons ? (
            filteredPokemons.map((pokemon, index) => (
              <Grid item xs={12} sm={4} lg={2} key={`pokemon-${index}`}>
                <PokemonCard data={pokemon} />
              </Grid>
            ))
          ) : (
            pokemons.map((pokemon, index) => (
              <Grid item xs={2} key={`pokemon-${index}`}>
                <Box onClick={() => pokemonPickHnadler(pokemon)}>
                  <PokemonCard data={pokemon} />
                </Box>
                
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
