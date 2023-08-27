import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  GetExperiance: [],
  GetEducation: [],
  GetTechnology: [],
  GetMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

const reducerSlicer = createSlice({
  name: 'reducerSlicer',
  initialState,
  reducers: {
    setGetExperiance: (state, action) => {
      state.GetExperiance = action?.payload
    },
    setGetEducation: (state, action) => {
      state.GetEducation = action?.payload
    },
    setGetTechnology: (state, action) => {
      state.GetTechnology = action?.payload
    }
  },
});

export const { setGetExperiance, setGetEducation, setGetTechnology } = reducerSlicer.actions;
export default reducerSlicer.reducer;
