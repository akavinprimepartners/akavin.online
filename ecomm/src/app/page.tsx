import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Akavin Visualizer
        </h1>

        <p className="text-slate-400 mb-8">
          Upload room images and visualize products.
        </p>

        <Link
          href="/upload"
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Start Project
        </Link>
      </div>
    </main>
  );
}
