import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getWorstSegments } from "@/store/slices/worstSegmentsByClient";
import { columns } from "./columns";
import { BarChartWorstSegments, TabsInfo } from "@/components";

export const WorstSegmentsByClient = () => {
  const dispatch = useAppDispatch();
  const { worstSegmentsData } = useAppSelector((state) => state.worstSegments);

  useEffect(() => {
    if (worstSegmentsData.length === 0) {
      dispatch(getWorstSegments());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ml-4 w-full">
      <h1 className="font-heading font-semibold text-3xl md:text-4xl">
        Peores Tramos/Cliente
      </h1>
      <p className="text-sm text-gray-500">
        Muestra el top 20 de peores Tramos/Cliente.
      </p>
      <div className="flex justify-center items-center">
        <TabsInfo columns={columns} data={worstSegmentsData} GraphicsComponent={BarChartWorstSegments}/>
      </div>
    </div>
  );
};

export default WorstSegmentsByClient;
