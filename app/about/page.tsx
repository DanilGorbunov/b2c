"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SafeImage } from "@/components/safe-image";

const teamMembers = [
  {
    name: "Anastasiya Dmytryk",
    role: "SEO",
    initials: "AD",
    linkedin: "https://www.linkedin.com/in/anastasiya-dmytryk-009a29204/",
    image: "/images/logo_favi/nastia.png"
  },
  {
    name: "Andrew Dmytryk",
    role: "Investor - Co-Founder",
    initials: "AnD",
    image: "/images/logo_favi/andrew_dm.jpeg"
  },
  {
    name: "Danil Gorbunov",
    role: "Product Designer & Full-Stack Developer",
    initials: "DG",
    image: "/images/logo_favi/danil.png"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Our Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#E5E5E5] mb-6 text-center tracking-tight"
          >
            Our Mission
          </motion.h2>
          <motion.p
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-[#A3A3A3] leading-relaxed font-light max-w-3xl mx-auto text-center"
          >
            To transform businesses through AI-powered digital solutions that automate workflows, reduce operational costs, and deliver exceptional user experiences. We believe technology should work for people, not the other way around—building intelligent systems that scale from startup to enterprise.
          </motion.p>
        </motion.section>

        {/* Key Members Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-[#E5E5E5] mb-12 text-center tracking-tight"
          >
            Key Members
          </motion.h2>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
        <motion.div
              key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              className="bg-[#171717] border border-[#262626] rounded-lg p-8 text-center cursor-default"
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#262626] border border-[#262626] flex items-center justify-center mx-auto mb-4 overflow-hidden"
              >
                {member.image ? (
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={160}
                    height={160}
                  />
                ) : (
                  <span className="text-3xl md:text-4xl font-bold text-[#E5E5E5]">
                    {member.initials}
                  </span>
                )}
        </motion.div>

              {/* Name */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
                className="text-xl md:text-2xl font-bold text-[#E5E5E5] mb-2"
        >
                {member.name}
              </motion.h3>
          
              {/* Role */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="text-base text-[#A3A3A3] font-light mb-3"
              >
                {member.role}
              </motion.p>

              {/* LinkedIn Link if available */}
              {member.linkedin && (
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#737373] hover:text-[#E5E5E5] transition-colors duration-200 inline-flex items-center gap-1"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  LinkedIn
                  <motion.svg 
                    className="h-3 w-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.a>
              )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
