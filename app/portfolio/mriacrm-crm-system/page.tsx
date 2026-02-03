"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, User, Building } from "lucide-react";

export default function MRIACRMProjectPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Back Button */}
      <div className="sticky top-16 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" prefetch={false}>
            <Button
              variant="ghost"
              className="text-white hover:bg-zinc-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-normal leading-tight">
                MRIACRM SYSTEM (AI + Classic Figma Design)
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
                First fully-featured CRM built exclusively for Jira Cloud using Atlassian's Forge technology
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge className="bg-zinc-800 text-zinc-300 border-0">
                CRM
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0">
                Business Management
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0">
                SaaS
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0">
                Dashboard
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0">
                E-Commerce
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-zinc-400" />
                <div>
                  <div className="text-sm text-zinc-400">Year</div>
                  <div className="text-white">2025</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="h-5 w-5 text-zinc-400" />
                <div>
                  <div className="text-sm text-zinc-400">Client</div>
                  <div className="text-white">MRIACRM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-auto overflow-hidden rounded-lg"
          >
            <Image
              src="/images/mriacrm_cover.jpg"
              alt="MRIACRM SYSTEM Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-normal mb-6">
                Project Screenshots
              </h2>
              <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Key interfaces and features of the MRIACRM SYSTEM
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg bg-zinc-800"
              >
                <Image
                  src="/images/mriacrm1.jpg"
                  alt="MRIACRM Landing Page"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium">Landing Page</h3>
                  <p className="text-zinc-300 text-sm">Product showcase and call-to-action</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg bg-zinc-800"
              >
                <Image
                  src="/images/mriacrm2.jpg"
                  alt="MRIACRM Marketplace"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium">Atlassian Marketplace</h3>
                  <p className="text-zinc-300 text-sm">App listing and pricing information</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg bg-zinc-800"
              >
                <Image
                  src="/images/mriacrm3.jpg"
                  alt="MRIACRM Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium">CRM Interface</h3>
                  <p className="text-zinc-300 text-sm">Leads management dashboard</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-normal mb-6">Overview</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Designed and developed a comprehensive CRM system that streamlines business operations, 
                  customer relationship management, and sales processes for small to medium enterprises.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-normal mb-6">Challenge</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Businesses needed a unified platform to manage customer data, track sales pipelines, 
                  automate workflows, and improve team collaboration while maintaining data security and 
                  user-friendly interfaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-normal mb-6">Solution</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Created an intuitive CRM dashboard with customer management, sales tracking, task automation, 
                  and reporting features. Implemented role-based access control, data visualization, and 
                  integration capabilities with third-party tools.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-normal mb-6">Outcome</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Improved sales efficiency by 40%, reduced data entry time by 60%, and increased customer 
                  satisfaction through better relationship management. The platform helped businesses centralize 
                  their operations and make data-driven decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-normal mb-6">Key Features</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Comprehensive CRM functionality designed specifically for Jira Cloud teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Contact & Company Management",
                description: "Link contacts to companies and view all associated leads, deals, and activities with deep profiles"
              },
              {
                title: "Lead & Deal Management",
                description: "Work leads separately to qualify opportunities, manage deals with full context and Jira task integration"
              },
              {
                title: "Activity Tracking & Communication",
                description: "Track meetings, tasks, emails, and notes with Gmail & Calendar integration and complete timeline view"
              },
              {
                title: "Collaboration & Team Alignment",
                description: "Role-based access control with Jira integration for seamless cross-team collaboration"
              },
              {
                title: "Product Module",
                description: "Attach products to leads and deals with custom pricing, tax, and quantity for quote-ready flexibility"
              },
              {
                title: "Reporting & Insights",
                description: "Record-level metrics, sales dashboards, and product & revenue trends for data-driven decisions"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 rounded-lg p-6"
              >
                <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-normal">
              Technology Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-zinc-800 text-zinc-300 border-0 px-4 py-2">
                Atlassian Forge
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0 px-4 py-2">
                Jira Cloud
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0 px-4 py-2">
                Jira Design System
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0 px-4 py-2">
                React
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0 px-4 py-2">
                TypeScript
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0 px-4 py-2">
                Gmail API
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-300 border-0 px-4 py-2">
                Calendar API
              </Badge>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Built on Atlassian's Forge platform for enhanced security, scalability, and seamless Jira integration
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-normal">View Live Project</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Explore the first fully-featured CRM built exclusively for Jira Cloud
            </p>
            <a
              href="https://mriacrm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:opacity-60 transition-opacity duration-300"
            >
              Visit MRIACRM.com
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex justify-between items-center">
            <Link href="/" prefetch={false}>
              <Button
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800"
              >
                ← All Projects
              </Button>
            </Link>
            <Link href="/contact" prefetch={false}>
              <Button
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800"
              >
                Get in Touch →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
