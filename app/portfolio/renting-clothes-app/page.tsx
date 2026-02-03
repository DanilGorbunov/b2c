"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Briefcase,
  ExternalLink,
  Check,
  Clock,
  BarChart3,
  Search,
  Users,
  Store,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RentingClothesAppProject() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsInView(true);
  }, []);

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
            Frentify: Fashion Rental Platform
          </h1>
          <p className="text-xl text-zinc-400">
            Fashion rental platform enabling users to rent and lend designer
            clothes with seamless booking and delivery
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Fashion
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Rental Platform
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              Mobile App
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
              E-Commerce
            </Badge>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/frentify_cover.jpg"
            alt="Frentify Fashion Rental Platform"
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
            <p className="text-zinc-400">2021</p>
          </div>
          <div className="space-y-2 bg-zinc-900 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-white">Client</h3>
            </div>
            <p className="text-zinc-400">Frentify</p>
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
              Frentify is not just a clothing rental app; it's a personalized
              fashion experience that brings users closer to sustainable style
              choices. By creating a seamless platform where users can easily
              browse, rent, and return clothes, Frentify builds a deeper
              connection with its customers. Through personalized
              recommendations, timely notifications, and a user-friendly
              interface, Frentify fosters a sense of closeness and trust with
              its community, ensuring that customers feel understood and valued
              at every step of their fashion journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Project Goals
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>1</span>
                  </div>
                  <span>Simplify User Interface</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>2</span>
                  </div>
                  <span>Ensure Trust and Safety</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>3</span>
                  </div>
                  <span>User Testing and Feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span>4</span>
                  </div>
                  <span>Increase User Engagement</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Success Criteria
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      50% DAU Increase
                    </span>
                    <p>Within first three months after launch</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      70% Retention Rate
                    </span>
                    <p>After six months of usage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      4.7/5 User Rating
                    </span>
                    <p>Average user feedback score</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      75% Rental Success
                    </span>
                    <p>Successful rental completion rate</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Project Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Development Phases
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Phase 1: Research and Planning
                    </span>
                    <p>4 weeks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Phase 2: Design and Prototyping
                    </span>
                    <p>9 weeks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Phase 3: Testing and Iteration
                    </span>
                    <p>6 weeks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Phase 4: New Iterations
                    </span>
                    <p>12 weeks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Phase 5: Full Redesign
                    </span>
                    <p>12 weeks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Phase 6: Development
                    </span>
                    <p>Ongoing</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Deliverables
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Design Documentation
                    </span>
                    <p>Wireframes and prototypes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      User Interface
                    </span>
                    <p>Final UI design and components</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Technical Features
                    </span>
                    <p>Matchmaking algorithm and safety features</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">
                      Marketing Materials
                    </span>
                    <p>Brand assets and promotional content</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Analytics</span>
                    <p>User feedback reports and improvement plans</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Search className="h-6 w-6 text-primary mr-3" />
                Smart Search & Recommendations
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Advanced search functionality with personalized recommendations
                based on user preferences, style history, and seasonal trends.
                The system learns from user interactions to provide increasingly
                accurate suggestions.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                User Profiles & Trust System
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Comprehensive user profiles with verification badges, rental
                history, and ratings. The trust system ensures safe transactions
                and builds community confidence through transparent reviews and
                feedback.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Store className="h-6 w-6 text-primary mr-3" />
                Seamless Rental Process
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Streamlined rental workflow with automated booking, secure
                payments, and convenient delivery/return options. The system
                handles all logistics while keeping users informed at every
                step.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 text-primary mr-3" />
                Analytics & Insights
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Detailed analytics dashboard for both users and administrators,
                providing insights into rental patterns, popular items, and user
                behavior to optimize the platform's performance.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Results & Impact
          </h2>
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Key Outcomes
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Achieved 50% increase in Daily Active Users within three
                  months
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Maintained 70% user retention rate after six months</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Received 4.7/5 average user satisfaction rating</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Achieved 75% successful rental completion rate</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Reduced customer service issues by 30%</span>
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
            src="/images/frentify/frentify_1.jpg"
            alt="Frentify App - Home Screen"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_2.jpg"
            alt="Frentify App - Product Details"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_3.jpg"
            alt="Frentify App - Rental Process"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_4.jpg"
            alt="Frentify App - User Profile"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_5.jpg"
            alt="Frentify App - Analytics Dashboard"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_6.jpg"
            alt="Frentify App - Home Screen"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_7.jpg"
            alt="Frentify App - Product Details"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_3.jpg"
            alt="Frentify App - Rental Process"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_8.jpg"
            alt="Frentify App - User Profile"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_9.jpg"
            alt="Frentify App - Analytics Dashboard"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_10.jpg"
            alt="Frentify App - User Profile"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/frentify/frentify_11.jpg"
            alt="Frentify App - Analytics Dashboard"
            className="w-full object-cover"
          />
        </div>
      </motion.div>
      </div>
    </div>
  );
}
