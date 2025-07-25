"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-cream/90 border-b border-coffee/20 shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-coffee font-cafe tracking-tight">
  BookWise
</span>

        </div>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-cafe text-lg px-2 py-1 rounded transition-colors hover:bg-coffee hover:text-cream ${pathname === link.href ? "bg-coffee text-cream" : "text-coffee"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="ml-4 px-4 py-1 rounded-full border border-coffee text-coffee font-semibold hover:bg-coffee hover:text-cream transition font-cafe"
          >
            Profile
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 rounded hover:bg-coffee/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-coffee"></span>
          <span className="block w-6 h-0.5 bg-coffee"></span>
          <span className="block w-6 h-0.5 bg-coffee"></span>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-coffee/10 px-4 pb-4 flex flex-col gap-2 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-cafe text-lg px-2 py-1 rounded transition-colors hover:bg-coffee hover:text-cream ${pathname === link.href ? "bg-coffee text-cream" : "text-coffee"}`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="mt-2 px-4 py-1 rounded-full border border-coffee text-coffee font-semibold hover:bg-coffee hover:text-cream transition font-cafe"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
} 