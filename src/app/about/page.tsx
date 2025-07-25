'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-[#7c4f2c] font-serif text-lg space-y-10 text-center">
      <section>
        <h1 className="text-3xl font-bold mb-4">A Tale from the Café Library</h1>
        <p className="leading-relaxed">
          Once in the quiet village of Thistlebrook, where clouds danced lazily and time moved like honey, there lived a soft spoken girl named Serene. Her world was made of poems and pages, tucked between the shelves of a little coffeehouse library she called home. Serene never chased grand adventures; she whispered to them in the margins of books, hoping they would hear.
          <br /><br />
          One rainy afternoon, as mist curled around the windows, a stranger stepped in. He was not a knight, nor a prince, but a boy with stories in his eyes and hands that smelled of parchment and ink. His name was Darien. He did not promise castles or stars, only silence shared between sips of warm espresso and soft gasps at plot twists.
          <br /><br />
          Over cups of cinnamon coffee and pages worn soft by love, they discovered not just books but each other. In the warmth of that quiet space, Serene`s heart learned that magic doesn’t always roar. Sometimes, it just reads beside you.
        </p>
      </section>

      <section className="mt-12 border-t border-[#bfa58c] pt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">What is BookWise?</h2>
        <p className="leading-relaxed max-w-2xl mx-auto text-[#7c4f2c]">
          BookWise is your cozy book companion, a café inspired web app that curates reads based on how you <em>feel</em>.
          Whether you are looking to escape into fantasy, sink into soft romance, or learn from non fiction, BookWise guides
          you gently. With mood based prompts, category filtering, and aesthetic design, it is like asking your favorite
          barista what book you need today.
          <br /><br />
          Welcome to your literary retreat. Built with heart by <strong>Sneha</strong>.
        </p>
      </section>
    </div>
  );
}
