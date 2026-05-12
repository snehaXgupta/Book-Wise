'use client';

import { useState, useEffect } from 'react';

interface Review {
  id: string;
  content: string;
  rating: number;
  createdAt: string;
  user: {
    name: string;
    image?: string;
  };
}

export default function ReviewSection({ bookId }: { bookId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in (from localStorage for demo)
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));

    fetchReviews();
  }, [bookId]);

  const fetchReviews = async () => {
    try {
      const res = await fetch(`/api/reviews?bookId=${bookId}`);
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please sign in to leave a review");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          bookId,
          content,
          rating,
        }),
      });

      if (res.ok) {
        setContent('');
        setRating(5);
        fetchReviews();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="cottage-card p-8 bg-white/40">
        <h3 className="text-2xl font-bold text-forest mb-6">Leave a Review ✍️</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-forest mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setRating(num)}
                  className={`text-2xl transition-transform hover:scale-125 ${rating >= num ? 'grayscale-0' : 'grayscale'}`}
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-forest mb-2">Your Thoughts</label>
            <textarea
              required
              className="w-full px-4 py-3 rounded-xl border border-sage-light/30 focus:ring-2 focus:ring-sage focus:border-transparent outline-none transition-all bg-white/50 h-32"
              placeholder="What did you think of this book?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="cottage-btn-primary w-full md:w-auto"
          >
            {loading ? 'Posting...' : 'Post Review 🌿'}
          </button>
        </form>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-forest">Community Reviews ({reviews.length})</h3>
        {reviews.length === 0 ? (
          <p className="text-earth/60 italic">No reviews yet. Be the first to share your thoughts!</p>
        ) : (
          <div className="grid gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="cottage-card p-6 border-l-4 border-l-sage">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-light rounded-full flex items-center justify-center text-forest font-bold">
                      {review.user.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-forest">{review.user.name}</p>
                      <p className="text-xs text-earth/50">{new Date(review.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-earth/80 leading-relaxed italic quote-text">{review.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
