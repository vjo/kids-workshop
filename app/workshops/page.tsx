import Link from "next/link";

export default function Workshops() {
  return (
    <main className="">
      <h1>Workshops</h1>
      <Link href="/workshops/1">#1</Link>
      <Link href="/workshops/2">#2</Link>
    </main>
  );
}
