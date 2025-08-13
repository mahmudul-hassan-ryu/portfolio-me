import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import site from '../data/site.json'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function App() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 backdrop-blur bg-[#0a0f1a]/70 border-b border-[#1a2540] z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold text-white">{site.name.split(' ')[0]}</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-neon">About</a>
            <a href="#skills" className="hover:text-neon">Skills</a>
            <a href="#experience" className="hover:text-neon">Experience</a>
            <a href="#projects" className="hover:text-neon">Projects</a>
            <a href="#contact" className="hover:text-neon">Contact</a>
          </div>
          <div className="flex gap-3">
            <a href={site.socials[0].url} aria-label="LinkedIn" className="hover:text-neon"><FaLinkedin size={20} /></a>
            <a href={site.socials[1].url} aria-label="Facebook" className="hover:text-neon"><FaFacebook size={20} /></a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="mt-16 py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </div>
  )
}