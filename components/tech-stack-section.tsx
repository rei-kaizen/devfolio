"use client"

import { motion } from "framer-motion"

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", color: "from-yellow-300 to-cyan-400" },           // radiant + cool
      { name: "Arduino C", color: "from-cyan-300 to-indigo-500" },        // electric & circuit-like
      { name: "JavaScript", color: "from-amber-400 to-rose-500" },        // bright cosmic heat
      { name: "Java", color: "from-orange-500 to-red-600" },              // blazing core
      { name: "PHP", color: "from-slate-400 to-indigo-600" },             // lunar gray-purple
      { name: "TypeScript", color: "from-sky-400 to-indigo-500" },        // structured & electric
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", color: "from-emerald-400 to-indigo-500" },       // modern + space glow
      { name: "Flask", color: "from-slate-500 to-indigo-700" },           // stealthy cosmic mist
      { name: "React", color: "from-indigo-500 to-blue-600" },         // magnetic waves
      { name: "Node.js", color: "from-lime-400 to-emerald-500" },         // vibrant tech beam
      { name: "Django", color: "from-zinc-500 to-slate-700" },           // cosmic dust
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", color: "from-blue-400 to-indigo-600" },       // data deep sea
      { name: "MongoDB", color: "from-green-400 to-teal-500" },           // natural nebula
      { name: "MySQL", color: "from-orange-400 to-yellow-500" },          // classic starlight
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", color: "from-rose-500 to-orange-500" },              // solar flare
      { name: "GitHub", color: "from-gray-700 to-purple-900" },            // deep space void
      { name: "VS Code", color: "from-indigo-400 to-blue-500" },          // code nebula
      { name: "Pycharm", color: "from-teal-300 to-cyan-500" },            // sharp and smart
      { name: "Android Studio", color: "from-emerald-400 to-green-600" }, // vibrant core tech
      { name: "Capacitor/Cordova", color: "from-purple-500 to-fuchsia-600" }, // plasma beam
    ],
  },
  {
    title: "Others",
    items: [
      { name: "ShadCN", color: "from-amber-300 to-orange-500" },        // ignition burst
      { name: "Supabase", color: "from-emerald-400 to-cyan-500" },        // sci-fi platform
      { name: "Arduino", color: "from-teal-400 to-blue-500" },            // electric ripple
      { name: "Figma", color: "from-pink-500 to-fuchsia-600" },           // UI nebula
    ],
  },
]

export default function TechStackSection() {
  return (
    <section id="tech" className="py-20 relative">
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
              Tech Stack
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 text-center">{category.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/item cursor-pointer"
                    >
                      <div
                        className={`bg-gradient-to-r ${item.color} p-3 rounded-lg text-center text-white font-medium text-sm shadow-lg group-hover/item:shadow-xl transition-all duration-300`}
                      >
                        {item.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
