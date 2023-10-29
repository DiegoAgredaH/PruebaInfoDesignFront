import { DataTable } from "..";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ColumnDef } from "@tanstack/react-table";
import { Clients, Segments, WorstSegments } from "../../types/index";

type ColumnData = Segments | Clients | WorstSegments;

interface Props {
  columns: ColumnDef<ColumnData>[];
  data: ColumnData[];
  GraphicsComponent: () => JSX.Element;
}

export const TabsInfo = ({ columns, data, GraphicsComponent }: Props) => {
  return (
    <Tabs defaultValue="table" className="w-full">
      <TabsList className="grid w-[400px] grid-cols-2 justify-center mx-auto">
        <TabsTrigger value="table">Tabla</TabsTrigger>
        <TabsTrigger value="graphics">Gráficas</TabsTrigger>
      </TabsList>
      <TabsContent value="table">
        <DataTable columns={columns} data={data} />
      </TabsContent>
      <TabsContent value="graphics">
        <GraphicsComponent />
      </TabsContent>
    </Tabs>
  );
};
