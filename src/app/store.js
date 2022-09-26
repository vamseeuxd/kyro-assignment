import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import MyProfileReducer from '../pages/MyProfile/MyProfileSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myProfile: MyProfileReducer,
  },
});
