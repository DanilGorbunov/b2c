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
  MapPin,
  Clock,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import ProjectHeader from "@/components/project-header";

export default function DeliveryAppProject() {
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
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover.jpg-i4vuRwlBQ8LzoEfIFlSXIWIvmk6Fbp.jpeg",
      alt: "FoodCore Delivery App Overview",
      caption: "FoodCore - B2C/B2B Delivery Platform",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-UzaUVdwJN8XoosCSjI7IP4cId9aWxb.png",
      alt: "FoodCore Mobile App Interfaces",
      caption:
        "Mobile app interfaces showing map navigation, restaurant selection, and user profile",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-SGS4GeWhtknuNt1MOlYCPxk75OFVAp.png",
      alt: "Food Ordering Process",
      caption:
        "Complete food ordering process from selection to delivery tracking",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-NvzW4WwtieKBwVeldIRpmkWknnw9G2.png",
      alt: "Shopping Interface",
      caption:
        "Shopping interface with categories, special offers, and product listings",
    },
  ];

  const appScreenshots = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-UzaUVdwJN8XoosCSjI7IP4cId9aWxb.png",
      alt: "Navigation and Offers",
      caption: "Real-time navigation with nearby restaurant offers",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-SGS4GeWhtknuNt1MOlYCPxk75OFVAp.png",
      alt: "Order Tracking",
      caption: "Live order tracking with delivery status updates",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-NvzW4WwtieKBwVeldIRpmkWknnw9G2.png",
      alt: "Shopping Interface",
      caption: "Product browsing with category filters and special offers",
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

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-6xl">
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-12"
        >
        <motion.div variants={fadeInUp} className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            FoodCore: B2C/B2B Delivery Platform
          </h1>
          <p className="text-xl text-zinc-400">
            A comprehensive delivery solution connecting businesses, consumers,
            and delivery partners
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Mobile App
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Delivery Platform
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              UX/UI Design
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              B2B/B2C
            </Badge>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative mb-12 overflow-hidden rounded-lg aspect-video"
        >
          <div className="overflow-hidden  ">
            <img
              src="/images/foodcore/foodcore_cover.jpg"
              // alt={`${project.title} - About Project`}
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Year</h3>
            </div>
            <p className="text-zinc-400">2020-2022</p>
          </div>
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Client</h3>
            </div>
            <p className="text-zinc-400">FoodCore</p>
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
              FoodCore is a comprehensive B2C/B2B delivery platform that
              connects businesses and consumers with delivery partners. The
              project focused on improving the user experience for all
              stakeholders: businesses that rely on timely deliveries, consumers
              seeking convenient shopping, and delivery drivers who need an
              intuitive, easy-to-navigate interface. By optimizing usability,
              reliability, and efficiency, the app creates seamless interactions
              across the entire delivery ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-zinc-400 mb-4">
                The delivery market faced several critical challenges:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>1</span>
                  </div>
                  <span>
                    Existing platforms were either too consumer-focused or too
                    business-oriented, creating inefficiencies
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>2</span>
                  </div>
                  <span>
                    Delivery drivers struggled with complex interfaces that
                    impacted their efficiency and safety
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>3</span>
                  </div>
                  <span>
                    Payment systems weren't flexible enough to accommodate both
                    business accounts and individual transactions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>4</span>
                  </div>
                  <span>
                    Safety concerns for both customers and delivery partners
                    weren't adequately addressed
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
                      Dual-Interface Platform
                    </span>
                    <p>
                      Created specialized flows for B2B and B2C users while
                      maintaining a consistent experience
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Real-Time Tracking
                    </span>
                    <p>
                      Implemented live order tracking with accurate ETAs and
                      status updates
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Optimized Driver Experience
                    </span>
                    <p>
                      Designed a simplified driver interface with route
                      optimization and safety features
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Flexible Payment System
                    </span>
                    <p>
                      Integrated multiple payment methods with support for both
                      business accounts and individual transactions
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          variants={fadeInUp}
          className="relative mb-12 overflow-hidden rounded-lg max-w-md sm:max-w-lg mx-auto h-[500px] sm:h-[600px]"
        >
          <div className="overflow-hidden w-full h-full">
            <img
              src="/images/foodcore/foodcore_gif.gif"
              className="w-full h-full object-cover"
              alt="Foodcore GIF"
            />
          </div>
        </motion.div> */}

        <motion.div
          variants={fadeInUp}
          className="relative mb-12 overflow-hidden rounded-[42px] max-w-[18%] sm:max-w-[20%] mx-auto h-[450px] sm:h-[565px]"
        >
          <div className="overflow-hidden w-full h-full">
            <video
              src="/images/foodcore/foodcore_video.mov"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <User className="h-6 w-6 text-primary mr-3" />
                User Research
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Conducted in-depth research to understand the behaviors,
                preferences, and pain points of FoodCore's business users and
                delivery drivers. This included interviews, surveys, and
                usability tests to ensure the platform meets their needs and
                expectations.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <ShoppingBag className="h-6 w-6 text-primary mr-3" />
                Driver Experience
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Enhanced the experience for FoodCore delivery partners by
                addressing challenges such as delivery availability, earnings
                transparency, and safety. Implemented features that empower
                partners to provide efficient food deliveries while boosting
                their satisfaction and loyalty to the platform.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                Safety and Security
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Strengthened safety measures for both business users and
                delivery partners with features like real-time tracking,
                emergency assistance, and verification processes. Built trust in
                the platform by prioritizing the safety and security of all
                users.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Clock className="h-6 w-6 text-primary mr-3" />
                Payment and Pricing
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Streamlined the payment process to ensure transparency for
                customers booking food deliveries. Allowed them to compare
                prices from multiple delivery partners and choose the best
                option. Provided flexible payment methods such as Apple Pay,
                Google Pay, and card payments, along with loyalty rewards to
                increase customer engagement and retention.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">App Interface</h2>

          <Tabs defaultValue="consumer" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="consumer">Consumer Experience</TabsTrigger>
              <TabsTrigger value="business">
                Business & Driver Experience
              </TabsTrigger>
            </TabsList>
            <TabsContent value="consumer" className="mt-0">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-NvzW4WwtieKBwVeldIRpmkWknnw9G2.png"
                      alt="Consumer Shopping Interface"
                      className="rounded-lg border border-zinc-800 mb-4"
                    />
                    <h3 className="text-lg font-medium text-white mb-2">
                      Shopping Interface
                    </h3>
                    <p className="text-zinc-400">
                      The consumer interface features an intuitive shopping
                      experience with categorized products, special offers, and
                      personalized recommendations. Users can easily browse
                      restaurants and grocery stores, with clear pricing and
                      delivery information.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-SGS4GeWhtknuNt1MOlYCPxk75OFVAp.png"
                      alt="Order Tracking Interface"
                      className="rounded-lg border border-zinc-800 mb-4"
                    />
                    <h3 className="text-lg font-medium text-white mb-2">
                      Order Tracking
                    </h3>
                    <p className="text-zinc-400">
                      Real-time order tracking provides consumers with accurate
                      delivery estimates and status updates. The interface shows
                      the delivery route, driver information, and allows for
                      direct communication with the delivery partner when
                      needed.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-UzaUVdwJN8XoosCSjI7IP4cId9aWxb.png"
                      alt="Business Partner Interface"
                      className="rounded-lg border border-zinc-800 mb-4"
                    />
                    <h3 className="text-lg font-medium text-white mb-2">
                      Business Partner Dashboard
                    </h3>
                    <p className="text-zinc-400">
                      The business interface provides partners with order
                      management tools, inventory tracking, and performance
                      analytics. Businesses can manage their menu items, track
                      deliveries, and optimize their operations based on
                      real-time data.
                    </p>
                  </div>
                  <div>
                    <img
                      src="/images/foodcore/foodcore_start.png"
                      alt="Driver Interface"
                      className="rounded-lg border border-zinc-800 mb-4"
                    />
                    <h3 className="text-lg font-medium text-white mb-2">
                      Driver Experience
                    </h3>
                    <p className="text-zinc-400">
                      The driver interface is optimized for safety and
                      efficiency with clear navigation, order details, and
                      delivery instructions. Drivers can easily track their
                      earnings, manage multiple deliveries, and communicate with
                      both businesses and customers.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-white mb-8">
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">29%</div>
              <p className="text-zinc-400">Faster delivery times</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">27.5%</div>
              <p className="text-zinc-400">Increase in driver satisfaction</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">18%</div>
              <p className="text-zinc-400">
                Growth in business client retention
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">11%</div>
              <p className="text-zinc-400">Increase in order volume</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Key Outcomes
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Successfully bridged the gap between business and consumer
                  delivery needs with a unified platform
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Improved driver experience led to higher retention rates and
                  more consistent service quality
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Enhanced safety features resulted in fewer incidents and
                  greater trust in the platform
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Flexible payment options increased conversion rates and
                  reduced cart abandonment
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Real-time tracking and transparent communication improved
                  customer satisfaction and loyalty
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 space-y-8"
        >
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[85%]">
              <img
                src="/images/foodcore/foodcore2.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[75%]">
              <img
                src="/images/foodcore/foodcore4.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[85%]">
              <img
                src="/images/foodcore/foodcore5.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[85%]">
              <img
                src="/images/foodcore/foodcore6.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[75%]">
              <img
                src="/images/foodcore/foodcore7.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[80%]">
              <img
                src="/images/foodcore/foodcore8.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[80%]">
              <img
                src="/images/foodcore/foodcore9.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[75%]">
              <img
                src="/images/foodcore/foodcore10.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[70%]">
              <img
                src="/images/foodcore/foodcore11.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[75%]">
              <img
                src="/images/foodcore/foodcore12.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="w-[80%]">
              <img
                src="/images/foodcore/foodcore13.jpg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}
