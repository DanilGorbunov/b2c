"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  User,
  Briefcase,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function AIEcommerceProject() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsInView(true);

    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === projectImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const projectImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2.jpg-UdnazrNTHeJdDpxCEnAkDBwHXpWlgE.jpeg",
      alt: "NeroType AI Dashboard Interface - AI Prototyping",
      caption:
        "NeroType AI Dashboard showing sales metrics and chatbot configuration",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-iMKtwLHzYfGvT6nUPv39bHBLDUVogU.jpeg",
      alt: "NeroType AI Landing Page",
      caption: "AI-powered sales assistant chatbot with dashboard integration",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-sqfmMfJqbZUSdco0gJZA3XrwUAxk1D.jpeg",
      alt: "Competitor Comparison Table",
      caption:
        "Feature comparison between NeroType and other chatbot platforms",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-a0FFa6zG9tmH6jSzxlisUxy6FeCGL2.jpeg",
      alt: "NeroType Competitive Advantages",
      caption: "How NeroType outperforms competitors with unique AI features",
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
              ← Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="container px-4 py-12 md:px-6 md:py-24 bg-black"
        ref={containerRef}
      >
        <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mb-12"
      >
        <motion.div variants={fadeInUp} className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            NeroType: AI-Driven E-commerce Chatbot
          </h1>
          <p className="text-xl text-zinc-400">
            Revolutionizing Online Store Management Through AI Conversations
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              AI
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              E-Commerce
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              SAAS
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Chatbot
            </Badge>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/chatbot_cover2.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>

        <motion.div
          variants={fadeInUp}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Year</h3>
            </div>
            <p className="text-zinc-400">2022-Present</p>
          </div>
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Client</h3>
            </div>
            <p className="text-zinc-400">B2Stack</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mb-16"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Project Overview
          </h2>
          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <p className="text-zinc-400 leading-relaxed">
              NeroType is an AI-powered chatbot that transforms how e-commerce
              businesses manage their stores. Unlike traditional platforms that
              rely on manual product uploads and complex dashboards, NeroType
              allows store owners to add products, track inventory, and process
              sales—all through a natural chat interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                The Problem
              </h3>
              <p className="text-zinc-400 mb-4">
                Managing an online store is time-consuming:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <X className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Manually adding and updating products requires multiple
                    steps.
                  </span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Business owners struggle to analyze sales trends in real
                    time.
                  </span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Customers drop off when sales rely only on traditional web
                    interfaces.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                The Solution
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      AI-Powered Chatbot
                    </span>
                    <p>
                      Allows users to add and update products via text or voice
                      commands.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Real-Time Inventory & Sales Insights
                    </span>
                    <p>
                      Smart analytics provide product recommendations and stock
                      alerts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Full E-commerce Integration
                    </span>
                    <p>Seamlessly connects with WooCommerce & Shopify.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Conversational Commerce
                    </span>
                    <p>
                      Customers can browse and purchase products entirely
                      through the chatbot.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            User Experience & UI Design
          </h2>
          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <p className="text-zinc-400 mb-4">
              The UX strategy was built around efficiency and automation:
            </p>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👌</span>
                </div>
                <div>
                  <span className="font-medium text-white">
                    Minimalist, chat-based interface
                  </span>
                  <p>No complex menus, just natural conversation.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🔗</span>
                </div>
                <div>
                  <span className="font-medium text-white">
                    Seamless API Integrations
                  </span>
                  <p>Real-time connection with e-commerce platforms.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🤖</span>
                </div>
                <div>
                  <span className="font-medium text-white">
                    Adaptive AI Tone
                  </span>
                  <p>
                    The chatbot adapts its sales approach based on the
                    customer's personality (MBTI model).
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.jpg-z42o9n8KCSnaaHeQHwBOkybqGA0I6d.jpeg"
                alt="NeroType Dashboard Interface"
                className="rounded-lg border border-zinc-800 mb-4"
              />
              <p className="text-sm text-zinc-500 text-center">
                NeroType dashboard showing metrics and bot configuration
              </p>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-3WX7BWZkqIkymzR8Ib0sFUbNGBidrw.jpeg"
                alt="Competitive Analysis Table"
                className="rounded-lg border border-zinc-800 mb-4"
              />
              <p className="text-sm text-zinc-500 text-center">
                Competitive analysis showing NeroType's unique features
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">✨</span>
                </span>
                AI-driven product management
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Add, edit, or delete products in seconds through simple chat
                commands. No more navigating complex admin panels.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">📊</span>
                </span>
                Sales Forecasting
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Get AI-based recommendations for best-selling products and
                inventory management based on historical data and trends.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">🛍️</span>
                </span>
                Instant product checkout
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Customers complete purchases without navigating a website. The
                entire shopping experience happens within the chat interface.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center">
                  <span className="text-lg">🎙️</span>
                </span>
                Voice Control
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Hands-free store management for busy entrepreneurs. Add
                products, check inventory, and process orders using voice
                commands.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Competitive Advantage
          </h2>

          <Tabs defaultValue="comparison" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="comparison">Feature Comparison</TabsTrigger>
              <TabsTrigger value="advantages">Key Advantages</TabsTrigger>
            </TabsList>
            <TabsContent value="comparison" className="mt-0">
              <div className="bg-zinc-900 p-6 rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 font-medium text-white">
                        Platform
                      </th>
                      <th className="text-center py-3 px-4 font-medium text-white">
                        AI/ML
                      </th>
                      <th className="text-center py-3 px-4 font-medium text-white">
                        E-commerce Integration
                      </th>
                      <th className="text-center py-3 px-4 font-medium text-white">
                        Live Chat
                      </th>
                      <th className="text-center py-3 px-4 font-medium text-white">
                        Auto-Adding Products
                      </th>
                      <th className="text-center py-3 px-4 font-medium text-white">
                        Sales Analysis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">NeroType</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        WooCommerce, Shopify
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">Tidio</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">Shopify</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-white mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">ZipChat</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">Shopify</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-white mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">ManyChat</td>
                      <td className="py-3 px-4 text-center">
                        <Check className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">Shopify, Zapier</td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-white mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <X className="h-5 w-5 text-white mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="advantages" className="mt-0">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <ul className="space-y-6 text-zinc-400">
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🚀</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">
                        Automated Product Management via Chat
                      </span>
                      <p className="mt-1">
                        None of the popular platforms allow adding products
                        through a chatbot (via voice or text). NeroType is set
                        to revolutionize this feature!
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📊</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">
                        Smart Sales and Inventory Analysis
                      </span>
                      <p className="mt-1">
                        Most chatbots only answer customer queries. NeroType can
                        proactively recommend which products to promote and
                        which to discount based on real-time sales data.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">💼</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">
                        Full Automation of the Sales Process
                      </span>
                      <p className="mt-1">
                        Competitors like Tidio and ManyChat assist in sales but
                        still rely on traditional interfaces. NeroType enables
                        the entire sales process through chat – from product
                        listing to payment processing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">
                        Personalized Selling Through Psychological Profiling
                        (MBTI)
                      </span>
                      <p className="mt-1">
                        No competitor analyzes a customer's personality type to
                        adapt the sales approach. NeroType can adjust
                        conversation tone, offers, and communication style based
                        on individual personalities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-white mb-8">
            Optimistic forecast & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-zinc-400">Time saved in product management</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p className="text-zinc-400">Increased conversion rates</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-zinc-400">Reduction in support tickets</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <p className="text-zinc-400">Increase in average order value</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Next Steps
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🚀</span>
                </div>
                <span>Expand to WhatsApp & Telegram for wider adoption.</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">📈</span>
                </div>
                <span>Advanced AI-powered sales strategy suggestions.</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">💡</span>
                </div>
                <span>
                  Launch a marketplace model where users can sell via AI-only
                  interfaces.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="overflow-hidden ">
          <img
            src="/images/aibot/chat10.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/aibot/chat11.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/aibot/chat12.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/aibot/chat13.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/aibot/chat14.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/aibot/chat15.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/aibot/chat16.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/aibot/chat17.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        </motion.div>
      </div>
    </div>
  );
}
