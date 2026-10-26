import { ArrowRight, Clock, FlaskConical, HeartHandshake, Stethoscope } from 'lucide-react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'

const REASONS = [
  { icon: Stethoscope, title: 'Qualified Doctors', text: 'Experienced clinicians and specialists across our departments.' },
  { icon: HeartHandshake, title: 'Patient-Centred Care', text: 'Respect, dignity and clear communication at every visit.' },
  { icon: FlaskConical, title: 'On-site Diagnostics', text: 'Laboratory, radiology/X-ray and ultrasound under one roof.' },
  { icon: Clock, title: 'Open 24/7', text: 'Emergency and outpatient care, every day of the year.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-mist py-24">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-5">Trusted private healthcare in the heart of Lilongwe.</h2>
          <p className="text-ink/70 text-lg leading-relaxed">For over four decades, Lilongwe Adventist Hospital has cared for individuals and families across Malawi — combining experienced clinicians, on-site diagnostics and a commitment to treating every patient with dignity.</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 mt-9">
            {REASONS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-teal-light text-teal-dark grid place-items-center shadow-sm"><Icon size={20} /></span>
                <div>
                  <p className="font-bold text-charcoal">{title}</p>
                  <p className="text-sm text-ink/60 mt-1 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button to="/about" className="mt-10">Discover More <ArrowRight size={18} /></Button>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="flex gap-4 sm:gap-5 lg:pl-6">
            <img
              src="/images/hero.jpg"
              alt="Doctor consulting a family at Lilongwe Adventist Hospital"
              className="w-1/2 h-[340px] sm:h-[460px] lg:h-[540px] rounded-2xl object-cover shadow-xl"
            />
            <div className="w-1/2 flex flex-col gap-4 sm:gap-5 h-[340px] sm:h-[460px] lg:h-[540px]">
              <img src="/images/about.jpg" alt="Doctors at Lilongwe Adventist Hospital" className="flex-1 min-h-0 w-full rounded-2xl object-cover shadow-lg" />
              <img src="/images/cc.jpg" alt="Dental care at Lilongwe Adventist Hospital" className="flex-1 min-h-0 w-full rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
