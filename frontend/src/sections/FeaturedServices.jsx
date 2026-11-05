import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import Button from '../components/Button'
import { FEATURED } from '../data/site'

export default function FeaturedServices() {
  return (
    <Section bg="white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeader
          eyebrow="Care, all in one place"
          title="Care for every part of life"
          text="From specialist clinics to essential diagnostics, find the care and support you need at our hospital."
        />
        <Button to="/services" variant="outline" className="shrink-0">
          View All Services <ArrowRight size={18} />
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {FEATURED.map((s, i) => (
          <Reveal key={s.title} delay={i * 100} className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
              <Photo id={s.photo} icon={s.icon} alt={s.title} className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2530]/40 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute bottom-4 left-5 grid h-12 w-12 place-items-center rounded-xl bg-white text-primary shadow-lg"><s.icon size={22} /></span>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="mb-2 font-display text-xl font-semibold text-charcoal sm:text-2xl">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-ink/65">{s.text}</p>
              <Link to="/services" className="inline-flex items-center gap-1 font-semibold text-teal-dark transition group-hover:text-primary">Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
