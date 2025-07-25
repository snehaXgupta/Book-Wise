'use client';

import React from 'react';

const genresWithBooks: { genre: string; books: string[] }[] = [
  {
    genre: 'Adventure',
    books: ['The Alchemist', 'Life of Pi', 'Into the Wild', 'Treasure Island'],
  },
  {
    genre: 'Biography',
    books: ['The Diary of a Young Girl', 'Becoming', 'Educated', 'Steve Jobs'],
  },
  {
    genre: 'Classic',
    books: ['Pride and Prejudice', 'Jane Eyre', 'Wuthering Heights', 'Little Women'],
  },
  {
    genre: 'Dystopian',
    books: ['1984', 'Brave New World', 'The Hunger Games', 'Fahrenheit 451'],
  },
  {
    genre: 'Fantasy',
    books: ['Harry Potter', 'The Hobbit', 'Percy Jackson', 'The Name of the Wind'],
  },
  {
    genre: 'Fiction',
    books: ['The Great Gatsby', 'Normal People', 'Where the Crawdads Sing', 'Verity'],
  },
  {
    genre: 'Historical',
    books: ['The Book Thief', 'All the Light We Cannot See', 'War and Peace', 'The Pillars of the Earth'],
  },
  {
    genre: 'Mystery',
    books: ['Gone Girl', 'The Girl with the Dragon Tattoo', 'Big Little Lies', 'The Silent Patient'],
  },
  {
    genre: 'Non-Fiction',
    books: ['Sapiens', 'Atomic Habits', 'Thinking, Fast and Slow', 'Outliers'],
  },
  {
    genre: 'Romance',
    books: ['It Ends With Us', 'Me Before You', 'The Fault in Our Stars', 'The Notebook'],
  },
  {
    genre: 'Science Fiction',
    books: ['Dune', 'Ender’s Game', 'Neuromancer', 'The Martian'],
  },
  {
    genre: 'Thriller',
    books: ['The Da Vinci Code', 'Shutter Island', 'Behind Closed Doors', 'The Couple Next Door'],
  },
  {
    genre: 'Young Adult',
    books: ['The Fault in Our Stars', 'Divergent', 'The Maze Runner', 'Paper Towns'],
  },
];

const CategoriesPage = () => {
  return (
    <main className="min-h-screen bg-[url('/check-bg.png')] bg-repeat py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#5B3924] mb-10">Book Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {genresWithBooks.map(({ genre, books }) => (
            <div
              key={genre}
              className="bg-[#f9f1ec] p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h1 className="text-xl font-bold text-[#5B3924] mb-3">{genre}</h1>
              <ul className="list-disc pl-5 text-[#5B3924]">
                {books.map((book) => (
                  <li key={book} className="text-sm">{book}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;
