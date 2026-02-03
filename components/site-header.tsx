"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useState } from "react"
import { motion } from "framer-motion"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "/portfolio"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/80 border-b border-[#171717]">
      <div className="container flex h-16 items-center justify-between relative">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo_favi/b2logo.svg" 
                alt="B2Stack Logo" 
                width={139}
                height={39}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>
        </div>

        {/* Center: Desktop Menu - Only visible on medium screens and up */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2" role="navigation" aria-label="Main navigation">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className={`text-sm font-normal transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#E5E5E5]"
                  : "text-[#737373] hover:text-[#A3A3A3]"
              }`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="/about"
              className={`text-sm font-normal transition-colors duration-200 ${
                isActive("/about")
                  ? "text-[#E5E5E5]"
                  : "text-[#737373] hover:text-[#A3A3A3]"
              }`}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="/contact"
              className={`text-sm font-normal transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-[#E5E5E5]"
                  : "text-[#737373] hover:text-[#A3A3A3]"
              }`}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
          </motion.div>
        </nav>

        {/* Right Side: Schedule Button and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Schedule a Call Button - Desktop */}
          <motion.a
            href="https://t.me/+380934486559"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-4 py-2 bg-white text-black rounded-md text-sm font-normal hover:bg-[#F5F5F5] transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Schedule a Call
          </motion.a>

          {/* Mobile Menu - Only visible on small screens */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A0A0A] border-[#171717] [&>button]:hidden">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                {/* Custom close button without green border */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
                >
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
                
                <nav className="flex flex-col gap-4 mt-8">
                  <SheetClose asChild>
                    <Link 
                      href="/" 
                      className={`text-lg font-normal transition-colors duration-200 ${
                        isActive("/") 
                          ? "text-[#E5E5E5]" 
                          : "text-[#A3A3A3] hover:text-[#E5E5E5]"
                      }`} 
                      onClick={handleLinkClick}
                    >
                      Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link 
                      href="/about" 
                      className={`text-lg font-normal transition-colors duration-200 ${
                        isActive("/about") 
                          ? "text-[#E5E5E5]" 
                          : "text-[#A3A3A3] hover:text-[#E5E5E5]"
                      }`} 
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link 
                      href="/contact" 
                      className={`text-lg font-normal transition-colors duration-200 ${
                        isActive("/contact") 
                          ? "text-[#E5E5E5]" 
                          : "text-[#A3A3A3] hover:text-[#E5E5E5]"
                      }`} 
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <a 
                      href="https://t.me/+380934486559"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-normal transition-colors duration-200 text-[#A3A3A3] hover:text-[#E5E5E5]"
                      onClick={handleLinkClick}
                    >
                      Schedule a Call
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

