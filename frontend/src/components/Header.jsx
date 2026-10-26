import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import Logo from './Logo'
import { DIRECTIONS, H, NAV, PHONE_MAIN, tel } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const link = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition ${isActive ? 'text-primary' : 'text-charcoal/70 hover:text-primary'}`
  const mobileLink = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-[15px] font-medium ${isActive ? 'text-primary' : 'text-charcoal/70 hover:text-primary'}`
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white text-charcoal/70 border-b border-slate-200 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between gap-3">
          <a href={tel} className="hover:text-primary transition">{PHONE_MAIN}</a>
          <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="hidden sm:block hover:text-primary transition">{H.address}</a>
        </div>
      </div>
      <div className="bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link to="/" aria-label="Lilongwe Adventist Hospital — home" className="flex items-center shrink-0 justify-self-start transition-opacity hover:opacity-90"><Logo /></Link>
          <nav className="hidden lg:flex items-center justify-center gap-0.5">
            {NAV.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={link}>{l}</NavLink>)}
          </nav>
          <div className="flex items-center gap-2 justify-self-end">
            <Button to="/book" variant="teal" size="sm" className="hidden lg:inline-flex">Book an Appointment</Button>
            <button className="lg:hidden p-2 text-charcoal" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1" onClick={() => setOpen(false)}>
          {NAV.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={mobileLink}>{l}</NavLink>)}
          <Button to="/book" variant="teal" size="sm" className="mt-2 justify-center">Book an Appointment</Button>
        </div>}
      </div>
    </header>
  )
}
