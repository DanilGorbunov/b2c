import Link from "next/link"
import { Frame, Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 py-12 bg-black">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Frame className="h-6 w-6 text-primary" />
            <span className="font-bold text-white">Danil Gorbunov</span>
          </Link>
          <p className="text-sm text-zinc-400">
            Product designer with 12 years of experience in UX/UI design and frontend development, specializing in
            AI-driven and data-based solutions.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-white">Navigation</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-white">Contact</h3>
          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <a href="mailto:danilgorbunov@gmail.com" className="hover:text-white transition-colors">
              danilgorbunov@gmail.com
            </a>
            <p>Bratislava, Slovakia</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-white">Social</h3>
          <div className="flex gap-4">
            <a href="https://github.com" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.behance.net/danil_gorbunov"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
              <span className="sr-only">Behance</span>
            </a>
            <a href="mailto:danilgorbunov@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t border-zinc-800 pt-8">
        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Danil Gorbunov. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

