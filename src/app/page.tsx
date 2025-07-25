import Link from 'next/link';
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 pt-20 text-center">
      <h1 className="text-4xl font-bold text-[#5B3924] mb-4">Welcome to BookWise ☕</h1>
      <p className="text-lg text-[#5B3924] max-w-2xl mb-8">
        Discover high-rated gems, cozy reads, and inspiring quotes — all with a warm coffee-café vibe.
      </p>
      
    📖🪄🍂

<Link href="/recommendations">
  <button className="bg-[#e8c9b9] text-[#5B3924] px-6 py-2 rounded-lg hover:bg-[#ddb7a3] transition">
    Explore Recommendations →
  </button>
</Link>



    </main>
  );
}
