'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    "About Us",
    "Investment Focus",
    "Portfolio",
    "Founders Hub",
    "Explore Perks",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 rounded-2xl text-black transform -translate-x-1/2 w-[95%] mx-auto backdrop-blur-xl bg-white md:rounded-4xl shadow-lg z-100 border border-slate-600"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo (Left) */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center items-center">
         <Image src="/logo.png" width={120} height={100} alt="VestedVC Logo" />
    <h1 className="md:text-4xl text-2xl font-bold mt-4 tracking-wide">
  <span className="text-[#1E40AF]">Vested</span>
  <span className="text-[#06B6D4]">V</span>
  <span className="text-[#cca647e3]">C</span>
</h1>


          {/* <span className="text-xl font-bold text-black font-['Clash_Display']">VestedVC</span> */}
        </motion.div>

        {/* Pages (Center - Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          {pages.map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ scale: 1.05, color: "#3B82F6" }}
              className="text-black hover:text-blue-400 transition-colors font-['Clash_Display']"
            >
              {item}
            </motion.a>
          ))}
          <motion.div
            animate={{
              borderColor: ["#3B82F6", "#60A5FA", "#3B82F6"],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-lg border-2 border-blue-500"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                  "0 0 10px 5px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-md flex items-center gap-1 transition-all font-['Clash_Display']"
            >
              Pitch Us <span>💡</span>
            </motion.button>
          </motion.div>
        </nav>

        {/* Social Icons (Right - Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {[<FaTwitter />, <FaLinkedin />, <FaGithub />].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ y: -2, scale: 1.2 }}
              className="text-black text-xl hover:text-blue-400 transition-colors"
            >
              {Icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-black text-2xl mt-4 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {pages.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 5, color: "#3B82F6" }}
                  className="block text-black hover:text-blue-400 text-lg transition-colors font-['Clash_Display']"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                animate={{
                  borderColor: ["#3B82F6", "#60A5FA", "#3B82F6"],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-lg border-2 border-blue-500"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                      "0 0 8px 3px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full bg-blue-600 text-black px-4 py-2 rounded-md flex items-center justify-center gap-1 font-['Clash_Display']"
                >
                  Pitch Us <span>💡</span>
                </motion.button>
              </motion.div>
              <div className="flex justify-center space-x-6 pt-4">
                {[<FaTwitter />, <FaLinkedin />, <FaGithub />].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -2, scale: 1.2 }}
                    className="text-black text-2xl hover:text-blue-400 transition-colors"
                  >
                    {Icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;