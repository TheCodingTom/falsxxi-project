import { Calendar } from "@/components/ui/calendar";
import React from "react";

function Events() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <div className="flex flex-col flex-wrap items-center gap-2 @md:flex-row">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm bg-white"
        />
      </div>
    </div>
  );
}

export default Events;
