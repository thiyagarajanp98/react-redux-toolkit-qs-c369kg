import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for handling 'data' object with 'main' and 'modules' fields
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: { main: {}, modules: {} }, // 'main' and 'modules' as empty objects
    loading: false,
    error: null
  },
  reducers: {
    fetchMainStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMainSuccess: (state, action) => {
      state.loading = false;
      state.data.main = action.payload; // Save the main API response in 'main'
    },
    fetchMainFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchModuleStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchModuleSuccess: (state, action) => {
      state.loading = false;
      state.data.modules = { ...state.data.modules, ...action.payload }; // Merge into 'modules'
    },
    fetchModuleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

// Export the actions
export const {
  fetchMainStart,
  fetchMainSuccess,
  fetchMainFailure,
  fetchModuleStart,
  fetchModuleSuccess,
  fetchModuleFailure
} = dataSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    data: dataSlice.reducer
  }
});

export default store;
