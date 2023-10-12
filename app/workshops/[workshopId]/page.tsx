import Link from "next/link";

export default function Workshop({
  params,
}: {
  params: { workshopId: string };
}) {
  return (
    <main className="">
      <h1>Workshop #{params.workshopId}</h1>
      <Link href="/workshops">Back</Link>
      <Link href="/">Home</Link>
    </main>
  );
}
