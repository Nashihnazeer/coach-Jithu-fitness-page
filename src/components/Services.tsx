"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Utensils,
  TrendingUp,
  User,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Training",
      desc: "Structured workouts tailored to your goals.",
    },
    {
      icon: Utensils,
      title: "Nutrition",
      desc: "Nutrition plans that fit your routine.",
    },
    {
      icon: TrendingUp,
      title: "Accountability",
      desc: "Regular support and check-ins.",
    },
    {
      icon: User,
      title: "Mindset",
      desc: "Build discipline and consistency.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-black mb-16"
        >
          Coaching Designed Around You
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.25,
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
            >
              <div className="mb-6 flex justify-center">
                <item.icon
                  size={42}
                  className="text-lime-400"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}