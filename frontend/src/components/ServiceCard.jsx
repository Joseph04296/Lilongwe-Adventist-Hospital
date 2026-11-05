import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Photo from './Photo'

export default function ServiceCard({ service, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Photo id={service.photo} icon={service.icon} alt={service.title} className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2530]/40 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute bottom-4 left-5 grid h-12 w-12 place-items-center rounded-xl bg-white text-primary shadow-lg"><service.icon size={22} /></span>
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="mb-2 font-display text-xl font-semibold text-charcoal sm:text-2xl">{service.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-ink/65">{service.text}</p>
        <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-1 font-semibold text-teal-dark transition group-hover:text-primary">
          Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  )
}
