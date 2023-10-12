import Link from "next/link";

export default function Kid({ params }: { params: { kidId: string } }) {
  return (
    <main className="">
      <h1>Kid #{params.kidId}</h1>
      <Link href="/kids">Back</Link>
      <Link href="/">Home</Link>
    </main>
  );
}
