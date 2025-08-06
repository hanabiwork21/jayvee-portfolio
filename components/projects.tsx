import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Certificate Maker",
      description:
        "A full-stack application for creating and managing certificates.",
      image: "/certificate_maker.svg",
      technologies: ["Next.js", "TypeScript"],
      liveUrl: "https://certificate-maker-three.vercel.app/",
      githubUrl: "https://github.com/hanabiwork21/certificate-maker",
    },
    {
      title: "Quiz-Bee System Web App",
      description:
        "A collaborative quiz application with real-time updates and team collaboration features.",
      image: "/quiz-bee.svg",
      technologies: ["React", "Node.js", "Firebase"],
      liveUrl: "https://hanabiwork21.github.io/Quiz-Bee",
      githubUrl: "https://github.com/hanabiwork21/Quiz-Bee",
    },
    {
      title: "Weather App",
      description: "A responsive weather application with location-based forecasts.",
      image: "/weather_app.svg",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      liveUrl: "https://hanabiwork21.github.io/Weather-App/",
      githubUrl: "https://github.com/hanabiwork21/Weather-App",
    },
    {
      title: "Sneaky Gaming Website",
      description: "A modern gaming website with a sleek design and user-friendly interface.",
      image: "/sneakyweb.svg",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://hanabiwork21.github.io/sneaky-events-team/",
      githubUrl: "https://github.com/hanabiwork21/sneaky-events-team",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
