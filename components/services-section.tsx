"use client"

import { motion } from "framer-motion"
import { Wrench, Globe, Radio, Bot, Database, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "System Development",
    description:
      "Building robust, scalable systems with clean architecture and optimal performance for enterprise-level applications.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Creating modern, responsive web applications using cutting-edge technologies and best practices.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Radio,
    title: "IoT Projects",
    description:
      "Developing smart IoT solutions that connect devices and enable intelligent automation for various industries.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Bot,
    title: "Automation Tools",
    description:
      "Designing and implementing automation scripts and tools to streamline workflows and increase productivity.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Optimizing database performance, designing efficient schemas, and ensuring data integrity and security.",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your technical needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300`}
              />
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/40 transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
