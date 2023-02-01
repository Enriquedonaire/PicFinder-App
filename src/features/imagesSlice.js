import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchImg } from "./imagesAPI";

export const fetchGetImages = createAsyncThunk(
  "fetchImages",
  async (img, page) => {
    return await fetchImg(img, page);
  }
);

const setLocalStorageFunc = (value) => {
  localStorage.setItem("image", JSON.stringify(value));
};

const getLocalStorageFunc = () => {
  const getImgsFromLocal = localStorage.getItem("image");
  return getImgsFromLocal ? JSON.parse(getImgsFromLocal) : [];
};

const initialState = {
  images: [],
  favImages: getLocalStorageFunc(),
  status: "",
};

export const imagesSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.favImages = [...state.favImages, action.payload];
      setLocalStorageFunc(state.favImages);
    },
    deleteImage: (state, action) => {
      state.favImages = state.favImages.filter(
        (item) => item.id !== action.payload.id
      );
      setLocalStorageFunc(state.favImages);
    },
    modifyDescriptionImage: (state, action) => {
      const statePhoto = [...state.favImages];
      const editIndex = statePhoto.findIndex(
        (photo) => photo.id === action.payload.id
      );
      const newPhoto = {
        ...statePhoto[editIndex],
        description: action.payload.descriptionPhoto,
      };
      statePhoto[editIndex] = newPhoto;
      state.favImages = statePhoto;
      setLocalStorageFunc(state.favImages);
    },
    likesPhotos: (state) => {
      state.favImages.sort((a, b) => {
        if (a.likes > b.likes) {
          return -1;
        }
        if (a.likes < b.likes) {
          return 1;
        }
        return 0;
      });
    },
    widthPhotos: (state) => {
      state.favImages.sort((a, b) => {
        if (a.width > b.width) {
          return -1;
        }
        if (a.width < b.width) {
          return 1;
        }
        return 0;
      });
    },
    heightPhotos: (state) => {
      state.favImages.sort((a, b) => {
        if (a.height > b.height) {
          return -1;
        }
        if (a.height < b.height) {
          return 1;
        }
        return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetImages.fulfilled, (state, action) => {
        state.status = "success";

        const favImages = getLocalStorageFunc();

        favImages.forEach((img) => {
          action.payload = action.payload.filter(
            (value) => value.id !== img.id
          );
        });
        state.images = action.payload;
      })
      .addCase(fetchGetImages.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  addImage,
  deleteImage,
  modifyDescriptionImage,
  likesPhotos,
  widthPhotos,
  heightPhotos,
} = imagesSlice.actions;

export default imagesSlice.reducer;
