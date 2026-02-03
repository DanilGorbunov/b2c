"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, User, Building } from "lucide-react";

export default function LinkShopAIProjectPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
      {/* Sticky Back Button */}
      <div className="sticky top-16 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#171717]">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" prefetch={false}>
            <Button
              variant="ghost"
              className="text-[#E5E5E5] hover:bg-[#171717]"
            >
              ← Back to Cases
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-normal mb-6 text-[#E5E5E5] tracking-tight">
              LinkShop AI
            </h1>
            <p className="text-xl md:text-2xl text-[#A3A3A3] mb-4 max-w-3xl font-light">
              AI-powered platform "from Linktree to E-commerce" - integrated SAAS combining personal link pages with full online store and AI assistant
            </p>
            <p className="text-base md:text-lg text-[#737373] mb-8 max-w-3xl font-light leading-relaxed">
              Supporting Ukrainian entrepreneurs affected by war and content creators seeking monetization tools
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                AI
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                E-Commerce
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                SaaS
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                Linktree Alternative
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                🇺🇦 Ukrainian Market
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                Creator Economy
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-[#737373] font-light">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>LinkShop</span>
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/linkshop_cover.jpg"
                alt="LinkShop AI Platform"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              LinkShop is an integrated SAAS platform that revolutionarily combines the creation of personal link pages (similar to Linktree) with a full-fledged online store and an AI assistant for business process automation.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              <strong>Target Audience:</strong>
            </p>
            <ul className="text-lg text-zinc-300 leading-relaxed mb-6 list-disc list-inside space-y-2">
              <li><strong>Content creators and influencers</strong> who want to monetize their online presence</li>
              <li><strong>🇺🇦 Ukrainian entrepreneurs</strong> who lost their physical stores due to the war or economic difficulties but still have product inventories to quickly move online</li>
            </ul>
            <p className="text-lg text-zinc-300 leading-relaxed">
              <strong>Core idea:</strong> Transform a simple link page into an AI-supported automated business tool that allows anyone to create a full online store in just 10 minutes without technical knowledge or large investments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Personal frustration and market pain:</h3>
              <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2">
                <li><strong>Fragmentation of tools:</strong> content creators use Linktree for links, Shopify for the store, and various chatbots for support</li>
                <li><strong>High fees and complexity:</strong> Shopify + payment processing + separate AI tools = $100+ per month + complicated setup</li>
                <li><strong>Lack of automation:</strong> manual order processing, replying to customers, inventory management</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">🇺🇦 Critical Problem for Ukraine:</h3>
              <h4 className="text-lg font-semibold mb-3 text-zinc-400">Loss of physical stores due to war and economic hardship</h4>
              <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2">
                <li><strong>War destruction:</strong> thousands of entrepreneurs lost their physical points of sale but kept product inventories</li>
                <li><strong>Economic issues:</strong> store closures due to inability to pay rent, yet warehouses still hold goods</li>
                <li><strong>Business migration:</strong> urgent need to move online quickly without technical knowledge or large investments</li>
                <li><strong>Time factor:</strong> critical need to launch sales immediately for business survival</li>
              </ul>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-white">Real context:</h3>
              <p className="text-zinc-300 mb-4">Observing Ukrainian entrepreneurs and international influencers, two critical problems emerged:</p>
              <ul className="text-zinc-300 leading-relaxed list-disc list-inside space-y-1">
                <li><strong>For the creator economy:</strong> 90% use Linktree only for links, missing the potential of direct sales</li>
                <li><strong>For traditional businesses:</strong> store owners affected by war or economic hardships don't know how to quickly move online with minimal costs</li>
                <li><strong>🇺🇦 Special focus:</strong> supporting Ukrainian businesses</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Created an AI-first platform that transforms a simple link page into an AI-supported automated business tool allowing anyone to create a full online store in just 10 minutes.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">🇺🇦 Specialized Features for Ukrainian Market:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">"Clearance Mode"</h4>
                  <p className="text-zinc-300">Fast bulk upload of discounted products to liquidate stock quickly</p>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">UAH Payments</h4>
                  <p className="text-zinc-300">Full support for Ukrainian hryvnia with local banks and MonoBank API</p>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">Express Setup</h4>
                  <p className="text-zinc-300">Onboarding in 5 minutes with minimal data requirements</p>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">AI Translator</h4>
                  <p className="text-zinc-300">Automatic translation into Ukrainian for international sales</p>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">Free Plan</h4>
                  <p className="text-zinc-300">Extended 6-month trial for businesses affected by the war</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">AI-Powered Features:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">AI Business Assistant</h4>
                  <p className="text-zinc-300">Claude API integration for pricing analysis, inventory management, and automated business insights</p>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">Real-time Database</h4>
                  <p className="text-zinc-300">Convex database with live synchronization and automatic schema generation</p>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">Professional UI</h4>
                  <p className="text-zinc-300">Instagram-style design with responsive layout and clean UX</p>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-white">Creator Economy Tools</h4>
                  <p className="text-zinc-300">Linktree alternative with integrated e-commerce and monetization features</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Development Tools:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  "React + Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Cursor AI",
                  "Claude Project",
                  "Perplexity.ai",
                  "GitHub",
                  "Vercel"
                ].map((tech) => (
                  <div key={tech} className="bg-zinc-800/50 p-4 rounded-lg text-center">
                    <span className="text-zinc-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Backend & Database:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  "Convex Database",
                  "Clerk Authentication",
                  "Stripe Connect",
                  "Anthropic Claude API",
                  "Real-time Sync",
                  "Environment Variables",
                  "API Integration",
                  "Data Persistence"
                ].map((tech) => (
                  <div key={tech} className="bg-zinc-800/50 p-4 rounded-lg text-center">
                    <span className="text-zinc-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">AI & Automation:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Claude API",
                  "AI Business Assistant",
                  "Pricing Analysis",
                  "Inventory Management",
                  "Automated Insights",
                  "Multi-language Support",
                  "Real-time Updates",
                  "Business Intelligence"
                ].map((tech) => (
                  <div key={tech} className="bg-zinc-800/50 p-4 rounded-lg text-center">
                    <span className="text-zinc-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Screenshots */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Project Screenshots</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/linkshop1.jpg"
                  alt="LinkShop AI Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/linkshop2.jpg"
                  alt="AI Recommendations Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/linkshop3.jpg"
                  alt="Analytics Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">✅ What Went Well:</h3>
              <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2">
                <li><strong>Functional MVP:</strong> fully working product with real product data (Nike sneakers, pricing, inventory)</li>
                <li><strong>AI Business Intelligence:</strong> Claude API successfully integrated for pricing analysis and automated insights</li>
                <li><strong>Real-time Architecture:</strong> Convex provides instant updates between UI and database</li>
                <li><strong>Professional UI:</strong> Instagram-style design with responsive layout and clean UX</li>
                <li><strong>Robust Database:</strong> structured schema with products, orders, payments, socialLinks tables</li>
                <li><strong>TypeScript Stability:</strong> stable codebase achieved after initial issues</li>
                <li><strong>🇺🇦 Social Impact:</strong> created a solution supporting Ukrainian businesses in a crisis</li>
                <li><strong>Development Speed:</strong> from idea to working prototype in 3 days with AI-assisted development</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">🚀 Current Status:</h3>
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2">
                  <li><strong>Local Development:</strong> fully functional version works perfectly on localhost</li>
                  <li><strong>Landing Page:</strong> Claude AI-generated with no images</li>
                  <li><strong>Admin Dashboard:</strong> fully functional panel with live data</li>
                  <li><strong>Products Management:</strong> create, edit, and manage inventory</li>
                  <li><strong>AI Business Assistant:</strong> Claude-powered pricing analysis and automatic discounts (15% discount example)</li>
                  <li><strong>Real-time Database:</strong> Convex synchronization with live updates</li>
                  <li><strong>Clerk Authentication:</strong> full user management system</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">⚠️ Production Deployment Issues:</h3>
              <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2">
                <li><strong>Vercel Deployment:</strong> critical Next.js + Clerk version issue, now resolved</li>
                <li><strong>GitHub Repository:</strong> code available, production deploy now possible</li>
                <li><strong>Image Upload Issues:</strong> problem with image uploads after deploy persists</li>
                <li><strong>Cursor Limitations:</strong> AI-assisted development cannot resolve deployment compatibility issues</li>
              </ul>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-white">🎥 Available Evidence:</h3>
              <ul className="text-zinc-300 leading-relaxed list-disc list-inside space-y-1">
                <li>Working product catalog with real Nike sneakers</li>
                <li>AI Assistant with live pricing analysis</li>
                <li>Convex database with real product data</li>
                <li>Functional admin interface with Instagram-style UI</li>
                <li><strong>Everything works locally,</strong> but deployment issues need resolution for live demo</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform E-Commerce?</h2>
            <p className="text-lg text-zinc-300 mb-8">
              Experience the future of online shopping with AI-powered personalization and intelligent product discovery. Supporting Ukrainian businesses and content creators worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200"
                onClick={() => window.open('https://linkshop-3.vercel.app', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-600 text-white hover:bg-zinc-800"
                onClick={() => window.open('https://drive.google.com/file/d/1jN39fEY8GVCxH9F0l-GCVSO3t5ZomzoE/view?pli=1', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Watch Demo Video
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-600 text-white hover:bg-zinc-800"
                onClick={() => window.open('https://www.notion.so/LinkShop-AI-23ff7154f827808aa512fc5178c999ec', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                More About Process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
