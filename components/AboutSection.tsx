
'use client';

import { Mail, Github, Linkedin, Twitter, ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioPage() {
  const [hoveredMusic, setHoveredMusic] = useState<string | null>(null);

  const experiences = [
    {
      year: '2025 — Now',
      title: 'Frontend Developer',
      company: 'Jithvar Consultancy',
      location: 'Lucknow, India',
    },
    {
      year: '2024 — 2025',
      title: 'MERN Stack Developer',
      company: 'Eliora Technology',
      location: 'Nagpur, India',
    },
    {
      year: '2023 — 2024',
      title: 'Software Engineering Intern',
      company: 'Riple Technologies',
      location: 'Remote',
    },
  ];

  const education = [
    {
      year: '2022',
      title: 'Bachelor of Engineering',
      field: 'Mechanical Engineering',
      school: 'RTMNU',
    },
    {
      year: '2022',
      title: 'Master in Blockchain',
      field: 'Blockchain Development',
      school: 'Jetking Nagpur',
    },
  ];

  const musicTracks = [
    {
      id: 1,
      title: 'Neon Dreams',
      artist: 'Synth Wave Studios',
      image: '/music-1.jpg',
      duration: '3:45',
    },
    {
      id: 2,
      title: 'Urban Pulse',
      artist: 'Beat Masters',
      image: '/music-2.jpg',
      duration: '4:12',
    },
    {
      id: 3,
      title: 'Electric Vibes',
      artist: 'Sound Collective',
      image: '/music-3.jpg',
      duration: '3:28',
    },
  ];

  const portfolioItems = [
    {
      title: 'E-Commerce Dashboard',
      category: 'UI/UX',
      year: 'Early 2025',
      image: '/portfolio-1.jpg',
    },
  ];

  const collaborations = ['Behance', 'Dribbble', 'Medium'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      <div className="max-w-[1680px] mx-auto px-4 py-8 md:py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* About Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl">
              <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-6">
                Frontend Developer with 2+ years of experience, focused on creating functional and user-centered digital products with visually stunning designs.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="p-3 bg-slate-700 rounded-lg hover:bg-pink-600 transition-all duration-300 group"
                  title="Email"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-700 rounded-lg hover:bg-pink-600 transition-all duration-300 group"
                  title="GitHub"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-700 rounded-lg hover:bg-pink-600 transition-all duration-300 group"
                  title="LinkedIn"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-700 rounded-lg hover:bg-pink-600 transition-all duration-300 group"
                  title="Twitter"
                >
                  <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Resume Button */}
              <button className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-pink-600/50">
                <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
                Resume
              </button>
            </div>

            {/* Background Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-pink-400">
                MY BACKGROUND
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Growing up in India, I was surrounded by creativity and analytical thinking. My passion for <span className="underline font-semibold">technology</span> began at age four and has shaped my perspective ever since.
              </p>
              <p className="text-sm leading-relaxed text-gray-300 mt-4">
                My <span className="underline font-semibold">fascination with development</span> led me to pursue Computer Science, inspired by the transformative power of great design.
              </p>
              <p className="text-sm leading-relaxed text-gray-300 mt-4">
                Today, I apply my multidisciplinary skills to create solutions that make people feel and remember, <span className="font-semibold">elevating experiences into inspiring solutions</span>.
              </p>
              <p className="text-4xl font-bold mt-6 text-gray-400">Dev</p>
            </div>

            {/* Favorite Jams */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-pink-400">
                FAVORITE TRACKS
              </h3>
              <div className="space-y-4">
                {musicTracks.map((track) => (
                  <div
                    key={track.id}
                    className="flex gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => setHoveredMusic(String(track.id))}
                    onMouseLeave={() => setHoveredMusic(null)}
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={track.image || "/placeholder.svg"}
                        alt={track.title}
                        fill
                        className="object-cover"
                      />
                      {hoveredMusic === String(track.id) && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Play size={16} fill="white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate group-hover:text-pink-400 transition-colors">
                        {track.title}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {track.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:shadow-2xl">
              <div className="relative h-[600px] w-full overflow-hidden">
                <Image
  src="/profile.jpeg"
  alt="Profile"
  fill
  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
/>

              </div>
            </div>

            {/* Intro Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center">
              <p className="text-sm text-gray-300 mb-3">Hey 👋</p>
              <h2 className="text-3xl font-bold mb-4">I'm a Developer</h2>
              <p className="text-gray-300 mb-4">
                Currently building amazing web experiences at Jithvar Consultancy
              </p>
              <a
                href="mailto:dev@example.com"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold"
              >
                Get in touch →
              </a>
            </div>

            {/* Awards & Features */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-pink-400">
                AWARDS & FEATURES
              </h3>

              {portfolioItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer mb-6 last:mb-0"
                >
                  <p className="text-xs text-gray-400 mb-2">{item.year}</p>
                  <p className="text-sm font-semibold mb-3 group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </p>
                  <div className="relative h-40 rounded-lg overflow-hidden bg-slate-700 border border-slate-600 group-hover:border-pink-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-600/20">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-xs text-gray-400 mb-3">
                  Companies I've collaborated with
                </p>
                <div className="flex flex-wrap gap-3">
                  {collaborations.map((collab, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-slate-700/50 hover:bg-pink-600/30 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer"
                    >
                      {collab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Experience */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-pink-400">
                EXPERIENCE
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="pb-6 border-b border-slate-700 last:border-0 last:pb-0 hover:translate-x-1 transition-transform duration-300 cursor-pointer group"
                  >
                    <p className="text-xs text-gray-400 mb-1">{exp.year}</p>
                    <h4 className="text-sm font-bold group-hover:text-pink-400 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{exp.company}</p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-pink-400">
                EDUCATION
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="pb-6 border-b border-slate-700 last:border-0 last:pb-0 hover:translate-x-1 transition-transform duration-300 cursor-pointer group"
                  >
                    <p className="text-xs text-gray-400 mb-1">{edu.year}</p>
                    <h4 className="text-sm font-bold group-hover:text-pink-400 transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{edu.field}</p>
                    <p className="text-xs text-gray-500">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle Image */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group h-64">
              <div className="relative w-full h-full">
                <Image
                  src="/food.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}




export  function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Intro */}
          <div className="col-span-2 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">
              Building scalable, high-performance web products
            </h2>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              I’m a frontend developer focused on Next.js and React, crafting
              production-ready applications with clean architecture, optimized
              performance, and strong UX foundations.
            </p>
          </div>

          {/* Experience */}
          <ExperienceCard
            year="2025 — Now"
            role="Frontend Developer"
            company="Jithvar Consultancy Services"
            location="Lucknow"
          />
          <ExperienceCard
            year="2024 — 2025"
            role="MERN Stack Developer"
            company="Eliora Technology"
            location="Nagpur"
          />

          {/* Background */}
          <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
            <h3 className="text-sm font-semibold text-white/80">
              MY BACKGROUND
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              My interest in development grew from solving real business
              problems — not just building interfaces, but systems that scale
              and remain maintainable under real-world constraints.
            </p>
          </div>

          {/* Tool stack */}
          <ToolStack />

          {/* Personality */}
          <FunCard />
        </div>

        {/* RIGHT IMAGE (BIG, LIKE SCREENSHOT) */}
        <div className="lg:col-span-5 min-h-[520px]">
          <ImageCard />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export  function ImageCard() {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur group">
      <Image
        src="/me.jpg" // replace with your image
        alt="Sandesh Deshmukh"
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-105"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-xs text-white/70">Frontend Developer</p>
        <h3 className="text-lg font-semibold text-white">
          Sandesh Deshmukh
        </h3>
      </div>
    </div>
  );
}

export function FunCard() {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:bg-white/10 transition">
      <h3 className="text-sm font-semibold text-white/80">
        BEYOND WORK
      </h3>

      <p className="mt-3 text-sm text-white/60 leading-relaxed">
        Outside of coding, I enjoy exploring design systems, studying product
        breakdowns, and experimenting with motion & micro-interactions.
        I’m constantly refining how interfaces feel — not just how they look.
      </p>

      <p className="mt-4 text-xs text-white/40">
        Currently obsessed with smooth scrolling, motion systems, and
        performance metrics.
      </p>
    </div>
  );
}


import {
  Code,
  Layout,
  Database,
  Flame,
  Boxes,
  Shield,
  ArrowUpRight
} from "lucide-react";

const tools = [
  { icon: Code, label: "Next.js" },
  { icon: Layout, label: "React" },
  { icon: Boxes, label: "Redux Toolkit" },
  { icon: Database, label: "MongoDB" },
  { icon: Shield, label: "Firebase" },
  { icon: Flame, label: "Tailwind CSS" }
];

export function ToolStack() {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
      <h3 className="text-sm font-semibold text-white/80 mb-4">
        TOOL STACK
      </h3>

      <div className="flex flex-wrap gap-3">
        {tools.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white/70 hover:bg-white/10 transition"
          >
            <Icon size={14} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}



export function ExperienceCard({ year, role, company, location }) {
  return (
    <div className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4 hover:bg-white/10 transition group">
      <p className="text-xs text-white/50">{year}</p>
      <h4 className="mt-1 text-sm font-semibold text-white flex items-center gap-1">
        {role}
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition"
        />
      </h4>
      <p className="text-xs text-white/60">
        {company} • {location}
      </p>
    </div>
  );
}

