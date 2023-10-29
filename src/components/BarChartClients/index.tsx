import { useAppSelector } from "@/store/hooks";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const BarChartClients = () => {
  const { clientsData } = useAppSelector((state) => state.clients);
  return (
    <div className="w-full mx-auto flex">
      <div className="bg-white p-4 shadow rounded-lg flex-1 mt-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={clientsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ fontSize: 12 }} dataKey="Linea" />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip position={{ x: 0, y: 250 }}/>
            <Legend />
            <Bar
              dataKey="consumo_residencial"
              fill="#8884d8"
              name="Consumo Residencial"
            />
            <Bar
              dataKey="consumo_comercial"
              fill=" #4267B2"
              name="Consumo Comercial"
            />
            <Bar
              dataKey="consumo_industrial"
              fill="#003366"
              name="Consumo Industrial"
            />
            <Bar
              dataKey="costo_residencial"
              fill="#ffc658"
              name="Costo Residencial"
            />
            <Bar
              dataKey="costo_comercial"
              fill="#FFDB58"
              name="Costo Comercial"
            />
            <Bar
              dataKey="costo_industrial"
              fill="#FFD700"
              name="Costo Industrial"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white ml-2 p-4 shadow rounded-lg flex-1 mt-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={clientsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ fontSize: 12 }} dataKey="Linea" />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip position={{ x: 0, y: 250 }}/>
            <Legend />
            <Bar
              dataKey="perdidas_residencial"
              fill="#f37c3d"
              name="Perdidas Residencial"
            />
            <Bar
              dataKey="perdidas_comercial"
              fill="#E74C3C"
              name="Perdidas Comercial"
            />
            <Bar
              dataKey="perdidas_industrial"
              fill="#C0392B"
              name="Perdidas Industrial"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
