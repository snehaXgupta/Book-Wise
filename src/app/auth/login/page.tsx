'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        // Since we don't have NextAuth set up yet, we'll just store user in localStorage for demo
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/');
        router.refresh();
      } else {
        const msg = await res.text();
        setError(msg || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="cottage-card w-full max-w-md p-10 space-y-8 bg-white/60 backdrop-blur-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-forest">Welcome Back</h1>
          <p className="text-earth/60 mt-2 italic font-serif quote-text">The kettle is on, settle in.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-forest mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-sage-light/30 focus:ring-2 focus:ring-sage focus:border-transparent outline-none transition-all bg-white/50"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-forest mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-sage-light/30 focus:ring-2 focus:ring-sage focus:border-transparent outline-none transition-all bg-white/50"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full cottage-btn-primary py-4 text-lg"
          >
            {loading ? 'Signing In...' : 'Sign In 🕯️'}
          </button>
        </form>

        <p className="text-center text-earth/70">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-sage-dark font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
