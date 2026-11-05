import { ArrowRight, PhoneCall } from 'lucide-react'
import Button from './Button'
import { tel } from '../data/site'
import { Clock3 } from 'lucide-react'

export default function CtaBand({ eyebrow, title, text, photo, alt = '' }) {
  return (
    <section className="bg-teal-light px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#e9f3f7] shadow-[0_24px_70px_-38px_rgba(8,58,84,.4)] lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex items-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-dark">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/book">Book an appointment <ArrowRight size={18} /></Button>
              <Button href={tel} variant="outline"><PhoneCall size={17} /> Call reception</Button>
            </div>
            <div className="mt-7 flex items-center gap-2 text-sm font-medium text-primary/80">
              <Clock3 size={17} className="text-teal-dark" />
              Open 24 hours a day, 7 days a week
            </div>
          </div>
        </div>
        <div className="relative min-h-[260px] lg:min-h-[440px]">
          <img src={photo} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2530]/35 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#e9f3f7]/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
