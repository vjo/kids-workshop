import {
  useAvailableWorkshopsForKid,
  useKid,
  useMarkSessionAsSuccessfull,
  useSessionForKidAndWorkshop,
  useStartSession,
  useSuccessfullSessionsForKid,
  useWorkshop,
} from "@/dataStore";
import { Link, useParams } from "react-router-dom";

export default function KidPage() {
  const params = useParams<{ kidId: string }>();
  if (!params.kidId) {
    throw new Error("Missing kidId");
  }
  const kid = useKid({ kidId: params.kidId });
  const availableWorkshops = useAvailableWorkshopsForKid({
    kidId: params.kidId,
  });
  const successfullSessions = useSuccessfullSessionsForKid({
    kidId: params.kidId,
  });

  if (!kid) {
    return <main>Kid not found 🚨</main>;
  }

  return (
    <main className="">
      <h1>Kid #{kid.name}</h1>
      <img src={kid.photoUrl} alt={kid.name} />

      <h2>Available workshops</h2>
      {availableWorkshops.map((workshop) => (
        <AvailableWorkshop key={workshop.id} workshop={workshop} kid={kid} />
      ))}

      <h2>Successfull sessions</h2>
      {successfullSessions.map((session) => (
        <Session key={session.id} session={session} />
      ))}

      <Link to="/kids">Back</Link>
      <Link to="/">Home</Link>
    </main>
  );
}

function Session({
  session,
}: {
  session: {
    id: string;
    workshopId: string;
    kidId: string;
    triedAt: number;
    succededAt?: number | null;
  };
}) {
  const workshop = useWorkshop({ workshopId: session.workshopId });
  if (!workshop) {
    return <div>Workshop not found 🚨</div>;
  }
  return (
    <div>
      <h3>Session {workshop.name}</h3>
      <img src={workshop.photoUrl} alt={workshop.name} />
      <p>Tried: {new Date(session.triedAt).toISOString()}</p>
      <p>
        Succeded:{" "}
        {session.succededAt ? new Date(session.succededAt).toISOString() : "-"}
      </p>
    </div>
  );
}

function AvailableWorkshop({ kid, workshop }: { kid: any; workshop: any }) {
  const existingSession = useSessionForKidAndWorkshop({
    kidId: kid.id,
    workshopId: workshop.id,
  });
  const startSession = useStartSession({
    kidId: kid.id,
    workshopId: workshop.id,
  });
  const markSessionAsSucceded = useMarkSessionAsSuccessfull({
    kidId: kid.id,
    workshopId: workshop.id,
  });

  return (
    <div>
      <Link key={workshop.id} to={`/workshops/${workshop.id}`}>
        {workshop.name}
        <img src={workshop.photoUrl} alt={workshop.name} />
      </Link>
      {existingSession ? (
        "Already tried"
      ) : (
        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            startSession();
            window.location.pathname = "/";
          }}
        >
          Start
        </button>
      )}
      <button
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          markSessionAsSucceded();
          window.location.pathname = "/";
        }}
      >
        Succeded
      </button>
    </div>
  );
}
