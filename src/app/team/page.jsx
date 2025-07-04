'use client'
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Team from "../components/Team";

// Animation Variants
const fadeFromTop = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const TeamPage = () => {
  return (
    <main className="bg-gray-900 text-white font-sans overflow-hidden">
      <Head>
        <title>Meet Our Team | Visionary Startup</title>
        <meta name="description" content="Discover the minds driving innovation at our startup." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="show"
            variants={fadeFromTop}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 glitch"
              data-text="Our Team"
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text">Our Team</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
              variants={fadeFromBottom}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4 }}
            >
              We are redefining the Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente rem quisquam accusamus sunt distinctio minus aperiam ipsa ab beatae, incidunt, maiores dignissimos saepe cupiditate. future of technology with innovative solutions that transform businesses and empower people.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial="hidden"
              animate="show"
              variants={fadeFromBottom}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 */}
      <section className=" flex items-center justify-center text-white relative overflow-hidden">
        <motion.div
          className="text-center px-4 z-10 w-[70%]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeFromLeft}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Meet Our Visionary Team</h1>
          <p className="text-lg md:text-xl pt-6">
            Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio obcaecati est, saepe sunt debitis commodi cum, iusto omnis repellat possimus ratione explicabo. Pariatur, voluptas odio? Nihil maxime, rem earum est dolorum mollitia consequuntur modi atque officiis commodi nam non. sit amet consectetur adipisicing elit. Eos ad ullam laudantium ut commodi...
          </p>
        </motion.div>
      </section>

      {/* Section 2: About Us */}
      <section className="py-20 px-6 md:px-20 w-full flex justify-center items-center">
        <motion.div
          className="max-w-5xl mx-auto text-center md:w-[70%]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeFromRight}
        >
          <h2 className="text-6xl text-white font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-white">
            We're a diverse team Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta alias nobis vitae quia minima omnis dolorum officiis corrupti quidem architecto voluptatem cupiditate id non debitis facilis, distinctio minus rerum sapiente iusto laudantium quam. Impedit pariatur quas veritatis officia ipsum repellat aut eligendi sapiente tempora? of creatives, developers, and strategists with a shared vision...
          </p>
        </motion.div>
      </section>

      {/* Section 3: Team Component */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeFromBottom}
      >
        <Team />
      </motion.div>

      {/* Section 4: Vision & Mission */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeFromTop}
        >
          <h2 className="text-4xl text-white font-bold mb-6">Our Vision & Mission</h2>
          <p className="max-w-3xl mx-auto text-lg text-white">
            We envision   We envision  a future where innovation is accessible to all..  We envision  a future where innovation is accessible to all.. a future where innovation is accessible to all..  We envision  a future where innovation is accessible to all..  We envision  a future where innovation is accessible to all...
          </p>
        </motion.div>
      </section>

      {/* Section 5: Achievements */}
      <section className="py-20 px-6 md:px-20">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeFromBottom}
        >
          <h2 className="text-4xl font-bold text-white mb-10">Milestones & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[fadeFromLeft, fadeFromBottom, fadeFromRight].map((variant, idx) => (
              <motion.div
                key={idx}
                variants={variant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white">
                  {idx === 0 ? "50+" : idx === 1 ? "$10M+" : "20+"}
                </h3>
                <p className="text-white">
                  {idx === 0
                    ? "Startups Accelerated"
                    : idx === 1
                    ? "Investor Capital Raised"
                    : "Global Awards"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeFromTop}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">Ready to Pitch Your Vision?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join our portfolio of innovative companies transforming industries
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#pitch-form"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Submit Your Pitch
            </motion.a>
            <p className="text-slate-400 mt-6">
              Have questions? <a href="#" className="text-blue-400 hover:underline">Contact our investment team</a>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default TeamPage;
