import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="block h-full">
      <Card className="overflow-hidden transition-all duration-200 hover:border-[#404040] bg-[#171717] border-[#262626] h-full cursor-pointer group">
        <div className="aspect-video w-full overflow-hidden bg-[#0A0A0A]">
          <img
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-normal text-[#E5E5E5] leading-tight group-hover:text-[#F5F5F5] transition-colors duration-200">
              {project.title}
            </h3>
            <span className="text-xs text-[#737373] font-mono flex-shrink-0 mt-0.5">{project.year}</span>
          </div>
          <p className="text-sm text-[#A3A3A3] leading-relaxed line-clamp-2 mb-4 font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-[#262626] text-[#737373] text-xs border-[#262626] font-light">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-[#525252] px-2 py-1">+{project.tags.length - 3}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-end items-center">
          <ArrowUpRight className="h-4 w-4 text-[#525252] group-hover:text-[#737373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </CardFooter>
      </Card>
    </Link>
  )
}

