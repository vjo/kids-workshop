/* eslint-disable @next/next/no-img-element */
import {
  useAvailableWorkshopsForKid,
  useKid,
  useSuccessfullSessionsForKid,
  useWorkshop,
} from "@/app/dataStore";
import Link from "next/link";

export default function Kid({ params }: { params: { kidId: string } }) {
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
        <Link key={workshop.id} href={`/workshops/${workshop.id}`}>
          {workshop.name}
          {/* <img src={workshop.photoUrl} alt={workshop.name} /> */}
        </Link>
      ))}

      <h2>Successfull sessions</h2>
      {successfullSessions.map((session) => (
        <Session key={session.id} session={session} />
      ))}

      <Link href="/kids">Back</Link>
      <Link href="/">Home</Link>
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
      <p>Tried: {new Date(session.triedAt).toISOString()}</p>
      <p>
        Succeded:{" "}
        {session.succededAt ? new Date(session.succededAt).toISOString() : "-"}
      </p>
    </div>
  );
}
