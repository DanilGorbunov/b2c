"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { SafeImage } from "@/components/safe-image";

export default function Portfolio() {
  // Sort projects by newest first by default
  const sortedProjects = [...projects].sort((a, b) => (b.year || 2024) - (a.year || 2024));

  // Restore scroll position on mount
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('casesScrollPosition');
    if (savedScrollPosition) {
      // Use setTimeout to ensure the page is fully rendered
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        sessionStorage.removeItem('casesScrollPosition');
      }, 100);
    }
  }, []);

  // Save scroll position before navigation
  const handleLinkClick = () => {
    sessionStorage.setItem('casesScrollPosition', window.scrollY.toString());
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section - Centered with badge and heading */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Trusted by Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] border border-[#262626] mb-8 cursor-default"
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.span>
              <span className="text-sm text-[#E5E5E5] font-light">Trusted by 50+ Companies</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#E5E5E5] leading-tight tracking-tight mb-6 max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                We Build Digital
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                Products That Scale
              </motion.span>
            </motion.h1>

            {/* Subheading/Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl text-[#A3A3A3] leading-relaxed font-light max-w-2xl"
            >
              Full-cycle software development — from concept to launch. Web, mobile,<br className="hidden md:block" />
              and AI solutions for startups and enterprises.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section - 2x2 Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Block 01 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pb-8 md:pb-12 pr-0 md:pr-8 border-b border-[#171717] md:border-b-0 md:border-r border-[#171717] cursor-default"
            >
              <motion.div 
                className="text-[#A3A3A3] text-sm md:text-base font-light mb-3"
                whileHover={{ scale: 1.1, x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                01
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-[#E5E5E5] mb-4 tracking-tight">
                User Research & Strategy
              </h3>
              <p className="text-base text-[#A3A3A3] leading-relaxed font-light">
                Deep user research, competitive analysis, and strategic planning to ensure your digital product resonates with your target audience.
              </p>
            </motion.div>

            {/* Block 02 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pb-8 md:pb-12 pl-0 md:pl-8 border-b border-[#171717] cursor-default"
            >
              <motion.div 
                className="text-[#A3A3A3] text-sm md:text-base font-light mb-3"
                whileHover={{ scale: 1.1, x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                02
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-[#E5E5E5] mb-4 tracking-tight">
                UI/UX Design
              </h3>
              <p className="text-base text-[#A3A3A3] leading-relaxed font-light">
                Psychology-driven interface design that combines aesthetics with functionality for seamless user experiences.
              </p>
            </motion.div>

            {/* Block 03 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pt-8 md:pt-12 pr-0 md:pr-8 border-t border-[#171717] md:border-t-0 md:border-r border-[#171717] cursor-default"
            >
              <motion.div 
                className="text-[#A3A3A3] text-sm md:text-base font-light mb-3"
                whileHover={{ scale: 1.1, x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                03
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-[#E5E5E5] mb-4 tracking-tight">
                Interactive Prototyping
              </h3>
              <p className="text-base text-[#A3A3A3] leading-relaxed font-light">
                High-fidelity prototypes that bring your ideas to life before development, reducing risk and accelerating time to market.
              </p>
            </motion.div>

            {/* Block 04 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pt-8 md:pt-12 pl-0 md:pl-8 border-t border-[#171717] cursor-default"
            >
              <motion.div 
                className="text-[#A3A3A3] text-sm md:text-base font-light mb-3"
                whileHover={{ scale: 1.1, x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                04
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-[#E5E5E5] mb-4 tracking-tight">
                Frontend Development & AI Integration
              </h3>
              <p className="text-base text-[#A3A3A3] leading-relaxed font-light">
                Leverage AI-powered solutions to enhance productivity, automate workflows, and deliver intelligent user experiences.
              </p>
            </motion.div>
          </div>
        </div>
        </section>

      <div className="container mx-auto px-6 max-w-6xl">

        {/* Case Studies Section */}
        <section className="pb-24">
          {/* Projects Grid - 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05, ease: "easeOut" }}
              >
                <Link 
                  href={`/portfolio/${project.slug}`}
                  className="block group h-full"
                  onClick={handleLinkClick}
                >
                  <motion.div 
                    className="h-full flex flex-col border border-[#171717] rounded-lg overflow-hidden bg-[#0A0A0A] hover:border-[#262626] transition-colors duration-200"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    {/* Image */}
                    <motion.div 
                      className="relative overflow-hidden aspect-video bg-[#0A0A0A] group-hover:opacity-90 transition-opacity duration-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                        <SafeImage
                          src={project.thumbnail || project.fullImage || "/placeholder.svg"}
                          alt={project.title}
                        className="w-full h-full object-cover"
                          loading="lazy"
                        />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="text-xs uppercase tracking-wider text-[#737373] font-light mb-3 flex items-center gap-2">
                          <span>{project.tags.slice(0, 2).join(" • ").toUpperCase()}</span>
                          <svg 
                            className="h-3 w-3 text-[#737373] group-hover:text-[#A3A3A3] transition-colors duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      <h3 className="text-xl md:text-2xl font-normal text-[#E5E5E5] mb-3 group-hover:text-[#F5F5F5] transition-colors duration-200 tracking-tight">
                          {project.title}
                        </h3>
                      <p className="text-sm md:text-base text-[#A3A3A3] leading-relaxed font-light flex-1 mb-4">
                          {project.description}
                        </p>
                      <motion.div 
                        className="flex items-center justify-end mt-auto"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.svg 
                          className="h-5 w-5 text-[#737373] group-hover:text-[#A3A3A3] transition-colors duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                      >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}