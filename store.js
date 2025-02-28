import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './features/darkOrLightMode/darkModeSlice';

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
