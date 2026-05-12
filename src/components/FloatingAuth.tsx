'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function FloatingAuth() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
    router.refresh();
  };

  if (!user) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] group">
      <div className="absolute bottom-full right-0 mb-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-sage-light/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none translate-y-2 group-hover:translate-y-0 duration-300">
        <p className="text-earth text-sm font-medium whitespace-nowrap">Logged in as <span className="font-bold text-forest">{user.name}</span></p>
      </div>
      <button
        onClick={handleLogout}
        className="cottage-btn-primary w-14 h-14 !p-0 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-2xl"
        title="Logout"
      >
        🕯️
      </button>
    </div>
  );
}
