"use client";
import AnimatedCounter from "./AnimatedCounter";
import { Menu, X, Camera, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">


      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "px-4 pt-4"
            : ""
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4"
              : "px-6 py-5"
          }`}
        >

          <div className="flex flex-col">
  <h1 className="text-3xl font-black text-white mix-blend-difference leading-none">
    AISWARYA
  </h1>

  <p className="text-sm md:text-base font-medium text-lime-400 mt-1 tracking-wide">
    Instagram Influencer | Fitness Coach
  </p>
</div>

          <nav className="hidden lg:flex gap-2 font-medium text-white mix-blend-difference">
            <a href="https://hale.fit/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl hover:bg-white/10 hover:border hover:border-white/20">Programs</a>
            <a href="https://hale.fit/about" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl hover:bg-white/10 hover:border hover:border-white/20">About</a>
            
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          <div className="hidden lg:flex items-center gap-4">




  <a href="https://hale.fit/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-[18px] bg-lime-400 text-black font-semibold text-base inline-flex items-center justify-center">
    Join
  </a>

  <a
    href="https://www.instagram.com/__aish.h/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-[48px] h-[48px] rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-[#D8B3A3]"
  >
    <Camera size={20} />
  </a>

  <a href="https://hale.fit/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 text-[#D8B3A3] text-base font-medium">
    <ArrowLeft size={18} />
    Site
  </a>

</div>

        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-20 left-4 right-4 z-50 lg:hidden bg-black/90 backdrop-blur-xl rounded-2xl p-6 text-white">
          <nav className="flex flex-col gap-5 text-lg font-medium">
            <a href="https://hale.fit/" target="_blank" rel="noopener noreferrer">Programs</a>
            <a href="https://hale.fit/about" target="_blank" rel="noopener noreferrer">About</a>
<div className="mt-4 flex flex-col gap-3">

  <a href="https://hale.fit/" target="_blank" rel="noopener noreferrer" className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold text-center">
    Join
  </a>

  <a
    href="https://www.instagram.com/__aish.h/"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white/20 px-6 py-3 rounded-xl flex items-center justify-center gap-2"
  >
    <Camera size={20} />
    Instagram
  </a>

  <a href="https://hale.fit/" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-6 py-3 rounded-xl flex items-center justify-center gap-2">
    <ArrowLeft size={20} />
    Site
  </a>

</div>
          </nav>
        </div>
      )}

      {/* Hero Content */}
      {/* Hero Content */}
<div className="relative z-10 min-h-[108vh] md:min-h-screen flex items-center pt-28 md:pt-32 lg:pt-0 pb-10 md:pb-0">

  {/* Background */}
  <div className="absolute inset-0 -z-10">
    <>
      <img
        src="/images/BGPHONE.png"
        alt="Mobile Background"
        className="block md:hidden w-full h-full object-cover"
      />
      <img
        src="/images/BGIMAGE.png"
        alt="Background"
        className="hidden md:block w-full h-full object-cover"
      />
    </>
    <div className="absolute inset-0 bg-black/60" />
  </div>

  <div className="max-w-7xl mx-auto px-6 w-full">

    <div className="grid lg:grid-cols-2 items-center gap-4 lg:gap-2">

      {/* LEFT SIDE */}
      <div>

      <h1 className="text-white font-black leading-none">
  <span className="block text-4xl md:text-5xl">
    GET A PERFECT
    <span className="text-lime-400"> BODY</span>
  </span>

  <span className="block text-4xl md:text-5xl mt-2">
    BE IN
    <span className="text-lime-400"> SHAPE</span>
  </span>
</h1>

        <p className="mt-8 text-xl text-white/80 max-w-xl">
          Transform Your Mind, Transform Your Body Structure
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="https://hale.fit/" target="_blank" rel="noopener noreferrer" className="inline-block bg-lime-400 border border-transparent hover:bg-black hover:text-lime-400 hover:border-lime-400 transition-all duration-300 px-8 py-4 rounded-full font-bold text-black text-center">
           Check Our Programs
          </a>

          <a href="https://hale.fit/features/coach" target="_blank" rel="noopener noreferrer" className="inline-block border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all px-8 py-4 rounded-full font-bold text-center">
            Join Community
          </a>
        </div>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-2 gap-6">

  <div className="flex items-center gap-3 md:gap-5 opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.1s]">
    <img src="/images/trophy.png" alt="Trophy" className="w-10 h-10 md:w-16 md:h-16 object-contain" />

    <div>
      <h3 className="text-white text-2xl md:text-4xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <AnimatedCounter end={20} suffix="+" />
      </h3>

      <p className="text-white text-sm md:text-base font-medium mt-1">
        Champion Trophies
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3 md:gap-5 opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.3s]">
    <img src="/images/media.png" alt="Media" className="w-10 h-10 md:w-16 md:h-16 object-contain" />

    <div>
      <h3 className="text-white text-2xl md:text-4xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <AnimatedCounter end={3.6} decimals={1} suffix="M" />
      </h3>

      <p className="text-white text-sm md:text-base font-medium mt-1">
        Media Activities
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3 md:gap-5 opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.5s]">
    <img src="/images/partnership.png" alt="Partnership" className="w-10 h-10 md:w-16 md:h-16 object-contain" />

    <div>
      <h3 className="text-white text-2xl md:text-4xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <AnimatedCounter end={30} suffix="+" />
      </h3>

      <p className="text-white text-sm md:text-base font-medium mt-1">
        Partnership Projects
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3 md:gap-5 opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.7s]">
    <img src="/images/happyclients.png" alt="Happy Clients" className="w-10 h-10 md:w-16 md:h-16 object-contain" />

    <div>
      <h3 className="text-white text-2xl md:text-4xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <AnimatedCounter end={20} suffix="k" />
      </h3>

      <p className="text-white text-sm md:text-base font-medium mt-1">
        Happy Clients
      </p>
    </div>
  </div>

</div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative flex justify-center lg:justify-end items-end h-full min-h-[450px] lg:min-h-[800px] -mt-32 lg:mt-0">

        {/* Decorative Lines */}
        <div className="absolute inset-0 flex justify-center gap-16 opacity-20">
          <div className="w-8 bg-white/20 rotate-6" />
          <div className="w-8 bg-white/20 rotate-6" />
          <div className="w-8 bg-white/20 rotate-6" />
        </div>

       <div className="relative flex justify-center items-end -mt-16 lg:mt-0">

  <img
    src="/images/aiswarya.png"
    alt="Aiswarya"
    className="absolute -top-12 md:-top-20 lg:-top-28 left-1/2 -translate-x-1/2 scale-[1.15] md:scale-[1.4] lg:scale-[1.85] origin-center z-0 pointer-events-none select-none"
  />

  <img
    src="/images/AISH.png"
    alt="Aishwarya"
    className="relative z-10 self-end w-[350px] md:w-[500px] lg:w-[650px] h-auto object-contain drop-shadow-[0_0_80px_rgba(163,230,53,0.25)]"
  />

</div>

      </div>

    </div>

  </div>

</div>

    </section>
  );
}