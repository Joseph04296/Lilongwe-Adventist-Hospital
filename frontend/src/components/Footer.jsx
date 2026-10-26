import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { H, tel, NAV } from '../data/site'
import Logo, { LogoMark } from './Logo'

const FOOTER_SERVICES = [
  ['Ophthalmology', 'ophthalmology'],
  ['Dental Care', 'dental-care'],
  ['Obstetrics & Gynaecology', 'obstetrics-gynaecology'],
  ['Surgical Services', 'surgical-services'],
  ['Internal Medicine', 'internal-medicine'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white/80">
      <LogoMark mono className="pointer-events-none absolute -bottom-20 -right-14 -z-10 h-72 w-72 text-white/[0.05] sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]" />
      <div className="relative max-w-7xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div>
          <Link to="/" aria-label="Lilongwe Adventist Hospital — home" className="mb-4 flex items-center transition-opacity hover:opacity-90"><Logo light /></Link>
          <p className="leading-relaxed text-white/70">A private healthcare facility on Presidential Way in Lilongwe, Malawi. Providing quality care 24/7.</p>
        </div>
        <div>
          <p className="font-bold text-teal mb-3">Quick Links</p>
          <div className="flex flex-col gap-2">{NAV.map(([to, l]) => <Link key={to} to={to} className="transition hover:text-teal">{l}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold text-teal mb-3">Services</p>
          <div className="flex flex-col gap-2">{FOOTER_SERVICES.map(([l, slug]) => <Link key={slug} to={`/services/${slug}`} className="transition hover:text-teal">{l}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold text-teal mb-3">Contact</p>
          <p className="flex flex-col gap-2 text-white/70"><span><MapPin size={14} className="inline mr-2 text-teal/80" />{H.address}</span><span><Phone size={14} className="inline mr-2 text-teal/80" /><a href={tel} className="hover:text-teal">{H.phone}</a></span><span><Mail size={14} className="inline mr-2 text-teal/80" />{H.email}</span></p>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© 2026 Lilongwe Adventist Hospital. All rights reserved.</p>
      </div>
    </footer>
  )
}
