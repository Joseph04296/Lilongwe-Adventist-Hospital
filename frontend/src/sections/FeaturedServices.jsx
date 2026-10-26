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
        <SectionHeader eyebrow="What we offer" title="Services" />
        <Button to="/services" variant="outline" className="shrink-0">
          View All Services <ArrowRight size={18} />
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {FEATURED.map((s, i) => (
          <Reveal key={s.title} delay={i * 100} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition">
            <div className="relative h-64 overflow-hidden"><Photo id={s.photo} icon={s.icon} alt={s.title} className="absolute inset-0 w-full h-full" /></div>
            <div className="p-7">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed mb-5">{s.text}</p>
              <Link to="/services" className="inline-flex items-center gap-1 font-semibold text-teal-dark hover:text-primary transition">Learn More <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
