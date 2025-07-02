'use client'
import { motion } from 'framer-motion'
import { Gift, Zap, Shield, Globe, Clock, BarChart2, ChevronRight } from 'lucide-react'
import { Quote } from 'lucide-react'
const ExplorePerks = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  }

  const perks = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Exclusive Deals",
      description: "Access to special investment opportunities not available to the general public",
      color: "text-purple-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Early Access",
      description: "Be the first to invest in promising startups before they hit mainstream markets",
      color: "text-yellow-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Priority Support",
      description: "Dedicated relationship manager and 24/7 VIP support line",
      color: "text-cyan-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with our worldwide network of investors and entrepreneurs",
      color: "text-green-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Saving Tools",
      description: "Curated deal flow and automated investment tracking",
      color: "text-blue-400"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Exclusive market research and performance dashboards",
      color: "text-red-400"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-900">
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch" data-text="Explore Perks">
              <span className="gradient-text">Explore Perks</span>
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
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="text-center"
          >
            <motion.p variants={item} className="text-lg font-semibold text-cyan-600 mb-4">
              INVESTOR BENEFITS
            </motion.p>
            <motion.h1 variants={item} className=" text-white text-4xl md:text-6xl font-bold mb-6">
              Exclusive <span className="text-cyan-600">Perks</span> For Our Partners
            </motion.h1>
            <motion.p variants={item} className="text-white text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlock premium benefits designed to maximize your investment potential and streamline your experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`${perk.color} mb-6`}>
                  {perk.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{perk.title}</h3>
                <p className="text-gray-600 mb-6">{perk.description}</p>
                <button className="flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors">
                  Learn more <ChevronRight className="ml-1" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Access These Benefits?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join our network of elite investors and start enjoying these exclusive perks today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Become an Investor
            </button>
            <button className="bg-transparent hover:bg-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">What Our Investors Say</h2>
            <p className="text-xl text-white text-gray-600 max-w-3xl mx-auto">
              Hear from our partners about their experience with our exclusive benefits.
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
              {
                quote: "The early access deals alone have made my membership worthwhile.",
                author: "Sarah Johnson",
                company: "Horizon Capital"
              },
              {
                quote: "The analytics tools have transformed how I evaluate opportunities.",
                author: "Michael Chen",
                company: "Oak Growth Partners"
              },
              {
                quote: "The network I've built through this platform is invaluable.",
                author: "Priya Kapoor",
                company: "Vertex Ventures"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <div className="text-cyan-600 mb-4">
                  <Quote className="w-8 h-8" />
                </div>
                <p className="text-lg text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ExplorePerks