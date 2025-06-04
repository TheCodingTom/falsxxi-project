import { Calendar } from "@/components/ui/calendar";
import { db } from "@/config/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

function Events() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [eventImage, setEventImage] = useState<string | null>(null);

  const fetchEventsByDate = async (selectedDate: Date) => {
    const start = new Date(selectedDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(selectedDate);
    end.setHours(23, 59, 59, 999);

    const eventsRef = collection(db, "events");

    const q = query(
      eventsRef,
      where("date", ">=", Timestamp.fromDate(start)),
      where("date", "<=", Timestamp.fromDate(end))
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const eventData = querySnapshot.docs[0].data();
      setEventImage(eventData.image);
    } else {
      setEventImage(null);
    }
  };

  useEffect(() => {
    if (date) {
      fetchEventsByDate(date);
    }
  }, [date]);

  return (
    <div>
      <p>
        I nostri eventi non sono solo feste: sono rituali collettivi, balli
        liberatori, esperimenti sonori ad alta quota e non solo...
      </p>
      <div className="flex flex-col flex-wrap items-center gap-2 @md:flex-row">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm bg-white"
        />
      </div>
      {eventImage ? (
        <div>
          <img
            style={{ width: "300px" }}
            src={eventImage}
            alt="locandina evento"
          />
        </div>
      ) : (
        <p>Nessun evento per questa data.</p>
      )}
    </div>
  );
}

export default Events;
