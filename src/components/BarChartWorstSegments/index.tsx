import { useAppSelector } from "@/store/hooks";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
interface DataItem {
  Linea: string;
  TipoConsumo: string;
  Perdidas: number;
}

export const BarChartWorstSegments = () => {
  const { worstSegmentsData } = useAppSelector((state) => state.worstSegments);

  const groupedData = worstSegmentsData.reduce(
    (acc: Record<string, Record<string, unknown>>, item: DataItem) => {
      const key = item.Linea;

      if (!acc[key]) {
        acc[key] = { Linea: item.Linea };
      }

      acc[key][item.TipoConsumo] = item.Perdidas;
      return acc;
    },
    {} as Record<string, Record<string, unknown>>
  );

  const chartData = Object.values(groupedData);

  return (
    <div className="w-full mx-auto flex">
      <div className="bg-white p-4 shadow rounded-lg flex-1 mt-4 flex items-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Linea" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Bar dataKey="Comercial" stackId="a" fill="#8884d8">
              {chartData.map((entry, index) => (
                <text
                  x="50%"
                  y={entry.Comercial as number / 2}
                  dy={index % 2 === 0 ? -10 : 15}
                  fill="#8884d8"
                  textAnchor="middle"
                  key={`label-comercial-${index}`}
                >
                  Comercial
                </text>
              ))}
            </Bar>
            <Bar dataKey="Residencial" stackId="a" fill="#82ca9d">
              {chartData.map((entry, index) => (
                <text
                  x="50%"
                  y={(entry.Comercial as number) + (entry.Residencial as number) / 2}
                  dy={index % 2 === 0 ? -10 : 15}
                  fill="#82ca9d"
                  textAnchor="middle"
                  key={`label-residencial-${index}`}
                >
                  Residencial
                </text>
              ))}
            </Bar>
            <Bar dataKey="Industrial" stackId="a" fill="#ffc658">
              {chartData.map((entry, index) => (
                <text
                  x="50%"
                  y={(entry.Comercial as number) + (entry.Residencial as number) + (entry.Industrial as number) / 2}
                  dy={index % 2 === 0 ? -10 : 15}
                  fill="#ffc658"
                  textAnchor="middle"
                  key={`label-industrial-${index}`}
                >
                  Industrial
                </text>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
