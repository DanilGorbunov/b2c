"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Briefcase,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  BarChart3,
  Boxes,
  Truck,
  Warehouse,
  Play,
  Pause,
  Search,
  Users,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import ProjectHeader from "@/components/project-header";
import { useInView } from "framer-motion";

export default function BackOfficeDashboardProject() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-12"
          ref={containerRef}
        >
        <motion.div variants={fadeInUp} className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Back Office Dashboard
          </h1>
          <p className="text-xl text-zinc-400">
            Redesign of Global Blue's legacy back-office system for managing
            merchants and shops in tax-free shopping services
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Dashboard
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Analytics
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Financial Management
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Data Visualization
            </Badge>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/gb_cover.jpg"
            alt="Global Blue Back Office Dashboard"
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
            <p className="text-zinc-400">2024</p>
          </div>
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Client</h3>
            </div>
            <p className="text-zinc-400">Global Blue</p>
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
              Led the redesign of Global Blue's legacy back-office system,
              focusing on improving the management of merchants and shops in
              their tax-free shopping services. The project aimed to modernize
              the interface while enhancing operational efficiency and user
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-zinc-400 mb-4">
                The existing back-office system faced several critical
                challenges:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>1</span>
                  </div>
                  <span>
                    Complex and inefficient workflows for merchant and shop
                    management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>2</span>
                  </div>
                  <span>
                    Poor search functionality making it difficult to find
                    specific merchants or shops
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>3</span>
                  </div>
                  <span>
                    Outdated interface design leading to low user satisfaction
                    and productivity
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>4</span>
                  </div>
                  <span>
                    Limited data visualization capabilities for financial
                    analytics
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
                      Modern Dashboard Interface
                    </span>
                    <p>
                      Intuitive layout with clear navigation and improved
                      information hierarchy
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Advanced Search & Filtering
                    </span>
                    <p>
                      Powerful search capabilities with smart filters for quick
                      merchant and shop lookup
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Streamlined Workflows
                    </span>
                    <p>
                      Optimized processes for merchant management and shop
                      operations
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Enhanced Analytics
                    </span>
                    <p>
                      Comprehensive financial analytics with interactive data
                      visualization
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">App Values</h2>
          <div className="overflow-hidden flex justify-center">
            <video
              src="/images/globalblue/global.mp4"
              className="w-[60%] object-cover rounded-[30px]"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 space-y-8"
        >
          <div className="flex justify-center mt-12">
            <a
              href="https://www.figma.com/proto/wOKhB5JHVI2ILEAbKF6Ofd/Global-Blue---BackOffice?page-id=0%3A1&node-id=31-10235&p=f&viewport=1184%2C1655%2C0.13&t=nsMMBmmdrJD4OBf7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=734%3A19456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="bg-primary hover:bg-primary/90 text-black">
                Prototype
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 space-y-8"
        >
          <div className="flex justify-center mt-12">
            <a
              href="https://www.figma.com/design/wOKhB5JHVI2ILEAbKF6Ofd/Global-Blue---BackOffice?node-id=779-22672&t=X71qXdfznFkYBW2c-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="bg-primary hover:bg-primary/90 text-black">
                Figma File
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Search className="h-6 w-6 text-primary mr-3" />
                Advanced Search & Filtering
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Implemented a powerful search system with smart filters,
                allowing users to quickly find specific merchants and shops. The
                search functionality includes auto-suggestions, recent searches,
                and saved filters for improved efficiency.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 text-primary mr-3" />
                Financial Analytics Dashboard
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Created comprehensive financial analytics with interactive
                charts and graphs. Users can track key metrics, generate custom
                reports, and analyze trends in tax-free shopping data across
                different regions and time periods.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Merchant Management
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Streamlined merchant management workflows with intuitive forms
                and validation. The system provides quick access to merchant
                details, transaction history, and performance metrics, enabling
                efficient merchant onboarding and management.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Store className="h-6 w-6 text-primary mr-3" />
                Shop Operations
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Enhanced shop management capabilities with detailed profiles,
                location tracking, and performance monitoring. Users can easily
                manage shop information, track sales data, and monitor
                compliance with tax-free shopping regulations.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Expectation Of Results & Impact
          </h2>
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Key Outcomes
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Reduced time spent on merchant management tasks by 40%
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Improved search efficiency with 60% reduction in time to find
                  specific merchants
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Enhanced user satisfaction with 70% improvement in user
                  experience scores
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Streamlined workflows leading to 45% reduction in processing
                  errors
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Improved data visualization enabling faster decision-making
                  and analysis
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 space-y-8"
      >
        <div className="overflow-hidden">
          <img
            src="/images/globalblue/gb_3.jpg"
            alt="Global Blue Back Office Dashboard - Analytics"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/globalblue/gb_4.jpg"
            alt="Global Blue Back Office Dashboard - Shop Management"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/globalblue/gb_5.jpg"
            alt="Global Blue Back Office Dashboard - Financial Overview"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/globalblue/gb_6.jpg"
            alt="Global Blue Back Office Dashboard - Search Interface"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/globalblue/gb_7.jpg"
            alt="Global Blue Back Office Dashboard - Data Visualization"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/globalblue/gb_8.jpg"
            alt="Global Blue Back Office Dashboard - User Interface"
            className="w-full object-cover"
          />
        </div>
      </motion.div>
      </div>
    </div>
  );
}
