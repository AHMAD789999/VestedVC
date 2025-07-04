// pages/founder-hub.js
'use client'
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const FounderHub = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [featuredStartups, setFeaturedStartups] = useState([]);
  const [metrics, setMetrics] = useState({
    totalDeals: 0,
    totalInvested: 0,
    averageReturn: 0,
    activeInvestors: 0
  });
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [events, setEvents] = useState([]);
  const [sectors, setSectors] = useState([]);
  
  const testimonialRef = useRef(null);
  const counterRefs = {
    totalDeals: useRef(null),
    totalInvested: useRef(null),
    averageReturn: useRef(null),
    activeInvestors: useRef(null)
  };

  // Initialize data
  useEffect(() => {
    // Featured startups data
    const startupData = [
      {
        id: 1,
        name: "NeuroTech AI",
        category: "Artificial Intelligence",
        stage: "Series A",
        description: "Revolutionizing neural interfaces with AI-powered brain-computer interfaces.",
        valuation: 42,
        raised: 12.5,
        logo: "🧠",
        investors: ["A16Z", "Sequoia", "Y Combinator"]
      },
      {
        id: 2,
        name: "QuantumLeap",
        category: "Quantum Computing",
        stage: "Seed",
        description: "Building the next generation of quantum processors for enterprise applications.",
        valuation: 28,
        raised: 4.2,
        logo: "⚛️",
        investors: ["DCVC", "Founders Fund"]
      },
      {
        id: 3,
        name: "GreenHarvest",
        category: "AgriTech",
        stage: "Series B",
        description: "Sustainable farming solutions using IoT and AI for precision agriculture.",
        valuation: 85,
        raised: 25,
        logo: "🌱",
        investors: ["Khosla Ventures", "Bessemer"]
      },
      {
        id: 4,
        name: "HealthSense",
        category: "HealthTech",
        stage: "Series A",
        description: "Wearable health monitors with predictive analytics for chronic conditions.",
        valuation: 63,
        raised: 18,
        logo: "❤️",
        investors: ["General Catalyst", "NEA"]
      },
      {
        id: 5,
        name: "FinSecure",
        category: "FinTech",
        stage: "Series C",
        description: "Blockchain-based security solutions for financial institutions.",
        valuation: 120,
        raised: 45,
        logo: "🔒",
        investors: ["Tiger Global", "Coatue"]
      },
      {
        id: 6,
        name: "RoboLogix",
        category: "Robotics",
        stage: "Series A",
        description: "AI-driven warehouse automation and logistics solutions.",
        valuation: 55,
        raised: 20,
        logo: "🤖",
        investors: ["Lux Capital", "Battery Ventures"]
      }
    ];
    
    setFeaturedStartups(startupData);

    // Metrics data
    const metricsData = {
      totalDeals: 427,
      totalInvested: 1800,
      averageReturn: 4.2,
      activeInvestors: 2150
    };
    
    // Initialize metrics at 0 for animation
    setMetrics({
      totalDeals: 0,
      totalInvested: 0,
      averageReturn: 0,
      activeInvestors: 0
    });
    
    // Animate counters after a short delay
    setTimeout(() => {
      setMetrics(metricsData);
    }, 500);

    // Testimonials data
    setTestimonials([
      {
        id: 1,
        name: "Sarah Johnson",
        title: "Partner, Venture Capital Group",
        quote: "Founder Hub has transformed how we source deals. The quality of startups and the depth of information available is unmatched.",
        avatar: "👩‍💼"
      },
      {
        id: 2,
        name: "Michael Chen",
        title: "Angel Investor",
        quote: "I've made 3 investments through Founder Hub in the last year, all showing strong growth. The platform makes due diligence seamless.",
        avatar: "👨‍💼"
      },
      {
        id: 3,
        name: "Alexis Rodriguez",
        title: "Fund Manager, Tech Investments",
        quote: "The deal flow curation saves us hundreds of hours. We've found two of our portfolio companies here that are now valued at over $100M.",
        avatar: "👩‍💻"
      },
      {
        id: 4,
        name: "David Kim",
        title: "Managing Director, Growth Fund",
        quote: "The predictive analytics have helped us identify winners before they become obvious to the market. A game-changer for early-stage investing.",
        avatar: "👨‍💼"
      }
    ]);

    // Events data
    setEvents([
      {
        id: 1,
        title: "AI & Deep Tech Investor Summit",
        date: "June 15, 2023",
        location: "San Francisco, CA",
        time: "9:00 AM - 5:00 PM",
        attendees: "120+ Investors",
        description: "Meet the most promising AI startups in the Bay Area"
      },
      {
        id: 2,
        title: "Climate Tech Pitch Day",
        date: "June 22, 2023",
        location: "Virtual Event",
        time: "11:00 AM - 2:00 PM",
        attendees: "80+ Investors",
        description: "Exclusive showcase of sustainable technology startups"
      },
      {
        id: 3,
        title: "HealthTech Investor Breakfast",
        date: "July 5, 2023",
        location: "New York, NY",
        time: "8:00 AM - 10:00 AM",
        attendees: "60+ Investors",
        description: "Early-stage health technology companies seeking funding"
      }
    ]);

    // Investment sectors data
    setSectors([
      {
        id: 1,
        name: "Artificial Intelligence",
        description: "Machine learning, natural language processing, computer vision",
        growth: "32% YoY",
        icon: "🤖",
        color: "from-blue-500 to-cyan-500"
      },
      {
        id: 2,
        name: "Clean Energy",
        description: "Renewable tech, energy storage, carbon capture",
        growth: "28% YoY",
        icon: "⚡",
        color: "from-green-500 to-emerald-500"
      },
      {
        id: 3,
        name: "FinTech",
        description: "Blockchain, digital banking, payment solutions",
        growth: "25% YoY",
        icon: "💳",
        color: "from-purple-500 to-pink-500"
      },
      {
        id: 4,
        name: "HealthTech",
        description: "Telemedicine, digital health, biotech innovations",
        growth: "30% YoY",
        icon: "❤️",
        color: "from-red-500 to-orange-500"
      },
      {
        id: 5,
        name: "EdTech",
        description: "Learning platforms, skill development, AR/VR education",
        growth: "22% YoY",
        icon: "🎓",
        color: "from-yellow-500 to-amber-500"
      },
      {
        id: 6,
        name: "SpaceTech",
        description: "Satellite technology, space exploration, launch systems",
        growth: "40% YoY",
        icon: "🚀",
        color: "from-indigo-500 to-blue-500"
      }
    ]);
  }, []);

  // Filter startups by category
  const filteredStartups = activeTab === 'all' 
    ? featuredStartups 
    : featuredStartups.filter(startup => 
        startup.category.toLowerCase().includes(activeTab.toLowerCase())
      );

  // Testimonial slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animate counters
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // Animation duration in ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      Object.keys(metrics).forEach(key => {
        const targetValue = metrics[key];
        let frame = 0;
        
        const counter = counterRefs[key].current;
        if (!counter) return;
        
        const currentValue = parseFloat(counter.textContent);
        
        // Only animate if value has changed
        if (Math.abs(targetValue - currentValue) > 0.1) {
          const increment = (targetValue - currentValue) / totalFrames;
          
          const updateCounter = () => {
            frame++;
            const newValue = currentValue + (increment * frame);
            
            if (frame >= totalFrames) {
              counter.textContent = 
                key === 'averageReturn' ? targetValue.toFixed(1) + 'x' : 
                key === 'totalInvested' ? '$' + (targetValue / 1000).toFixed(1) + 'B' : 
                Math.round(targetValue).toString();
            } else {
              counter.textContent = 
                key === 'averageReturn' ? newValue.toFixed(1) + 'x' : 
                key === 'totalInvested' ? '$' + (newValue / 1000).toFixed(1) + 'B' : 
                Math.round(newValue).toString();
              requestAnimationFrame(updateCounter);
            }
          };
          
          requestAnimationFrame(updateCounter);
        }
      });
    };
    
    // Start animation when metrics are set
    if (metrics.totalDeals > 0) {
      animateCounters();
    }
  }, [metrics]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Discover high-potential startups and connect with visionary founders" />
      </Head>
<section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
              <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch" data-text="portfolio">
                    <span className="gradient-text">Portfolio</span>
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
      <section className="pt-24 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-sm px-4 py-2 rounded-full mb-6">
              Exclusive Investor Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the Next <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Unicorn</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Access curated deal flow from the world's most promising startups. Founder Hub connects visionary investors with groundbreaking entrepreneurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Join as Investor
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all">
                Explore Startups
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-bold mb-2">Early Access</h3>
                  <p className="text-gray-400 text-sm">Pre-seed opportunities with high growth potential</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="text-4xl mb-3">💡</div>
                  <h3 className="font-bold mb-2">AI Curation</h3>
                  <p className="text-gray-400 text-sm">Algorithmic matching based on your investment thesis</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="font-bold mb-2">Deep Insights</h3>
                  <p className="text-gray-400 text-sm">Comprehensive due diligence materials</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-bold mb-2">Direct Access</h3>
                  <p className="text-gray-400 text-sm">Connect directly with founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            By The <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Numbers</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div ref={counterRefs.totalDeals} className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                0
              </div>
              <p className="text-gray-400">Successful Deals</p>
            </div>
            <div className="text-center">
              <div ref={counterRefs.totalInvested} className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                $0B
              </div>
              <p className="text-gray-400">Capital Deployed</p>
            </div>
            <div className="text-center">
              <div ref={counterRefs.averageReturn} className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                0x
              </div>
              <p className="text-gray-400">Avg. ROI</p>
            </div>
            <div className="text-center">
              <div ref={counterRefs.activeInvestors} className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                0
              </div>
              <p className="text-gray-400">Active Investors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Startups</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Curated selection of high-growth potential companies actively raising capital
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {['all', 'AI', 'FinTech', 'HealthTech', 'CleanTech', 'Robotics'].map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeTab === category.toLowerCase() 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map(startup => (
            <div key={startup.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all hover:border-purple-500 hover:shadow-xl">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{startup.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold">{startup.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-sm bg-gray-700 px-2 py-1 rounded mr-2">{startup.category}</span>
                        <span className="text-sm bg-blue-900 px-2 py-1 rounded">{startup.stage}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <p className="mt-4 text-gray-300">{startup.description}</p>
                
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Valuation</p>
                    <p className="font-bold">${startup.valuation}M</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Raised</p>
                    <p className="font-bold">${startup.raised}M</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-1">Investors</p>
                  <div className="flex flex-wrap gap-2">
                    {startup.investors.map((investor, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 px-2 py-1 rounded">{investor}</span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full mt-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold">
                  View Pitch Deck
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-gray-700 rounded-lg font-bold hover:bg-gray-800 transition-all">
            View All Startups
          </button>
        </div>
      </section>

      {/* Investment Sectors */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            High-Growth <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Investment Sectors</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Focus areas with exceptional growth potential and market opportunities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map(sector => (
              <div key={sector.id} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
                <div className={`inline-block bg-gradient-to-r ${sector.color} p-3 rounded-full mb-6`}>
                  <span className="text-2xl">{sector.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{sector.name}</h3>
                <p className="text-gray-400 mb-4">{sector.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">Growth: {sector.growth}</span>
                  <button className="text-sm text-blue-400 hover:text-blue-300 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Investors</span> Choose Us
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Our platform is designed to give investors unprecedented access and insights
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
              <div className="text-5xl mb-6">🔮</div>
              <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-400 mb-4">
                Our AI-driven platform analyzes thousands of data points to identify startups with the highest growth potential.
              </p>
              <div className="flex items-center text-blue-400 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-xl font-bold mb-4">Comprehensive Dashboards</h3>
              <p className="text-gray-400 mb-4">
                Track portfolio performance, market trends, and investment opportunities through intuitive dashboards.
              </p>
              <div className="flex items-center text-blue-400 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-bold mb-4">Exclusive Network</h3>
              <p className="text-gray-400 mb-4">
                Join a curated community of investors, founders, and industry experts for deal sharing and co-investment.
              </p>
              <div className="flex items-center text-blue-400 font-medium">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Upcoming <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pitch Events</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Connect with founders at our exclusive investor events
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <div key={event.id} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
                <div className="mb-6">
                  <div className="text-2xl font-bold mb-2">{event.title}</div>
                  <div className="flex items-center text-gray-400 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-blue-900 px-3 py-1 rounded-full">{event.time}</span>
                  <span className="text-sm bg-purple-900 px-3 py-1 rounded-full">{event.attendees}</span>
                </div>
                
                <p className="text-gray-300 mb-6">{event.description}</p>
                
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold">
                  Register Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 border-2 border-gray-700 rounded-lg font-bold hover:bg-gray-800 transition-all">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Investors</span> Say
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Hear from our community of successful investors
        </p>
        
        <div className="relative h-80 overflow-hidden rounded-2xl bg-gray-800 border border-gray-700">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`absolute inset-0 p-8 transition-opacity duration-1000 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto">
                <div className="text-5xl mb-6">{testimonial.avatar}</div>
                <p className="text-xl md:text-2xl italic mb-8">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Exclusive <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Investor Network</span>
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Access curated deal flow, proprietary insights, and a community of top-tier investors
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 bg-gray-900 bg-opacity-50 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
                Get Started
              </button>
            </div>
            <p className="text-blue-300 text-sm mt-4">
              By joining, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderHub;