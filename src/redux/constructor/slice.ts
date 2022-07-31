import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
  },
});

// export const { } = constructorSlice.actions;

export default constructorSlice.reducer;