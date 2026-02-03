"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, User, Building, Clock, Zap, Download } from "lucide-react";

export default function TeslaVIPTripProjectPage() {
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
              Tesla VIP Trip (AI FullStack)
            </h1>
            <p className="text-xl md:text-2xl text-[#A3A3A3] mb-4 max-w-3xl font-light">
              Premium Tesla electric vehicle transfer service - AI-assisted development from no-code prototype to production in 5 days
            </p>
            <p className="text-base md:text-lg text-[#737373] mb-8 max-w-3xl font-light leading-relaxed">
              Revolutionary 5-day development process using Lovable.dev for rapid prototyping, followed by WordPress deployment with custom PHP booking system
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                AI-Assisted Development
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                WordPress
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                Lovable.dev
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                Full-Stack
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                Booking System
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-[#737373] font-light">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Tesla VIP Trip</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 Days Development</span>
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
                src="/images/teslaviptrip_cover.jpg"
                alt="Tesla VIP Trip Website"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">📋 Project Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Project Details</h3>
                <ul className="text-zinc-300 space-y-2">
                  <li><strong>Project Type:</strong> Premium Tesla Electric Vehicle Transfer Service</li>
                  <li><strong>Location:</strong> Vienna & Bratislava (Austria/Slovakia)</li>
                  <li><strong>Platform:</strong> WordPress + Elementor</li>
                  <li><strong>Domain:</strong> teslaviptrip.com</li>
                  <li><strong>Duration:</strong> 5 days (intensive development)</li>
                  <li><strong>Approach:</strong> AI-Assisted No-code → Production-ready</li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Target Audience</h3>
                <ul className="text-zinc-300 space-y-2">
                  <li><strong>Tourists</strong> (30-55 years old) - traveling in Vienna and Bratislava</li>
                  <li><strong>Business Clients</strong> - requiring professional corporate transfers</li>
                  <li><strong>VIP Clients</strong> - seeking premium service with high comfort level</li>
                  <li><strong>Eco-conscious Travelers</strong> - value electric vehicles and sustainability</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Tesla VIP Trip is a premium electric vehicle transfer service operating in Vienna and Bratislava. 
              The project showcases innovative AI-assisted development using Lovable.dev for rapid prototyping, 
              followed by conversion to a production-ready WordPress site with custom PHP booking system.
            </p>
            
            <div className="bg-white/10 border border-zinc-700 p-4 rounded-lg">
              <p className="text-zinc-400 text-sm">
                <strong>📋 Trip Guide Available:</strong> Download our comprehensive Tesla Trip Guide PDF 
                for detailed information about services, pricing, and booking procedures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">🎯 The Challenge</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Extremely Tight Timeline</h3>
              <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                <strong>5 days total</strong> - from concept to production-ready website. This required a revolutionary approach 
                to development that could deliver professional quality in minimal time.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Premium Brand Requirements</h3>
              <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2">
                <li>Reflect Tesla's luxury and eco-friendliness values</li>
                <li>Dark elegant theme with gold accent colors (#FFD24C)</li>
                <li>Professional, sophisticated design language</li>
                <li>Seamless user experience across all devices</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Technical Requirements</h3>
              <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2">
                <li>Easy online booking system for 6 core services</li>
                <li>Multilingual support (EN, DE, RU, SK)</li>
                <li>Mobile-optimized responsive design</li>
                <li>Client-editable content (Elementor integration)</li>
                <li>Dual email notification system</li>
              </ul>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-white">The Innovation Opportunity</h3>
              <p className="text-zinc-300 mb-4">
                This project became a case study for modern AI-assisted development, proving that with the right tools 
                and approach, developers can deliver production-quality websites in a fraction of traditional time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary 5-Day Process */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">⚡ Revolutionary 5-Day Development Process</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {/* Day 1-2 */}
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1-2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-400">AI-Assisted Design</h3>
                </div>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• Lovable.dev prototyping</li>
                  <li>• React components generation</li>
                  <li>• Automatic responsiveness</li>
                  <li>• Live preview iterations</li>
                </ul>
              </div>

              {/* Day 3 */}
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-green-500/30">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-400">Convert & Deploy</h3>
                </div>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• React → HTML/CSS conversion</li>
                  <li>• WordPress deployment</li>
                  <li>• UltaHost setup</li>
                  <li>• Database configuration</li>
                </ul>
              </div>

              {/* Day 4 */}
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-400">Elementor Integration</h3>
                </div>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• Custom HTML widgets</li>
                  <li>• Client editing capability</li>
                  <li>• Template creation</li>
                  <li>• Responsive optimization</li>
                </ul>
              </div>

              {/* Day 5 */}
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-400">PHP Booking System</h3>
                </div>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• Custom database tables</li>
                  <li>• AJAX form handling</li>
                  <li>• Email notifications</li>
                  <li>• Admin interface</li>
                </ul>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-cyan-500/30">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-400">Results</h3>
                </div>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• 5 days vs 2 weeks</li>
                  <li>• Production-ready site</li>
                  <li>• Full booking system</li>
                  <li>• Client satisfaction</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-zinc-800/50 p-8 rounded-xl max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-white">Total Time: 40 hours over 5 days</h3>
                <p className="text-lg text-zinc-300">
                  This innovative approach reduced development time from 2 weeks to 5 days while maintaining 
                  professional quality standards and delivering a fully functional booking system.
                </p>
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
            <h2 className="text-3xl font-bold mb-8">🛠 Technology Stack</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">AI-Assisted Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  "Lovable.dev",
                  "Cursor AI",
                  "Prompt Engineering",
                  "No-code Prototyping",
                  "AI Design Generation",
                  "Rapid Iteration",
                  "Live Preview",
                  "Component Generation"
                ].map((tech) => (
                  <div key={tech} className="bg-zinc-800/50 p-4 rounded-lg text-center">
                    <span className="text-zinc-300 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Frontend & CMS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  "React",
                  "HTML5/CSS3",
                  "WordPress 6.x",
                  "Elementor Pro",
                  "Tailwind CSS",
                  "Responsive Design",
                  "Mobile-First",
                  "Cross-browser"
                ].map((tech) => (
                  <div key={tech} className="bg-zinc-800/50 p-4 rounded-lg text-center">
                    <span className="text-zinc-300 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Backend & Infrastructure</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "PHP 8.1",
                  "MySQL 8.0",
                  "WordPress REST API",
                  "AJAX",
                  "UltaHost",
                  "SSL Certificate",
                  "Custom Functions",
                  "Email System"
                ].map((tech) => (
                  <div key={tech} className="bg-zinc-800/50 p-4 rounded-lg text-center">
                    <span className="text-zinc-300 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">✨ Key Features Delivered</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-white">🎨 Design & UX</h3>
                  <ul className="text-zinc-300 space-y-2">
                    <li>• Dark elegant theme with gold accents (#FFD24C)</li>
                    <li>• Full-screen Tesla hero section</li>
                    <li>• 3 benefit icons (Insured, 24/7, 5-Star)</li>
                    <li>• Smooth animations and hover effects</li>
                    <li>• Professional typography (Playfair Display, Inter)</li>
                  </ul>
                </div>

                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-white">📱 Responsive Design</h3>
                  <ul className="text-zinc-300 space-y-2">
                    <li>• Mobile-first approach</li>
                    <li>• Automatic responsiveness from Lovable</li>
                    <li>• Cross-device compatibility</li>
                    <li>• Touch-friendly interface</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-white">🔧 Technical Features</h3>
                  <ul className="text-zinc-300 space-y-2">
                    <li>• 6 detailed service pages with pricing</li>
                    <li>• Online booking system with validation</li>
                    <li>• Custom PHP backend processing</li>
                    <li>• MySQL database with indexes</li>
                    <li>• AJAX form submission</li>
                  </ul>
                </div>

                <div className="bg-zinc-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-white">📧 Business Features</h3>
                  <ul className="text-zinc-300 space-y-2">
                    <li>• Dual email notifications (client + 2 admins)</li>
                    <li>• Admin panel for order management</li>
                    <li>• Booking status tracking</li>
                    <li>• Client-editable content via Elementor</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Deep Dive */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">🔍 Process Deep Dive</h2>
            
            {/* Lovable Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">Days 1-2: AI-Assisted Design via Lovable</h3>
              <div className="bg-zinc-800/50 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-zinc-400">Lovable Advantages</h4>
                    <ul className="text-zinc-300 space-y-2">
                      <li>✅ Speed: 2 days instead of 2 weeks of manual coding</li>
                      <li>✅ AI Generation: Automatic improvement suggestions</li>
                      <li>✅ Live Preview: Instant view of changes</li>
                      <li>✅ Responsive by default: Automatic adaptability</li>
                      <li>✅ Modern stack: React, Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-zinc-400">Iterative Process</h4>
                    <ul className="text-zinc-300 space-y-2">
                      <li>Step 1: Basic prompt → Lovable generates structure</li>
                      <li>Step 2: Color refinement → AI adapts palette</li>
                      <li>Step 3: Adding sections → Components added automatically</li>
                      <li>Step 4: Detail refinement → Precise tuning via prompts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">Day 3: React → HTML Conversion</h3>
              <div className="bg-zinc-800/50 p-8 rounded-xl">
                <p className="text-zinc-300 mb-4">
                  Systematic conversion from React components to WordPress-compatible HTML/CSS while preserving 
                  all styling and functionality. This required careful translation of JSX syntax to standard HTML 
                  and inline CSS for Elementor compatibility.
                </p>
                <div className="bg-zinc-900/50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 text-white">Example Conversion:</h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    React JSX → HTML/CSS → Elementor Custom HTML Widget
                  </p>
                </div>
              </div>
            </div>

            {/* PHP System */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">Day 5: PHP Booking System</h3>
              <div className="bg-zinc-800/50 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-zinc-400">System Architecture</h4>
                    <ul className="text-zinc-300 space-y-2">
                      <li>• Custom MySQL database table</li>
                      <li>• AJAX form submission</li>
                      <li>• Server-side validation</li>
                      <li>• Security nonce verification</li>
                      <li>• SQL injection prevention</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-zinc-400">Email System</h4>
                    <ul className="text-zinc-300 space-y-2">
                      <li>• Client confirmation emails</li>
                      <li>• Dual admin notifications</li>
                      <li>• Professional templates</li>
                      <li>• Booking ID tracking</li>
                      <li>• SMTP configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">💡 Challenges & Solutions</h2>
            
            <div className="space-y-8">
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Challenge 1: Speed vs Quality</h3>
                <p className="text-zinc-300 mb-3"><strong>Problem:</strong> 5 days - very tight timeline</p>
                <p className="text-zinc-300 mb-3"><strong>Solution:</strong> Use Lovable to accelerate design</p>
                <p className="text-zinc-300"><strong>Result:</strong> Professional design in 2 days instead of 2 weeks</p>
              </div>

              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Challenge 2: React → HTML Conversion</h3>
                <p className="text-zinc-300 mb-3"><strong>Problem:</strong> JSX components don't work in WordPress</p>
                <p className="text-zinc-300 mb-3"><strong>Solution:</strong> Systematic conversion preserving styles</p>
                <p className="text-zinc-300"><strong>Tools:</strong> ChatGPT for batch conversion, manual optimization</p>
              </div>

              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Challenge 3: Elementor Integration</h3>
                <p className="text-zinc-300 mb-3"><strong>Problem:</strong> Initial plan was without Elementor</p>
                <p className="text-zinc-300 mb-3"><strong>Solution:</strong> Adapt code for Custom HTML widgets</p>
                <p className="text-zinc-300"><strong>Benefits:</strong> Client can edit content independently</p>
              </div>

              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Challenge 4: PHP Form Security</h3>
                <p className="text-zinc-300 mb-3"><strong>Problem:</strong> Risk of SQL injection and XSS attacks</p>
                <p className="text-zinc-300 mb-3"><strong>Solution:</strong> Comprehensive security measures</p>
                <p className="text-zinc-300"><strong>Implementation:</strong> sanitize_text_field(), wp_verify_nonce(), validation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">🚀 Project Results</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">✅ Technical Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-zinc-300 space-y-2">
                  <li>• Fully functional WordPress website</li>
                  <li>• 6 detailed services with pricing</li>
                  <li>• Online booking system with dual email notifications</li>
                  <li>• Admin panel for order management</li>
                  <li>• Responsive design (desktop/tablet/mobile)</li>
                  <li>• SEO optimization and fast loading</li>
                </ul>
                <ul className="text-zinc-300 space-y-2">
                  <li>• Dark elegant theme with gold accents</li>
                  <li>• Custom PHP backend processing</li>
                  <li>• Secure form validation</li>
                  <li>• Database optimization with indexes</li>
                  <li>• Multilingual support preparation</li>
                  <li>• Elementor integration for client editing</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">🎨 Innovative Approach</h3>
              <div className="bg-zinc-800/50 p-6 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">AI-Assisted Design:</h4>
                    <ul className="text-zinc-300 space-y-2">
                      <li>• Lovable replaced 2 weeks of manual coding</li>
                      <li>• Automatic responsive layout generation</li>
                      <li>• Professional UI/UX from the start</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Hybrid Architecture:</h4>
                    <ul className="text-zinc-300 space-y-2">
                      <li>• No-code prototype → Production code</li>
                      <li>• React benefits + WordPress flexibility</li>
                      <li>• Best of both worlds approach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Takeaways</h3>
              <ul className="text-lg text-zinc-300 space-y-3">
                <li>1. <strong>No-code tools don't replace developers</strong> - they make them more efficient</li>
                <li>2. <strong>AI-assisted design</strong> can reduce development time by 5x+</li>
                <li>3. <strong>Flexibility</strong> in technology choice is more important than dogmatic approaches</li>
                <li>4. <strong>Client communication</strong> is critical for project success</li>
                <li>5. <strong>5 days is enough</strong> for MVP with the right approach</li>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Tesla Service?</h2>
            <p className="text-lg text-zinc-300 mb-8">
              Discover how AI-assisted development can revolutionize your next project. 
              From luxury transportation to cutting-edge web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r bg-white text-black hover:bg-zinc-200"
                onClick={() => window.open('https://teslaviptrip.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Website
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-600 text-white hover:bg-zinc-800"
                onClick={() => window.open('https://preview--electra-drive-now.lovable.app', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Lovable Prototype
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-400 hover:bg-white/10"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Tesla_Trip_Guide.pdf';
                  link.download = 'Tesla_Trip_Guide.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Trip Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Issue & Solution */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Security Challenge & Solution</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">The Problem</h3>
              <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                After the initial launch, I encountered a critical cybersecurity issue with the PHP booking system. 
                The PHP file had security vulnerabilities that resulted in a ban from Google Search Console, 
                specifically triggering the "Red Screen Problem" - a warning that Google displays when it detects 
                potential security threats on a website.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                This security issue not only affected the site's visibility in search results but also posed 
                a risk to user data and the overall integrity of the booking system.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">The Solution</h3>
              <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                After several attempts to fix the PHP security vulnerabilities, I decided to completely 
                rebuild the booking system using a more secure and modern approach:
              </p>
              <ul className="text-lg text-zinc-300 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Migrated from PHP to React-based solution</li>
                <li>Integrated Resend email service for secure email handling</li>
                <li>Implemented modern security best practices</li>
                <li>Eliminated the vulnerabilities that caused the Google Search Console ban</li>
              </ul>
              <p className="text-lg text-zinc-300 leading-relaxed">
                This migration not only resolved the security issues but also improved the overall 
                performance and maintainability of the booking system, ensuring a safer experience 
                for users and better compliance with modern web security standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
