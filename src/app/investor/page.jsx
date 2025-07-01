// pages/investments.js
'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState([]);
  const [filteredInvestments, setFilteredInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sector: 'all',
    stage: 'all',
    sort: 'recent',
    search: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [expandedInvestment, setExpandedInvestment] = useState(null);

  // Investment data
  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        // Simulating API call with mock data
        const mockInvestments = [
          {
            id: 1,
            name: "NeuroTech AI",
            logo: "🧠",
            sector: "Artificial Intelligence",
            stage: "Series A",
            description: "Developing next-gen neural interfaces for medical and consumer applications.",
            valuation: 42,
            raised: 12.5,
            fundingGoal: 20,
            investors: ["A16Z", "Sequoia", "Y Combinator"],
            roiProjection: "4.8x",
            timeline: "3-5 years",
            riskLevel: "Medium",
            documents: ["Pitch Deck", "Financials", "Market Analysis"],
            createdAt: "2023-06-15"
          },
            {
            id: 2,
            name: "QuantumLeap",
            logo: "⚛️",
            sector: "Quantum Computing",
            stage: "Seed",
            description: "Building quantum processors for enterprise optimization problems.",
            valuation: 28,
            raised: 4.2,
            fundingGoal: 8,
            investors: ["DCVC", "Founders Fund"],
            roiProjection: "7.2x",
            timeline: "5-7 years",
            riskLevel: "High",
            documents: ["Technical Paper", "Roadmap"],
            createdAt: "2023-06-10"
          },
          {
            id: 3,
            name: "GreenHarvest",
            logo: "🌱",
            sector: "AgriTech",
            stage: "Series B",
            description: "IoT-enabled vertical farming solutions for urban environments.",
            valuation: 85,
            raised: 25,
            fundingGoal: 30,
            investors: ["Khosla Ventures", "Bessemer"],
            roiProjection: "3.5x",
            timeline: "2-4 years",
            riskLevel: "Medium",
            documents: ["Case Studies", "Pilot Results"],
            createdAt: "2023-05-28"
          },
          {
            id: 4,
            name: "HealthSense",
            logo: "❤️",
            sector: "HealthTech",
            stage: "Series A",
            description: "Wearable biosensors with predictive health analytics.",
            valuation: 63,
            raised: 18,
            fundingGoal: 25,
            investors: ["General Catalyst", "NEA"],
            roiProjection: "5.1x",
            timeline: "3-5 years",
            riskLevel: "Medium",
            documents: ["FDA Approvals", "Clinical Trials"],
            createdAt: "2023-05-20"
          },
          {
            id: 5,
            name: "FinSecure",
            logo: "🔒",
            sector: "FinTech",
            stage: "Series C",
            description: "Blockchain-based security for financial transactions.",
            valuation: 120,
            raised: 45,
            fundingGoal: 50,
            investors: ["Tiger Global", "Coatue"],
            roiProjection: "3.2x",
            timeline: "2-3 years",
            riskLevel: "Low",
            documents: ["Security Audit", "Partnerships"],
            createdAt: "2023-05-15"
          },
          {
            id: 6,
            name: "RoboLogix",
            logo: "🤖",
            sector: "Robotics",
            stage: "Series A",
            description: "Autonomous warehouse logistics robots.",
            valuation: 55,
            raised: 20,
            fundingGoal: 25,
            investors: ["Lux Capital", "Battery Ventures"],
            roiProjection: "4.5x",
            timeline: "3-4 years",
            riskLevel: "Medium",
            documents: ["Product Demo", "Customer Contracts"],
            createdAt: "2023-05-05"
          },
          {
            id: 7,
            name: "SpaceLink",
            logo: "🚀",
            sector: "SpaceTech",
            stage: "Seed",
            description: "Satellite internet for remote areas.",
            valuation: 35,
            raised: 5,
            fundingGoal: 15,
            investors: ["Space Capital", "Boeing Ventures"],
            roiProjection: "8.0x",
            timeline: "5-8 years",
            riskLevel: "High",
            documents: ["FCC Filings", "Tech Specs"],
            createdAt: "2023-04-30"
          },
          {
            id: 8,
            name: "EduFuture",
            logo: "🎓",
            sector: "EdTech",
            stage: "Series A",
            description: "AI-powered personalized learning platform.",
            valuation: 48,
            raised: 15,
            fundingGoal: 20,
            investors: ["GSV Ventures", "Owl Ventures"],
            roiProjection: "4.2x",
            timeline: "3-5 years",
            riskLevel: "Medium",
            documents: ["User Growth", "Curriculum"],
            createdAt: "2023-04-25"
          },
            {
            id: 2,
            name: "QuantumLeap",
            logo: "⚛️",
            sector: "Quantum Computing",
            stage: "Seed",
            description: "Building quantum processors for enterprise optimization problems.",
            valuation: 28,
            raised: 4.2,
            fundingGoal: 8,
            investors: ["DCVC", "Founders Fund"],
            roiProjection: "7.2x",
            timeline: "5-7 years",
            riskLevel: "High",
            documents: ["Technical Paper", "Roadmap"],
            createdAt: "2023-06-10"
          },
          {
            id: 3,
            name: "GreenHarvest",
            logo: "🌱",
            sector: "AgriTech",
            stage: "Series B",
            description: "IoT-enabled vertical farming solutions for urban environments.",
            valuation: 85,
            raised: 25,
            fundingGoal: 30,
            investors: ["Khosla Ventures", "Bessemer"],
            roiProjection: "3.5x",
            timeline: "2-4 years",
            riskLevel: "Medium",
            documents: ["Case Studies", "Pilot Results"],
            createdAt: "2023-05-28"
          },
         
          // ... (keep all your existing investment data)
        ];

        setInvestments(mockInvestments);
        setFilteredInvestments(mockInvestments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching investments:", error);
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);
  // Apply filters
  useEffect(() => {
    let result = [...investments];

    // Sector filter
    if (filters.sector !== 'all') {
      result = result.filter(inv => inv.sector.toLowerCase().includes(filters.sector.toLowerCase()));
    }

    // Stage filter
    if (filters.stage !== 'all') {
      result = result.filter(inv => inv.stage.toLowerCase().includes(filters.stage.toLowerCase()));
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(inv => 
        inv.name.toLowerCase().includes(searchTerm) || 
        inv.description.toLowerCase().includes(searchTerm) ||
        inv.sector.toLowerCase().includes(searchTerm)
      );
    }

    // Sort
    switch (filters.sort) {
      case 'recent':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'valuation-high':
        result.sort((a, b) => b.valuation - a.valuation);
        break;
      case 'valuation-low':
        result.sort((a, b) => a.valuation - b.valuation);
        break;
      case 'roi-high':
        result.sort((a, b) => parseFloat(b.roiProjection) - parseFloat(a.roiProjection));
        break;
      case 'roi-low':
        result.sort((a, b) => parseFloat(a.roiProjection) - parseFloat(b.roiProjection));
        break;
      default:
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredInvestments(result);
  }, [filters, investments]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleInvestmentExpand = (id) => {
    setExpandedInvestment(expandedInvestment === id ? null : id);
  };

  const sectors = [...new Set(investments.map(inv => inv.sector))];
  const stages = [...new Set(investments.map(inv => inv.stage))];

  // ... (keep all your existing filter and utility functions)

  return (
    <div className="min-h-screen bg-gray-900 ">
      <Head>
        <title>Investment Opportunities | Founder Hub</title>
        <meta name="description" content="Discover high-potential investment opportunities across various sectors" />
      </Head>

      {/* Updated Hero Section with Sky Blue Background */}
      <section className="bg-gray-900 pt-[200px] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Exceptional Investment Opportunities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Access curated deals with high-growth potential across emerging sectors and innovative technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-sky-600 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition">
              Explore Investments
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-sky-600 transition">
              Learn How It Works
            </button>
          </div>
        </div>
      </section>

      {/* New Section: Why Invest With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Invest With Us?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We provide access to exclusive opportunities with rigorous vetting and comprehensive due diligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-sky-500 text-4xl mb-4">🔍</div>
              <h3 className="text-xl text-black font-bold mb-3">Curated Deals</h3>
              <p className="text-black">
                Our team handpicks only the most promising startups with strong fundamentals and growth potential.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-sky-500 text-4xl mb-4">📊</div>
              <h3 className="text-xl text-black font-bold mb-3">Data-Driven Insights</h3>
              <p className="text-black">
                Access proprietary analytics and market intelligence to make informed investment decisions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-sky-500 text-4xl mb-4">🤝</div>
              <h3 className="text-xl text-black font-bold mb-3">Direct Access</h3>
              <p className="text-black">
                Connect directly with founders and participate in funding rounds typically reserved for institutional investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Filters and Investment Cards Section */}
      {/* ... (keep all your existing filter and investment card code) */}
 {/* Filters and Search */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search investments..."
                  className=" text-black w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                />
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-sky-400  rounded-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-sky-400 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
                Filters
              </button>

              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="px-4 py-2 border border-gray-900 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="recent">Most Recent</option>
                <option value="valuation-high">Valuation (High to Low)</option>
                <option value="valuation-low">Valuation (Low to High)</option>
                <option value="roi-high">ROI (High to Low)</option>
                <option value="roi-low">ROI (Low to High)</option>
              </select>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Sector</label>
                  <select
                    name="sector"
                    value={filters.sector}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 border text-black border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Sectors</option>
                    {sectors.map(sector => (
                      <option key={sector} value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block  text-sm font-medium text-black mb-1">Stage</label>
                  <select
                    name="stage"
                    value={filters.stage}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 border text-black border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Stages</option>
                    {stages.map(stage => (
                      <option key={stage} value={stage}>{stage}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-white">
            Showing <span className="font-semibold">{filteredInvestments.length}</span> investment opportunities
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Investment Cards */}
        {!loading && filteredInvestments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No investments found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInvestments.map((investment) => (
              <div
                key={investment.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{investment.logo}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{investment.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {investment.sector}
                          </span>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                            {investment.stage}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleInvestmentExpand(investment.id)}
                      className="text-gray-400 hover:text-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${expandedInvestment === investment.id ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="mt-4 text-black line-clamp-2">
                    {investment.description}
                  </p>

                  {/* Investment Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Valuation</p>
                      <p className="font-semibold">${investment.valuation}M</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Raised</p>
                      <p className="font-semibold">${investment.raised}M</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ROI Projection</p>
                      <p className="font-semibold">{investment.roiProjection}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Risk Level</p>
                      <p className="font-semibold">{investment.riskLevel}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-black mb-1">
                      <span>Funding Progress</span>
                      <span>{Math.round((investment.raised / investment.fundingGoal) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${Math.min(100, (investment.raised / investment.fundingGoal) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedInvestment === investment.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Investment Details</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Timeline</p>
                          <p className="font-medium">{investment.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Lead Investors</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {investment.investors.map((investor, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                {investor}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Documents</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {investment.documents.map((doc, idx) => (
                              <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                          Express Interest
                        </button>
                        <button className="flex-1 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-black rounded-lg font-medium transition">
                          View Details
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* New Section: Investment Sectors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Investment Sectors</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We focus on high-growth industries that are shaping the future of technology and business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-sky-100 text-sky-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4">🤖</div>
              <h3 className="text-lg font-bold mb-2">Artificial Intelligence</h3>
              <p className="text-black">Machine learning, computer vision, and AI applications transforming industries.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4">🌿</div>
              <h3 className="text-lg font-bold mb-2">Clean Energy</h3>
              <p className="text-black">Renewable tech, energy storage, and sustainable infrastructure solutions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4">💻</div>
              <h3 className="text-lg font-bold mb-2">Enterprise Software</h3>
              <p className="text-black">Next-generation SaaS, cloud infrastructure, and productivity tools.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4">❤️</div>
              <h3 className="text-lg font-bold mb-2">HealthTech</h3>
              <p className="text-black">Digital health, biotech innovations, and medical device advancements.</p>
            </div>
          </div>
        </div>
      </section>
 <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our network of investors and get access to exclusive opportunities
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold shadow-lg transition">
              Become an Investor
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-bold transition">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
      {/* Existing CTA Section */}
      {/* ... (keep your existing CTA section) */}
    </div>
  );
};

export default InvestmentsPage;