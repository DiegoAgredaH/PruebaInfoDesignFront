import { useEffect } from "react";
import { BarChartClients, TabsInfo } from "@/components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getClients } from "@/store/slices/clients";
import { columns } from "./columns";

export const Client = () => {
  const dispatch = useAppDispatch();
  const { clientsData } = useAppSelector((state) => state.clients);

  useEffect(() => {
    if (clientsData.length === 0) {
      dispatch(getClients());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ml-4 w-full">
      <h1 className="font-heading font-semibold text-3xl md:text-4xl">
        Clientes
      </h1>
      <p className="text-sm text-gray-500">
        Muestra los tramos consumos, perdidas y costos divididas por tipos de
        usuarios.
      </p>
      <div className="flex justify-center items-center">        
        <TabsInfo columns={columns} data={clientsData} GraphicsComponent={BarChartClients}/>
      </div>
    </div>
  );
};

export default Client;
