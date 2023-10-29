import { useAppSelector } from '@/store/hooks';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const BarChartSegments = () => {
  const { segmentsData } = useAppSelector((state) => state.segments);
  return (
    <div className="w-full mx-auto flex">
      <div className="bg-white p-4 shadow rounded-lg flex-1 mt-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={segmentsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ fontSize: 12 }} dataKey="Linea" />
            <YAxis tick={{ fontSize: 12 }}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="consumo" fill="#8884d8" name="Consumo" />
            <Bar dataKey="costo" fill="#ffc658" name="Costo" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white ml-2 p-4 shadow rounded-lg flex-1 mt-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={segmentsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ fontSize: 12 }} dataKey="Linea" />
            <YAxis tick={{ fontSize: 12 }}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="perdidas" fill="#f37c3d" name="Pérdidas" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
