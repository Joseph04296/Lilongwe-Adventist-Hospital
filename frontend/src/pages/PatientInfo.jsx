import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { FileText, Phone, Calendar, CreditCard, HelpCircle, AlertCircle, Check, ShieldCheck } from 'lucide-react'
import { PHONE_MAIN, tel } from '../data/site'

const ITEMS = [
  { icon: Calendar, title: 'Appointments', text: 'Appointments are by request. Contact our reception team by phone or use the online appointment request form. Specialist clinics run on scheduled days.' },
  { icon: FileText, title: 'What to Bring', text: 'Bring a valid ID, any referral letters, previous medical records if available, insurance details (if applicable), and a list of current medications.' },
  { icon: CreditCard, title: 'Payment & Insurance', text: 'We accept self-paying patients. For medical schemes and insurance, please contact our administration team before your visit to confirm acceptance and pre-authorisation requirements.' },
  { icon: AlertCircle, title: 'Emergency Care', text: 'Lilongwe Adventist Hospital operates 24 hours a day, 7 days a week for emergency care. Walk in or call +265 1 771 543 / +265 996 56 44 05.' },
  { icon: Phone, title: 'Visiting Hours', text: 'Please contact reception for current visiting hours and patient ward guidelines.' },
  { icon: HelpCircle, title: 'Frequently Asked Questions', text: 'For enquiries about services, specialist availability, or admission, please contact reception. Our team will be happy to assist.' },
]

const COVER_POINTS = [
  'Bring your insurance card and membership number on the day of your visit.',
  'Contact our administration team before your visit to confirm that your scheme is accepted.',
  'Some schemes require pre-authorisation before a consultation, procedure or admission.',
  'Keep your policy details, referral letters and valid ID together for a smooth check-in.',
]

export default function PatientInfo() {
  return (
    <>
      <PageHero
        kicker="Before your visit"
        title="Patient Information"
        text="Visiting & admission guidance for patients and visitors."
        src="/images/background.jpg"
        badge="Here to help"
        fullBleed
      />
      <Section bg="white">
        <SectionHeader eyebrow="Patient Information" title="Preparing for your visit" text="Helpful guidance for patients and visitors." />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {ITEMS.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-lg bg-teal-light text-teal-dark grid place-items-center"><item.icon size={20} /></span>
                <h3 className="font-bold text-lg text-charcoal">{item.title}</h3>
              </div>
              <p className="text-ink/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="bg-cloud py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="relative">
            <img
              src="/images/insurance.jpg"
              alt="Hospital administration and patient insurance information"
              className="w-full h-[320px] sm:h-[420px] rounded-3xl object-cover shadow-lg"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Payment &amp; Insurance</Eyebrow>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-charcoal">Check your cover before you visit</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Insurance benefits and provider requirements vary by policy. Please contact our administration team before your visit to check whether your scheme is accepted and what your cover includes.
            </p>
            <ul className="mt-6 space-y-4">
              {COVER_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink/70 leading-relaxed">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-light text-teal-dark"><Check size={14} /></span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
