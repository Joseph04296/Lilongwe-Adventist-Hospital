import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CalendarCheck, Check, Clock, MapPin, Phone, Stethoscope } from 'lucide-react'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { H, PHONE_MAIN, SERVICES, tel } from '../data/site'

const STEPS = [
  [CalendarCheck, 'Get in touch', 'Request an appointment online or call reception to arrange a visit.'],
  [Stethoscope, 'Consultation', 'Meet the clinical team for assessment, tests and clear advice on your options.'],
  [Check, 'Follow-up', 'Leave with a care plan, treatment or referral — and know where to return if you need us.'],
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero
        kicker="Our Services"
        title={service.title}
        text={service.overview}
        photo={service.photo}
        badge="By appointment"
      >
        <Button to="/book" variant="teal">Book an appointment <ArrowRight size={18} /></Button>
        <Button to="/services" variant="ghostLight">All services</Button>
      </PageHero>

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_350px] gap-12 lg:gap-16">
          <article>
            <Reveal>
              <div className="relative">
                <img
                  src="/images/medicine.jpg"
                  alt="Medicines and pharmacy supplies at Lilongwe Adventist Hospital"
                  className="w-full h-[280px] sm:h-[340px] lg:h-[400px] rounded-3xl object-cover"
                />
                <img
                  src="/images/appointment.jpg"
                  alt="Booking an appointment with our reception team"
                  className="hidden sm:block absolute -bottom-8 right-6 h-44 w-36 rounded-2xl border-4 border-white object-cover shadow-xl"
                />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-charcoal shadow-lg backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                  Open 24 hours, 7 days a week
                </span>
              </div>
            </Reveal>

            <div className="mt-16">
              <Eyebrow>Service overview</Eyebrow>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-charcoal">What is {service.title}?</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">{service.overview}</p>
            </div>

            <blockquote className="mt-8 rounded-r-2xl border-l-4 border-teal bg-mist px-6 py-6 md:px-8 md:py-7">
              <p className="font-display text-xl md:text-2xl leading-relaxed text-charcoal">
                Clear information and respectful care help every patient make confident decisions about their health.
              </p>
              <footer className="mt-3 text-sm font-semibold text-teal-dark">Lilongwe Adventist Hospital — care team</footer>
            </blockquote>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-bold text-charcoal">Conditions we treat</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {service.conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm leading-relaxed text-ink/70">
                    <span className="w-6 h-6 rounded-full bg-teal-light text-teal-dark grid place-items-center shrink-0 mt-0.5"><Check size={13} /></span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-bold text-charcoal">Treatments &amp; procedures</h3>
              <ul className="mt-5 space-y-3">
                {service.treatments.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-ink/70 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-teal-light text-teal-dark grid place-items-center shrink-0 mt-0.5"><Check size={13} /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <Eyebrow>What to expect</Eyebrow>
              <h3 className="mt-3 font-display text-2xl font-bold text-charcoal">How it works</h3>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {STEPS.map(([Icon, title, text], i) => (
                  <Reveal key={title} delay={i * 80} className="relative rounded-2xl bg-mist p-6">
                    <span className="absolute right-5 top-4 font-display text-3xl font-bold text-teal/30">{String(i + 1).padStart(2, '0')}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-teal-dark shadow-sm"><Icon size={18} /></span>
                    <p className="mt-4 font-bold text-charcoal">{title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{text}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Button to="/book" variant="teal">Book an appointment <ArrowRight size={18} /></Button>
              <Button href={tel} variant="outline"><Phone size={18} /> Call {PHONE_MAIN}</Button>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-32 h-fit">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-display text-xl font-bold text-charcoal">All services</h3>
              <nav className="mt-4 flex flex-col gap-1">
                {SERVICES.map(({ slug: s, title, icon: Icon }) => (
                  <Link
                    key={s}
                    to={`/services/${s}`}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      s === slug ? 'bg-teal-light font-semibold text-teal-dark' : 'text-ink/70 hover:bg-mist hover:text-primary'
                    }`}
                  >
                    <Icon size={16} className="shrink-0" />
                    {title}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-white">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal/20 blur-2xl" aria-hidden="true" />
              <div className="relative">
                <h3 className="font-display text-xl font-bold text-white">Need help choosing?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">Our reception team can help you find the right clinic and a time that works for you.</p>
                <a href={tel} className="mt-5 flex items-center gap-3 text-sm font-semibold text-white transition hover:text-teal">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10"><Phone size={16} /></span>
                  {PHONE_MAIN}
                </a>
                <p className="mt-3 flex items-start gap-3 text-sm text-white/70">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10"><MapPin size={16} /></span>
                  {H.address}
                </p>
                <Button to="/book" variant="teal" size="sm" className="mt-5 w-full justify-center">Book an appointment</Button>
              </div>
            </div>

            <div className="rounded-2xl bg-mist p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-teal-dark"><Clock size={15} /> Clinic schedule</p>
              <p className="mt-3 font-bold text-charcoal">{service.schedule}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/55">Appointment times are confirmed by our reception team.</p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow="Appointments"
        title="Ready to see a specialist?"
        text="Book a consultation with our team and get clear guidance on the care you need."
        photo="/images/happy-doc.jpg"
        alt="A clinician at Lilongwe Adventist Hospital"
      />
    </>
  )
}
