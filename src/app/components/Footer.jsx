'use client'

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaDiscord, FaArrowUp, FaRegLightbulb } from "react-icons/fa";
import Image from "next/image";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden  mx-auto backdrop-blur-xl bg-white  shadow-lg z-50 border border-slate-700n mt-9 pt-20 pb-10 font-inter">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-purple-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main grid - Asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12">
          {/* Brand column - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center items-center">
              <Image src="/logo.png" width={120} height={100} alt="VestedVC Logo" />
         <h1 className="md:text-4xl text-2xl font-bold mt-4 tracking-wide">
       <span className="text-[#1E40AF]">Vested</span>
       <span className="text-[#06B6D4]">V</span>
       <span className="text-[#cca647e3]">C</span>
     </h1>
     
     
               {/* <span className="text-xl font-bold text-white font-['Clash_Display']">VestedVC</span> */}
             </motion.div>
     
            
            <p className="text-slate-400/80 text-sm leading-relaxed max-w-md">
              We back bold founders building the future through visionary capital and unparalleled network effects.
            </p>
            
            {/* Social links with hover glow */}
            <div className="flex gap-4">
              {[
                { icon: <FaTwitter className="text-lg" />, color: "bg-blue-400/10 hover:bg-blue-400/20" },
                { icon: <FaLinkedin className="text-lg" />, color: "bg-blue-500/10 hover:bg-blue-500/20" },
                { icon: <FaDiscord className="text-lg" />, color: "bg-purple-500/10 hover:bg-purple-500/20" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-800 ${item.color} transition-all duration-300`}
                >
                  <span className="text-slate-300 hover:text-white">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation - Center */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="space-y-3">
              {["Our Thesis", "Portfolio", "For Founders", "Team", "Insights"].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal - Center */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms", "Disclaimer", "Cookie Policy", "Compliance"].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA - Right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Partner With Us
            </h3>
            <p className="text-slate-400 text-sm">
              Ready to build something extraordinary?
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <button className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium">
                Submit Pitch <FaArrowUp className="rotate-45" />
              </button>
            </motion.div>

            <div className="pt-4 border-t border-slate-800/50 mt-6">
              <p className="text-xs text-slate-500">
                We review every submission within 72 hours
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider with animated gradient */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative my-12 h-px"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/40 to-transparent"></div>
        </motion.div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs text-slate-500/80 mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} VestedVC Holdings. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors"
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