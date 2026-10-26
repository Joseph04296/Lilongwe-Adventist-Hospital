import Hero from '../sections/Hero'
import FeaturedServices from '../sections/FeaturedServices'
import CtaBand from '../components/CtaBand'
import WhyChooseUs from '../sections/WhyChooseUs'
import { Calendar, Stethoscope, Users, FileText } from 'lucide-react'
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
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-dark">Patient Access</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-2">How can we help you?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_LINKS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Link to={item.to} className="block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition h-full">
                <span className="w-11 h-11 rounded-lg bg-teal-light text-teal-dark grid place-items-center"><item.icon size={22} /></span>
                <h3 className="font-bold text-lg text-charcoal mt-4">{item.title}</h3>
                <p className="text-sm text-ink/65 mt-1">{item.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-cloud py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-dark mb-3">About Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Compassionate Care Since 1983</h2>
              <p className="text-ink/70 leading-relaxed mb-6">Lilongwe Adventist Hospital is a private healthcare facility located on Presidential Way in Lilongwe, Malawi. Founded in 1983, it operates 24 hours a day, 7 days a week, offering both inpatient and outpatient services with a commitment to quality, dignity, and professionalism.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition">Learn More About Us</Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/5 transition">Our Services</Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/about.jpg" alt="Lilongwe Adventist Hospital" className="w-full h-[380px] object-cover" />
                <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                  <p className="font-display text-2xl font-bold leading-none text-charcoal">1983</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[.16em] text-teal-dark">Caring since</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <FeaturedServices />
      <CtaBand
        eyebrow="Patient Services"
        title="Ready to book an appointment?"
        text="Contact our reception team to schedule a consultation with the right specialist."
        photo="/images/servicepage.jpg"
        alt="Lilongwe Adventist Hospital care"
      />
      <WhyChooseUs />
    </>
  )
}
