import { backendApi } from "@/api/backendApi";
import { setClientsData, startLoadingClients } from "./clientsSlice";
import { Clients } from "@/types";

export interface Dates {
  fechainicial: string| undefined;
  fechafinal:   string| undefined;
}

export const getClients = (dates?: Dates) => {
  return async (
    dispatch: (arg0: {
      payload: Clients[] | undefined;
      type: "clients/startLoadingClients" | "clients/setClientsData";
    }) => void
  ) => {
    dispatch(startLoadingClients());
    const requestData = dates || { fechainicial: "1993-01-01", fechafinal: "2023-01-30" };
    const resp = await backendApi.post("cliente/", requestData);

    dispatch(setClientsData(resp.data));
  };
};