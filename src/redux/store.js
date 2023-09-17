import { configureStore } from '@reduxjs/toolkit';
import repositoryReducer from './repository/repositorySlice';

const store = configureStore({
  reducer: {
    capsules: repositoryReducer,
  },
});

export default store;
