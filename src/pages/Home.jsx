import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeletons } from "../components/Skeletons";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState();

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
          console.log(res);
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
                <PokemonCard data={pokemon} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
