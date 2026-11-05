import { useEffect, useState } from 'react'
import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import Button from '../components/Button'

const SLIDES = [
  { src: '/images/slider1.jpg', alt: 'Care team at Lilongwe Adventist Hospital' },
  { src: '/images/hero.jpg', alt: 'Clinician with a patient at Lilongwe Adventist Hospital' },
  { src: '/images/hero6.jpg', alt: 'Doctor caring for a patient at Lilongwe Adventist Hospital' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((current) => (current + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex min-h-[min(780px,calc(100svh-108px))] items-center overflow-hidden bg-charcoal">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1200ms] ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071b26]/85 via-[#071b26]/55 to-[#071b26]/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071b26]/55 via-transparent to-[#071b26]/10" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 pb-24 pt-20 md:min-h-[min(780px,calc(100svh-108px))] md:pb-28 md:pt-24">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 shadow-lg backdrop-blur-md">
            <MapPin size={14} className="text-teal" />
            Presidential Way, Lilongwe
            <span className="mx-1 h-1 w-1 rounded-full bg-white/50" aria-hidden="true" />
            <Clock3 size={14} className="text-teal" />
            Open 24/7
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
            Compassionate care,
            <span className="mt-1 block text-teal">close to home.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Professional healthcare for individuals and families in Lilongwe, delivered with dignity, respect and a personal touch.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/book" variant="teal" className="group">Book an appointment <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></Button>
            <Button to="/services" variant="ghostLight">Explore our services</Button>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/80">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-teal"><Clock3 size={17} /></span>
            <span><span className="font-semibold text-white">Here for you, day and night.</span><span className="hidden sm:inline"> Emergency and outpatient care, every day.</span></span>
          </div>
        </div>

      </div>
    </section>
  )
}
