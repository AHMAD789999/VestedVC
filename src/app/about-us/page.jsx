'use client'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaLightbulb, FaUsers, FaGem, FaHeart } from 'react-icons/fa';
import { global } from 'styled-jsx/css';
import Team from "./components/Team";
gsap.registerPlugin(ScrollTrigger);
const iconData = [
  { label: "Innovation", icon: <FaLightbulb />, gradient: "from-blue-500 to-cyan-500" },
  { label: "Collaboration", icon: <FaUsers />, gradient: "from-purple-500 to-pink-500" },
  { label: "Excellence", icon: <FaGem />, gradient: "from-amber-500 to-orange-500" },
  { label: "Integrity", icon: <FaHeart />, gradient: "from-green-500 to-emerald-500" },
];

export default function AboutPage() {
  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.background = `rgba(59, 130, 246, ${opacity})`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Section-card scroll animations
    gsap.utils.toArray('.section-card').forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.7)",
      });
    });

    // Timeline-dot animations
    gsap.utils.toArray('.timeline-dot').forEach((dot, i) => {
      gsap.from(dot, {
        scrollTrigger: {
          trigger: dot,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        scale: 0,
        duration: 0.5,
        delay: i * 0.2,
        ease: "elastic.out(1, 0.3)",
      });
    });

    // Timeline-line animation
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: '.timeline-line',
        start: 'top 80%',
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 2,
    });

    // CTA glow animation
    gsap.to('.glow', {
      scrollTrigger: {
        trigger: '.glow',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      boxShadow: '0 0 30px rgba(59, 130, 246, 0.9)',
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <main className="min-h-screen">
      <div id="particles" className="fixed inset-0 z-0"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch" data-text="Vested VC">
              <span className="gradient-text">Vested VC</span>
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

      {/* About Sections */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Our Story */}
        <section className="mb-28">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span> to Innovation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Founded in 2015, Ocentra Technologies has been at the forefront of digital transformation, helping businesses harness the power of technology.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="section-card p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg mr-4 glow">
                  <i className="fas fa-rocket text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold">From Humble Beginnings</h3>
              </div>
              <p className="text-slate-300 mb-4">
                What started as a small Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, adipisci! Nihil Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique odit ratione officiis necessitatibus corrupti culpa voluptate illum quas dolores omnis, rem delectus dolorem facilis et ducimus eveniet fugit temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim, porro officia animi cumque quibusdam vitae distinctio possimus velit consectetur, facere aspernatur reprehenderit quas ad ex a repudiandae dolorum laboriosam. a voluptatibus nisi ipsam. Asperiores, molestias harum officia ratione sint eveniet? facilis cumque accusamus molestiae eligendi, molestias iste cum expedita. team of passionate developers ….
              </p>
              <p className="text-slate-300">
                Today, we serve over 500 clients….
              </p>
            </div>

            <div className="relative">
              <div className="hologram section-card overflow-hidden">
                <div className="hologram-content bg-gray-900 h-80 w-full flex items-center justify-center floating">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-8 w-64 h-64 flex flex-col items-center justify-center">
                      <div className="text-6xl font-bold gradient-text mb-2">500+</div>
                      <div className="text-xl">Happy Clients</div>
                      <div className="text-sm text-slate-400 mt-4">Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
      (
    <section className="mb-28">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our Core <span className="gradient-text">Values</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          These principles guide everything….
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {iconData.map((item, idx) => (
          <div key={idx} className="section-card p-6">
            <div
              className={`bg-gradient-to-r ${item.gradient} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 glow`}
            >
              <span className="text-2xl text-white">{item.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{item.label}</h3>
            <p className="text-slate-300">
              {item.label === "Innovation" && "We  We We We e  WeWe believe in the power of teamwork and st We "}
              {item.label === "Collaboration" && "We  We We We  WeWe believe in the power of teamwork and strong partnerships."}
              {item.label === "Excellence" && "We'reWe  We We We  We committed to delivering exceptional quality."}
              {item.label === "Integrity" && "WeWe  We We We constantly push boundaries and explore new possibilities. We operate with honesty, transparency, and ethics."}
            </p>
          </div>
        ))}
      </div>
    </section>

        {/* Timeline */}
      <section className="mb-28">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Our <span className="gradient-text">Timeline</span>
    </h2>
    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
      Milestones that have shaped our journey…
    </p>
  </div>

  <div className="relative max-w-4xl mx-auto">
    <div className="timeline-line absolute left-0 top-0 h-full"></div>

    {[
      {
        year: 2015,
        title: "Company Founded",
        description:
          "We started withExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offerings a small but passionate team, aiming to transform ideas into impactful solutions.",
        color: "blue",
      },
      {
        year: 2017,
        title: "First Major Client",
        description:
          "Secured our firstExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offerings enterprise client, marking a significant step in our growth journey.",
        color: "purple",
      },
      {
        year: 2019,
        title: "International Expansion",
        description:
          "Expanded Expanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offerings  operations overseas, entering new markets and diversifying our offerings.",
        color: "pink",
      },
      {
        year: 2021,
        title: "Product Launch",
        description:
          "Launched our Expanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsflagship product, revolutionizing user experience and driving innovation.",
        color: "emerald",
      },
      {
        year: 2023,
        title: "Global Recognition",
        description:
          "Received globalExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offeringsExpanded   operations overseas, entering new markets and diversifying our offerings awards for excellence, innovation, and impactful contributions in tech.",
        color: "amber",
      },
    ].map((item, i, arr) => (
      <div key={item.year} className={`relative pl-10 ${i < arr.length - 1 ? "pb-16" : ""}`}>
        <div className="timeline-dot glow"></div>
        <div className="section-card p-6">
          <div className={`text-${item.color}-400 font-bold mb-2`}>{item.year}</div>
          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
          <p className="text-slate-300">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
<Team/>
      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients….
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 glow">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}