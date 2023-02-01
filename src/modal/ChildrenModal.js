import {
  Box,
  Button,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { modifyDescriptionImage } from "../features/imagesSlice";
import { useDispatch } from "react-redux";

export const ChildrenModal = ({
  item,
  edit,
  setEdit,
  descriptionPhoto,
  setDescriptionPhoto,
}) => {
  const dispatch = useDispatch();

  const handleClickCloseModalChildren = () => {
    setEdit(!edit);
  };

  const handleClickSaveDescription = (id) => {
    dispatch(modifyDescriptionImage({ id, descriptionPhoto }));
    setEdit(false);
  };

  const handleChangeOfDescription = (e) => {
    setDescriptionPhoto(e.target.value);
  };

  return (
    <>
      <Modal open={edit} onClose={handleClickCloseModalChildren}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: 400,
            backgroundColor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
            xs: {
              width: 300
            }, 
            md: {
            width: 520,

            }
          }}
        >
          <CloseIcon
            sx={{
              color: "#4527a0",
              marginLeft: "95%",
              cursor: "pointer",
            }}
            onClick={() => handleClickCloseModalChildren()}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              color="#4527a0"
              sx={{
                marginBottom: "60px",
              }}
            >
              Edit the description:{" "}
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              value={descriptionPhoto}
              onChange={(e) => handleChangeOfDescription(e)}
            ></TextareaAutosize>
            <Button
              sx={{
                backgroundColor: "#4527a0",
                color: "white",
                marginTop: "20px",
                ":hover": {
                  backgroundColor: "#b388ff",
                  transition: "0.2s ease",
                },
              }}
              onClick={() => handleClickSaveDescription(item.id)}
            >
              Click to save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
