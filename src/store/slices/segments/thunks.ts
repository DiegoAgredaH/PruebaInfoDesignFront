import { backendApi } from "@/api/backendApi";
import { setSegmentsData, startLoadingSegments } from "./segmentsSlice";
import { Segments } from "@/types";

export const getSegments = () => {
  return async (
    dispatch: (arg0: {
      payload: Segments[] | undefined;
      type: "segments/startLoadingSegments" | "segments/setSegmentsData";
    }) => void
  ) => {
    dispatch(startLoadingSegments());
    const dates = { fechainicial: "1993-01-01", fechafinal: "2023-01-30" };
    const resp = await backendApi.post("tramos/", dates);

    dispatch(setSegmentsData(resp.data));
  };
};
