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

import "../styles/Events.css";

function Events() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [eventDates, setEventDates] = useState<Date[]>([]);
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

  const fetchAllEventDates = async () => {
    const eventsRef = collection(db, "events");
    // reading all docs in events collection
    const snapshot = await getDocs(eventsRef);

    const dates: Date[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      // firestore method .toDate() converst dates into regular JS Date objects
      if (data.date && data.date.toDate) {
        // add dates to array to show them in component
        dates.push(data.date.toDate());
      }
    });

    setEventDates(dates);
  };

  useEffect(() => {
    fetchAllEventDates();
  }, []);

  useEffect(() => {
    if (date) {
      fetchEventsByDate(date);
    }
  }, [date]);

  return (
    <div className="main-container">
      <p>
        I nostri eventi non sono solo feste: sono rituali collettivi, balli
        liberatori, esperimenti sonori ad alta quota e non solo. Che sia in un
        rifugio alpino, in un club cittadino o in qualche luogo che non possiamo
        spoilerare troppo presto, portiamo musica che scalda, connette e smuove.
      </p>
      <div className="flex flex-col flex-wrap items-center gap-2 @md:flex-row">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm bg-white"
          // applying hasEvent modifier to any date that matches one of the eventDates and applying a class to it
          modifiers={{
            hasEvent: eventDates,
          }}
          modifiersClassNames={{
            hasEvent: "event-highlight",
          }}
        />
      </div>

      {eventImage ? (
        <div>
          <img
            className="event-image"
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
