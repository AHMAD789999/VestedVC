"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Team from "./components/Team";

const words = ["BUILDING", "GROWTH", "INVESTING", "INNOVATIVE"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="min-h-screen pt-[70px] w-full bg-slate-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl w-full">
          {/* Top Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#e7bb4bea] tracking-tight mb-6"
          >
            PARTNER FOR
          </motion.h1>

          {/* Auto Typing Text */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-blue-400 tracking-wide"
          >
            {words[index]}
          </motion.div>

          {/* Paragraph Section */}
          <div className="mt-9 px-2 sm:px-4 md:px-6 flex justify-center">
            <p className="text-base sm:text-lg md:text-1xl lg:text-1xl max-w-3xl text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus iste obcaecati ad minus quae excepturi voluptatum quidem doloremque odio cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, debitis et? Libero sapiente molestias ad doloremque! Maiores nobis a in quia modi nemo quis optio, vitae ea perferendis ratione illo cum praesentium quibusdam? Natus fuga rem, accusamus atque quod, iste illo fugiat, temporibus tempora commodi animi sapiente assumenda beatae.
            </p>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
};

export default HeroSection;
