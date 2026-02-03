"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function PortfolioPage() {
  // Sort projects by newest first by default
  const sortedProjects = [...projects].sort((a, b) => (b.year || 2024) - (a.year || 2024));

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A comprehensive collection of my design work, showcasing expertise in 
            AI integration, user experience design, and technical innovation.
          </p>
        </motion.div>


        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Add spacing between portfolio and footer */}
        <div className="py-16"></div>
      </div>
    </div>
  );
}