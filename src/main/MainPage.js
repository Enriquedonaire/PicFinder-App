import { Box, Button} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "../Slider/Slider";


export const MainPage = () => {
  return (
    <Box>
    <Slider/>
    <br/>
    <br/>
    <Button
          sx={{
            justifyContent: 'center',
            bgcolor: "#09b097",
            ":hover": {
              cursor: "pointer",
              bgcolor: "#d3f283",
            },
          }}
          size="medium"
          variant="contained"
          component={NavLink}
          to="/search"
        >

          Get Started
        </Button>
    </Box>
  );
};
