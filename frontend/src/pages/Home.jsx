import Hero from '../sections/Hero'
import FeaturedServices from '../sections/FeaturedServices'
import CtaBand from '../components/CtaBand'
import WhyChooseUs from '../sections/WhyChooseUs'
import { ArrowRight, Calendar, FileText, MapPin, Stethoscope, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const QUICK_LINKS = [
  { icon: Stethoscope, title: 'Services', text: 'View all departments and services', to: '/services' },
  { icon: Calendar, title: 'Clinic Schedules', text: 'Specialist clinic days and times', to: '/book' },
  { icon: Users, title: 'Doctors', text: 'Meet our medical team', to: '/doctors' },
  { icon: FileText, title: 'Patient Information', text: 'Visiting, admission & guidance', to: '/patient-info' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_-32px_rgba(8,58,84,.28)] sm:p-7">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-teal-dark">Patient access</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-charcoal sm:text-2xl">What can we help you with?</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <Link to={item.to} className="group flex h-full items-center gap-4 rounded-xl p-3 transition hover:bg-cloud sm:p-4 lg:rounded-none lg:border-r lg:border-slate-200 lg:last:border-0">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-light text-teal-dark transition group-hover:bg-primary group-hover:text-white"><item.icon size={21} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-charcoal">{item.title}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-ink/60">{item.text}</span>
                  </span>
                  <ArrowRight size={16} className="shrink-0 text-primary/50 transition group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cloud py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-3xl bg-teal-light" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img src="/images/about.jpg" alt="A group of healthcare professionals" className="h-[320px] w-full object-cover sm:h-[440px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2530]/50 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/75">Lilongwe Adventist Hospital</p>
                  <p className="mt-1 font-display text-2xl font-semibold sm:text-3xl">Care with purpose.</p>
                </div>
                <span className="hidden rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm font-medium backdrop-blur-md sm:inline-flex">Est. 1983</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-dark">Rooted in Lilongwe</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-5xl">Healthcare that feels closer to home.</h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              Founded in 1983, Lilongwe Adventist Hospital is a private healthcare facility on Presidential Way. We care for individuals and families through inpatient and outpatient services, with a commitment to dignity, respect and clear communication.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-ink/70">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-teal-dark shadow-sm"><MapPin size={18} /></span>
              Presidential Way, Lilongwe, Malawi
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark">Discover our story <ArrowRight size={16} /></Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-semibold text-primary transition hover:border-primary/50 hover:bg-primary/5">Explore services</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <FeaturedServices />
      <CtaBand
        eyebrow="Appointments & enquiries"
        title="Let’s get you the care you need."
        text="Our reception team can help you find the right specialist and arrange your visit."
        photo="/images/nurse.jpg"
        alt="A nurse at Lilongwe Adventist Hospital"
      />
      <WhyChooseUs />
    </>
  )
}
