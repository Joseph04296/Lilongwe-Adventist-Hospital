import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import { FileText, Phone, Calendar, CreditCard, HelpCircle, AlertCircle } from 'lucide-react'
import Button from '../components/Button'

const ITEMS = [
  { icon: Calendar, title: 'Appointments', text: 'Appointments are by request. Contact our reception team by phone or use the online appointment request form. Specialist clinics run on scheduled days.' },
  { icon: FileText, title: 'What to Bring', text: 'Bring a valid ID, any referral letters, previous medical records if available, insurance details (if applicable), and a list of current medications.' },
  { icon: CreditCard, title: 'Payment & Insurance', text: 'We accept self-paying patients. For medical schemes and insurance, please contact our administration team before your visit to confirm acceptance and pre-authorisation requirements.' },
  { icon: AlertCircle, title: 'Emergency Care', text: 'Lilongwe Adventist Hospital operates 24 hours a day, 7 days a week for emergency care. Walk in or call +265 1 771 543 / +265 996 56 44 05.' },
  { icon: Phone, title: 'Visiting Hours', text: 'Please contact reception for current visiting hours and patient ward guidelines.' },
  { icon: HelpCircle, title: 'Frequently Asked Questions', text: 'For enquiries about services, specialist availability, or admission, please contact reception. Our team will be happy to assist.' },
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
        <div className="mt-10 text-center">
          <Button to="/book">Request an Appointment</Button>
        </div>
      </Section>
    </>
  )
}
