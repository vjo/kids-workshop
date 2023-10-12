import { useWorkshop } from "@/app/dataStore";
import Link from "next/link";

export default function Workshop({
  params,
}: {
  params: { workshopId: string };
}) {
  const workshop = useWorkshop({ workshopId: params.workshopId });
  if (!workshop) {
    return <main>Workshop not found 🚨</main>;
  }
  return (
    <main className="">
      <h1>Workshop #{workshop.name}</h1>
      <img src={workshop.photoUrl} alt={workshop.name} />
      <Link href="/workshops">Back</Link>
      <Link href="/">Home</Link>
    </main>
  );
}
