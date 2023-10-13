import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="">
      <ul>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/workshops">Workshops</Link>
        </li>
      </ul>
    </main>
  );
}
