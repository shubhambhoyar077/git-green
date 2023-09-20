import { configureStore } from '@reduxjs/toolkit';
import repositoryReducer from './repository/repositorySlice';

const store = configureStore({
  reducer: {
    repository: repositoryReducer,
  },
});

export default store;
