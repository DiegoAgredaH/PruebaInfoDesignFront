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
    accessorKey: "costo_residencial",
    header: "Costo Residencial",
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("costo_residencial"))),
  },
  {
    accessorKey: "costo_comercial",
    header: "Costo Comercial",
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("costo_comercial"))),
  },
  {
    accessorKey: "costo_industrial",
    header: "Costo Industrial",
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("costo_industrial"))),
  },
  {
    accessorKey: "consumo_residencial",
    header: ({ column }) => createHeaderButton("Consumo Residencial", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("consumo_residencial"))),
  },
  {
    accessorKey: "consumo_comercial",
    header: ({ column }) => createHeaderButton("Consumo Comercial", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("consumo_comercial"))),
  },
  {
    accessorKey: "consumo_industrial",
    header: ({ column }) => createHeaderButton("Consumo Industrial", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("consumo_industrial"))),
  },
  {
    accessorKey: "perdidas_residencial",
    header: ({ column }) => createHeaderButton("Perdida Residencial", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("perdidas_residencial"))),
  },
  {
    accessorKey: "perdidas_comercial",
    header: ({ column }) => createHeaderButton("Perdida Comercial", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("perdidas_comercial"))),
  },
  {
    accessorKey: "perdidas_industrial",
    header: ({ column }) => createHeaderButton("Perdida Industrial", column),
    cell: ({ row }) => formatCurrency(parseFloat(row.getValue("perdidas_industrial"))),
  },
];
