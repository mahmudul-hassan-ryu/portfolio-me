import { motion } from 'framer-motion'
import Typed from 'react-typed'
import site from '../data/site.json'
import avatar from '../assets/avatar.svg'

export default function Hero() {
  return (
    <header className="pt-20 md:pt-28 pb-10 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1.2fr_1fr] items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-neon">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-3">
            {site.name}
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl text-gray-300">{site.role}</h2>
          <div className="mt-4 text-lg md:text-xl">
            <Typed
              strings={site.typed}
              typeSpeed={40}
              backSpeed={22}
              backDelay={1500}
              loop
            />
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-neon/20 border border-neon hover:bg-neon/30 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-neon2/20 border border-neon2 hover:bg-neon2/30 transition">
              Contact
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img src={avatar} alt="Avatar" className="w-48 md:w-60 rounded-full ring-2 ring-neon/70 shadow-glow2" />
        </motion.div>
      </div>
    </header>
  )
}