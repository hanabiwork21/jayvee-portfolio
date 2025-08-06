import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
              <Image
                src="/jayvee-profile.jpg"
                alt="Jayvee Dairo - Profile"
                fill
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Jayvee Dairo
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A passionate web developer with a focus on creating beautiful, functional, and user-friendly websites.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/JAYVEE-RESUME.pdf" download="JAYVEE-RESUME.pdf" className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Link href="https://github.com/hanabiwork21" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="mailto:jayveedairo0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
