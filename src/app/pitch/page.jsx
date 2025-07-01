// pages/pitch-us.js
'use client'
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { 
  FaLightbulb, FaMicrochip, FaHeartbeat, FaLeaf, FaCoins, 
  FaInfoCircle, FaLock, FaCheckCircle, FaPaperPlane, 
  FaNetworkWired, FaChalkboardTeacher, FaChartLine, FaUsers, 
  FaGlobe, FaSyncAlt, FaHeadset, FaTicketAlt, FaVideo, FaBook,
  FaStar, FaChevronDown, FaPhone, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa';

const PitchUsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const faqItems = [
    {
      question: "What stage companies do you invest in?",
      answer: "We primarily invest in pre-seed to Series A stages, with check sizes ranging from $500K to $5M. We look for companies with a working prototype or early traction, strong founding teams, and large addressable markets."
    },
    {
      question: "How long does the review process take?",
      answer: "Our initial review happens within 72 hours of submission. If we decide to move forward, the entire process from initial pitch to funding typically takes 4-8 weeks, depending on the complexity of due diligence."
    },
    {
      question: "Do you sign NDAs before reviewing pitches?",
      answer: "We don't sign NDAs at the initial pitch stage. We see thousands of ideas annually and need to avoid potential conflicts. However, once we enter formal due diligence, we're happy to discuss confidentiality agreements."
    },
    {
      question: "What if I'm a solo founder?",
      answer: "We invest in solo founders with exceptional domain expertise and a clear plan to build their team. However, we strongly recommend having technical and business expertise covered either through co-founders or early hires."
    },
    {
      question: "Can I submit multiple ideas?",
      answer: "Yes, you can submit multiple ideas as separate applications. However, we recommend focusing on your strongest concept first. If we're interested, we can discuss your other ideas during the process."
    },
    {
      question: "What happens after I submit my pitch?",
      answer: "You'll receive an email confirmation immediately. Our team reviews all submissions within 72 hours. If we're interested, we'll contact you to schedule an introductory call. Due to volume, we're unable to provide feedback on all submissions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, NeuroTech AI",
      content: "Pitching to Ocentra was a game-changer. Their expertise in AI helped us refine our product and secure key partnerships just months after funding.",
      amount: "$4.2M Seed Round",
      time: "18 months ago"
    },
    {
      name: "Michael Chen",
      role: "Founder, GreenCharge",
      content: "The Ocentra team saw our vision before we had revenue. Their strategic guidance helped us scale from prototype to 10,000 units in our first year.",
      amount: "$2.8M Pre-seed",
      time: "2 years ago"
    },
    {
      name: "David Martinez",
      role: "CTO, ChainSecure",
      content: "Beyond the investment, Ocentra's network opened doors we couldn't access otherwise. They helped us secure our first enterprise clients.",
      amount: "$7.5M Series A",
      time: "9 months ago"
    }
  ];

  const pitchCategories = [
    {
      name: "Deep Tech",
      icon: <FaMicrochip className="text-3xl text-blue-400" />,
      description: "AI, Machine Learning, Quantum Computing, Robotics, Advanced Materials"
    },
    {
      name: "HealthTech",
      icon: <FaHeartbeat className="text-3xl text-purple-400" />,
      description: "Digital Health, MedTech, Biotech, Health AI, Personalized Medicine"
    },
    {
      name: "CleanTech",
      icon: <FaLeaf className="text-3xl text-green-400" />,
      description: "Renewable Energy, Carbon Capture, Sustainable Tech, Green Materials"
    },
    {
      name: "FinTech",
      icon: <FaCoins className="text-3xl text-amber-400" />,
      description: "Blockchain, Digital Banking, InsurTech, RegTech, Payment Solutions"
    }
  ];

  const benefits = [
    {
      name: "Strategic Network",
      icon: <FaNetworkWired className="text-2xl text-blue-400" />,
      description: "Access to our network of industry experts, potential customers, partners, and follow-on investors."
    },
    {
      name: "Hands-On Support",
      icon: <FaChalkboardTeacher className="text-2xl text-purple-400" />,
      description: "Dedicated partner support for product development, go-to-market strategy, and talent acquisition."
    },
    {
      name: "Growth Resources",
      icon: <FaChartLine className="text-2xl text-green-400" />,
      description: "Exclusive access to growth marketing resources, SaaS tools, and discounted services."
    },
    {
      name: "Founder Community",
      icon: <FaUsers className="text-2xl text-amber-400" />,
      description: "Join our community of 200+ founders for peer learning, support, and collaboration."
    },
    {
      name: "Global Reach",
      icon: <FaGlobe className="text-2xl text-red-400" />,
      description: "Support for international expansion through our global network of partners and investors."
    },
    {
      name: "Follow-On Funding",
      icon: <FaSyncAlt className="text-2xl text-cyan-400" />,
      description: "Priority access to our later-stage funds and introduction to our co-investment network."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your submission! Our team will review your pitch and get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <Head>
        <title>Pitch Us | Ocentra Ventures</title>
        <meta name="description" content="Pitch your next big idea to Ocentra Ventures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900/20 to-gray-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-60 h-60 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full filter blur-[120px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-900/30 px-4 py-1 rounded-full text-blue-300 mb-6">
              <FaLightbulb className="inline mr-2" /> Calling All Innovators
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              Pitch Your <span className="block">Next Big Idea</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We're looking for visionary founders and game-changing startups to invest in. Submit your pitch and join our portfolio of success stories.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#pitch-form" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Submit Your Pitch
              </a>
              <a href="#criteria" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all">
                View Criteria
              </a>
            </div>
          </div>
          
          <div className="mt-24 flex justify-center">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="animate-bounce animation-delay-0 bg-gray-900 border border-gray-700 rounded-xl p-6 w-48">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">$50M+</div>
                <div className="text-sm">Funds Deployed</div>
              </div>
              <div className="animate-bounce animation-delay-1000 bg-gray-900 border border-gray-700 rounded-xl p-6 w-48">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">120+</div>
                <div className="text-sm">Startups Funded</div>
              </div>
              <div className="animate-bounce animation-delay-2000 bg-gray-900 border border-gray-700 rounded-xl p-6 w-48">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-2">15</div>
                <div className="text-sm">Exits to Date</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Categories */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              We Invest In Innovation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Focused on transformative technologies and disruptive business models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {pitchCategories.map((category, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:scale-[1.03] ${selectedCategory === index ? 'border-blue-500 bg-blue-900/20' : ''}`}
                onClick={() => setSelectedCategory(index)}
              >
                <div className="bg-blue-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                <p className="text-slate-300">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Form */}
      <section id="pitch-form" className="py-16 relative z-10 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Submit Your Pitch
                </h2>
                <p className="text-slate-400 mb-8">
                  Complete this form to present your idea to our investment team. We review every submission personally.
                </p>
                
                <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaInfoCircle className="text-blue-400 mr-3" />
                    What to Include
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    {[
                      "Problem you're solving",
                      "Your solution and technology",
                      "Market size and opportunity",
                      "Business model and traction",
                      "Your team's background",
                      "Funding needs and use of funds"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaLock className="text-purple-400 mr-3" />
                    Secure & Confidential
                  </h3>
                  <p className="text-slate-300">
                    All submissions are encrypted and kept strictly confidential. We never share your information without permission.
                  </p>
                </div>
              </div>
              
              <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" required />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-slate-300 mb-2">Company Name</label>
                    <input type="text" id="company" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Startup Inc." />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-slate-300 mb-2">Category</label>
                    <select id="category" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select your industry</option>
                      <option>Deep Tech</option>
                      <option>HealthTech</option>
                      <option>CleanTech</option>
                      <option>FinTech</option>
                      <option>Consumer Tech</option>
                      <option>Enterprise Software</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="stage" className="block text-slate-300 mb-2">Funding Stage</label>
                    <select id="stage" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select funding stage</option>
                      <option>Pre-seed</option>
                      <option>Seed</option>
                      <option>Series A</option>
                      <option>Series B</option>
                      <option>Series C+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="pitch" className="block text-slate-300 mb-2">Pitch Summary</label>
                    <textarea id="pitch" rows="4" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your idea in 200 words or less..." required></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="deck" className="block text-slate-300 mb-2">Pitch Deck (PDF)</label>
                    <input type="file" id="deck" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" accept=".pdf" />
                  </div>
                  
                  <div className="flex items-start">
                    <input type="checkbox" id="terms" className="mt-1 mr-3" required />
                    <label htmlFor="terms" className="text-slate-300">I agree to the <a href="#" className="text-blue-400 hover:underline">terms and conditions</a> and confirm that all information provided is accurate.</label>
                  </div>
                  
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:opacity-90">
                    Submit Pitch <FaPaperPlane className="inline ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section id="criteria" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Selection Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparent and founder-friendly evaluation of your submission
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-8 border-l-2 border-gradient-to-b from-blue-500 to-purple-500">
              {[
                { step: "Step 1", title: "Initial Review", description: "Our investment team reviews your submission within 72 hours. We look for strong problem-solution fit, market potential, and team capability.", color: "text-blue-400" },
                { step: "Step 2", title: "Screening Call", description: "If your pitch meets our criteria, we schedule a 30-minute call to discuss your vision, business model, and key metrics.", color: "text-purple-400" },
                { step: "Step 3", title: "Deep Dive", description: "Successful candidates go through a comprehensive due diligence process including market analysis, technical review, and customer validation.", color: "text-pink-400" },
                { step: "Step 4", title: "Partner Meeting", description: "You'll present to our investment committee for final approval. This is your opportunity to showcase your vision and answer key questions.", color: "text-emerald-400" },
                { step: "Step 5", title: "Decision & Onboarding", description: "We make our investment decision within 10 business days. Successful pitches move to term sheet and onboarding with our portfolio team.", color: "text-amber-400" }
              ].map((step, index) => (
                <div key={index} className="relative pb-16 pl-8">
                  <div className="absolute -left-3.5 top-0 w-6 h-6 rounded-full bg-blue-500"></div>
                  <div className={`font-bold mb-2 ${step.color}`}>{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative z-10 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Why Pitch to Us
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Beyond capital, we provide the resources and network to accelerate your growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 transition-all duration-300 hover:scale-[1.03] hover:border-blue-500">
                <div className="bg-blue-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.name}</h3>
                <p className="text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from founders who pitched to us and transformed their vision into reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 transition-all duration-300 hover:scale-[1.03] hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  {testimonial.content}
                </p>
                <div className="text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="inline" />
                  ))}
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  {testimonial.amount} · {testimonial.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative z-10 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about pitching to us
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 mb-6 transition-all ${activeFaq === index ? 'border-blue-500' : ''}`}
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <FaChevronDown className={`text-blue-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                  <p className="text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Ocentra Ventures
              </h2>
              <p className="text-slate-400 mb-6">Investing in visionary founders building the future of technology.</p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'instagram', 'youtube'].map((social, index) => (
                  <a key={index} href="#" className="text-slate-400 hover:text-white transition">
                    <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-sm">{social.charAt(0).toUpperCase()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Our Portfolio', 'Investment Criteria', 'Team', 'Blog', 'Careers'].map((link, index) => (
                  <li key={index}><a href="#" className="text-slate-400 hover:text-white transition">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                  <span className="text-slate-400">Innovation Center, San Francisco, CA</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-purple-400 mt-1 mr-3" />
                  <span className="text-slate-400">pitch@ocentra.vc</span>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-cyan-400 mt-1 mr-3" />
                  <span className="text-slate-400">+1 (415) 555-0123</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-slate-500">
            <p>© 2023 Ocentra Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PitchUsPage;