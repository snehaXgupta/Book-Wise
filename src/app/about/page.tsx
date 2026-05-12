import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-earth font-sans space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-forest leading-tight font-header">
          A Tale from the <span className="text-terracotta italic">Café Library</span>
        </h1>
        <p className="text-earth/60 italic font-serif text-xl">Where magic is found between the pages and sips of coffee.</p>
      </section>

      {/* Story Section */}
      <section className="cottage-card p-8 md:p-12 space-y-6 relative overflow-hidden bg-white/40 border-sage/10">
        <div className="space-y-6 text-lg leading-relaxed font-quote quote-text text-center max-w-2xl mx-auto">
          <p>
            In our quiet Café Library, amidst the steam of hazelnut lattes and the rustle of turning pages, lived a boy named <span className="text-forest font-bold">Kaju</span> and a girl named <span className="text-terracotta font-bold">Tinguu</span>.
          </p>
          
          <p>
            Tinguu, who had secretly loved Kaju for years, finally handed him her most precious treasure, a worn copy of <span className="italic font-bold">Harry Potter</span>. "Read it," she whispered 
          </p>

          <p>
            As Kaju lost himself in the wizarding world, he realized that the real magic wasn't in the spells it was in the way Tinguu looked at him when he finally understood the power of a good story. In that moment, surrounded by the warmth of the café, he fell deeply in love.
          </p>

          <p className="text-xl italic text-forest border-y border-sage/20 py-4">
            Magic doesn't always roar; sometimes it just reads beside you.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-center space-y-6 max-w-xl mx-auto pt-4">
        <h2 className="text-2xl font-bold text-forest font-header">Welcome to BookWise</h2>
        <p className="text-earth/80 leading-relaxed">
          Inspired by this simple, quiet magic, BookWise is your digital corner to find books that match your soul. Whether you're a Kaju or a Tinguu, we're here to help you find your next great read.
        </p>
        <div className="pt-4 border-t border-sage/10">
          <p className="font-bold text-forest">Built with magic by Sneha ✨</p>
        </div>
      </section>
    </div>
  );
}
