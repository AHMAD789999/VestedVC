'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUpRight, BarChart2, Globe, Shield, Users, TrendingUp, ChevronLeft, ChevronRight } from 'react-feather'
import { Quote } from 'lucide-react'

const PortfolioPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  }

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  }

  // Marquee component
  const Marquee = () => {
    const items = [
      "Blockchain Infrastructure",
      "AI & Machine Learning",
      "Climate Tech",
      "Cybersecurity",
      "Fintech Innovation",
      "Web3 Applications",
      "Future of Work"
    ]

    return (
      <div className="relative flex overflow-hidden bg-gray-800 py-6 border-y border-gray-700">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="mx-8 text-2xl font-medium flex items-center">
              <span className="text-cyan-400 mr-2">✦</span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  // Testimonial carousel
  const testimonials = [
    {
      quote: "This investment firm identified opportunities we missed and delivered exceptional returns.",
      author: "Sarah Johnson",
      position: "CIO, Vertex Capital",
      avatar: "/avatar1.jpg"
    },
    {
      quote: "Their deep tech expertise and network have been invaluable to our portfolio.",
      author: "Michael Chen",
      position: "Partner, Oak Growth",
      avatar: "/avatar2.jpg"
    },
    {
      quote: "Consistently ahead of the curve in identifying disruptive technologies.",
      author: "Emma Rodriguez",
      position: "Director, Horizon Funds",
      avatar: "/avatar3.jpg"
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="text-center px-4 z-10"
        >
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6">
            Strategic <span className="text-cyan-400">Investments</span> for <br /> Exponential Growth
          </motion.h1>
          <motion.p variants={item} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We identify and capitalize on high-growth opportunities across emerging markets and technologies.
          </motion.p>
          <motion.div variants={item}>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Explore Portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-70"></div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Stats Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8"
        >
          <motion.div variants={item} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 text-cyan-400">$4.2B</div>
            <div className="text-gray-400">Assets Under Management</div>
          </motion.div>
          
          <motion.div variants={item} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 text-purple-400">87%</div>
            <div className="text-gray-400">Success Rate</div>
          </motion.div>
          
          <motion.div variants={item} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-400 transition-all hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 text-green-400">32</div>
            <div className="text-gray-400">Portfolio Companies</div>
          </motion.div>
          
          <motion.div variants={item} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2 text-yellow-400">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Investment <span className="text-cyan-400">Focus</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We target disruptive technologies and business models with potential for outsized returns.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Globe size={40} />, title: "Web3 & Blockchain", desc: "Decentralized infrastructure and applications" },
              { icon: <BarChart2 size={40} />, title: "AI & Machine Learning", desc: "Transformative artificial intelligence solutions" },
              { icon: <Shield size={40} />, title: "Cybersecurity", desc: "Next-generation digital protection" },
              { icon: <TrendingUp size={40} />, title: "Fintech", desc: "Financial technology innovation" },
              { icon: <Users size={40} />, title: "Future of Work", desc: "Tools for the distributed workforce" },
              { icon: <ArrowUpRight size={40} />, title: "Climate Tech", desc: "Sustainable technology solutions" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all group hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-6 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-purple-400">Leadership</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seasoned investors with decades of combined experience in technology and finance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: "Alexandra Chen", role: "Founder & CEO", bio: "Former CTO at Fintech Unicorn", img: "/team1.jpg" },
              { name: "James Rodriguez", role: "Managing Partner", bio: "Ex-Goldman Sachs Investment", img: "/team2.jpg" },
              { name: "Priya Kapoor", role: "Chief Investment Officer", bio: "Deep Tech Specialist", img: "/team3.jpg" }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-400 transition-all hover:-translate-y-2 group"
              >
                <div className="h-64 bg-gray-800 relative overflow-hidden">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-gray-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client <span className="text-yellow-400">Testimonials</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our investment partners say about working with us.
            </p>
          </motion.div>

          <div className="relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gray-900 rounded-xl border border-gray-700"
              >
                <Quote className="text-yellow-400 mb-6" size={32} />
                <p className="text-xl mb-6">{testimonials[currentTestimonial].quote}</p>
                <div>
                  <p className="font-bold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-400">{testimonials[currentTestimonial].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full ${i === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-600'}`}
                />
              ))}
            </div>

            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Portfolio <span className="text-cyan-400">Highlights</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Selected companies we've partnered with on their growth journey.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { 
                name: "ChainNova", 
                sector: "Blockchain Infrastructure", 
                stats: "12x ROI", 
                desc: "Next-gen layer 2 scaling solution",
                color: "purple"
              },
              { 
                name: "NeuroAI", 
                sector: "Artificial Intelligence", 
                stats: "8.5x ROI", 
                desc: "Enterprise AI decision platforms",
                color: "cyan"
              },
              { 
                name: "GreenGrid", 
                sector: "Climate Tech", 
                stats: "6.2x ROI", 
                desc: "Renewable energy optimization",
                color: "green"
              },
              { 
                name: "SecureNest", 
                sector: "Cybersecurity", 
                stats: "9.1x ROI", 
                desc: "Zero-trust security framework",
                color: "yellow"
              }
            ].map((company, index) => (
              <motion.div 
                key={index}
                variants={scaleUp}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-${company.color}-400 transition-all relative overflow-hidden group hover:-translate-y-2`}
              >
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-${company.color}-500 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-all`}></div>
                <div className="relative z-10">
                  <div className={`text-${company.color}-400 text-sm font-semibold mb-2`}>{company.sector}</div>
                  <h3 className="text-3xl font-bold mb-3">{company.name}</h3>
                  <p className="text-gray-300 mb-4">{company.desc}</p>
                  <div className={`text-${company.color}-400 text-2xl font-bold`}>{company.stats}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={scaleUp}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Invest in the <span className="text-cyan-400">Future</span>?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our network of forward-thinking investors and gain access to exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Schedule Consultation
            </button>
            <button className="bg-transparent hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold border border-gray-600 transition-all duration-300 transform hover:scale-105">
              Download Prospectus
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default PortfolioPage