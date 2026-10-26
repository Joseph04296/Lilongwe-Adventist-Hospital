import { ArrowRight } from 'lucide-react'
import Photo from './Photo'
import Eyebrow from './Eyebrow'
import Button from './Button'
import { P } from '../data/site'

export default function CtaBand({ eyebrow, title, text, photo = P.emergency, alt = '' }) {
  return (
    <section className="overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:min-h-[520px]">
        <div className="relative flex items-center bg-gradient-to-br from-primary via-primary to-primary-dark px-5 py-16 sm:px-8 lg:py-24 lg:pl-[max(1.25rem,calc((100vw_-_80rem)/2_+_1.25rem))] lg:pr-16">
          <div className="absolute inset-0 dots-w opacity-40" aria-hidden="true" />
          <div className="relative max-w-xl">
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">{title}</h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">{text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/book" variant="teal">Book an appointment <ArrowRight size={18} /></Button>
              <Button to="/book" variant="ghostLight">Contact us</Button>
            </div>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-full">
          <Photo src={photo} alt={alt} className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  )
}
