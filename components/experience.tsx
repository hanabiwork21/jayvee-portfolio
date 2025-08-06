import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Computer Attendant",
      company: "IO Cybercafe Antipolo",
      period: "Sept 2024 - Present",
      description:
        "Assisted customers with computer-related issues, provided technical support, and managed daily operations of the cybercafe.",
      technologies: ["Technical Support", "Customer Service", "Computer Maintenance"],
      },
    {
      title: "Frontend Developer",
      company: "Sneaky Events Team",
      period: "Aug 2023 - Dec 2023",
      description:
        "Developed and maintained the frontend of the Sneaky Events website, ensuring a responsive and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
