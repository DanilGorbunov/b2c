"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Anastasiya Dmytryk",
    role: "SEO",
    initials: "AD",
    linkedin: "https://www.linkedin.com/in/anastasiya-dmytryk-009a29204/"
  },
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    initials: "AT"
  }
];

const statistics = [
  { value: "50+", label: "Happy Clients" },
  { value: "120+", label: "Projects Completed" },
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Countries Served" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* About Us Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-[#A3A3A3] font-light mb-4"
          >
            ABOUT US
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E5E5] mb-6 tracking-tight"
          >
            Meet the Team
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-[#A3A3A3] leading-relaxed font-light max-w-2xl mx-auto"
          >
            We're a passionate team of engineers, designers, and strategists dedicated to building exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Our Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#E5E5E5] mb-6 text-center tracking-tight"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#A3A3A3] leading-relaxed font-light max-w-3xl mx-auto text-center"
          >
            To transform businesses through AI-powered digital solutions that automate workflows, reduce operational costs, and deliver exceptional user experiences. We believe technology should work for people, not the other way around—building intelligent systems that scale from startup to enterprise.
          </motion.p>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#E5E5E5] mb-6 text-center tracking-tight"
          >
            Our Story
          </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            className="space-y-4 text-base md:text-lg text-[#A3A3A3] leading-relaxed font-light max-w-3xl mx-auto"
          >
            <p>
              B2Stack was born from a simple observation: businesses were spending thousands on manual processes that AI could automate, and complex software that could be simplified. Starting with AI-powered e-commerce chatbots that increased conversions by 15%, we've evolved into a full-cycle development company.
            </p>
            <p>
              Our journey includes building voice AI platforms that reduce restaurant costs by 92%, creating conversational e-commerce interfaces that cut checkout time from 5 minutes to 60 seconds, and developing SaaS solutions that scale from prototype to production in weeks, not months.
            </p>
            <p>
              Today, we've delivered 120+ projects across 15+ countries, helping startups and enterprises leverage AI to automate workflows, reduce costs, and create exceptional digital experiences. From AI voice agents to 3D warehouse management systems, we've proven that intelligent technology can transform any business.
                </p>
              </motion.div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#E5E5E5] mb-12 text-center tracking-tight"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "AI-First Development",
                description: "We leverage AI tools and automation to accelerate development, reduce costs by up to 80%, and deliver solutions faster—from prototype to production in days, not months."
              },
              {
                title: "User-Centric Design",
                description: "Every solution starts with understanding user needs. We combine psychology-driven design with technical excellence to create interfaces that feel intuitive and powerful."
              },
              {
                title: "Measurable Impact",
                description: "We don't just build software—we deliver results. Our solutions reduce operational costs by 60-95%, increase conversions by 15-40%, and improve efficiency across the board."
              },
              {
                title: "Rapid Prototyping",
                description: "Speed matters. We use AI-assisted development and modern frameworks to transform ideas into working prototypes in days, enabling faster validation and iteration."
              },
              {
                title: "Full-Cycle Excellence",
                description: "From user research and strategy to design, development, and deployment—we own the entire process, ensuring seamless integration and consistent quality."
              },
              {
                title: "Scalable Solutions",
                description: "We build for growth. Our architecture supports everything from startup MVPs to enterprise platforms, handling millions of users and transactions with reliability."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#171717] border border-[#262626] rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#E5E5E5] mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-[#A3A3A3] leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base text-[#A3A3A3] font-light">
                {stat.label}
                  </div>
              </motion.div>
            ))}
        </motion.div>

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
            className="text-3xl md:text-4xl font-bold text-[#E5E5E5] mb-12 text-center tracking-tight"
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
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-[#171717] border border-[#262626] rounded-lg p-8 text-center"
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#262626] border border-[#262626] flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-xl md:text-2xl font-bold text-[#E5E5E5]">
                  {member.initials}
                </span>
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
                >
                  LinkedIn
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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
