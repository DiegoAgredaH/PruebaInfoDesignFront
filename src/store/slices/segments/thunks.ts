import { backendApi } from "@/api/backendApi";
import { setSegmentsData, startLoadingSegments } from "./segmentsSlice";
import { Segments } from "@/types";
import { Dates } from "../clients/thunks";

export const getSegments = (dates?: Dates) => {
  return async (
    dispatch: (arg0: {
      payload: Segments[] | undefined;
      type: "segments/startLoadingSegments" | "segments/setSegmentsData";
    }) => void
  ) => {
    dispatch(startLoadingSegments());
    const requestData = dates || { fechainicial: "1993-01-01", fechafinal: "2023-01-30" };
    const resp = await backendApi.post("tramos/", requestData);

    dispatch(setSegmentsData(resp.data));
  };
};