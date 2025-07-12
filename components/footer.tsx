"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DENIE ROSE BON
            </h3>
            <p className="text-gray-400 mt-2">System Developer & Tech Enthusiast</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/rei-kaizen", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/denierosebon/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:denie.bon@email.com", label: "Email" },
              { icon: FileText, href: "https://drive.google.com/drive/folders/1ye5mwEvu2YYTGkYIdujB_3MDzwFzvjVe?usp=sharing", label: "Resume" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              by Denie Rose Bon
            </p>
          </motion.div>
        </div>

        {/* Bottom border with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mx-auto max-w-xs" />
        </motion.div>
      </div>
    </footer>
  )
}
