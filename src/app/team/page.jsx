
'use client'
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Team from "../components/Team";
const  TeamPage=()=> {
  return (
    <main className=" bg-gray-900 text-gray-900 font-sans">
      <Head>
        <title>Meet Our Team | Visionary Startup</title>
        <meta name="description" content="Discover the minds driving innovation at our startup." />
      </Head>
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch" data-text="Our Team">
              <span className="gradient-text">Our Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We are redefining the future of technology with innovative solutions that transform businesses and empower people.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1: Hero Section */}
      <section className="min-h-screen flex items-center justify-center  text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4 z-10 w-[70%]"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Meet Our Visionary Team</h1>
          <p className="text-lg md:text-xl pt-6  "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad ullam laudantium ut commodi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consequatur aut hic voluptatem nam debitis, mollitia nemo fuga quam quasi nobis, ea quidem rerum et enim dolores veritatis odit dolor consectetur repellat? Tempora possimus tempore dolore quia, aperiam eius! Perferendis aut sed assumenda itaque quibusdam! impedit accusantium, quis temporibus labore quisquam optio corrupti est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate harum repudiandae sapiente dolorum, sint, similique necessitatibus optio sed illo excepturi at recusandae rem. Driven by passion. Powered by innovation.</p>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full z-0" />
      </section>

      {/* Section 2: About Us */}
      <section className="py-4 px-6 md:px-20 w-full flex justify-center items-center  ">
        <div className="max-w-5xl mx-auto text-center md:w-[70%]">
          <motion.h2 className="text-6xl text-white font-bold mb-6" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.8 }}>Who We Are</motion.h2>
          <p className="text-lg text-white">We're a diverse team of Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, minus voluptatum dolorum velit perferendis ducimus? Animi ut ex ipsam sed, hic molestias sapiente? creatives, developers, and strategists with a shared vision: to revolutionize the tech landscape for investors and startups alike.</p>
        </div>
      </section>

    <Team/>

      {/* Section 4: Vision & Mission */}
      <section className="py-20 px-6 md:px-20  text-center">
        <motion.h2 className="text-4xl  text-white font-bold mb-6" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.8 }}>Our Vision & Mission</motion.h2>
        <p className="max-w-3xl mx-auto text-lg text-white">We envision a future where innovation is accessible to all. Our mission is to empower startups and investors through cutting-edge technology, transparent collaboration, and sustainable solutions.</p>
      </section>

      {/* Section 5: Achievements */}
      <section className="py-20 px-6 md:px-20  ">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-10">Milestones & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-white">Startups Accelerated</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">$10M+</h3>
              <p className="text-white">Investor Capital Raised</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="text-white">Global Awards</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Join Us in Building the Future</h2>
          <p className="text-lg mb-6">Whether you're an investor or a dreamer with a startup idea, our team is ready to collaborate with you.</p>
          <button className=" bg-white hover:bg-black hover:text-white  font-semibold px-6 py-3 rounded-full shadow-lg text-black transition">Get in Touch</button>
        </motion.div>
      </section>

      {/* Section 7: Footer */}
     
    </main>
  );
};
export default TeamPage;