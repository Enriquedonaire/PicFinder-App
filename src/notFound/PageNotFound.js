import { Box, Typography } from "@mui/material";
import React from "react";

import imageNotFound from "./404notfound.png";

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        marginTop: 15,
      }}
    >
      <Typography variant="h2" textAlign="center">
        404 not found
      </Typography>
      <br />
      <Typography
        variant="h5"
        textAlign="center"
        sx={{
          marginTop: 5,
        }}
      >
        Woops... Looks like this page doesn't exist 😢
      </Typography>
      <br />
      <Box
        sx={{
          backgroundImage: `url(${imageNotFound})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: {
            xs: "350px",
            sm: "350px",
            md: "350px",
            lg: "350px",
            xl: "350px",
          },
          margin: "auto",
          width: {
            xs: "300px",
            sm: "500px",
            md: "500px",
            lg: "500px",
            xl: "500px",
          },
          marginTop: 10,
        }}
      />
      <br />
      <br />
    </Box>
  );
};
