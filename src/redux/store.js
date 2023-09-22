import { configureStore } from '@reduxjs/toolkit';
import repositoryReducer from './repository/repositorySlice';
import repoReducer from './repo/repoSlice';

const store = configureStore({
  reducer: {
    repository: repositoryReducer,
    repo: repoReducer,
  },
});

export default store;
