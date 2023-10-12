/* eslint-disable @next/next/no-img-element */
import { useKid } from "@/app/dataStore";
import Link from "next/link";

export default function Kid({ params }: { params: { kidId: string } }) {
  const kid = useKid({ kidId: params.kidId });
  if (!kid) {
    return <main>Kid not found 🚨</main>;
  }

  return (
    <main className="">
      <h1>Kid #{kid.name}</h1>
      <img src={kid.photoUrl} alt={kid.name} />
      <Link href="/kids">Back</Link>
      <Link href="/">Home</Link>
    </main>
  );
}
