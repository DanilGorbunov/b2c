"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div className="absolute inset-0 z-0" style={{ opacity, scale }}>
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative h-[80vh] w-[80vw] max-w-5xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-xl max-h-xl rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute top-1/4 right-1/4 w-[20vw] h-[20vw] max-w-xs max-h-xs rounded-full bg-primary/10 blur-2xl"></div>
            </div>
          </div>
        </motion.div>

        <div className="container px-6 md:px-12 z-10 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white"
                >
                  Danil Gorbunov
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl md:text-2xl text-primary"
                >
                  Product Designer, UX/UI design, Code Crafter & AI Prototoping and development
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="max-w-[600px] text-zinc-400 text-lg md:text-xl"
                >
                  I created intuitive user experiences, AI automation, and
                  scalable digital products across SaaS, B2B, B2C, and
                  eCommerce.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Link href="/about" prefetch={false}>
                  <Button className="w-full min-[400px]:w-auto bg-primary hover:bg-primary/90 text-black">
                    About Me
                  </Button>
                </Link>
                <Link href="/contact" prefetch={false}>
                  <Button
                    className="w-full min-[400px]:w-auto"
                    variant="outline"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <img
                  alt="Danil Gorbunov portrait"
                  className="aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-zinc-800 grayscale"
                  height="300"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dan.jpg-IchGTMVQHQUWYf3UoQsDntbh9GhYcB.jpeg"
                  width="300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container px-6 md:px-12 max-w-7xl">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariants}
                className="grid gap-8 md:gap-12 md:grid-cols-[1.5fr_1fr]"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400">{project.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-500">Client:</span>
                      <span className="text-zinc-300">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-500">Role:</span>
                      <span className="text-zinc-300">{project.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-500">Year:</span>
                      <span className="text-zinc-300">{project.year}</span>
                    </div>
                  </div>
                  <Link href={`/portfolio/${project.slug}`} prefetch={false}>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-white hover:bg-zinc-800"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="overflow-hidden rounded-lg group">
                  <Link href={`/portfolio/${project.slug}`} prefetch={false}>
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-zinc-900/50">
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/contact" prefetch={false}>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black">
              Get in touch
            </Button>
          </Link>
          <a href="mailto:danilgorbunov@gmail.com">
            <Button variant="outline" className="w-full sm:w-auto">
              danilgorbunov@gmail.com
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
