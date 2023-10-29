import { backendApi } from "@/api/backendApi";
import {
  setWorstSegmentsData,
  startLoadingWorstSegments,
} from "./worstSegmentsSlice";
import { WorstSegments } from "@/types";
import { Dates } from "../clients/thunks";

export const getWorstSegments = (dates?: Dates) => {
  return async (
    dispatch: (arg0: {
      payload: WorstSegments[] | undefined;
      type:
        | "worstSegments/startLoadingWorstSegments"
        | "worstSegments/setWorstSegmentsData";
    }) => void
  ) => {
    dispatch(startLoadingWorstSegments());
    const requestData = dates || { fechainicial: "1993-01-01", fechafinal: "2023-01-30" };
    const resp = await backendApi.post("tramos-cliente/", requestData);

    dispatch(setWorstSegmentsData(resp.data));
  };
};
