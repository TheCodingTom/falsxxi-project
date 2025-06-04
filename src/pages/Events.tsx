import { Calendar } from "@/components/ui/calendar";
import { db } from "@/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function Events() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [eventImage, setEventImage] = useState();

  const getEvent = async () => {
    const docRef = doc(db, "events", "0PY4GLJhKKoXOqfUweTS");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      console.log(docSnap.data().image);
      setEventImage(docSnap.data().image);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div>
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
        />
        {eventImage ? (
          <div>
            {" "}
            <img style={{ width: "300px" }} src={eventImage} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Events;
