import { Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import { saveAs } from "file-saver";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { ChildrenModal } from "./ChildrenModal";

export const MainModal = ({ item, openModal, setOpenModal }) => {
  const [edit, setEdit] = useState(false);
  const [descriptionPhoto, setDescriptionPhoto] = useState("");

  const handleClickCloseModalInfo = () => {
    setOpenModal(!openModal);
  };

  const handleClickEditDescription = (oldDescription) => {
    setEdit(!edit);
    setDescriptionPhoto(oldDescription);
  };

  if (!item) {
    return null;
  }

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClickCloseModalInfo}
        sx={{
          bgcolor: "#0000070",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgb(227, 227, 227, 0.99)",
            boxShadow: 24,
            p: 4,
            borderRadius: "50px",
            xs: {
              width: 700
            },
            md: {
            width: 920,

            }
          }}
        >
          <CloseIcon
            sx={{
              color: "#006a82",
              marginLeft: "95%",
              cursor: "pointer",
            }}
            onClick={() => handleClickCloseModalInfo()}
          />

          <Typography
            variant="h3"
            sx={{
              color: "#006a82",
              textDecoration: "underline",
            }}
          >
            Information:
          </Typography>
          <Typography sx={{ mt: 2, lineHeight: 2.5 }}>
            <Typography
              variant="p"
              sx={{
                color: "#006a82",
                fontWeight: 500,
              }}
            >
              Width:
            </Typography>{" "}
            {item.width}
            <br />
            <Typography
              variant="p"
              sx={{
                color: "#006a82",
                fontWeight: 500,
              }}
            >
              Height:
            </Typography>{" "}
            {item.height}
            <br />
            <Typography
              variant="p"
              sx={{
                color: "#006a82",
                fontWeight: 500,
              }}
            >
              Likes:
            </Typography>{" "}
            {item.likes}
            <br />
            <Typography
              variant="p"
              sx={{
                color: "#006a82",
                fontWeight: 500,
              }}
            >
              Date added:
            </Typography>{" "}
            {item.created_at}
            <br />
            <Typography
              variant="p"
              sx={{
                color: "#006a82",
                fontWeight: 500,
              }}
            >
              Description:
            </Typography>{" "}
            {item.description}
            <EditIcon
              sx={{
                backgroundColor: "#006a82",
                color: "white",
                borderRadius: "20px",
                padding: "5px",
                fontSize: "15px",
                cursor: "pointer",
                marginLeft: "10px",
                ":hover": {
                  backgroundColor: "#006a82",
                  transition: "0.2s ease",
                },
              }}
              onClick={() => handleClickEditDescription(item.description)}
            />
            <br />
            <Typography
              variant="p"
              sx={{
                color: "#006a82",
                fontWeight: 500,
              }}
            >
              <br />
              You can download it with one click:
            </Typography>
            <br />
            <DownloadIcon
              sx={{
                color: "white",
                backgroundColor: "#006a82",
                borderRadius: "20px",
                padding: "5px",
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "10px",
                ":hover": {
                  backgroundColor: "#006a82",
                  transition: "0.2s ease",
                },
              }}
              onClick={() => saveAs(item.urls.full, "image.jpg")}
            />
          </Typography>
        </Box>
      </Modal>
      <ChildrenModal
        item={item}
        edit={edit}
        setEdit={setEdit}
        descriptionPhoto={descriptionPhoto}
        setDescriptionPhoto={setDescriptionPhoto}
      />
    </>
  );
};
