import { useId } from 'react'

const PULSE = 'M8.5 25H16.5L20 18.5L24.5 31.5L28 22.5L30.5 27.5H39.5'

export function LogoMark({ className = 'h-9 w-9 sm:h-10 sm:w-10', mono = false }) {
  const rawId = useId()
  const gradientId = `lah-mark-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`

  if (mono) {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
        <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="13.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d={PULSE} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="39.5" cy="25" r="2.2" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#005EB8" />
          <stop offset="1" stopColor="#002D72" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill={`url(#${gradientId})`} />
      <rect x="0.6" y="0.6" width="46.8" height="46.8" rx="13.4" fill="none" stroke="#FFFFFF" strokeOpacity="0.16" strokeWidth="1.2" />
      <path d={PULSE} fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="39.5" cy="25" r="2.2" fill="#2FB8A8" stroke="#FFFFFF" strokeWidth="1.1" />
    </svg>
  )
}

export default function Logo({ light = false, markClassName = 'h-9 w-9 sm:h-10 sm:w-10', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`shrink-0 ${markClassName}`} />
      <span className="flex flex-col">
        <span className={`font-display text-[19px] font-bold leading-none tracking-tight ${light ? 'text-white' : 'text-primary'}`}>
          Lilongwe
        </span>
        <span className={`mt-1.5 text-[9px] font-semibold uppercase leading-none tracking-[.16em] ${light ? 'text-teal' : 'text-teal-dark'}`}>
          Adventist Hospital
        </span>
      </span>
    </span>
  )
}
