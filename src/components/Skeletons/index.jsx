import { Box, Grid, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import "../PokemonCard/index";

export const Skeletons = () => {
  return (
    <Grid wrap="wrap" container justifyContent={"center"} alignItems={"center"}>
      {Array.from({ length: 500 }).map((item) => (
        <Skeleton
          key={`skeleton-${item}`}
          variant="rounded"
          width={"250px"}
          height={"200px"}
          sx={{
            margin: "10px",
            width: "fit-content",
          }}
        />
      ))}
    </Grid>
  );
};
