import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  repo: [],
  isLoading: true,
  error: '',
};

export const fetchRepo = createAsyncThunk(
  'repo/fetchRepo',
  async (authData) => {
    try {
      const response = await fetch(
        'http://127.0.0.1:3000/api/repositories',
        authData.method_data
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

export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepo.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRepo.fulfilled, (state, action) => {
        return {
          ...state,
          repo: action.payload,
          isLoading: false,
        };
      })
      .addCase(fetchRepo.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default repoSlice.reducer;
