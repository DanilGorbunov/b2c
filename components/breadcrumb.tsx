"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ]
    
    let currentPath = ""
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Convert segment to readable label
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Special cases for known pages
      if (segment === 'portfolio') {
        label = 'Portfolio'
      } else if (segment === 'about') {
        label = 'About'
      } else if (segment === 'contact') {
        label = 'Contact'
      }
      
      breadcrumbs.push({
        label,
        href: currentPath
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null
  
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-zinc-500 mx-2" aria-hidden="true" />
            )}
            {index === 0 && (
              <Home className="h-4 w-4 text-zinc-500 mr-1" aria-hidden="true" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-zinc-300 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
