"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-3xl font-black">
          AISH
        </div>

        <nav className="hidden lg:flex gap-2 font-medium">
          <a href="#" className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/10">Home</a>
          <a href="#" className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/10">About</a>
          <a href="#" className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/10">Coaching</a>
          <a href="#" className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/10">Approach</a>
          <a href="#" className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/10">Resources</a>
          <a href="#" className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/10">FAQ</a>
          <a href="#" className="px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/10">Contact</a>
        </nav>

        <button className="hidden lg:block bg-lime-400 px-6 py-3 rounded-xl font-semibold">
          Book A Call
        </button>

        <button className="lg:hidden">
          <Menu size={34} />
        </button>
      </div>
    </header>
  );
}