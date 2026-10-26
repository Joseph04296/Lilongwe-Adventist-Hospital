import { useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../components/Button'

const SLIDES = [
  { src: '/images/slider1.jpg', alt: 'Care team at Lilongwe Adventist Hospital' },
  { src: '/images/slider2.jpg', alt: 'Clinician with a patient at Lilongwe Adventist Hospital' },
  { src: '/images/slider3.jpg', alt: 'Doctor caring for a patient at Lilongwe Adventist Hospital' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  const go = (dir) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length)

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-charcoal">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Dark, low-opacity wash so the photograph stays clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1418]/75 via-[#0b1418]/45 to-[#0b1418]/20" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0b1418]/60 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-24">
        <h1 className="max-w-3xl font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-white">
          Your Health.<br /><span className="text-teal">Our Commitment.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
          Compassionate care. Professional service. Quality healthcare for individuals and families in Lilongwe — delivered with professionalism, respect and clarity. Open 24/7.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/services" variant="light" className="group">Explore Services <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></Button>
          <Button to="/book" variant="ghostLight">Book an Appointment</Button>
        </div>

        <div className="mt-14 flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition hover:border-white/60 hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-9 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition hover:border-white/60 hover:bg-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
