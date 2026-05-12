'use client';

import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "How are you feeling today?",
    options: [
      { label: "Radiant & Energetic", value: "Happy", icon: "☀️" },
      { label: "Quiet & Reflective", value: "Reflective", icon: "🕯️" },
      { label: "A Bit Melancholy", value: "Sad", icon: "☁️" },
      { label: "Restless & Bold", value: "Adventurous", icon: "⛰️" },
    ]
  },
  {
    id: 2,
    question: "What's the ideal vibe for your read?",
    options: [
      { label: "A Cozy Blanket", value: "Cozy", icon: "🧶" },
      { label: "An Unsolved Mystery", value: "Intriguing", icon: "🔍" },
      { label: "Epic & World-Shifting", value: "Epic", icon: "🐉" },
      { label: "Raw & Real", value: "Grounded", icon: "🌾" },
    ]
  },
  {
    id: 3,
    question: "Pick your perfect reading nook:",
    options: [
      { label: "Sun-drenched Garden", value: "Nature", icon: "🌸" },
      { label: "Rainy Attic Library", value: "Old", icon: "📚" },
      { label: "Bustling City Café", value: "Modern", icon: "☕" },
      { label: "A Hidden Forest Cave", value: "Hidden", icon: "🍄" },
    ]
  }
];

const moodToGenre: { [key: string]: string } = {
  'Happy-Cozy': 'Comedy',
  'Happy-Intriguing': 'Mystery',
  'Reflective-Cozy': 'Biography',
  'Reflective-Grounded': 'Philosophy',
  'Sad-Cozy': 'Romance',
  'Adventurous-Epic': 'Fantasy',
  'Adventurous-Intriguing': 'Thriller',
  'default': 'Fiction'
};

const recommendations: { [key: string]: { title: string; author: string; desc: string }[] } = {
  Comedy: [
    { title: "Bossypants", author: "Tina Fey", desc: "A hilarious look at life, work, and comedy." },
    { title: "Good Omens", author: "Terry Pratchett & Neil Gaiman", desc: "The apocalypse has never been funnier." }
  ],
  Romance: [
    { title: "Pride and Prejudice", author: "Jane Austen", desc: "The ultimate cozy classic romance." },
    { title: "The Notebook", author: "Nicholas Sparks", desc: "A tear-jerker that warms the soul." }
  ],
  Fantasy: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", desc: "Start your journey in the Shire." },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", desc: "A beautifully written tale of magic and music." }
  ],
  Mystery: [
    { title: "The Seven Deaths of Evelyn Hardcastle", author: "Stuart Turton", desc: "A mind-bending historical mystery." },
    { title: "Sherlock Holmes", author: "Arthur Conan Doyle", desc: "The master of deduction." }
  ],
  Biography: [
    { title: "Becoming", author: "Michelle Obama", desc: "An inspiring and deeply personal memoir." },
    { title: "Educated", author: "Tara Westover", desc: "A powerful story of learning and resilience." }
  ],
  Thriller: [
    { title: "The Silent Patient", author: "Alex Michaelides", desc: "A shocking psychological thriller." },
    { title: "Gone Girl", author: "Gillian Flynn", desc: "A dark and twisty exploration of a marriage." }
  ],
  Philosophy: [
    { title: "The Alchemist", author: "Paulo Coelho", desc: "A fable about following your dreams." },
    { title: "Meditations", author: "Marcus Aurelius", desc: "Timeless wisdom for a quiet mind." }
  ],
  Fiction: [
    { title: "The Midnight Library", author: "Matt Haig", desc: "Every life has millions of possibilities." }
  ]
};

export default function RecommendationsPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<{ genre: string; books: any[] } | null>(null);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const key = `${finalAnswers[0]}-${finalAnswers[1]}`;
    const genre = moodToGenre[key] || moodToGenre['default'];
    setResult({
      genre,
      books: recommendations[genre]
    });
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-[70vh] flex flex-col items-center justify-center">
      {!result ? (
        <div className="w-full max-w-2xl text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-forest">Mood Survey 🌿</h1>
            <div className="flex justify-center gap-2">
              {questions.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 w-12 rounded-full transition-all duration-500 ${i <= step ? 'bg-sage' : 'bg-sage-light/20'}`}
                />
              ))}
            </div>
          </div>

          <div key={step} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif italic text-earth">{questions[step].question}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="cottage-card p-6 flex flex-col items-center gap-3 hover:scale-105 active:scale-95 transition-all text-forest"
                >
                  <span className="text-4xl">{option.icon}</span>
                  <span className="font-semibold">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-12 text-center animate-in fade-in zoom-in duration-700">
          <div className="space-y-4">
            <p className="text-terracotta font-semibold tracking-widest uppercase">Your Vibe Matches</p>
            <h2 className="text-5xl font-bold text-forest underline decoration-sage decoration-wavy underline-offset-8">
              {result.genre}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {result.books.map((book, i) => (
              <div key={i} className="cottage-card p-8 text-left group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="text-6xl">📖</span>
                </div>
                <h3 className="text-2xl font-bold text-forest mb-1">{book.title}</h3>
                <p className="text-sage-dark font-medium italic mb-4">by {book.author}</p>
                <p className="text-earth/80 leading-relaxed">{book.desc}</p>
                <div className="mt-6 flex justify-between items-center">
                   <button className="text-sage-dark font-bold hover:translate-x-2 transition-transform">
                     Read Reviews →
                   </button>
                   <span className="bg-sage/10 px-3 py-1 rounded-full text-xs text-sage-dark font-bold uppercase">
                     Top Pick
                   </span>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={reset}
            className="cottage-btn-secondary mx-auto mt-12"
          >
            Start Over 🕯️
          </button>
        </div>
      )}
    </div>
  );
}
