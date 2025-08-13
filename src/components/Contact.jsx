import Section from './Section'
import site from '../data/site.json'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const data = new FormData(e.currentTarget)
    // Formspree endpoint placeholder; user can replace later
    const endpoint = 'https://formspree.io/f/moqgvqkw' // demo endpoint; please replace with your own
    const res = await fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <Section id="contact" title="Contact">
      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
        <input required name="name" placeholder="Your name" className="px-4 py-3 rounded-xl bg-[#0f1625] border border-[#1a2540]" />
        <input required name="email" type="email" placeholder="Your email" className="px-4 py-3 rounded-xl bg-[#0f1625] border border-[#1a2540]" />
        <textarea required name="message" placeholder="Your message" className="md:col-span-2 px-4 py-3 h-32 rounded-xl bg-[#0f1625] border border-[#1a2540]"></textarea>
        <div className="md:col-span-2 flex items-center gap-3">
          <button className="px-5 py-3 rounded-xl bg-neon/20 border border-neon hover:bg-neon/30 transition">
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          <p className="text-sm text-gray-400">or email: <a className="text-neon" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        {status === 'success' && <p className="text-green-400 md:col-span-2">Thanks! Your message was sent.</p>}
        {status === 'error' && <p className="text-red-400 md:col-span-2">Sorry, something went wrong. Try again.</p>}
      </form>
    </Section>
  )
}