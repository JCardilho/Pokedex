import { Typography } from "@mui/material";
import React from "react";

export const pokemonTypes = (type) => {
  return (
    <div className="container">
      {type.map((data, index) => (
        <Typography
          gutterBottom
          variant="caption"
          component="div"
          key={`pokemon-type${index}`}
        >
          {data.type.name}
        </Typography>
      ))}
    </div>
  );
};
