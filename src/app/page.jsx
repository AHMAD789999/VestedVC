"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Team from "./components/Team";

const words = ["BUILDING", "GROWTH", "INVESTING", "INNOVATIVE"];

const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min(1, (now - startTime) / (duration * 1000));
        const currentCount = Math.floor(progress * (to - from) + from);
        
        setCount(currentCount);
        
        if (now < endTime) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(to);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [inView, to, duration, from]);

  return <span ref={ref}>{count}</span>;
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-white">
 <section className="relative min-h-screen pt-[100px] flex items-center justify-center overflow-hidden hero-bg">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 glitch" data-text="Partner For">
              <span className="gradient-tex">Partner For</span>
               <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-wide"
          >
            {words[index]}
          </motion.div>
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
     

      {/* Stats Section with Counting Animation */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              We measure our success by the success of our partners
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 150, suffix: "+", label: "Startups Supported" },
              { value: 500, suffix: "M+", label: "Capital Deployed" },
              { value: 3, suffix: "x", label: "Average Growth" },
              { value: 95, suffix: "%", label: "Success Rate" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50"
              >
                <p className="text-4xl font-bold text-blue-400">
                  <Counter from={0} to={stat.value} duration={2} />
                  {stat.suffix}
                </p>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className=" bg-slate-900">
         <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How We Help Startups
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Comprehensive solutions tailored to your growth needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Funding Solutions",
                description: "Access to venture capital, angel investors, and strategic financing options to fuel your growth.",
                icon: "💰"
              },
              {
                title: "Growth Strategy",
                description: "Data-driven approaches to scaling your business, from market expansion to customer acquisition.",
                icon: "📈"
              },
              {
                title: "Tech Innovation",
                description: "Cutting-edge technology partnerships and development resources to build competitive advantage.",
                icon: "🚀"
              },
              {
                title: "Talent Network",
                description: "Connect with top-tier talent and executive leadership to build your dream team.",
                icon: "👥"
              },
              {
                title: "Mentorship",
                description: "Guidance from industry veterans and successful entrepreneurs who've been in your shoes.",
                icon: "🧠"
              },
              {
                title: "Ecosystem Access",
                description: "Join our network of partners, customers, and collaborators to accelerate your trajectory.",
                icon: "🌐"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.floor(i / 3) * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-400/30"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        {/* ... (keep existing services section code exactly the same) ... */}
      </section>
  <section className=" bg-slate-900">
         <section className=" bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
            Key focus investment</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore nemo similique dolorem consequuntur non corrupti id nesciunt et laborum atque iste soluta deleniti nostrum, fugit libero repellat sint vel veniam sit vitae dignissimos sequi? Assumenda odit quae, vero optio nisi architecto!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Funding Solutions",
                description: "Access to venture capital, angel investors, and strategic financing options to fuel your growth.",
                icon: "💰"
              },
              {
                title: "Growth Strategy",
                description: "Data-driven approaches to scaling your business, from market expansion to customer acquisition.",
                icon: "📈"
              },
              {
                title: "Tech Innovation",
                description: "Cutting-edge technology partnerships and development resources to build competitive advantage.",
                icon: "🚀"
              },
              {
                title: "Talent Network",
                description: "Connect with top-tier talent and executive leadership to build your dream team.",
                icon: "👥"
              },
              {
                title: "Mentorship",
                description: "Guidance from industry veterans and successful entrepreneurs who've been in your shoes.",
                icon: "🧠"
              },
              {
                title: "Ecosystem Access",
                description: "Join our network of partners, customers, and collaborators to accelerate your trajectory.",
                icon: "🌐"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.floor(i / 3) * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-400/30"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        {/* ... (keep existing services section code exactly the same) ... */}
      </section>
      {/* Portfolio Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Portfolio Highlights
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Some of the groundbreaking startups we've partnered with
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "NexaAI",
                growth: "1200%",
                funding: "$42M",
                description: "AI-powered business automation platform",
                category: "Artificial Intelligence"
              },
              {
                name: "GreenVest",
                growth: "800%",
                funding: "$28M",
                description: "Sustainable investment marketplace",
                category: "FinTech"
              },
              {
                name: "HealthBridge",
                growth: "650%",
                funding: "$75M",
                description: "Telemedicine infrastructure provider",
                category: "HealthTech"
              }
            ].map((company, i) => (
              <motion.div 
                key={i}
                initial={{  scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {company.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{company.description}</p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Growth</p>
                    <p className="text-xl font-bold text-green-400">
                      <Counter from={0} to={parseInt(company.growth)} duration={1.5} />%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Funding</p>
                    <p className="text-xl font-bold text-blue-400">{company.funding}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
          <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Founders Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Success stories from our partner startups
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Their strategic guidance helped us pivot at the right time and secure Series B funding. We wouldn't be where we are today without their support.",
                name: "Sarah Johnson",
                title: "CEO, TechNova",
                avatar: "👩‍💼"
              },
              {
                quote: "The network access alone has been invaluable. We've formed partnerships that have doubled our revenue in just 6 months.",
                name: "Michael Chen",
                title: "Founder, GrowPath",
                avatar: "👨‍💼"
              },
              {
                quote: "From fundraising to hiring key executives, they've been true partners in every sense of the word.",
                name: "David Rodriguez",
                title: "CTO, InnovateX",
                avatar: "🧑‍💻"
              },
              {
                quote: "The mentorship program connected me with industry leaders who provided insights that transformed our business model.",
                name: "Emma Williams",
                title: "Founder, GreenSolutions",
                avatar: "👩‍🔬"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg italic text-gray-200 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-blue-300">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        {/* ... (keep existing testimonials section code exactly the same) ... */}
      </section>

      {/* Investment Stages Section with Counting */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Investment Approach
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              We support startups at every stage of their journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                stage: "Pre-Seed",
                count: 85,
                description: "Early-stage concept validation",
                color: "text-purple-400"
              },
              {
                stage: "Seed",
                count: 120,
                description: "Product development and MVP",
                color: "text-blue-400"
              },
              {
                stage: "Series A",
                count: 65,
                description: "Scaling and market expansion",
                color: "text-cyan-400"
              },
              {
                stage: "Series B+",
                count: 40,
                description: "Growth and market leadership",
                color: "text-green-400"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50 text-center"
              >
                <h3 className={`text-2xl font-bold ${item.color} mb-2`}>{item.stage}</h3>
                <p className="text-4xl font-bold text-white mb-4">
                  <Counter from={0} to={item.count} duration={2} />
                </p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Pitch Your Vision?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join our portfolio of innovative companies transforming industries
            </p>
            <a href="#pitch-form" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Submit Your Pitch
            </a>
            <p className="text-slate-400 mt-6">
              Have questions? <a href="#" className="text-blue-400 hover:underline">Contact our investment team</a>
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
    </div>
  );
};

export default HeroSection;