import {
  CircularProgress,
  Grid,
  IconButton,
  ListItem,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { addImage, fetchGetImages } from "../features/imagesSlice";

import Swal from "sweetalert2";

export const Searcher = () => {
  const [img, setImg] = useState("random");

  const [isSearching, setIsSearching] = useState(false);

  const [activeImage, setActiveImage] = useState(null);


  const dispatch = useDispatch();

  const { images } = useSelector((state) => state.imagesStore);

  useEffect(() => {
    dispatch(fetchGetImages(img));
  }, [dispatch, img, images]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setImg("");
  };

  const handleClick = (photo) => {
    dispatch(addImage(photo));
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "10%",
          marginBottom: "2%",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "60%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Search for Images"
              variant="outlined"
              onChange={(e) =>
                setTimeout(() => {
                  setImg(e.target.value);
                }, 1500)
              }
            />
          </form>
          <IconButton type="submit" aria-label="search">
            <SearchIcon sx={{ fill: "#fff", marginTop: "10px" }} />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Grid
          container
          columns={{ xs: 3, sm: 8, md: 4 }}
          direction="row"
          justifyContent="center"
          sx={{
            marginTop: "10px",
            marginBottom: "100px"
          }}
        >
          {isSearching && <CircularProgress color="secondary" />}

          {images.map((item, key) => (
            <ListItem
              key={item.id}
              sx={{
                backgroundImage: `url(${item.urls.small})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                marginBottom: "20px",
                marginLeft: "1%",
                marginRight: "1%",
                height: "350px",
                width: "240px",
              }}
            >
              <FavoriteIcon
                sx={{
                  backgroundColor: "#e60036",
                  borderRadius: "100%",
                  color: "white",
                  fontSize: "25px",
                  padding: "5px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "200px",
                  marginTop: "300px",
                  zIndex: 5,
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: "#f0cc00",
                    fontSize: "25px",
                    transition: "0.2s ease",
                  },
                }}
                onClick={() => handleClick(item)}
              />

            </ListItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};
