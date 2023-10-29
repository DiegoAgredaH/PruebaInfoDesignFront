import { Icons } from "@/components/ui/Icons";
import { Button } from "@/components/ui/button";
import { Clients, Segments, WorstSegments } from "@/types";
import { Column } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ColumnData = Segments | Clients | WorstSegments;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value: number) => {
  const formatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 5,
  }).format(value);
  return <div>{formatted}</div>;
};

export const createHeaderButton = (
  label: string,
  column: Column<ColumnData, unknown>
) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <Icons.arrowUpDownIcon className="ml-2 h-4 w-4" />
    </Button>
  );
};
