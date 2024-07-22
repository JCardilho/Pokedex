import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
      axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((res) => setPokemons(res.next.results))
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
          {pokemons.map((pokemon) => (
            <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          ))}         

          
        </Grid>
      </Container>
    </div>
  );
};
