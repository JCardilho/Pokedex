import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "./index.css";

export default function PokemonCard(pokemon) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pokemon.data.sprites.front_default}
          alt="green iguana"
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            align-items="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.data.name}
            </Typography>

            <div className="container">
              {pokemon.data.types.map((data) => (
                <Typography gutterBottom variant="caption" component="div">
                  {data.type.name}
                </Typography>
              ))}
            </div>
          </Box>

          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
