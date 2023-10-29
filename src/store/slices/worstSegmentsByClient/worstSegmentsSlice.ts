import { WorstSegments, WorstSegmentsState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: WorstSegmentsState = {
  worstSegmentsData: [],
  isLoading: false,
};

export const worstSegmentsSlice = createSlice({
  name: "worstSegments",
  initialState,
  reducers: {
    startLoadingWorstSegments: (state) => {
      state.isLoading = true;
    },
    setWorstSegmentsData: (state, action: PayloadAction<WorstSegments[]>) => {
      state.isLoading = false;
      state.worstSegmentsData = action.payload;
    },
  },
});

export const { startLoadingWorstSegments, setWorstSegmentsData } =
  worstSegmentsSlice.actions;
