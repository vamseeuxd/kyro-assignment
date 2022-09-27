import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProfile, updateProfile } from "./MyProfileAPI";

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
  return response;
});

export const saveProfile = createAsyncThunk(
  "myProfile/save",
  async (id, body) => {
    const response = await updateProfile(id, body);
    return response;
  }
);

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

    builder
      .addCase(saveProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveProfile.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const selectMyProfile = (state) => state.myProfile.value;
export const selectMyProfileStatus = (state) => state.myProfile.status;

export default myProfileSlice.reducer;
