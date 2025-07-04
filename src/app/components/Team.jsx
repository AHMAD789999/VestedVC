"use client";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Ahmad Ali",
    role: "Founding Partner",
    img: "/team.webp",
    bio: "Ahmad brings 10+ years of experience in venture capital and startup growth across emerging markets. He has led investments in over 40 startups and played an integral role in their scale-up journey. Ahmad is passionate about deep tech and financial inclusion. He believes in empowering entrepreneurs who solve real-world problems with disruptive innovation. With a background in economics and an MBA from Harvard, Ahmad blends strategic thinking with sharp execution. His network spans global VC circles, and he frequently mentors founders. He is also an advocate for ethical investing, aiming to create impact-driven portfolios that deliver long-term value. In his free time, he writes thought pieces on startup ecosystems and is an active angel investor across Asia.",
    link: "#",
  },
  {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },
  {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },  {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },  {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },  {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },
    {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },
    {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },



    {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },
    {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },
    {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },
    {
    name: "Zara Khan",
    role: "Growth Strategist",
    img: "/team.webp",
    bio: "Zara specializes in scaling early-stage startups with data-driven marketing strategies. She previously led growth teams at two unicorns and now advises portfolio companies at VestedVC on user acquisition, funnel optimization, and brand positioning. Zara has a background in behavioral psychology and growth design. Her leadership brings structure and speed to startups aiming to scale from MVP to PMF. She's known for building viral loops and applying precision analytics to every stage of the user journey. Her insights have helped startups triple retention within 6 months. She also teaches workshops and actively supports women-led startups.",
    link: "#",
  },
  
];

export default function MeetOurTeam() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-4 sm:px-6 py-5 mb-20 text-center">
      {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2253f5]">
        Our Team
      </h2>
      <p className="text-2xl sm:text-4xl md:text-6xl text-white mt-2 mb-10">
        Meet Our Team
      </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <HoverCard
            key={index}
            member={member}
            onReadMore={() => setSelected(member)}
          />
        ))}
      </div>

      {selected && (
        <ProfilePopup member={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function HoverCard({ member, onReadMore }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative bg-white rounded-2xl shadow-md transition-all duration-500 ">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover rounded-t-2xl"
      />

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`absolute top-35  md:top-48 left-1/2 transform -translate-x-1/2 z-50 bg-white px-4 py-3 rounded-lg shadow-lg w-[90%] text-left transition-all duration-500 ${
          hovered ? "h-44" : "h-20"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold text-gray-800">
            {member.name}
          </h3>
          <a href={member.link} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#0e76a8] text-xl" />
          </a>
        </div>
        <p className="text-sm text-gray-500">{member.role}</p>

        <div
          className={`transition-opacity duration-500 ${
            hovered ? "opacity-100 mt-3" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          <p className="text-sm text-gray-700 line-clamp-2">
            {member.bio.slice(0, 100)}...
          </p>
          <button
            onClick={onReadMore}
            className="inline-block mt-2 text-[#1E40AF] font-medium hover:underline"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfilePopup({ member, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl overflow-auto shadow-xl w-full max-w-6xl flex flex-col md:flex-row max-h-[90vh]">
        {/* Left side */}
        <div className="p-6 md:p-8 md:w-3/5 overflow-y-auto max-h-[60vh] md:max-h-none">
          <h2 className="text-2xl font-bold text-[#1E40AF]">{member.name}</h2>
          <p className="text-sm text-gray-500 mb-4">{member.role}</p>
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {member.bio}
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-[#1E40AF] text-white rounded-lg hover:bg-[#1e3a8a]"
          >
            Close
          </button>
        </div>

        {/* Right side */}
        <div className="md:w-2/5 h-64 md:h-auto">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
