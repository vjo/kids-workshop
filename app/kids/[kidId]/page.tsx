export default function Kid({ params }) {
  return (
    <main className="">
      <h1>Kid #{params.kidId}</h1>
      <a href="/kids">Back</a>
      <a href="/">Home</a>
    </main>
  );
}
