import { Checkbox } from "@/components/ui/checkbox";
import { createHeaderButton, formatCurrency } from "@/lib/utils";
import { Clients, Segments, WorstSegments } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

type ColumnData = Segments | Clients | WorstSegments;

export const columns: ColumnDef<ColumnData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Linea",
    header: "Linea",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Linea")}</div>
    ),
  },
  {
    accessorKey: "costo",
    header: "Costo",
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("costo"))),
  },
  {
    accessorKey: "consumo",
    header: ({ column }) => createHeaderButton("Consumo", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("consumo"))),
  },
  {
    accessorKey: "perdidas",
    header: ({ column }) => createHeaderButton("Perdidas", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("perdidas"))),
  },
];
