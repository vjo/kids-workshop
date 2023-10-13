import { Link } from "react-router-dom";
import { useKids } from "@/dataStore";

export default function Kids() {
  const kids = useKids();
  return (
    <main className="">
      <h1>Kids</h1>
      {kids.map((kid) => (
        <div>
          <Link key={kid.id} to={`/kids/${kid.id}`}>
            {kid.name}
            <img src={kid.photoUrl} alt={kid.name} width="200" />
          </Link>
        </div>
      ))}
    </main>
  );
}
