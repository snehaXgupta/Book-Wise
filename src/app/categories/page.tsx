'use client';

import React from 'react';
import Link from 'next/link';

const genresWithBooks: { genre: string; books: string[] }[] = [
  { genre: 'Adventure', books: ['The Alchemist', 'Life of Pi', 'Into the Wild', 'Treasure Island'] },
  { genre: 'Biography', books: ['The Diary of a Young Girl', 'Becoming', 'Educated', 'Steve Jobs'] },
  { genre: 'Classic', books: ['Pride and Prejudice', 'Jane Eyre', 'Wuthering Heights', 'Little Women'] },
  { genre: 'Dystopian', books: ['1984', 'Brave New World', 'The Hunger Games', 'Fahrenheit 451'] },
  { genre: 'Fantasy', books: ['Harry Potter', 'The Hobbit', 'Percy Jackson', 'The Name of the Wind'] },
  { genre: 'Fiction', books: ['The Great Gatsby', 'Normal People', 'Where the Crawdads Sing', 'Verity'] },
  { genre: 'Historical', books: ['The Book Thief', 'All the Light We Cannot See', 'War and Peace', 'The Pillars of the Earth'] },
  { genre: 'Mystery', books: ['Gone Girl', 'The Girl with the Dragon Tattoo', 'Big Little Lies', 'The Silent Patient'] },
  { genre: 'Non-Fiction', books: ['Sapiens', 'Atomic Habits', 'Thinking, Fast and Slow', 'Outliers'] },
  { genre: 'Romance', books: ['It Ends With Us', 'Me Before You', 'The Fault in Our Stars', 'The Notebook'] },
  { genre: 'Science Fiction', books: ['Dune', 'Ender’s Game', 'Neuromancer', 'The Martian'] },
  { genre: 'Thriller', books: ['The Da Vinci Code', 'Shutter Island', 'Behind Closed Doors', 'The Couple Next Door'] },
  { genre: 'Young Adult', books: ['The Fault in Our Stars', 'Divergent', 'The Maze Runner', 'Paper Towns'] },
  { genre: 'Poetry', books: ['Milk and Honey', 'The Sun and Her Flowers', 'Leaves of Grass', 'The Odyssey'] },
  { genre: 'Self-Help', books: ['Atomic Habits', 'The Mountain Is You', 'Deep Work', 'Can’t Hurt Me'] },
  { genre: 'Philosophy', books: ['Meditations', 'The Alchemist', 'Man’s Search for Meaning', 'Beyond Good and Evil'] },
  { genre: 'Art', books: ['The Story of Art', 'Ways of Seeing', 'Secret Lives of Great Artists', 'Steal Like an Artist'] },
  { genre: 'Travel', books: ['The Alchemist', 'Vagabonding', 'On the Road', 'The Beach'] },
  { genre: 'Cooking', books: ['Salt Fat Acid Heat', 'Kitchen Confidential', 'The Joy of Cooking', 'Plenty'] },
  { genre: 'Graphic Novels', books: ['Maus', 'Persepolis', 'Watchmen', 'Saga'] },
  { genre: 'True Crime', books: ['In Cold Blood', 'I’ll Be Gone in the Dark', 'Helter Skelter', 'The Stranger Beside Me'] },
  { genre: 'Short Stories', books: ['The Lottery', 'Exhalation', 'Ficciones', 'Her Body and Other Parties'] },
  { genre: 'Mythology', books: ['Circe', 'Song of Achilles', 'Mythos', 'Norse Mythology'] },
  { genre: 'Satire', books: ['Animal Farm', 'Catch-22', 'Gulliver’s Travels', 'Hitchhiker’s Guide'] },
  { genre: 'Drama', books: ['Hamlet', 'A Streetcar Named Desire', 'The Crucible', 'Fences'] },
  { genre: 'Gothic', books: ['Frankenstein', 'Dracula', 'Rebecca', 'The Picture of Dorian Gray'] },
  { genre: 'Nature', books: ['Silent Spring', 'Wild', 'Walden', 'A Walk in the Woods'] },
  { genre: 'Psychology', books: ['Thinking, Fast and Slow', 'Quiet', 'Flow', 'The Man Who Mistook His Wife'] },
  { genre: 'Spirituality', books: ['The Power of Now', 'The Untethered Soul', 'Awareness', 'Siddhartha'] },
  { genre: 'Economics', books: ['Freakonomics', 'The Wealth of Nations', 'Capital', 'Thinking, Fast and Slow'] },
];

const CategoriesPage = () => {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 15;

  const currentGenres = genresWithBooks.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <main className="min-h-[80vh] py-12 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-forest">Library Archives</h1>
          <p className="text-earth/60 italic font-serif quote-text">Dusty shelves and timeless stories.</p>
        </div>

        {page < 3 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {currentGenres.map(({ genre, books }) => (
                <div key={genre} className="cottage-card p-8 group hover:bg-white/60">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-forest underline decoration-sage/30 underline-offset-4">{genre}</h2>
                    <span className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">🌿</span>
                  </div>
                  <ul className="space-y-3">
                    {books.map((book) => (
                      <li key={book} className="flex items-center gap-2 text-earth/80 hover:text-sage-dark transition-colors cursor-pointer group/item">
                        <span className="w-1.5 h-1.5 bg-sage rounded-full opacity-40 group-hover/item:opacity-100"></span>
                        {book}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              {page > 1 && (
                <button onClick={() => setPage(page - 1)} className="cottage-btn-secondary px-8">
                  ← Previous Page
                </button>
              )}
              <button onClick={() => setPage(page + 1)} className="cottage-btn-primary px-8">
                Next Page →
              </button>
            </div>
          </>
        ) : (
          <div className="cottage-card p-16 max-w-2xl mx-auto space-y-8 animate-in zoom-in duration-500">
            <div className="text-6xl text-center">🪄</div>
            <h2 className="text-4xl font-bold text-forest">Can&apos;t find the perfect read?</h2>
            <p className="text-xl text-earth/80 font-serif italic">
              Our magical archive is vast, but sometimes your heart needs a guide. Let us find the book that matches your soul today.
            </p>
            <div className="flex flex-col gap-4">
              <Link href="/recommendations" className="cottage-btn-primary text-xl py-6">
                Get Personalized Recommendation 🌿
              </Link>
              <button onClick={() => setPage(1)} className="text-sage-dark font-bold hover:underline">
                Back to Archive
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoriesPage;
