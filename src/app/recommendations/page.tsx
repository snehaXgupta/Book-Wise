'use client';

import React, { useState } from 'react';

const moodToGenre: { [mood: string]: string } = {
  Happy: 'Comedy',
  Sad: 'Romance',
  Adventurous: 'Adventure',
  Curious: 'Mystery',
  Reflective: 'Biography',
  Escapist: 'Fantasy',
  Tense: 'Thriller',
};

const recommendations = {
  Comedy: ['Bossypants', 'Good Omens', 'Yes Please'],

  Romance: ['The Notebook', 'Me Before You', 'Pride and Prejudice'],

  Adventure: ['The Hobbit', 'Life of Pi', 'Treasure Island'],

  Mystery: ['Gone Girl', 'The Girl with the Dragon Tattoo', 'Sherlock Holmes'],

  Biography: ['Becoming', 'Steve Jobs', 'Educated'],

  Fantasy: ['Harry Potter', 'Mistborn', 'The Name of the Wind'],

  Thriller: ['The Silent Patient', 'The Da Vinci Code', 'The Girl on the Train'],
};

export default function RecommendationsPage() {
  const [selectedMood, setSelectedMood] = useState('');
  const [genre, setGenre] = useState('');
  const [books, setBooks] = useState<string[]>([]);

  const handleMoodSelect = (mood: string) => {
    const selectedGenre = moodToGenre[mood];
    setSelectedMood(mood);
    setGenre(selectedGenre);
    setBooks(recommendations[selectedGenre]);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-8 text-center">
      <h1 className="text-3xl font-bold mb-6 text-[#7c4f2c]">What your mood says today?</h1>

      <div className="flex flex-wrap justify-center gap-x-9 gap-y-6 mb-10">

        {Object.keys(moodToGenre).map((mood) => (
          <button
            key={mood}
            onClick={() => handleMoodSelect(mood)}
            className="bg-pink-200 hover:bg-pink-300 text-[#5B3924] font-semibold py-2 px-4 rounded shadow"
          >
            {mood}
          </button>
        ))}
      </div>

      {genre && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-[#5B3924]">
            Genre: <span className="underline">{genre}</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {books.map((book) => (
              <div
                key={book}
                className="bg-[#fffaf7] border border-pink-100 shadow rounded p-4 text-[#5B3924]"
              >
                <p className="text-lg font-semibold">{book}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
