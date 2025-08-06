import { Card, CardContent } from "@/components/ui/card"
import { Code, Computer, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                A passionate web developer with a focus on creating beautiful, functional, and user-friendly websites.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <a href="/JAYVEE-RESUME.pdf" download="JAYVEE-RESUME.pdf">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Web Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Building scalable applications with modern frameworks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Computer className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Computer Maintenance</h3>
                      <p className="text-sm text-muted-foreground">Troubleshooting hardware and software issues</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
