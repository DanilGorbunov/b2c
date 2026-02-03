"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, User, Building2, Target, Zap, DollarSign, Users, Phone, Brain, Database, Globe, Code, CheckCircle2, XCircle, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SafeImage } from "@/components/safe-image";

export default function FonitixAIProjectPage() {
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
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cases
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
            <h1 className="text-4xl md:text-5xl font-normal text-[#E5E5E5] mb-6 tracking-tight">
              # Fonitix AI
            </h1>
            <p className="text-xl md:text-2xl text-[#A3A3A3] mb-4 font-light max-w-3xl">
              AI voice agents that answer restaurant calls 24/7 - replacing $3,000/month operators with $249/month automation
            </p>
            <p className="text-base md:text-lg text-[#737373] mb-8 font-light max-w-3xl leading-relaxed">
              Intelligent phone ordering system with real-time menu management, POS integration, and comprehensive analytics. Built to capture every call and eliminate labor costs.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="secondary" className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                🤖 AI Voice Technology
              </Badge>
              <Badge variant="secondary" className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                💼 SaaS Platform
              </Badge>
              <Badge variant="secondary" className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                ⚡ Next.js & TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                🔄 Real-time Processing
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-[#737373] font-light">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>September 2025 - Present</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/fonitix/fonitix_hero.png"
                alt="Fonitix AI Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Flow: Landing Comparison */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
              The Problem: Market vs Without Fonitix
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              American restaurants miss 30-40% of calls during peak hours. Each missed call represents $25-40 in lost revenue. A single restaurant loses $1,500-2,500/month from unanswered phones alone.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/fonitix/fonitix_compare.png"
                alt="Market comparison: Traditional phone operators vs Fonitix AI"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
              Pricing & Service Plans
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              Competitive pricing at $249/month - 64-91% cheaper than alternatives (Slang.ai: $795/mo, PolyAI: $1,850/mo)
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/fonitix/fonitix_prices.png"
                alt="Fonitix AI pricing plans and service options"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Project Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-[#A3A3A3] text-base leading-relaxed font-light mb-6">
                  <strong className="text-[#E5E5E5]">Fonitix AI</strong> is a SaaS platform that transforms how restaurants handle phone orders. Instead of paying $3,000/month for human operators or losing revenue from missed calls, restaurants deploy AI voice agents for just $249/month—a 92% cost reduction.
                </p>
                <p className="text-[#A3A3A3] text-base leading-relaxed font-light mb-6">
                  <strong className="text-[#E5E5E5]">The Reality:</strong> American restaurants miss 30-40% of calls during peak hours. Each missed call represents $25-40 in lost revenue. A single restaurant loses $1,500-2,500/month from unanswered phones alone.
                </p>
                <p className="text-[#A3A3A3] text-base leading-relaxed font-light">
                  <strong className="text-[#E5E5E5]">The Solution:</strong> Fonitix provides turnkey AI voice agents that answer every call instantly, take orders in natural conversation, process payments automatically, sync with existing POS systems, and work 24/7 without breaks or sick days.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="bg-[#171717] border-[#262626]">
                  <CardContent className="p-6">
                    <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                      <Target className="w-5 h-5" />
                      First Client
                    </h3>
                    <p className="text-sm text-[#A3A3A3] font-light">
                      Cafe Brie (Pompano Beach, FL) - Currently in beta testing
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#171717] border-[#262626]">
                  <CardContent className="p-6">
                    <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                      <TrendingUp className="w-5 h-5" />
                      Target Market
                    </h3>
                    <p className="text-sm text-[#A3A3A3] font-light">
                      1M+ independent restaurants in the US
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#171717] border-[#262626]">
                  <CardContent className="p-6">
                    <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                      <Zap className="w-5 h-5" />
                      Competitive Advantage
                    </h3>
                    <p className="text-sm text-[#A3A3A3] font-light">
                      64-91% cheaper than alternatives
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Problem Statement
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">The $3,000/Month Problem</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-3 font-light">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Hiring phone staff: $15-20/hour × 160 hours = $2,400-3,200/month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Missed calls during peaks: $1,500-2,500/month in lost revenue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Human errors: Wrong orders, miscommunication, language barriers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Limited hours: No coverage during off-hours or breaks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Scaling issues: Need more staff = multiply all costs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Real-World Impact</h3>
                  <p className="text-sm text-[#A3A3A3] mb-4 font-light leading-relaxed">
                    A typical independent restaurant handles 150-200 calls/week. At 30-40% miss rate during lunch/dinner rush, that's 60-80 missed opportunities weekly = $1,500-3,200 lost monthly.
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#262626]">
                    <h4 className="text-xs font-light text-[#737373] uppercase tracking-wider mb-3">
                      Existing Solutions Fall Short
                    </h4>
                    <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                      <li>• All-in-one platforms: $795-1,850/month (too expensive)</li>
                      <li>• Traditional IVR: Frustrating UX, low conversion</li>
                      <li>• Human-only: High costs, limited availability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Flow: Menu Management */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
              Step 1: Menu Management
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              Real-time menu management system with category organization, stock management, and price updates. The AI agent uses this menu data to take accurate orders.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/fonitix/fonitix_menu.png"
                alt="Fonitix AI menu management interface"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Flow: AI Orders */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
              Step 2: AI Order Processing
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              Orders from AI assistant are processed in real-time, synced with POS systems, and tracked through the dashboard. Every call is captured and converted into revenue.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/fonitix/fonitix_order.png"
                alt="Fonitix AI order management and tracking"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Technical Architecture
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Code className="w-5 h-5" />
                    Frontend Stack
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Next.js 14 - App Router</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• shadcn/ui Components</li>
                    <li>• Clerk Authentication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Database className="w-5 h-5" />
                    Backend & Database
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Supabase - PostgreSQL</li>
                    <li>• Real-time subscriptions</li>
                    <li>• Next.js API Routes</li>
                    <li>• Telnyx Telephony</li>
                    <li>• OpenAI GPT-4</li>
                    <li>• Stripe Billing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Globe className="w-5 h-5" />
                    Key Integrations
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Clover POS</li>
                    <li>• Webhook System</li>
                    <li>• OAuth 2.0</li>
                    <li>• Telnyx Voice API</li>
                    <li>• Edge Functions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-[#171717] border border-[#262626] rounded-lg p-6">
              <h3 className="font-normal mb-4 text-[#E5E5E5]">Infrastructure Decisions</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-[#A3A3A3] font-light">
                <div>
                  <strong className="text-[#E5E5E5]">Telnyx over Twilio:</strong> 60% cost savings ($0.004 vs $0.0085/min)
                </div>
                <div>
                  <strong className="text-[#E5E5E5]">Custom AI Stack:</strong> 82% cheaper than Telnyx AI Assistants
                </div>
                <div>
                  <strong className="text-[#E5E5E5]">Supabase:</strong> Real-time updates without WebSocket complexity
                </div>
                <div>
                  <strong className="text-[#E5E5E5]">Edge Functions:</strong> Low-latency webhook processing
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Business Impact & Results
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-normal text-[#E5E5E5] mb-4">Current Status (Beta Phase)</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-[#171717] border-[#262626]">
                  <CardContent className="p-6">
                    <div className="text-2xl font-normal text-[#E5E5E5] mb-2">Cafe Brie</div>
                    <div className="text-sm text-[#A3A3A3] font-light">First Client</div>
                  </CardContent>
                </Card>
                <Card className="bg-[#171717] border-[#262626]">
                  <CardContent className="p-6">
                    <div className="text-2xl font-normal text-[#E5E5E5] mb-2">Jan-Feb 2025</div>
                    <div className="text-sm text-[#A3A3A3] font-light">Testing Period</div>
                  </CardContent>
                </Card>
                <Card className="bg-[#171717] border-[#262626]">
                  <CardContent className="p-6">
                    <div className="text-2xl font-normal text-[#E5E5E5] mb-2">Pompano Beach, FL</div>
                    <div className="text-sm text-[#A3A3A3] font-light">Location</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">For Restaurants - Cost Analysis</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Traditional Solution</h4>
                      <div className="text-sm text-[#A3A3A3] space-y-1 font-light">
                        <div>Human Phone Staff: $2,400-3,200/month</div>
                        <div>Missed Call Revenue Loss: $1,500-2,500/month</div>
                        <div className="pt-2 border-t border-[#262626] font-normal text-[#E5E5E5]">
                          Total: $3,900-5,700/month
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Fonitix AI</h4>
                      <div className="text-sm text-[#A3A3A3] space-y-1 font-light">
                        <div>Platform Subscription: $249/month</div>
                        <div>Per-Minute Usage (avg 50 hrs/mo): $12/month</div>
                        <div className="pt-2 border-t border-[#262626] font-normal text-[#E5E5E5]">
                          Total: $261/month
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[#262626]">
                      <div className="text-lg font-normal text-[#E5E5E5]">
                        ROI: $3,639-5,439 saved/month
                      </div>
                      <div className="text-sm text-[#A3A3A3] font-light">
                        93-95% cost reduction
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Projected Business Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Phase 1 (Months 1-3): Validation</h4>
                      <ul className="text-sm text-[#A3A3A3] space-y-1 font-light">
                        <li>• 3-5 beta restaurants</li>
                        <li>• $500-1,000 MRR</li>
                        <li>• Gather feedback & iterate</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Phase 2 (Months 4-6): Growth</h4>
                      <ul className="text-sm text-[#A3A3A3] space-y-1 font-light">
                        <li>• 15-20 paying customers</li>
                        <li>• $3,000-5,000 MRR</li>
                        <li>• Proven unit economics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Phase 3 (Months 7-12): Scale</h4>
                      <ul className="text-sm text-[#A3A3A3] space-y-1 font-light">
                        <li>• 50-100 restaurants</li>
                        <li>• $12,000-25,000 MRR</li>
                        <li>• Expand to new markets</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Key Learnings & Challenges
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Technical Challenges Solved</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">1. Telephony Provider Selection</h4>
                      <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                        Challenge: Initial Twilio setup was 2.1× more expensive. Solution: Migrated to Telnyx, saving 60% on per-minute costs. Result: Unit economics became profitable at $249/month price point.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">2. Webhook Integration Complexity</h4>
                      <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                        Challenge: Telnyx webhooks weren't triggering consistently. Solution: Implemented diagnostic logging, discovered missing `call.initiated` endpoint. Result: 100% reliable call handling.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">3. Menu Validation Critical</h4>
                      <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                        Challenge: AI was accepting orders for unavailable items. Solution: Built real-time menu sync with availability checks. Result: Zero invalid orders, improved customer satisfaction.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">4. Cost Optimization Research</h4>
                      <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                        Challenge: Initial Telnyx AI Assistant stack cost $0.08/min (too expensive). Solution: Built custom OpenAI + Telnyx integration for $0.016/min. Result: 80% cost reduction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Product & Business Learnings</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Pivot from Multi-Industry to Restaurant-First</h4>
                      <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                        Initial vision: Voice agents for all industries. Reality: Need deep vertical focus for PMF. Decision: Master restaurants before expanding.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Automation is Non-Negotiable</h4>
                      <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                        Manual phone setup doesn't scale. Built fully automated provisioning flow. Every step from signup to first call must be seamless.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-normal text-[#E5E5E5] mb-2 text-sm">Beta Testing is Critical</h4>
                      <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                        Cafe Brie partnership validates real-world usage. Learning actual pain points vs assumed ones. Iterating based on genuine restaurant owner feedback.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Future Roadmap
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Immediate Priorities (Q1 2025)</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Complete Cafe Brie beta testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Finalize Clover POS integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Automated phone number provisioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0">🔄</span>
                      <span>Acquire 3-5 additional beta restaurants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0">🔄</span>
                      <span>Achieve $500-1,000 MRR validation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Short-term (Q2-Q3 2025)</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Multi-location support for restaurant chains</li>
                    <li>• Spanish language support (key for US market)</li>
                    <li>• Advanced analytics dashboard</li>
                    <li>• Self-service onboarding</li>
                    <li>• WhatsApp/SMS order confirmation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Long-term Vision (2026)</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Expand to healthcare (appointment booking)</li>
                    <li>• Home services (plumbing, HVAC scheduling)</li>
                    <li>• E-commerce voice shopping</li>
                    <li>• White-label platform for POS providers</li>
                    <li>• No-code AI agent builder</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Conclusion
            </h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed font-light mb-8 max-w-3xl">
              <strong className="text-[#E5E5E5]">Fonitix AI</strong> started as an ambitious multi-industry platform and evolved into a laser-focused solution for restaurant phone automation. This pivot represents a crucial learning: solving one problem exceptionally well beats solving many problems adequately.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Current Reality</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Functional MVP with first paying customer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Profitable unit economics validated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>92% cheaper than traditional staffing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0" />
                      <span>Technical infrastructure proven</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 mt-0.5 text-[#737373] flex-shrink-0">🔄</span>
                      <span>Beta testing in progress with Cafe Brie</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">What I Built</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Full-stack SaaS platform (Next.js, TypeScript, Supabase)</li>
                    <li>• AI voice agent system (Telnyx + OpenAI GPT-4)</li>
                    <li>• Real-time dashboard with menu management</li>
                    <li>• Automated billing with Stripe</li>
                    <li>• POS integration framework (Clover)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-[#171717] border border-[#262626] rounded-lg p-6">
              <h3 className="font-normal mb-4 text-[#E5E5E5]">Next Steps</h3>
              <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                Currently validating product-market fit with Cafe Brie while preparing to onboard 3-5 additional restaurants. Goal: Achieve $1,000 MRR and prove repeatable customer acquisition by Q2 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
