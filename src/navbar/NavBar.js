import {
  AppBar,
  Button,
  createTheme,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import image from "../assets/logo.gif";

export const NavBar = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activePhotos, setActivePhotos] = useState(false);

  const handleClickSearch = () => {
    setActivePhotos(false);
    setActiveSearch(true);
  };
  const handleClickPhotos = () => {
    setActiveSearch(false);
    setActivePhotos(true);
  };

  const theme = createTheme({
    status: {
      clicked: {
        bgcolor: "#006a82",
        color: "#fff",
      },
      notClicked: {
        fontSize: {
          xs: "10px",
          sm: "10px",
          md: "15px",
          lg: "15px",
        },
        color: "#fff",
        marginLeft: "15px",
      },
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }} position="stiky">
      <AppBar position="fixed" sx={{ bgcolor: "rgb(29, 31, 31, 0.89)", height: 60, justifyContent: 'center', borderRadius: 75 }}>
        <Toolbar
          sx={{
            flexWrap: "nowrap",
            justifyContent: { xs: "space-between", sm: "space-between" },
          }}
        >
          <Typography>
            <Box
              sx={{
                textDecoration: "none",
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                  md: "30px",
                  lg: "35px",
                },
                color: "#fff",
              }}
              href="/"
            >
              <Box
                alt="logo"
                src={image}
                sx={{
                  borderRadius: 50,
                  padding: "10px",
                  height: 60,
                  width: {
                    xs: "60px",
                    sm: "60px",
                    md: "60px",
                    lg: "60px",
                  },
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                component={NavLink}
                to="/"
              />
            </Box>
          </Typography>
          PicFinder
          <Typography>
            <Button
              component={NavLink}
              onClick={handleClickSearch}
              to="/search"
              sx={activeSearch ? theme.status.clicked : theme.status.notClicked}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              onClick={handleClickPhotos}
              to="/favPics"
              sx={activePhotos ? theme.status.clicked : theme.status.notClicked}
              variant="text"
            >
              Favourites
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
