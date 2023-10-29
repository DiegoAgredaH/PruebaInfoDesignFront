import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { es } from "date-fns/locale";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { getClients } from "@/store/slices/clients/thunks";
import { getSegments } from "@/store/slices/segments";
import { getWorstSegments } from "@/store/slices/worstSegmentsByClient";

interface Props {
  component: string;
}

export function RangeDatePicker({ component }: Props) {
  const [date, setDate] = React.useState<Date>();
  const [dateTo, setDateTo] = React.useState<Date>();
  const dispatch = useAppDispatch();
  const [previousDate, setPreviousDate] = React.useState<Date>();
  const [previousDateTo, setPreviousDateTo] = React.useState<Date>();

  useEffect(() => {
    if (date !== previousDate && dateTo !== previousDateTo) {
      setPreviousDate(date);
      setPreviousDateTo(dateTo);
  
      const formattedDate = date && format(date, "yyyy-MM-dd");
      const formattedDateTo = dateTo && format(dateTo, "yyyy-MM-dd");
  
      const dispatchAction = () => {
        switch (component) {
          case "Client":
            return getClients({ fechainicial: formattedDate, fechafinal: formattedDateTo });
          case "Segments":
            return getSegments({ fechainicial: formattedDate, fechafinal: formattedDateTo });
          case "WorstSegmentsByClient":
            return getWorstSegments({ fechainicial: formattedDate, fechafinal: formattedDateTo });
          default:
            return null; 
        }
      };
  
      const action = dispatchAction();
      if (action) {
        dispatch(action);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, dateTo, component, previousDate, previousDateTo]);
  
  return (
    <>
      <p className="ml-8 mr-2 text-sm text-gray-500">Desde:</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-white" />
            {date ? (
              format(date, "PPP", { locale: es })
            ) : (
              <span className="text-white">Fecha inicio</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className=" w-auto p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            selected={date}
            onSelect={setDate}
            fromYear={1993}
            toYear={2023}
            locale={es}
          />
        </PopoverContent>
      </Popover>
      <p className="ml-8 mr-2 text-sm text-gray-500">Hasta:</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-white" />
            {dateTo ? (
              format(dateTo, "PPP", { locale: es })
            ) : (
              <span className="text-white">Fecha fin</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className=" w-auto p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            selected={dateTo}
            onSelect={setDateTo}
            fromYear={1993}
            toYear={2023}
            locale={es}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
