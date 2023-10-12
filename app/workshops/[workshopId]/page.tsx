export default function Workshop({ params }) {
  return (
    <main className="">
      <h1>Workshop #{params.workshopId}</h1>
      <a href="/workshops">Back</a>
      <a href="/">Home</a>
    </main>
  );
}
