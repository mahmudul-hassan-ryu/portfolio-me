import { motion } from 'framer-motion'
import Section from './Section'
import experience from '../data/experience.json'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.items.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-5 rounded-xl bg-[#0b1322] border border-[#1a2540]"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">{job.role} • <span className="text-neon">{job.company}</span></h3>
              <p className="text-sm text-gray-400">{job.period}</p>
            </div>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-300">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}