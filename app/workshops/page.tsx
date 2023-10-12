import Link from "next/link";
import { useWorkshops } from "@/app/dataStore";

export default function Workshops() {
  const workshops = useWorkshops();
  return (
    <main className="">
      <h1>Workshops</h1>
      {workshops.map((workshop) => (
        <Link key={workshop.id} href={`/workshops/${workshop.id}`}>
          {workshop.name}
        </Link>
      ))}
    </main>
  );
}
