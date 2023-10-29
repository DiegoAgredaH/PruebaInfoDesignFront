import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getSegments } from "@/store/slices/segments";
import { BarChartSegments, TabsInfo } from "@/components";
import { columns } from "./columns";

export const Segments = () => {
  const dispatch = useAppDispatch();
  const { segmentsData } = useAppSelector((state) => state.segments);

  useEffect(() => {
    if (segmentsData.length === 0) {
      dispatch(getSegments());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ml-4 w-full">
      <h1 className="font-heading font-semibold text-3xl md:text-4xl">
        Tramos
      </h1>
      <p className="text-sm text-gray-500">
        Muestra los consumos, perdidas y costos por tramos.
      </p>
      <div className="flex justify-center items-center">
        <TabsInfo
          columns={columns}
          data={segmentsData}
          GraphicsComponent={BarChartSegments}
        />
      </div>
    </div>
  );
};

export default Segments;
