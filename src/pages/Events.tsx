import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { it } from "date-fns/locale";
import "react-day-picker/dist/style.css";

import { db } from "@/config/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";

import "../styles/Events.css";
import money from "../images/blackpig.png";

function Events() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [eventDates, setEventDates] = useState<Date[]>([]);
  const [eventImage, setEventImage] = useState<string | null>(null);
  const [eventName, setEventName] = useState<string | null>(null);
  const [eventLocation, setEventLocation] = useState<string | null>(null);
  const [eventDate, setEventDate] = useState<string | null>(null);

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
      console.log(eventData);
      setEventImage(eventData.image);
      setEventName(eventData.name);
      setEventLocation(eventData.location);

      const firebaseDate = new Date(
        eventData.date.seconds * 1000 + eventData.date.nanoseconds / 1000000
      );
      const formattedDate = firebaseDate.toLocaleDateString();
      setEventDate(formattedDate);
    } else {
      setEventImage(null);
      setEventName(null);
      setEventLocation(null);
      setEventDate(null);
    }
  };

  const fetchAllEventDates = async () => {
    const eventsRef = collection(db, "events");
    const snapshot = await getDocs(eventsRef);

    const dates: Date[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.date && data.date.toDate) {
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
    <div className="event-main-container">
      <p className="main-text-events">
        I nostri eventi non sono solo feste: sono rituali collettivi, balli
        liberatori, esperimenti sonori ad alta quota e non solo. Che sia in un
        rifugio alpino, in un club cittadino o in qualche luogo che non possiamo
        spoilerare troppo presto, portiamo musica che scalda, connette e smuove.
      </p>

      <div className="calendar-container">
        <div className="flex flex-col flex-wrap items-center gap-2 @md:flex-row">
          <DayPicker
            locale={it}
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiers={{ hasEvent: eventDates }}
            modifiersClassNames={{ hasEvent: "event-highlight" }}
            className="rounded-md border shadow-sm bg-white p-4"
          />
        </div>

        {eventImage ? (
          <div className="event-information">
            <div className="text-center">
              <h4>Nome: {eventName} </h4>
              <h4>Location: {eventLocation} </h4>
              <h4>Data: {eventDate} </h4>
            </div>
            <div>
              <img
                className="event-image"
                src={eventImage}
                alt="locandina evento"
              />
            </div>
          </div>
        ) : (
          <div className="event-information">
            <img className="event-image" src={money} alt="" />
            <p>Nessun evento per questa data.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
