'use client';

export default function DashboardError({ error, reset }) {
  return (
    <div className="p-4 text-red-600">
      <h2>Something went wrong!</h2>
      <pre>{error?.message}</pre>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
