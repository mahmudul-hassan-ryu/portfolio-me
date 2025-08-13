import { motion } from 'framer-motion'
import Section from './Section'
import about from '../data/about.json'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="leading-relaxed text-gray-200"
        >
          {about.summary}
        </motion.p>
        <ul className="space-y-3">
          {about.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-neon"></span>
              <span className="text-gray-300">{h}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  )
}