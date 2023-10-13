import { useWorkshops } from "@/dataStore";
import { Link } from "react-router-dom";

export default function Workshops() {
  const workshops = useWorkshops();
  return (
    <main className="">
      <h1>Workshops</h1>
      {workshops.map((workshop) => (
        <Link key={workshop.id} to={`/workshops/${workshop.id}`}>
          {workshop.name}
          <img src={workshop.photoUrl} alt={workshop.name} />
        </Link>
      ))}
    </main>
  );
}
