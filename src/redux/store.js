import { configureStore } from '@reduxjs/toolkit';
import repositoryReducer from './repository/repositorySlice';
import repoReducer from './repo/repoSlice';
import authsReducer from './auths/authsSlice';
import userauthReducer from './auths/userauthSlice';

const store = configureStore({
  reducer: {
    repository: repositoryReducer,
    repo: repoReducer,
    auths: authsReducer,
    userAuth: userauthReducer,
  },
});

export default store;
