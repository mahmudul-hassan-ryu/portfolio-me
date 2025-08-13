import { motion } from 'framer-motion'
import Section from './Section'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.items.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-5 rounded-xl bg-[#0b1322] border border-[#1a2540] hover:border-neon/60"
          >
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              {p.links.map((l, i) => (
                <a key={i} href={l.url} className="text-neon hover:underline">{l.label}</a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}