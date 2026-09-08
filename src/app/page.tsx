"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  MessageCircle,
  Play,
  Star,
  UserRound,
  Dumbbell,
  BarChart3,
  CalendarDays,
  Monitor,
  ShieldCheck,
} from "lucide-react";

/**
 * Coach Jithu — single-page responsive landing page
 * -------------------------------------------------
 * Next.js App Router / React / TypeScript
 *
 * Design principles:
 * - Mobile-first, with the reference's black / white / yellow system.
 * - Programs = ONE horizontal slider only.
 * - Transformations = 2 cards per row on mobile; no image before/after slider.
 * - No duplicate pricing/program section.
 * - No "Meet Coach Jithu" section.
 * - No nutrition section.
 * - No gym/facility section.
 * - Testimonials are Google-style written reviews, not video cards.
 */

const programCards = [
  {
    title: "Online Personal Training",
    description: "For clients anywhere in the world.",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Personal Training",
    description: "1-to-1 coaching focused on individual goals.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Weight Loss",
    description: "Structured training + lifestyle correction.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Muscle Building",
    description: "Progressive resistance training and nutrition strategy.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Lifestyle Transformation",
    description: "Build sustainable fitness habits.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Kids / Couple Training",
    description: "Specialised training for families and couples.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
  },
];

const transformations = [
  {
    name: "Arjun",
    result: "96 kg → 78 kg",
    duration: "16 weeks",
    program: "Weight Loss Program",
    before:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=700&q=85",
    after:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Sneha",
    result: "86 kg → 54 kg",
    duration: "16 weeks",
    program: "Transformation Program",
    before:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=85",
    after:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Vishnu",
    result: "62 kg → 74 kg",
    duration: "20 weeks",
    program: "Muscle Building Program",
    before:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=85",
    after:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Riya",
    result: "70 kg → 56 kg",
    duration: "16 weeks",
    program: "Lifestyle Transformation",
    before:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=85",
    after:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85",
  },
];

const steps = [
  {
    number: "01",
    title: "Assessment",
    text: "Understand your goal, lifestyle, fitness level and training history.",
  },
  {
    number: "02",
    title: "Personalised Plan",
    text: "Custom workout and nutrition strategy built around your goal.",
  },
  {
    number: "03",
    title: "Train",
    text: "Follow your structured program with guidance and support.",
  },
  {
    number: "04",
    title: "Track",
    text: "Monitor your weight, measurements, strength and progress.",
  },
  {
    number: "05",
    title: "Transform",
    text: "Build sustainable results and a healthier you.",
  },
];

const strengths = [
  { title: "Personalised Coaching", icon: UserRound },
  { title: "Workout + Nutrition", icon: Dumbbell },
  { title: "Progress Tracking", icon: BarChart3 },
  { title: "Flexible Programs", icon: CalendarDays },
  { title: "Online & Offline Training", icon: Monitor },
  { title: "Long-Term Approach", icon: ShieldCheck },
];

const reviews = [
  {
    initials: "K",
    name: "Kriti Panika",
    meta: "4 reviews",
    time: "3 years ago",
    text: "Coach jithu is exceptional. They are knowledgeable, motivating, and dedicated. They push me to reach my fitness goals and always have a positive attitude. Their expertise and guidance have helped me make significant progress in my fitness journey. They customize workouts according to my needs and ensure that I maintain proper form while exercising. With their support and encouragement, I feel inspired to challenge myself and achieve new heights. I'm grateful to have such an amazing personal trainer who genuinely cares about my well-being and helps me stay on track.",
  },
  {
    initials: "A",
    name: "Abhirami Rajeev",
    meta: "Local Guide · 11 reviews",
    time: "a year ago",
    text: "Working in a private bank, my degrading health has always been a concern. Regularly going to the gym was therefore not an option for me. Finally I came to know about the possibilities of online training from Coach Jithus. They've given me all the needful information about the programme. Initially I was doubtful and tensed about the diet plan but they provided proper calorie deficit diet without tiredness or sleepiness. It's my 7th month of training. Their workout plan and nutritional advice is commendable.They are always available on whatsapp for doubt clearance. Day to day tracking of food, workout etc are done by them. Thankyou Coach Jithu for this extraordinary approach from you..🧡",
  },
  {
    initials: "A",
    name: "akhil saji",
    meta: "6 reviews",
    time: "3 years ago",
    text: "I've been following Coach Jithu's online personal training for past 3 months,a significant weight gain and overall athletic performance. One of the best online personal fitness coach in Kochi.",
  },
  {
    initials: "M",
    name: "Muzafir Esmail",
    meta: "3 reviews",
    time: "2 years ago",
    text: "My weight was 59 kg before i joined Coach Jithu's online weight gaining program.After 3 months of training and different diets now i am 69 kgs .I gained about 10 kgs of weight and i am very satisfied with the service provided by coach jithu's fitness target.I am sincerely happy for help and support you provided for helping me achieve this transformation.Thankyou Coach",
  },
];

const faqs = [
  "Who can join online coaching?",
  "Do I need gym equipment?",
  "Is the diet personalised?",
  "Can I join from outside Kerala?",
  "How does online training work?",
  "How often will my plan be updated?",
  "Can beginners join?",
  "Do you provide weight-loss programs?",
];

export default function Page() {
  const programScroller = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollPrograms = (direction: "left" | "right") => {
    programScroller.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <main className="site">
      <style>{`
        :root {
          --black: #050505;
          --ink: #111111;
          --yellow: #ffd900;
          --yellow-soft: #fff3b5;
          --white: #050505;
          --paper: #0b0b0b;
          --line: #2a2a2a;
          --muted: #b3b3ad;
          --olive: #353400;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: var(--black);
        }

        body {
          margin: 0;
          background: var(--black);
          color: white;
          font-family:
            Inter, Geist, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          font: inherit;
        }

        img {
          display: block;
          max-width: 100%;
        }

        .site {
          width: 100%;
          overflow-x: clip;
          background: var(--black);
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .eyebrow {
          margin: 0 0 8px;
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.2em;
          font-weight: 800;
          text-transform: uppercase;
          color: #a5a59b;
        }

        .eyebrow.yellow {
          color: var(--yellow);
        }

        .section-title {
          margin: 0;
          max-width: 760px;
          font-size: clamp(30px, 5vw, 58px);
          line-height: 0.95;
          letter-spacing: -0.045em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .section-title span {
          color: var(--yellow);
        }

        .section-copy {
          margin: 12px 0 0;
          max-width: 620px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.55;
        }

        .button {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 18px;
          border: 1px solid transparent;
          border-radius: 5px;
          background: var(--yellow);
          color: #070707;
          text-decoration: none;
          font-size: 12px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          transition:
            transform 160ms ease,
            background 160ms ease,
            color 160ms ease,
            border-color 160ms ease;
          cursor: pointer;
        }

        .button:hover {
          transform: translateY(-2px);
          background: #ffe747;
        }

        .button:active {
          transform: translateY(0);
        }

        .button:focus-visible,
        .icon-button:focus-visible,
        .faq-button:focus-visible,
        a:focus-visible {
          outline: 3px solid var(--yellow);
          outline-offset: 3px;
        }

        .button.dark {
          background: var(--black);
          color: white;
        }

        .button.dark:hover {
          background: #242424;
        }

        .button.outline {
          border-color: currentColor;
          background: transparent;
          color: inherit;
        }

        .button.outline:hover {
          background: rgba(255, 217, 0, 0.08);
        }

        .icon-button {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.32);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.72);
          color: white;
          cursor: pointer;
          transition: 160ms ease;
        }

        .icon-button:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        /* HEADER */
        .header {
          position: fixed;
          z-index: 1000;
          top: 16px;
          left: 50%;
          width: min(1180px, calc(100% - 32px));
          height: 64px;
          transform: translateX(-50%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 14px;
          background: rgba(10, 10, 10, 0.88);
          color: white;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .header-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          color: white;
          text-decoration: none;
          line-height: 0.9;
        }

        .brand-name {
          display: block;
          font-size: 19px;
          font-weight: 950;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }

        .brand-name span {
          color: var(--yellow);
        }

        .brand-tag {
          display: block;
          margin-top: 4px;
          font-size: 7px;
          letter-spacing: 0.18em;
          opacity: 0.72;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 22px;
        }

        .desktop-nav a {
          color: rgba(255, 255, 255, 0.86);
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
        }

        .desktop-nav a:hover {
          color: var(--yellow);
        }

        .mobile-menu {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
          position: relative;
          z-index: 1003;
        }

        .mobile-menu-panel {
          display: none;
        }

        .mobile-menu-panel.open {
          display: grid;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          color: white;
          isolation: isolate;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.08) 32%,
              rgba(0, 0, 0, 0.78) 82%,
              #050505 100%
            ),
            #050505;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent 68%),
            radial-gradient(circle at 76% 42%, rgba(255, 217, 0, 0.08), transparent 34%);
        }

        .hero-person {
          position: absolute;
          z-index: 1;
          right: -2%;
          bottom: 0;
          width: min(58vw, 700px);
          height: 94%;
          object-fit: contain;
          object-position: bottom right;
          pointer-events: none;
          user-select: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 0 0 34px;
        }

        .hero-copy {
          max-width: 640px;
        }

        .hero-kicker {
          margin: 0 0 12px;
          color: var(--yellow);
          font-size: 11px;
          letter-spacing: 0.22em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(48px, 14vw, 100px);
          line-height: 0.86;
          letter-spacing: -0.06em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero-title span {
          display: block;
          color: var(--yellow);
        }

        .hero-text {
          max-width: 500px;
          margin: 16px 0 22px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 14px;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hero-actions .button {
          min-width: 190px;
        }

        .hero-signature {
          position: absolute;
          top: 38%;
          left: 8%;
          color: rgba(255, 255, 255, 0.82);
          font-family: "Brush Script MT", "Segoe Script", cursive;
          font-size: 27px;
          transform: rotate(-8deg);
          opacity: 0.8;
          pointer-events: none;
        }

        .hero-note {
          position: absolute;
          top: 29%;
          right: 7%;
          max-width: 120px;
          color: white;
          font-family: "Brush Script MT", "Segoe Script", cursive;
          font-size: 18px;
          line-height: 1.05;
          transform: rotate(5deg);
          opacity: 0.8;
          pointer-events: none;
        }

        /* GENERIC SECTIONS */
        .light-section {
          background: var(--black);
          padding: 56px 0;
        }

        .soft-section {
          background: #0b0b0b;
          padding: 56px 0;
        }

        .dark-section {
          background:
            radial-gradient(circle at 50% 0%, #3d3c00 0%, #101000 42%, #050505 82%);
          color: white;
          padding: 56px 0;
        }

        .section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 26px;
        }

        .section-head .section-copy {
          margin-top: 8px;
        }

        .section-link {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: inherit;
          font-size: 11px;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
        }

        .section-link:hover {
          color: #c7aa00;
        }

        /* PROGRAMS — SINGLE SLIDER */
        .program-slider-wrap {
          position: relative;
        }

        .program-slider {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(250px, 310px);
          gap: 12px;
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 2px 2px 12px;
        }

        .program-slider::-webkit-scrollbar {
          display: none;
        }

        .program-card {
          min-width: 0;
          overflow: hidden;
          scroll-snap-align: start;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .program-image {
          width: 100%;
          aspect-ratio: 1.25 / 1;
          object-fit: cover;
        }

        .program-body {
          min-height: 188px;
          display: flex;
          flex-direction: column;
          padding: 14px;
        }

        .program-title {
          margin: 0;
          font-size: 18px;
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-weight: 950;
        }

        .program-description {
          margin: 8px 0 14px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .program-body .button {
          width: 100%;
          margin-top: auto;
        }

        .slider-controls {
          display: none;
        }

        /* TRANSFORMATIONS — 2 PER ROW MOBILE */
        .transform-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .transform-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .before-after {
          display: grid;
          grid-template-columns: 1fr 1fr;
          aspect-ratio: 1.12 / 1;
          background: #111;
        }

        .ba-half {
          position: relative;
          overflow: hidden;
        }

        .ba-half + .ba-half {
          border-left: 1px solid white;
        }

        .ba-half img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ba-label {
          position: absolute;
          top: 7px;
          left: 7px;
          z-index: 2;
          padding: 5px 7px;
          border-radius: 5px;
          background: #050505;
          color: white;
          font-size: 8px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .ba-label.after {
          left: auto;
          right: 7px;
          background: var(--yellow);
          color: #050505;
        }

        .transform-meta {
          padding: 11px;
        }

        .transform-name {
          margin: 0;
          font-size: 13px;
          font-weight: 900;
        }

        .transform-result {
          margin: 2px 0 1px;
          font-size: 14px;
          font-weight: 950;
        }

        .transform-small {
          margin: 0;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.35;
        }

        /* HOW IT WORKS */
        .process {
          position: relative;
        }

        .process-grid {
          display: grid;
          gap: 10px;
        }

        .step {
          position: relative;
          display: grid;
          grid-template-columns: 52px 1fr;
          align-items: stretch;
          gap: 10px;
        }

        .step-number {
          position: relative;
          z-index: 2;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-top: 5px;
          border: 2px solid var(--yellow);
          border-radius: 50%;
          background: #111100;
          color: var(--yellow);
          font-size: 11px;
          font-weight: 950;
        }

        .step:not(:last-child)::after {
          content: "";
          position: absolute;
          z-index: 1;
          top: 47px;
          bottom: -12px;
          left: 20px;
          width: 1px;
          background: rgba(255, 217, 0, 0.55);
        }

        .step-card {
          min-height: 96px;
          padding: 17px;
          border-radius: 8px;
          background: #171700;
          color: #111;
        }

        .step-card h3 {
          margin: 0;
          font-size: 16px;
          line-height: 1.05;
          font-weight: 950;
        }

        .step-card p {
          margin: 7px 0 0;
          color: #c2c2ba;
          font-size: 13px;
          line-height: 1.45;
        }

        /* WHY CHOOSE */
        .strength-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .strength-card {
          min-height: 128px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 15px;
          border: 1px solid rgba(255, 217, 0, 0.35);
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.22);
        }

        .strength-icon {
          width: 28px;
          height: 28px;
          color: var(--yellow);
        }

        .strength-title {
          max-width: 130px;
          margin: 12px 0 0;
          font-size: 12px;
          line-height: 1.15;
          font-weight: 900;
          text-transform: uppercase;
        }

        /* GOOGLE REVIEWS */
        .reviews-grid {
          display: grid;
          gap: 10px;
        }

        .review-card {
          padding: 17px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #0b0b0b;
        }

        .review-top {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .review-avatar {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #1a1a00;
          color: var(--yellow);
          font-weight: 900;
        }

        .review-name {
          margin: 0;
          font-size: 13px;
          font-weight: 900;
        }

        .review-meta {
          margin: 2px 0 0;
          color: #777;
          font-size: 10px;
        }

        .review-rating {
          display: flex;
          align-items: center;
          gap: 2px;
          margin: 13px 0 9px;
          color: #f2bd00;
        }

        .review-rating svg {
          width: 15px;
          height: 15px;
          fill: currentColor;
        }

        .review-time {
          margin-left: 7px;
          color: #888;
          font-size: 10px;
        }

        .review-text {
          margin: 0;
          color: #d0d0ca;
          font-size: 13px;
          line-height: 1.52;
        }

        .google-button {
          width: 100%;
          margin-top: 13px;
        }

        /* FAQ */
        .faq-list {
          border-top: 1px solid var(--line);
        }

        .faq-item {
          border-bottom: 1px solid var(--line);
        }

        .faq-button {
          width: 100%;
          min-height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0;
          border: 0;
          background: transparent;
          color: white;
          text-align: left;
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
        }

        .faq-button svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .faq-button[aria-expanded="true"] svg {
          transform: rotate(180deg);
        }

        .faq-answer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 220ms ease;
        }

        .faq-answer.open {
          max-height: 120px;
        }

        .faq-answer p {
          margin: -1px 0 17px;
          padding-right: 32px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.5;
        }

        /* CTA + FOOTER */
        .final-cta {
          background: var(--yellow);
          color: #050505;
          padding: 42px 0;
        }

        .final-cta-inner {
          display: grid;
          gap: 22px;
          align-items: center;
        }

        .final-title {
          margin: 0;
          font-size: clamp(32px, 7vw, 58px);
          line-height: 0.92;
          letter-spacing: -0.055em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .final-copy {
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 1.4;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .cta-actions .button {
          width: 100%;
        }

        .footer {
          background: #050505;
          color: white;
          padding: 42px 0 24px;
        }

        .footer-grid {
          display: grid;
          gap: 30px;
        }

        .footer-brand .brand-name {
          font-size: 25px;
        }

        .footer-nav {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 20px;
        }

        .footer-nav a {
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          font-size: 12px;
        }

        .footer-nav a:hover {
          color: var(--yellow);
        }

        .socials {
          display: flex;
          gap: 10px;
        }

        .social-link {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid #3b3b3b;
          border-radius: 50%;
          color: white;
        }

        .social-link:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        .copyright {
          margin: 28px 0 0;
          padding-top: 17px;
          border-top: 1px solid #292929;
          color: #777;
          font-size: 10px;
          line-height: 1.5;
        }

        .whatsapp {
          position: fixed;
          z-index: 30;
          right: 18px;
          bottom: 18px;
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #20c768;
          color: white;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
          text-decoration: none;
          transition: transform 160ms ease;
        }

        .whatsapp:hover {
          transform: translateY(-3px);
        }

        /* TABLET */
        @media (min-width: 640px) {
          .container,
          .hero-content {
            width: min(1180px, calc(100% - 48px));
          }

          .hero {
            min-height: 820px;
          }

          .hero-content {
            padding-bottom: 55px;
          }

          .transform-grid {
            gap: 14px;
          }

          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .strength-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .final-cta-inner {
            grid-template-columns: 1fr auto;
          }

          .cta-actions {
            min-width: 280px;
          }

          .footer-grid {
            grid-template-columns: 1.2fr 1fr auto;
            align-items: start;
          }
        }

        /* DESKTOP */
        @media (min-width: 900px) {
          .container,
          .hero-content {
            width: min(1180px, calc(100% - 64px));
          }

          .header {
            top: 20px;
            width: min(1180px, calc(100% - 64px));
            height: 70px;
          }

          .desktop-nav {
            display: flex;
          }

          .mobile-menu {
            display: none;
          }

          .hero {
            height: 100svh;
            min-height: 0;
            align-items: center;
          }

          .hero-person {
            right: 18%;
            bottom: -4%;
            width: min(49vw, 625px);
            height: 88%;
          }

          .hero-content {
            padding-top: 90px;
            padding-bottom: 50px;
          }

          .hero-copy {
            max-width: 520px;
            position: relative;
            z-index: 4;
          }

          .hero-title {
            font-size: clamp(68px, 7vw, 100px);
          }

          .hero-text {
            font-size: 15px;
          }

          .hero-signature,
          .hero-note {
            display: none;
          }

          .light-section,
          .soft-section,
          .dark-section {
            padding: 82px 0;
          }

          .program-slider {
            grid-auto-columns: 250px;
            gap: 14px;
          }

          .program-card {
            border-radius: 6px;
          }

          .slider-controls {
            position: absolute;
            right: 0;
            top: -66px;
            display: flex;
            gap: 8px;
          }

          .transform-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
          }

          .process-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 10px;
          }

          .step {
            display: block;
          }

          .step-number {
            margin: 0 0 10px;
          }

          .step:not(:last-child)::after {
            top: 20px;
            left: 41px;
            right: -10px;
            bottom: auto;
            width: auto;
            height: 1px;
          }

          .step-card {
            min-height: 150px;
          }

          .reviews-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .faq-layout {
            display: grid;
            grid-template-columns: 0.7fr 1.3fr;
            gap: 70px;
            align-items: start;
          }

          .faq-layout .section-head {
            display: block;
            margin: 0;
          }

          .faq-layout .section-copy {
            max-width: 360px;
          }
        }

        /* MOBILE FLOATING NAV */
        @media (max-width: 639px) {
          .header {
            top: 10px;
            width: calc(100% - 20px);
            height: 58px;
            border-radius: 12px;
          }

          .header-inner {
            gap: 8px;
          }

          .header .button {
            min-height: 40px;
            padding: 0 12px;
            font-size: 10px;
          }

          .mobile-menu {
            width: 38px;
            height: 38px;
          }
        }

        @media (max-width: 899px) {
          .mobile-menu-panel {
            position: fixed;
            z-index: 1001;
            top: 78px;
            left: 50%;
            width: min(1180px, calc(100% - 20px));
            transform: translateX(-50%);
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 12px;
            background: rgba(8, 8, 8, 0.98);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }

          .mobile-menu-panel a {
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 0 14px;
            border-bottom: 1px solid #242424;
            color: rgba(255, 255, 255, 0.92);
            text-decoration: none;
            font-size: 13px;
            font-weight: 800;
          }

          .mobile-menu-panel a:last-child {
            border-bottom: 0;
          }

          .mobile-menu-panel a:hover,
          .mobile-menu-panel a:focus-visible {
            color: var(--yellow);
            background: rgba(255, 217, 0, 0.06);
            outline: none;
          }
        }

        @media (max-width: 639px) {
          .hero {
            min-height: 860px;
            align-items: flex-start;
          }

          .hero-person {
            left: 50%;
            right: auto;
            top: 70px;
            bottom: auto;
            width: min(84vw, 360px);
            max-width: none;
            height: auto;
            transform: translateX(-50%);
            object-fit: contain;
            object-position: center top;
            opacity: 1;
          }

          .hero-signature {
            z-index: 3;
            left: 5%;
            top: 34%;
            max-width: 74px;
            font-size: 18px;
            line-height: 1;
            transform: rotate(-10deg);
          }

          .hero-note {
            z-index: 3;
            top: 32%;
            right: 3%;
            max-width: 72px;
            font-size: 15px;
            line-height: 1.08;
            text-align: left;
            transform: rotate(5deg);
          }

          .hero::after {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 5, 0) 0%,
                rgba(5, 5, 5, 0) 48%,
                rgba(5, 5, 5, 0.92) 59%,
                #050505 67%,
                #050505 100%
              );
          }

          .hero-content {
            padding-top: 485px;
          }

          .hero-title {
            font-size: clamp(39px, 12vw, 54px);
            line-height: 0.91;
            letter-spacing: -0.055em;
          }

          .hero-text {
            max-width: 330px;
            margin-top: 16px;
            font-size: 13px;
            line-height: 1.5;
          }

          .hero-actions {
            flex-direction: column;
            gap: 10px;
          }

          .hero-actions .button {
            width: 100%;
            min-width: 0;
          }
        }

        /* SMALL PHONES */
        @media (max-width: 359px) {
          .container,
          .hero-content {
            width: min(100% - 24px, 1180px);
          }

          .hero {
            min-height: 850px;
          }

          .hero-person {
            top: 70px;
            width: 84vw;
            max-width: 330px;
          }

          .hero-signature {
            left: 4%;
            top: 34%;
            font-size: 16px;
          }

          .hero-note {
            right: 2%;
            top: 32%;
            font-size: 13px;
            max-width: 66px;
          }

          .hero-content {
            padding-top: 455px;
          }

          .hero-title {
            font-size: 39px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .button {
            width: 100%;
          }

          .program-slider {
            grid-auto-columns: 78%;
          }

          .transform-meta {
            padding: 9px;
          }

          .transform-result {
            font-size: 12px;
          }

          .transform-small {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Coach Jithu home">
            <span className="brand-name">
              COACH <span>JITHU</span>
            </span>
            <span className="brand-tag">Train Better · Live Stronger</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#transformations">Transformations</a>
            <a href="#process">How It Works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">Contact</a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a className="button" href="#contact">
              Join Now <ArrowRight size={15} />
            </a>
            <button
              className="mobile-menu"
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <Menu size={25} />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-menu-panel ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</a>
        <a href="#transformations" onClick={() => setMobileMenuOpen(false)}>Transformations</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
        <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <img
          className="hero-person"
          src="/images/Coach.png"
          alt="Coach Jithu"
          draggable={false}
        />

        <div className="hero-signature" aria-hidden="true">
          Coach Jithu
        </div>
        <div className="hero-note" aria-hidden="true">
          A healthier
          <br />
          you.
          <br />
          A stronger
          <br />
          tomorrow.
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">Coach Jithu · Fitness Coaching</p>
            <h1 className="hero-title">
              Your Body.
              <br />
              Your Goal.
              <span>My Expertise.</span>
            </h1>
            <p className="hero-text">
              Personalised fitness training, nutrition guidance and lifestyle
              transformation designed around your goals.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Start Your Transformation <ArrowRight size={16} />
              </a>
              <a className="button outline" href="#programs">
                View Programs <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS — ONLY ONE PROGRAM SECTION */}
      <section id="programs" className="light-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">What I Offer</p>
              <h2 className="section-title">My Programs</h2>
              <p className="section-copy">
                Choose the right program for your goals. Online or at the gym —
                I&apos;ve got you covered.
              </p>
            </div>
            <div className="slider-controls" aria-label="Program carousel controls">
              <button
                className="icon-button"
                type="button"
                aria-label="Previous programs"
                onClick={() => scrollPrograms("left")}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="icon-button"
                type="button"
                aria-label="Next programs"
                onClick={() => scrollPrograms("right")}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={programScroller}
            className="program-slider"
            aria-label="Programs carousel"
          >
            {programCards.map((program) => (
              <article className="program-card" key={program.title}>
                <img
                  className="program-image"
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                />
                <div className="program-body">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <a className="button" href="#contact">
                    Learn More <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS — 2 CARDS PER ROW ON MOBILE, NO IMAGE SLIDER */}
      <section id="transformations" className="soft-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Transformations</p>
              <h2 className="section-title">
                Real People.
                <br />
                Real Results.
              </h2>
              <p className="section-copy">
                These are real stories of commitment, consistency and change.
              </p>
            </div>
            <a className="section-link" href="#contact">
              View all transformations <ArrowRight size={15} />
            </a>
          </div>

          <div className="transform-grid">
            {transformations.map((item) => (
              <article className="transform-card" key={item.name}>
                <div className="before-after">
                  <div className="ba-half">
                    <span className="ba-label">Before</span>
                    <img src={item.before} alt={`${item.name} transformation before`} loading="lazy" />
                  </div>
                  <div className="ba-half">
                    <span className="ba-label after">After</span>
                    <img src={item.after} alt={`${item.name} transformation after`} loading="lazy" />
                  </div>
                </div>
                <div className="transform-meta">
                  <p className="transform-name">{item.name}</p>
                  <p className="transform-result">{item.result}</p>
                  <p className="transform-small">{item.duration}</p>
                  <p className="transform-small">{item.program}</p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 18, textAlign: "center" }}>
            <a className="button outline" href="#contact">
              View All Transformations <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="dark-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow yellow">How It Works</p>
              <h2 className="section-title">
                A Simple Process
                <br />
                For Real Results.
              </h2>
            </div>
            <p className="section-copy" style={{ color: "#bdbdb5" }}>
              A clear, structured path from assessment to sustainable
              transformation.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <div className="step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <div className="step-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="dark-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow yellow">Why Choose Me?</p>
              <h2 className="section-title">
                Your Goal.
                <br />
                <span>My Expertise.</span>
              </h2>
            </div>
            <p className="section-copy" style={{ color: "#bdbdb5" }}>
              Personalised coaching built around the way you actually live and
              train.
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map(({ title, icon: Icon }) => (
              <article className="strength-card" key={title}>
                <Icon className="strength-icon" strokeWidth={1.8} />
                <p className="strength-title">{title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE-STYLE REVIEWS ONLY */}
      <section id="testimonials" className="light-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Google Reviews</p>
              <h2 className="section-title">What My Clients Say</h2>
              <p className="section-copy">
                Real reviews from clients — presented in a familiar Google
                review format.
              </p>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-top">
                  <div className="review-avatar">{review.initials}</div>
                  <div>
                    <p className="review-name">{review.name}</p>
                    <p className="review-meta">{review.meta}</p>
                  </div>
                </div>

                <div className="review-rating" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} />
                  ))}
                  <span className="review-time">{review.time}</span>
                </div>

                <p className="review-text">{review.text}</p>
              </article>
            ))}
          </div>

          <a className="button outline google-button" href="https://www.google.com/search?client=ms-android-samsung-rvo1&hs=V1aq&sca_esv=6696a1c1b2c1f540&cs=1&hl=en-IN&output=search&kgmid=/g/11k45mdfts&q=Coach_jithu&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/4&kgs=f592737bb2f0f06d&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/4" target="_blank" rel="noopener noreferrer">
            <span style={{ fontWeight: 950 }}>G</span>
            View More Reviews on Google <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="soft-section">
        <div className="container faq-layout">
          <div className="section-head">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title">Common Questions</h2>
              <p className="section-copy">
                Everything you need to know before starting your coaching
                journey.
              </p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((question, index) => {
              const isOpen = openFaq === index;
              return (
                <div className="faq-item" key={question}>
                  <button
                    className="faq-button"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <ChevronDown size={17} />
                  </button>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <p>
                      Yes. Coach Jithu can tailor the coaching approach around
                      your current fitness level, goals, schedule and available
                      equipment.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="eyebrow" style={{ color: "#111" }}>
              Ready to Change Your Life?
            </p>
            <h2 className="final-title">Your Transformation Starts With One Decision.</h2>
            <p className="final-copy">
              Start with a conversation and choose the coaching approach that
              fits your goal.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button dark" href="https://wa.me/919876543210">
              Start Your Transformation <ArrowRight size={16} />
            </a>
            <a className="button outline" href="https://wa.me/919876543210">
              <MessageCircle size={17} />
              WhatsApp Coach Jithu
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="#home">
                <span className="brand-name">
                  COACH <span>JITHU</span>
                </span>
                <span className="brand-tag">Train Better · Live Stronger</span>
              </a>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#programs">Programs</a>
              <a href="#transformations">Transformations</a>
              <a href="#process">How It Works</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">Contact</a>
            </nav>

            <div className="socials" aria-label="Social links">
              <a className="social-link" href="#" aria-label="Instagram">
                IG
              </a>
              <a className="social-link" href="#" aria-label="Video channel">
                <Play size={16} />
              </a>
            </div>
          </div>

          <p className="copyright">
            © 2026 Coach Jithu. All rights reserved. · A healthier you. A
            stronger tomorrow.
          </p>
        </div>
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/919876543210"
        aria-label="WhatsApp Coach Jithu"
      >
        <MessageCircle size={27} />
      </a>
    </main>
  );
}
