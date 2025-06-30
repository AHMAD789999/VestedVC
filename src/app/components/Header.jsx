'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram  , FaGithub, FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
  { name: "About Us", href: "/about-us" },
  { name: "Investment Focus", href: "/investment-focus" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Founders Hub", href: "/founders-hub" },
  { name: "Explore Perks", href: "/explore-perks" },
];

  // ✅ Social links (including image icon)
  const socialLinks = [
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/",
    },
    {
      icon: <FaInstagram />,
      link: "https://github.com/",
    },
    {
       icon: (
         <Image
           src="/cb.jpg"
           alt="Crunchbase"
           width={34}
           height={34}
           className="rounded-full object-cover"
         />
       ),
       color: "text-white hover:bg-purple-500/20",
       link: "https://www.crunchbase.com/",
     },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 font-bold left-1/2 rounded-2xl text-black transform -translate-x-1/2 w-[95%] mx-auto backdrop-blur-xl bg-white md:rounded-4xl shadow-lg z-100 border border-slate-600"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo (Left) */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex relative top-[-10px] justify-center items-center">
          <Image src="/logo.png" width={120} height={100} alt="VestedVC Logo" />
          <h1 className="md:text-4xl text-2xl font-bold mt-4 tracking-wide">
            <span className="text-[#1E40AF]">Vested</span>
            <span className="text-[#06B6D4]">V</span>
            <span className="text-[#cca647e3]">C</span>
          </h1>
        </motion.div>

        {/* Pages (Center - Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
         {pages.map((item) => (
  <Link key={item.name} href={item.href} passHref>
    <motion.span
      whileHover={{ scale: 1.05, color: "#3B82F6" }}
      className="cursor-pointer text-black hover:text-blue-400 transition-colors font-['Clash_Display']"
    >
      {item.name}
    </motion.span>
  </Link>
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-1 transition-all font-['Clash_Display']"
            >
              Pitch Us <span>💡</span>
            </motion.button>
          </motion.div>
        </nav>

        {/* Social Icons (Right - Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.2 }}
              className="text-blue-500 text-xl hover:text-amber-300 transition-colors w-8 h-8 flex items-center justify-center"
            >
              {item.icon}
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
  <Link key={item.name} href={item.href} passHref>
    <motion.span
      whileHover={{ scale: 1.05, color: "#3B82F6" }}
      className="cursor-pointer text-black hover:text-blue-400 transition-colors font-['Clash_Display']"
    >
      {item.name}
    </motion.span>
  </Link>
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

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.2 }}
                    className="text-black text-2xl hover:text-blue-400 transition-colors w-8 h-8 flex items-center justify-center"
                  >
                    {item.icon}
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
