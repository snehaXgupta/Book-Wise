import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sage/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-terracotta/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-4xl space-y-8">
        <div className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-semibold tracking-wide uppercase mb-4 border border-sage/20">
          ✨ Discover Your Next Cozy Read
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-forest leading-tight">
          Where Every Book Feels Like <span className="text-terracotta italic">Home</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-earth/80 max-w-2xl mx-auto leading-relaxed font-serif italic quote-text">
          A book is a gift you can open again and again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/recommendations" className="cottage-btn-primary text-xl px-10 py-4">
            Start Your Mood Survey 🌿
          </Link>
          <Link href="/categories" className="cottage-btn-secondary text-xl px-10 py-4">
            Browse Categories
          </Link>
        </div>

        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="📖" 
            title="Curated Reads" 
            desc="Hand-picked gems for every cozy afternoon." 
          />
          <FeatureCard 
            icon="🧠" 
            title="Mood Matcher" 
            desc="Let your feelings guide your next adventure." 
          />
          <FeatureCard 
            icon="🕯️" 
            title="Warm Community" 
            desc="Join fellow readers in the digital cottage." 
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="cottage-card p-6 text-left space-y-3">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-forest">{title}</h3>
      <p className="text-earth/70">{desc}</p>
    </div>
  );
}
