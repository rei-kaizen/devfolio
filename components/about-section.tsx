"use client"

import { motion } from "framer-motion"
import { Download, Code, Database, Cpu, LayoutTemplate, Smartphone, Network } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Hello! I'm <span className="text-cyan-400 font-semibold">Denie Rose Bon</span>, a passionate Computer
                  Engineering student with a deep fascination for system development and emerging technologies. My
                  journey in tech is driven by the desire to create innovative solutions that bridge the gap between
                  complex systems and real-world applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I specialize in backend systems, IoT integration, automation, and full-stack development. My expertise
                  spans from low-level system architecture to high-level application development, allowing me to
                  approach problems from multiple angles and deliver comprehensive solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source
                  projects, or experimenting with new frameworks and tools that push the boundaries of what's possible.
                </p>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-6">
              {[
                {
                  icon: LayoutTemplate,
                  title: "Frontend Development",
                  description: "Crafting responsive and interactive web interfaces",
                },
                {
                  icon: Network,
                  title: "Computer Networks",
                  description: "Designing and simulating secure networks using Cisco Packet Tracer",
                },
                {
                  icon: Database,
                  title: "Backend Development",
                  description: "Building robust APIs and database solutions",
                },
                {
                  icon: Cpu,
                  title: "IoT & Embedded",
                  description: "Creating smart solutions with Arduino and Raspberry Pi",
                },
                {
                  icon: Smartphone,
                  title: "App Development",
                  description: "Building cross-platform mobile apps",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
