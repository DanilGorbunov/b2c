"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, User, Building2, Target, Zap, DollarSign, Clock, Code, Database, Brain, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { SafeImage } from "@/components/safe-image";

export default function XproidProjectPage() {
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
            <h1 className="text-4xl md:text-5xl font-normal mb-6 text-[#E5E5E5] tracking-tight">
              Xproid
            </h1>
            <p className="text-xl md:text-2xl text-[#A3A3A3] mb-4 max-w-3xl font-light">
              AI-powered e-commerce platform enabling store owners to manage their business through natural conversation and customers to checkout via chat in 60 seconds
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                SaaS Platform
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                Next.js TypeScript Supabase
              </Badge>
              <Badge className="bg-[#171717] text-[#A3A3A3] border border-[#262626] font-normal">
                AI Conversational Interface
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-[#737373] font-light">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>September 2024 - Present</span>
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
                src="/images/xproid/xproid_main.png"
                alt="Xproid AI E-Commerce Platform"
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
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <div className="text-3xl font-normal text-[#E5E5E5] mb-2">60 Seconds</div>
                  <div className="text-sm text-[#A3A3A3] font-light">Store Creation Time</div>
                </CardContent>
              </Card>
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <div className="text-3xl font-normal text-[#E5E5E5] mb-2">80%</div>
                  <div className="text-sm text-[#A3A3A3] font-light">AI Cost Reduction</div>
                </CardContent>
              </Card>
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <div className="text-3xl font-normal text-[#E5E5E5] mb-2">400+</div>
                  <div className="text-sm text-[#A3A3A3] font-light">Platform Features</div>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl">
              <p className="text-[#A3A3A3] text-base leading-relaxed font-light mb-6">
                <strong className="text-[#E5E5E5]">Xproid</strong> is AI-powered e-commerce platform that replaces traditional dashboards with conversational interface. Store owners manage their entire business through natural language commands while customers complete purchases through 60-second chat conversation instead of traditional checkout forms.
              </p>
              <p className="text-[#A3A3A3] text-base leading-relaxed font-light">
                Built complete platform in 12 weeks using AI-first development approach. Platform currently handles product management, inventory control, order processing, analytics, and multi-platform synchronization through single conversational interface.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Problem & Solution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Target className="w-5 h-5" />
                    Problem
                  </h3>
                  <p className="text-[#A3A3A3] text-sm font-light leading-relaxed mb-4">
                    Traditional e-commerce platforms require weeks of setup, technical knowledge, and complex dashboard navigation. Customers abandon 70% of carts due to lengthy checkout forms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Zap className="w-5 h-5" />
                    Solution
                  </h3>
                  <p className="text-[#A3A3A3] text-sm font-light leading-relaxed mb-4">
                    Xproid enables instant store creation through Instagram-style templates. Store owners add products by typing "add iPhone $999" or change prices with "update all electronics +10%". Customers complete purchases through conversational checkout across Instagram, Telegram, WhatsApp, reducing friction from 5 minutes to 60 seconds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Feature */}
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
              AI-Powered Tips & Guidance
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              The platform provides intelligent tips and suggestions to help store owners optimize their business operations, improve product listings, and increase sales through AI-generated insights.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626] mb-8">
              <SafeImage
                src="/images/xproid/xproid_tips.png"
                alt="Xproid AI tips and guidance interface"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-normal text-[#E5E5E5] mb-4 tracking-tight">
                Explore & Discover
              </h3>
              <p className="text-[#A3A3A3] text-base font-light mb-6 max-w-3xl leading-relaxed">
                The explore feature helps you discover new opportunities, trending products, and market insights. AI analyzes market trends and competitor data to provide actionable recommendations for your store.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/xproid/xproid_explore.png"
                alt="Xproid explore and discovery interface"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feed Feature */}
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
              Personalized Feed
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              Unlike classic feeds, this personalized feed shows only what changed for you: products from customer-following shops and competitors. It's a curated view that helps you stay informed about relevant updates without information overload.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/xproid/xproid_feed.png"
                alt="Xproid personalized feed showing relevant updates"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice Product Addition */}
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
              Voice Product Management
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              Add products effortlessly using voice commands. Simply speak your product details and the AI assistant processes the information, creating product listings instantly without manual data entry.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/xproid/add_product_voice.png"
                alt="Adding a product via voice command"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Public Page & Conversational Checkout */}
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
              Conversational Checkout
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              Clients can speak with the AI assistant and create orders without classic checkout forms. The conversational interface guides customers through the entire purchase process in just 60 seconds, dramatically improving conversion rates.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/xproid/xproid_public_page.png"
                alt="Xproid public page with conversational checkout"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Orders Management */}
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
              Order Management
            </h2>
            <p className="text-[#A3A3A3] text-base font-light mb-8 max-w-3xl leading-relaxed">
              Track and manage all orders through the intuitive interface. Follow order status, process payments, and handle fulfillment all from one centralized dashboard.
            </p>
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <SafeImage
                src="/images/xproid/xproid_orders.png"
                alt="Xproid order management interface"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Technical Stack
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Code className="w-5 h-5" />
                    Frontend
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Next.js 14 with App Router</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• React Hooks</li>
                    <li>• Lucide React icons</li>
                    <li>• Three-column layout</li>
                    <li>• Dark theme design</li>
                    <li>• Mobile-first approach</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Database className="w-5 h-5" />
                    Backend
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Supabase PostgreSQL</li>
                    <li>• Row-level security</li>
                    <li>• Real-time subscriptions</li>
                    <li>• Edge functions</li>
                    <li>• File storage</li>
                    <li>• Redis caching</li>
                    <li>• Vector embeddings</li>
                    <li>• Semantic search</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <Brain className="w-5 h-5" />
                    AI Integration
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Claude API (claude-sonnet-4-5)</li>
                    <li>• Function calling</li>
                    <li>• Hybrid 80-20 architecture</li>
                    <li>• Conversation memory</li>
                    <li>• Intent classification</li>
                    <li>• Rule-based routing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <DollarSign className="w-5 h-5" />
                    Payments
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Stripe Checkout</li>
                    <li>• Stripe Connect</li>
                    <li>• Webhook handlers</li>
                    <li>• Test & production modes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 flex items-center gap-2 text-[#E5E5E5]">
                    <ShoppingCart className="w-5 h-5" />
                    Integrations
                  </h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Shopify API</li>
                    <li>• WooCommerce REST API</li>
                    <li>• Instagram Graph API</li>
                    <li>• Pexels API</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Core Features Built
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Conversational Product Management</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Natural language commands</li>
                    <li>• Add, edit, delete products with text</li>
                    <li>• Bulk operations processing</li>
                    <li>• Voice input support</li>
                    <li>• Multi-turn conversations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Conversational Checkout System</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• 60-second completion time</li>
                    <li>• Works across messaging platforms</li>
                    <li>• Mobile-optimized flow</li>
                    <li>• Automatic payment link generation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Instagram Integration</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• OAuth authentication</li>
                    <li>• Automatic post import</li>
                    <li>• AI parsing of captions</li>
                    <li>• Instagram-style storefront</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Real-Time Analytics Dashboard</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Sales, revenue, orders tracking</li>
                    <li>• Product performance rankings</li>
                    <li>• Inventory alerts</li>
                    <li>• AI-generated insights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Multi-Platform Sync</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Unified management for Instagram, Shopify, WooCommerce, Amazon</li>
                    <li>• Automatic inventory synchronization</li>
                    <li>• Webhook-based real-time updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Store Management</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Unlimited stores on higher tiers</li>
                    <li>• Quick switching between stores</li>
                    <li>• Separate catalogs per store</li>
                    <li>• Consolidated analytics</li>
                    <li>• Role-based team access</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Technical Achievements */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Key Technical Achievements
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Hybrid AI Architecture</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                    Implemented hybrid AI architecture reducing costs by 80% while maintaining full functionality through intelligent routing of simple operations to rule-based systems and complex tasks to Claude.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Conversational Checkout</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                    Built conversational checkout system reducing completion time from 5 minutes to 60 seconds with 40% improvement in conversion rates.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Scalable Architecture</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                    Created scalable architecture supporting unlimited stores and products with real-time synchronization across multiple platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Unified API Abstraction</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                    Integrated major e-commerce platforms through unified API abstraction layer enabling cross-platform inventory and order management.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Chat-Centric Interface</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                    Designed three-column chat-centric interface inspired by Claude with contextual panels appearing alongside conversation rather than separate pages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Highlights */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Development Highlights
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Architecture Migration</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed mb-3">
                    Migrated from complex multi-agent system to simplified single Claude architecture resolving reliability issues and reducing costs. Previous TandemAI orchestration with multiple LLMs caused intent classification failures and database errors. New architecture achieved better performance with 60-87% cost savings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Database Optimization</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed mb-3">
                    Optimized database schema with proper indexing, vector search capabilities, and row-level security policies. Implemented efficient caching strategies reducing database load.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Webhook System</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed mb-3">
                    Built comprehensive webhook system handling events from Stripe, Shopify, Instagram, maintaining data consistency across platforms through retry logic and idempotent operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-3 text-[#E5E5E5]">Component Library</h3>
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed mb-3">
                    Created reusable component library with consistent design system. Dark theme with professional aesthetics. Mobile-responsive patterns optimized for touch interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monetization Strategy */}
      <section className="py-12 border-t border-[#171717]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[#E5E5E5] mb-8 tracking-tight">
              Monetization Strategy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Free Tier</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• 1 store</li>
                    <li>• 50 products</li>
                    <li>• Basic AI features</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Pro Tier - $29/month</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Unlimited products</li>
                    <li>• Advanced AI features</li>
                    <li>• Shopify sync</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Business Tier - $99/month</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Multiple stores</li>
                    <li>• Team access</li>
                    <li>• API access</li>
                    <li>• White-label branding</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-[#171717] border border-[#262626] rounded-lg p-6">
              <h3 className="font-normal mb-4 text-[#E5E5E5]">Target Metrics</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-[#A3A3A3] font-light">
                <div>
                  <strong className="text-[#E5E5E5]">Launch:</strong> 50 stores, $5,000 MRR
                </div>
                <div>
                  <strong className="text-[#E5E5E5]">12 Months:</strong> 500 stores, $60,000 MRR
                </div>
              </div>
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
              Xproid demonstrates modern full-stack development orchestrated through AI, combining conversational interface design with robust e-commerce infrastructure. Platform built entirely using AI-assisted development with Cursor, showcasing ability to architect and implement complex systems through detailed prompts and iterative refinement.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <h3 className="font-normal mb-4 text-[#E5E5E5]">Skills Demonstrated</h3>
                  <ul className="text-sm text-[#A3A3A3] space-y-2 font-light">
                    <li>• Next.js & TypeScript full-stack development</li>
                    <li>• Supabase backend architecture</li>
                    <li>• Claude AI integration with function calling</li>
                    <li>• API integrations (Stripe, Shopify, Instagram)</li>
                    <li>• Product design & conversational UX patterns</li>
                    <li>• Mobile-first responsive design</li>
                    <li>• Cost optimization through hybrid AI architecture</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#171717] border-[#262626]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="outline" 
                      className="border-[#262626] text-[#E5E5E5] hover:bg-[#171717]"
                      onClick={() => window.open('https://xproid.com', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

