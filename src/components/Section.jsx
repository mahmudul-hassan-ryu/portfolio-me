import { motion } from 'framer-motion'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-white"
      >
        <span className="bg-gradient-to-r from-neon to-neon2 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      <div className="card p-6 md:p-8 card-hover">
        {children}
      </div>
    </section>
  )
}