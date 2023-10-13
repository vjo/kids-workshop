import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="">
      <Link to="/kids">Kids</Link>
      <Link to="/workshops">Workshops</Link>
    </main>
  );
}
