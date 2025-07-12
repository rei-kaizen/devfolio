"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Smart Forms Platform",
    description:
      "A comprehensive platform for creating and managing login and registration forms with real-time data validation and analytics.",
    tech: ["HTML5", "CSS3", "PHP", "JavaScript", "MySQL"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/rei-kaizen/smartforms-ph",
    demo: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: " Food Hub Web and Mobile App",
    description:
      "A scalable web and mobile application for managing food delivery and catering services.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Java", "Supabase", "Capacitor", "Gradle", "Android Studio"],
    image: "/cfh.png",
    github: "https://github.com/rei-kaizen/foodhub-web-mobile",
    demo: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "PUP Kiosk System",
    description:
      "An interactive kiosk system for the Polytechnic University of the Philippines that provides campus navigation and location-based information.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/kiosk.png",
    github: "https://github.com/rei-kaizen/pup-kiosk",
    demo: "#",
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Advanced Calculator Tool",
    description:
      "A feature-rich calculator supporting scientific functions, memory operations, and keyboard input for advanced usage.",
    tech: ["Javascript", "Express", "JWT", "Docker", "Nginx"],
    image: "/calc.png",
    github: "https://github.com/rei-kaizen/advanced-calculator-app",
    demo: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "PUP Hymn Player App",
    description:
      "A web-based application for playing and managing hymns for the Polytechnic University of the Philippines community.",
    tech: ["HTML5", "CSS3", "JavaScript", "Java", "Gradle", "Android Studio"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/rei-kaizen/pup-hymn-player",
    demo: "#",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Web Profile",
    description:
      "A website developed using Flask, designed to highlight my journey as a computer engineering student.",
    tech: ["HTML5", "CSS3", "Flask", "Python"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/rei-kaizen/web-profile",
    demo: "#",
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300`}
              />
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/40 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-900/80 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white transition-all duration-300`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
