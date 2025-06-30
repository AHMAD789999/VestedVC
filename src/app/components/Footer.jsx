'use client'

import { motion } from "framer-motion";
import { FaTwitter, FaGlobe, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // ✅ Added Link import

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ Navigate links
  const navigateLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "For Founders", href: "/founders" },
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
  ];

  // ✅ Legal links
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Compliance", href: "/compliance" },
  ];

  return (
    <footer className="relative overflow-hidden mx-auto backdrop-blur-xl bg-white text-black shadow-lg z-50 border border-slate-700n pt-20 pb-10 text-xl">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-purple-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex relative top-[-20px] justify-center items-center">
              <Image src="/logo.png" width={120} height={100} alt="VestedVC Logo" />
              <h1 className="md:text-4xl text-2xl font-bold mt-4 tracking-wide">
                <span className="text-[#1E40AF]">Vested</span>
                <span className="text-[#06B6D4]">V</span>
                <span className="text-[#cca647e3]">C</span>
              </h1>
            </motion.div>

            <p className="text-black text-sm font-bold leading-relaxed max-w-md">
              We back bold founders building the future through visionary capital and unparalleled network effects.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: <FaTwitter className="text-lg" />,
                  color: "bg-blue-400 text-white hover:bg-blue-400/20",
                  link: "https://twitter.com/",
                },
                {
                  icon: <FaLinkedin className="text-lg" />,
                  color: "bg-blue-500 text-white hover:bg-blue-500/20",
                  link: "https://linkedin.com/",
                },
                {
                  icon: <FaInstagram className="text-lg" />,
                  color: "bg-purple-500 text-white hover:bg-purple-500/20",
                  link: "https://discord.com/",
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
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-800 ${item.color} transition-all duration-300`}
                >
                  <span className="text-black hover:text-blue-600">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-black uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navigateLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-black hover:text-blue-600 transition-colors text-xl font-bold"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-black uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-black hover:text-blue-600 transition-colors text-lg font-bold"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-black uppercase tracking-wider">
              Partner With Us
            </h3>
            <p className="text-black text-xl font-bold">
              Ready to build something extraordinary?
            </p>

            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <button className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium">
                Submit Pitch <FaArrowUp className="rotate-45" />
              </button>
            </motion.div>

            <div className="pt-4 border-t border-slate-800/50 mt-6">
              <p className="text-xl font-bold text-black">
                We review every submission within 72 hours
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative my-12 h-px"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/40 to-transparent"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold text-black/80 mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} VestedVC Holdings. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xl font-bold text-black hover:text-blue-400 transition-colors"
          >
            Back to top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaArrowUp className="text-blue-400" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
