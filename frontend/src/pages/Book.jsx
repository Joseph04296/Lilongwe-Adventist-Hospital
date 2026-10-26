import { useState } from 'react'
import { CalendarCheck, Clock, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { SERVICES, H } from '../data/site'

const SCHEDULE = [
  { specialty: 'Surgery', days: 'Monday to Friday' },
  { specialty: 'Dental', days: 'Monday to Friday (Friday half-day)' },
  { specialty: 'Ophthalmology', days: 'Monday, Thursday, Friday half-day' },
  { specialty: 'Nutrition / Lifestyle', days: 'Monday, Tuesday, Thursday' },
  { specialty: 'Orthopedic', days: 'Tuesday, Wednesday, Thursday, Sunday' },
  { specialty: 'Gynecology', days: 'Tuesday and Friday afternoon' },
]

export default function Book() {
  const [sent, setSent] = useState(false)
  const [reference, setReference] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const f = 'w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20'

  const submit = async (e) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Something went wrong. Please try again or call us.')
      setReference(body.reference)
      setSent(true)
    } catch (x) {
      setError(x.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <PageHero
        kicker="Appointments"
        title="Book an Appointment"
        text="Request an appointment and our reception team will contact you to confirm."
        src="/images/insurance.jpg"
        badge="Reception open 24/7"
        fullBleed
      />
      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-5 gap-10">
        <form className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 space-y-4" onSubmit={submit}>
          {sent ? (
            <div className="py-10 text-center"><span className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center mx-auto mb-4"><CalendarCheck size={30} /></span><h3 className="font-display text-3xl font-bold text-charcoal">Request received</h3><p className="text-ink/65 mt-2">Your reference is <b className="text-primary">{reference}</b>. Our reception team will contact you to confirm a time.</p></div>
          ) : (
            <>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-2">Request an appointment</h2>
              <input required name="name" className={f} placeholder="Full name" />
              <input required name="phone" type="tel" className={f} placeholder="Phone number" />
              <select name="service" className={f} defaultValue=""><option value="" disabled>Department</option>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}</select>
              <input name="preferred_date" type="date" className={f} />
              <textarea name="message" rows="4" className={f} placeholder="Anything we should know? (optional)" />
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              {error && <p className="text-sm text-red-600 font-semibold">{error}</p>}
              <Button type="submit" size="lg" disabled={busy}>{busy ? 'Sending…' : 'Request appointment'}</Button>
              <p className="text-xs text-ink/60">For emergencies, call us or walk in. Open 24/7.</p>
            </>
          )}
        </form>
        <aside className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-lg text-charcoal">Contact Details</h3>
            <p className="flex items-start gap-3 text-ink/70"><MapPin size={18} className="text-primary mt-0.5" /><span>{H.address}</span></p>
            <p className="flex items-start gap-3 text-ink/70"><Phone size={18} className="text-primary mt-0.5" /><span>{H.phone}</span></p>
            <p className="flex items-start gap-3 text-ink/70"><Clock size={18} className="text-primary mt-0.5" /><span>24 hours a day, 7 days a week</span></p>
            <p className="flex items-start gap-3 text-ink/70"><CalendarCheck size={18} className="text-primary mt-0.5" /><span>Email: {H.email}</span></p>
          </div>
          <iframe title="Map" loading="lazy" className="w-full h-64 rounded-2xl border-0" src="https://www.google.com/maps?q=Presidential+Way+Lilongwe+Malawi&output=embed" />
        </aside>
      </section>

      <section className="bg-cloud py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-teal-dark" size={20} />
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-dark">Care when you need it</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">24/7 Emergency &amp; Outpatient Care</h2>
            <p className="text-ink/70 leading-relaxed mb-6">Lilongwe Adventist Hospital operates 24 hours a day, 7 days a week, offering both inpatient and outpatient services. For urgent concerns, walk in or call us directly.</p>
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-sm">
              <p className="font-bold text-charcoal">Emergency Contacts</p>
              <p className="text-ink/70">Phone: <a href="tel:+2651771543" className="text-teal-dark font-semibold hover:underline">+265 1 771 543</a> / <a href="tel:+265996564405" className="text-teal-dark font-semibold hover:underline">+265 996 56 44 05</a></p>
              <p className="text-ink/70">Email: <a href="mailto:infor@ahcl.adventist.org" className="text-teal-dark font-semibold hover:underline">infor@ahcl.adventist.org</a></p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-primary text-white px-6 py-4">
                <h3 className="font-bold text-lg">Specialist Clinic Schedule (By Appointment)</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {SCHEDULE.map((item) => (
                  <div key={item.specialty} className="flex justify-between px-6 py-4">
                    <p className="font-semibold text-charcoal">{item.specialty}</p>
                    <p className="text-ink/70 text-sm text-right">{item.days}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
