import { Clients, ClientsState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ClientsState = {
  clientsData: [],
  isLoading: false,
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    startLoadingClients: (state) => {
      state.isLoading = true;
    },
    setClientsData: (state, action: PayloadAction<Clients[]>) => {
      state.isLoading = false;
      state.clientsData = action.payload;
    },
  },
});

export const { startLoadingClients, setClientsData } = clientsSlice.actions;
