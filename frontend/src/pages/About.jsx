import { ArrowRight, BedDouble, CalendarDays, Clock, Eye, HeartHandshake, HeartPulse, MessagesSquare, ShieldCheck, Stethoscope, Target } from 'lucide-react'
import PageHero from '../components/PageHero'
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

function FoundationCard({ icon: Icon, title, body, index, delay }) {
  return (
    <Reveal delay={delay} className="relative flex flex-col overflow-hidden rounded-3xl bg-charcoal p-8 text-white shadow-lg lg:p-10">
      <div className="absolute inset-0 dots-w opacity-25" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-teal/15 blur-2xl" aria-hidden="true" />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15"><Icon size={22} /></span>
          <span className="font-display text-4xl font-bold text-white/10">{index}</span>
        </div>
        <h3 className="mt-8 font-display text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 leading-relaxed text-white/70">{body}</p>
        <span className="mt-8 h-1 w-12 rounded-full bg-teal" aria-hidden="true" />
      </div>
    </Reveal>
  )
}

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
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3 mb-5">Healthcare with purpose, close to home.</h2>
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
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3">Our mission &amp; vision</h2>
            <p className="mt-4 text-lg text-ink/65">The principles that guide our care and service to the community.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            <FoundationCard {...PILLARS[0]} index="01" delay={0} />

            <Reveal delay={80} className="relative min-h-[320px] overflow-hidden rounded-3xl lg:min-h-full">
              <img src="/images/nurse.jpg" alt="A nurse caring for a patient at Lilongwe Adventist Hospital" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1418]/85 via-[#0b1418]/15 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-teal">Since 1983</p>
                <p className="mt-1.5 font-display text-xl font-bold leading-snug">Care with purpose, close to home.</p>
              </div>
            </Reveal>

            <FoundationCard {...PILLARS[1]} index="02" delay={160} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-24">
        <div className="max-w-3xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-3">Our approach to patient care</h2>
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
    </>
  )
}
