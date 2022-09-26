import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProfile } from "./MyProfileAPI";

const initialState = {
  value: {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    phoneNoWork: "",
    phoneNoHome: "",
    location: "",
  },
  status: "",
};

export const getProfile = createAsyncThunk("myProfile/get", async (id) => {
  const response = await fetchProfile(id);
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const myProfileSlice = createSlice({
  name: "myProfile",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const selectMyProfile = (state) => state.myProfile.value;

export default myProfileSlice.reducer;
