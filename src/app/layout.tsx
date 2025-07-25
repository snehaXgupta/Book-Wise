import './globals.css';


import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    
      <body className="bg-checker text-[#5B3924]">
        <Navbar />
        <main className="min-h-screen px-6 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}