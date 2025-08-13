import { motion } from 'framer-motion'
import Section from './Section'
import skills from '../data/skills.json'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-6">
        {skills.groups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="p-5 rounded-xl bg-[#0b1322] border border-[#1a2540] shadow-glow"
          >
            <h3 className="text-lg font-semibold mb-3 text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-[#0f1b2f] border border-[#1a2540] text-sm hover:border-neon/60">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}