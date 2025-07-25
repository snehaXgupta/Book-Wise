import Link from "next/link";

const categories = [
  "Fantasy",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Non-Fiction",
];

export default function Footer() {
  return (
    <footer className="w-full bg-cream/90 border-t border-coffee/20 mt-12 py-6 flex flex-col items-center gap-2 shadow-inner">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-9 mb-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/categories?genre=${encodeURIComponent(cat)}`}
            className="text-coffee font-cafe hover:underline hover:text-coffee-dark transition text-base"
          >
            {cat}
          </Link>
        ))}
      </div>
      <div className="text-center w-full text-coffee font-cafe text-sm opacity-80 leading-loose">
        Created by Sneha ✨
      </div>
    </footer>
  );
}
