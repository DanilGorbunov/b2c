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
  Clock,
  BarChart3,
  Boxes,
  Truck,
  Warehouse,
  Play,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function WarehouseInventoryProject() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const projectImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alter_cover2.jpg-TkmaJ3YSyL7ndN4fPaUT4BwcDhWqAT.jpeg",
      alt: "Laps 3D Warehouse Management Overview",
      caption: "Laps - 3D Warehouse Inventory Management System",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ac590166258627.6414e26429eac-yUnTslRiF6LsnbUmX9h10ur6MVN7gf.jpeg",
      alt: "Laps Mobile App Interfaces",
      caption:
        "Mobile application interfaces for real-time inventory tracking and task management",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/See_Know_Manage.gif-eLQvurtHFUs0NUHTCbUywIZaVBB16w.jpeg",
      alt: "3D Warehouse Visualization",
      caption:
        "Interactive 3D visualization of warehouse layout with color-coded sections",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvMzc1LW1qLTA1MDItZm9uLWxfMi1rc29kZG5qei5qcGc-dIBU7jLNQ7SCet01WtPQEWhfXu3bq7.webp",
      alt: "Tablet Interface in Use",
      caption:
        "Warehouse staff using the tablet interface for inventory management",
    },
  ];

  const appScreenshots = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screen%20Shot%20-%20iPad%20Pro%20%289.7-inch%29%20-%202022-09-08%20at%2015.05.49-En67ZhzeqYXtr0Aycz3ggbD2tijWhr.png",
      alt: "Task List Screen",
      caption:
        "Task management interface showing priority levels and time allocations",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screen%20Shot%20-%20iPad%20Pro%20%289.7-inch%29%20-%202022-09-08%20at%2013.14.42-WRg24L4YyfHEnyZzl2WZWqaZaN4mqf.png",
      alt: "Delivery Duration Timer",
      caption: "Real-time tracking of delivery duration with action controls",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screen%20Shot%20-%20iPad%20Pro%20%289.7-inch%29%20-%202022-09-08%20at%2015.04.03-yboXBRi6FFJLOrHXZjCpOB1djUb7mr.png",
      alt: "Task Aborted Screen",
      caption: "Task status notification when operation is aborted",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screen%20Shot%20-%20iPad%20Pro%20%289.7-inch%29%20-%202022-09-08%20at%2015.02.27-LblxcofMae6blshzgk2XeXepdlDZas.png",
      alt: "Task Paused Screen",
      caption: "System pause notification with resume option",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screen%20Shot%20-%20iPad%20Pro%20%289.7-inch%29%20-%202022-09-08%20at%2015.04.14-bzpGkx8ReAnsX2xaO76tZJfMM9QTSY.png",
      alt: "Inventory Selection Screen",
      caption: "Inventory item selection interface for warehouse operations",
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
            Laps: 3D Warehouse Inventory Management
          </h1>
          <p className="text-xl text-zinc-400">
            A revolutionary approach to warehouse management using 3D
            visualization and real-time tracking
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              3D Visualization
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Inventory Management
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Flutter
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              SaaS
            </Badge>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/laps/cover_laps.jpg"
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
            <p className="text-zinc-400">2022</p>
          </div>
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Client</h3>
            </div>
            <p className="text-zinc-400">Twinzo 3D</p>
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
              Laps is a SaaS-based warehouse inventory management system
              designed for Fortune 500 clients. The platform integrates 3D data
              visualization with real-time inventory tracking to provide an
              intuitive and comprehensive solution for managing complex
              warehouse operations. By transforming traditional inventory
              management into an interactive 3D experience, Laps enables
              warehouse managers to optimize space utilization, improve picking
              efficiency, and reduce operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-zinc-400 mb-4">
                Large enterprises faced several critical challenges with
                traditional warehouse management:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>1</span>
                  </div>
                  <span>
                    Difficulty visualizing complex warehouse layouts and
                    inventory positions across multiple locations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>2</span>
                  </div>
                  <span>
                    Inefficient picking routes leading to wasted time and
                    increased labor costs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>3</span>
                  </div>
                  <span>
                    Lack of real-time visibility into inventory movements and
                    stock levels
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>4</span>
                  </div>
                  <span>
                    High training costs for new warehouse staff due to complex
                    systems
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
                      Interactive 3D Visualization
                    </span>
                    <p>
                      Digital twin of the physical warehouse with real-time
                      inventory representation
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Mobile Application
                    </span>
                    <p>
                      Cross-platform app for warehouse staff to track, locate,
                      and manage inventory on the go
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Real-time Analytics
                    </span>
                    <p>
                      Comprehensive dashboards for monitoring KPIs and
                      optimizing warehouse operations
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Optimized Picking Routes
                    </span>
                    <p>
                      AI-powered route optimization to minimize travel time and
                      increase efficiency
                    </p>
                  </div>
                </li>
              </ul>
            </div>
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
              href="https://www.twinzo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="bg-primary hover:bg-primary/90 text-black">
                SAAS Twizo 3D solution
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">App Values</h2>
          <div className="overflow-hidden  ">
            <img
              src="/images/laps/laps3.gif"
              // alt={`${project.title} - About Project`}
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Project Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary mb-4">
                <span className="text-lg">App</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Mobile Application
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Cross-platform Flutter development</li>
                <li>• Real-time inventory tracking</li>
                <li>• Barcode/QR scanning</li>
                <li>• Task management</li>
                <li>• Offline functionality</li>
                <li>• Push notifications</li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary mb-4">
                <span className="text-lg">Backend</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Server Infrastructure
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Cloud-based architecture</li>
                <li>• Real-time data synchronization</li>
                <li>• API development</li>
                <li>• Database optimization</li>
                <li>• Authentication & security</li>
                <li>• Analytics processing</li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary mb-4">
                <span className="text-lg">Dashboard</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Admin Dashboard
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• 3D warehouse visualization</li>
                <li>• Inventory management</li>
                <li>• Staff performance tracking</li>
                <li>• Reporting & analytics</li>
                <li>• System configuration</li>
                <li>• User management</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Warehouse className="h-6 w-6 text-primary mr-3" />
                3D Warehouse Visualization
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Interactive digital twin of the physical warehouse that allows
                managers to zoom, rotate, and explore the entire facility. The
                system shows real-time inventory positions, stock levels, and
                staff locations, making it easy to understand complex spatial
                relationships at a glance.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Clock className="h-6 w-6 text-primary mr-3" />
                Time Tracking & Optimization
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Sophisticated time tracking for all warehouse operations, from
                picking and packing to inventory counts. The system analyzes
                historical data to identify bottlenecks and suggest process
                improvements, helping to reduce operational costs and increase
                throughput.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Boxes className="h-6 w-6 text-primary mr-3" />
                Intelligent Inventory Management
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Advanced inventory management with predictive analytics for
                stock optimization. The system automatically suggests optimal
                inventory levels based on historical data, seasonal trends, and
                current demand, helping to reduce carrying costs while
                preventing stockouts.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 text-primary mr-3" />
                Real-time Analytics Dashboard
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Comprehensive analytics dashboard providing insights into key
                performance indicators such as picking efficiency, inventory
                turnover, space utilization, and labor productivity. Custom
                reports can be generated and scheduled for regular distribution
                to stakeholders.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Mobile Application
          </h2>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="features">Key Functionality</TabsTrigger>
              <TabsTrigger value="screens">App Screens</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-0">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Warehouse Staff Features
                    </h3>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>
                          Real-time task assignments with priority indicators
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>
                          Optimized picking routes with turn-by-turn navigation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>
                          Barcode and QR code scanning for inventory
                          verification
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>
                          Time tracking for task completion and performance
                          metrics
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Manager Features
                    </h3>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>
                          Staff performance monitoring and task assignment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>Inventory alerts and exception handling</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>
                          Mobile access to key performance indicators and
                          reports
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>
                          Approval workflows for inventory adjustments and
                          transfers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="screens" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {appScreenshots.map((screen, index) => (
                  <div key={index} className="bg-zinc-900 p-4 rounded-lg">
                    <div className="aspect-[9/16] bg-zinc-800 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={screen.src || "/placeholder.svg"}
                        alt={screen.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-white">{screen.alt}</h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      {screen.caption}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Technical Implementation
          </h2>
          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Flutter</p>
                <p className="text-xs text-zinc-400">Mobile App</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Unity 3D</p>
                <p className="text-xs text-zinc-400">Visualization</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Node.js</p>
                <p className="text-xs text-zinc-400">Backend</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">MongoDB</p>
                <p className="text-xs text-zinc-400">Database</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">WebSockets</p>
                <p className="text-xs text-zinc-400">Real-time Updates</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">TensorFlow</p>
                <p className="text-xs text-zinc-400">Predictive Analytics</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">AWS</p>
                <p className="text-xs text-zinc-400">Cloud Infrastructure</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-white font-medium">Figma</p>
                <p className="text-xs text-zinc-400">Design</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Development Approach
            </h3>
            <p className="text-zinc-400 mb-6">
              The project was developed using an agile methodology with two-week
              sprints. The development process was divided into three main
              phases:
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-4 flex items-center justify-center flex-shrink-0">
                  <span>1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Discovery & Design
                  </h4>
                  <p className="text-zinc-400 mt-1">
                    Managers conducted extensive user research with warehouse
                    staff and managers to understand pain points and
                    requirements. Created wireframes and interactive prototypes
                    for user testing before finalizing the design.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-4 flex items-center justify-center flex-shrink-0">
                  <span>2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Core Development
                  </h4>
                  <p className="text-zinc-400 mt-1">
                    Twinzo builts the foundational components including the 3D
                    visualization engine, mobile application, and backend
                    infrastructure. Implemented core features and established
                    data synchronization between components.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 text-primary mr-4 flex items-center justify-center flex-shrink-0">
                  <span>3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Refinement & Deployment
                  </h4>
                  <p className="text-zinc-400 mt-1">
                    Teams conducted extensive testing in real warehouse
                    environments, gathering feedback and making iterative
                    improvements. Optimized performance and implemented advanced
                    features before final deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-white mb-8">
            Results & Impact
          </h2>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Key Outcomes
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Enhanced usability and adoption rates among warehouse staff,
                  resulting in more efficient inventory management
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Reduced training time for new employees by due to the
                  intuitive 3D interface
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Improved inventory accuracy, leading to fewer stockouts and
                  overstock situations
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Optimized warehouse space utilization through better placement
                  strategies
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Increased picking efficiency, resulting in faster order
                  fulfillment and reduced labor costs
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
        <div className="overflow-hidden  ">
          <img
            src="/images/laps/laps5.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/laps/laps6.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/laps/laps7.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/laps/laps8.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/laps/laps9.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden  ">
          <img
            src="/images/laps/laps1.jpg"
            // alt={`${project.title} - About Project`}
            className="w-full object-cover"
          />
        </div>
        </motion.div>
      </div>
    </div>
  );
}
