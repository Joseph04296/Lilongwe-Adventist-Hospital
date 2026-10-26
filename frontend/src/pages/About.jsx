import { ArrowRight, BedDouble, CalendarDays, Check, Clock, Eye, HeartHandshake, HeartPulse, MessagesSquare, ShieldCheck, Stethoscope, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'

const STATS = [
  { icon: CalendarDays, value: '1983', label: 'Founded' },
  { icon: Clock, value: '24/7', label: 'Open every day' },
  { icon: BedDouble, value: '15–17', label: 'Inpatient beds' },
  { icon: Stethoscope, value: '7', label: 'Specialist services' },
]

const PILLARS = [
  { icon: Target, title: 'Our Mission', body: 'To provide quality healthcare with compassion, professionalism and respect for every patient.' },
  { icon: Eye, title: 'Our Vision', body: 'To be a trusted healthcare provider known for patient-centred care and continuous improvement.' },
]

const VALUES = ['Compassion', 'Integrity', 'Professionalism', 'Respect', 'Patient safety']

const APPROACH = [
  [HeartHandshake, 'Respect for every patient', 'Create a welcoming experience in which patients are treated with dignity.'],
  [MessagesSquare, 'Clear communication', 'Help patients understand their care options and where to seek assistance.'],
  [HeartPulse, 'Patient wellbeing', 'Keep the patient\u2019s needs and wellbeing central to the care experience.'],
  [ShieldCheck, 'Professional practice', 'Present accurate information about services, staff qualifications and care arrangements.'],
]

export default function About() {
  return (
    <>
      <PageHero
        kicker="Our Story"
        title="About Lilongwe Adventist Hospital"
        text="A private hospital on Presidential Way, caring for individuals and families in Lilongwe around the clock since 1983."
        src="/images/hero1.jpg"
        badge="Since 1983"
        fullBleed
      >
        <Button to="/services" variant="teal">Explore Our Services <ArrowRight size={18} /></Button>
        <Button to="/book" variant="ghostLight">Book an appointment</Button>
      </PageHero>

      <section className="max-w-7xl mx-auto px-5 py-24 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="dots absolute -left-5 -top-5 hidden h-24 w-24 rounded-2xl sm:block" aria-hidden="true" />
          <img src="/images/about.jpg" alt="Lilongwe Adventist Hospital care team" className="relative w-full h-[420px] lg:h-[500px] rounded-[1.75rem] object-cover shadow-xl" />
          <img src="/images/servicepage.jpg" alt="Clinical care at Lilongwe Adventist Hospital" className="hidden sm:block absolute -bottom-10 -right-6 h-56 w-44 rounded-2xl border-4 border-white object-cover shadow-xl" />
          <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-[10px] uppercase tracking-[.16em] text-teal-dark">Medical Director</p>
            <p className="mt-1 font-bold text-charcoal">Elmoore Kamwendo</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-5">Healthcare with purpose, close to home.</h2>
          <p className="text-ink/70 text-lg leading-relaxed">Lilongwe Adventist Hospital is a private healthcare facility located on Presidential Way in Lilongwe, Malawi. Founded in 1983, it operates 24 hours a day, 7 days a week, offering both inpatient and outpatient services.</p>
          <p className="text-ink/70 text-lg leading-relaxed mt-4">From everyday consultations to specialist care, our focus is on treating every patient with dignity, clear communication and professionalism.</p>
          <div className="mt-9 grid grid-cols-2 gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-2xl bg-mist p-5">
                <Icon size={18} className="text-teal-dark" />
                <p className="mt-3 font-display text-3xl font-bold leading-none text-charcoal">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/55">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-mist py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Our Foundation</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3">Mission, vision &amp; values</h2>
            <p className="mt-4 text-lg text-ink/65">The principles that guide our care and service to the community.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80} className="rounded-3xl bg-white p-8 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-light text-teal-dark"><Icon size={22} /></span>
                <h3 className="mt-6 font-display text-2xl font-bold text-charcoal">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink/65">{body}</p>
              </Reveal>
            ))}
            <Reveal delay={160} className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-lg">
              <div className="absolute inset-0 dots-w opacity-30" aria-hidden="true" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-teal"><ShieldCheck size={22} /></span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">Our Values</h3>
                <ul className="mt-4 space-y-3">
                  {VALUES.map((v) => (
                    <li key={v} className="flex items-center gap-3 text-white/85">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-charcoal"><Check size={13} /></span>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-24">
        <div className="max-w-3xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3">Our approach to patient care</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">Principles that shape the experience we aim to provide at every visit.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {APPROACH.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 80} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="absolute right-6 top-5 font-display text-4xl font-bold text-teal/25">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-light text-teal-dark"><Icon size={20} /></span>
                <div className="pr-8">
                  <p className="font-bold text-charcoal">{t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Visit Us"
        title="Your healthcare journey starts here."
        text="Explore the services available at Lilongwe Adventist Hospital or contact the hospital to enquire about your healthcare needs."
        photo="/images/insurance.jpg"
        alt="Doctor consulting a patient at Lilongwe Adventist Hospital"
      />
    </>
  )
}
