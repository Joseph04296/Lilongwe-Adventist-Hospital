import { CalendarCheck, Siren, Stethoscope } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import PromoBand from '../components/PromoBand'
import { SERVICES } from '../data/site'

const ACCESS = [
  [Siren, '24/7 Care', 'Open 24 hours a day, 7 days a week for inpatient and outpatient services.'],
  [CalendarCheck, 'Appointments', 'Request a time and our reception confirms the details.'],
  [Stethoscope, 'Specialist Clinics', 'Specialist clinics available by appointment as per schedule.'],
]

export default function Services() {
  return (
    <>
      <PageHero
        kicker="What we offer"
        title="Services"
        text="Explore our healthcare services and find the information you need before your visit."
        src="/images/servicehero.jpg"
        badge="7 specialist services"
        fullBleed
      />

      <Section bg="white">
        <SectionHeader eyebrow="Getting started" title="How to access care" text="Choose the route that fits your needs — whether it’s a routine consultation, an urgent concern or a referral." />
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {ACCESS.map(([Icon, t, d]) => (
            <div key={t} className="flex gap-4 rounded-2xl border border-slate-200 p-6">
              <span className="w-11 h-11 rounded-xl bg-teal-light text-teal-dark grid place-items-center shrink-0"><Icon size={20} /></span>
              <div><p className="font-bold text-primary">{t}</p><p className="text-sm text-ink/60 mt-1 leading-relaxed">{d}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="cloud">
        <SectionHeader className="mb-12" eyebrow="What we offer" title="Our services" text="Browse our departments and treatments. Open any service to learn more and how to get prepared for your visit." />
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} delay={(i % 3) * 100} />)}
        </div>
      </Section>

      <PromoBand eyebrow="Need a hand?" title="Not sure which service to choose?" text="Send us an appointment request or call, and our team will point you to the right service and help you get prepared for your visit." />
    </>
  )
}
