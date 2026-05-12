"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check for user in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [pathname]); // Refresh when navigating

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="w-full bg-white/60 backdrop-blur-md border-b border-sage-light/20 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-sage/20">
            🌿
          </div>
          <span className="text-2xl font-bold text-forest font-serif tracking-tight">
            BookWise
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-lg px-2 py-1 transition-all duration-300 hover:text-sage ${pathname === link.href ? "text-sage" : "text-forest/70"}`}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <div className="w-10 h-10 bg-sage-light rounded-full flex items-center justify-center text-forest font-bold border-2 border-white shadow-sm">
              {user.name[0]}
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="cottage-btn-primary"
            >
              Sign In
            </Link>
          )}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-sage/10 text-forest"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-sage-light/10 px-4 pb-6 pt-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xl font-medium px-4 py-2 rounded-xl transition-colors ${pathname === link.href ? "bg-sage text-white" : "text-forest hover:bg-sage/10"}`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-3 px-4 py-2">
               <div className="w-8 h-8 bg-sage-light rounded-full flex items-center justify-center text-forest font-bold">
                 {user.name[0]}
               </div>
               <span className="text-earth font-medium italic">{user.name}</span>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="cottage-btn-primary mx-4"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}