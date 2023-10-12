/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useKids } from "@/app/dataStore";

export default function Kids() {
  const kids = useKids();
  return (
    <main className="">
      <h1>Kids</h1>
      {kids.map((kid) => (
        <Link key={kid.id} href={`/kids/${kid.id}`}>
          {kid.name}
          <img src={kid.photoUrl} alt={kid.name} />
        </Link>
      ))}
    </main>
  );
}
