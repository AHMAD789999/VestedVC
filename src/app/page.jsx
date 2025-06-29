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
    <section className="h-screen w-full bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="text-center">
        {/* Top Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-9xl font-bold text-[#e7bb4bea] tracking-tight mb-6"
        >
          PARTNER FOR
        </motion.h1>

        {/* Auto typing text animation */}
        <motion.div
          key={index} // re-render on index change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-10xl font-extrabold text-blue-400 tracking-wide"
        >
          {words[index]}
         
        </motion.div>
        <div className="w-full flex justify-center items-center mt-9">
           <p className=" w-[70%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus iste obcaecati ad minus quae excepturi voluptatum quidem doloremque odio cupiditate!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, debitis et? Libero sapiente molestias ad doloremque! Maiores nobis a in quia modi nemo quis optio, vitae ea perferendis ratione illo cum praesentium quibusdam? Natus fuga rem, accusamus atque quod, iste illo fugiat, temporibus tempora commodi animi sapiente assumenda beatae.
        </p>
        </div>
      </div>
     
    </section>
   <Team/>
   </>
  
  );
};

export default HeroSection;
