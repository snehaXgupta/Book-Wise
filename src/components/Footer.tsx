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
    <footer className="w-full bg-white/40 border-t border-sage-light/20 mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold text-forest font-serif">BookWise</span>
            </div>
            <p className="text-earth/60 italic font-serif leading-relaxed quote-text">
              Gathering the best stories from around the world to fill your home with warmth and wonder.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-forest uppercase tracking-widest text-xs">Categories</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories`}
                  className="text-earth/70 hover:text-sage-dark transition text-sm bg-sage/5 px-3 py-1 rounded-full border border-sage/10"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-forest uppercase tracking-widest text-xs">Contact</h4>
            <p className="text-earth/70 text-sm">shubhigupta@gmail.com</p>
            <p className="text-earth/70 text-sm italic">Made with magic for book lovers ✨</p>
          </div>
        </div>

        <div className="pt-8 border-t border-sage-light/10 text-center text-xs text-earth/40">
          &copy; {new Date().getFullYear()} BookWise. All rights reserved. 🕯️
        </div>
      </div>
    </footer>
  );
}
