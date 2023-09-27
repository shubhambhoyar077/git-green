import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  repository: [],
  isLoading: true,
  error: '',
};

export const fetchRepository = createAsyncThunk(
  'repository/fetchRepository',
  async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:3000/api/scheduled_commits'
      );
      if (!response.ok) {
        throw new Error('Please refreash page');
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const postScheduleCommit = createAsyncThunk(
  'scheduleCommit/postScheduleCommit',
  async (commitData) => {
    try {
      const response = await fetch(
        'http://127.0.0.1:3000/api/scheduled_commits',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commitData),
        }
      );
      if (!response.ok) {
        throw new Error('Please refreash page');
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepository.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRepository.fulfilled, (state, action) => {
        return {
          ...state,
          repository: action.payload,
          isLoading: false,
        };
      })
      .addCase(fetchRepository.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.message,
      }))
      .addCase(postScheduleCommit.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postScheduleCommit.fulfilled, (state, action) => {
        return {
          ...state,
          repository: [...state.repository, action.payload],
          isLoading: false,
        };
      })
      .addCase(postScheduleCommit.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.message,
      }));
  },
});

export default repositorySlice.reducer;
