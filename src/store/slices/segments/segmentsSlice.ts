import { Segments, SegmentsState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: SegmentsState = {
  segmentsData: [],
  isLoading: false,
};

export const segmentsSlice = createSlice({
  name: "segments",
  initialState,
  reducers: {
    startLoadingSegments: (state) => {
      state.isLoading = true;
    },
    setSegmentsData: (state, action: PayloadAction<Segments[]>) => {
        state.isLoading = false;
        state.segmentsData = action.payload;
    },
  },
});

export const { startLoadingSegments, setSegmentsData } = segmentsSlice.actions;
