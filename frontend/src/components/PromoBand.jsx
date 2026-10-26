import { ArrowRight, Phone } from 'lucide-react'
import Button from './Button'
import { tel } from '../data/site'

export default function PromoBand({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0 dots-w opacity-30" aria-hidden="true" />
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-teal/20 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5 py-20 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
        <div className="lg:flex-1">
          <p className="text-xs font-extrabold tracking-[.2em] uppercase text-teal">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">{title}</h2>
          <p className="mt-4 text-white/75 text-lg leading-relaxed max-w-2xl">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:shrink-0">
          <Button to="/book" variant="teal">Book an appointment <ArrowRight size={18} /></Button>
          <Button href={tel} variant="ghostLight"><Phone size={18} /> Call us</Button>
        </div>
      </div>
    </section>
  )
}
