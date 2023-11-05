import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchPostData = createAsyncThunk(
  "post/fetchPostData",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  },
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPostData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPostData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchPostData.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.data = [];
    });
  },
});

export default postSlice.reducer;
