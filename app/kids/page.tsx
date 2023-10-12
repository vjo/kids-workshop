import Link from "next/link";

export default function Kids() {
  return (
    <main className="">
      <h1>Kids</h1>
      <Link href="/kids/1">#1</Link>
      <Link href="/kids/2">#2</Link>
    </main>
  );
}
