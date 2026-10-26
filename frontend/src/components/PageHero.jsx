import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import Button from './Button'
import { img, tel } from '../data/site'

export default function PageHero({
  kicker,
  title,
  text,
  photo,
  src,
  alt = '',
  children,
  showActions = false,
  badge = 'Open 24/7',
  fullBleed = false,
  showBadge = false,
  overlayClass = 'from-primary-dark/75 via-primary-dark/50 to-primary/20',
}) {
  const imageSrc = src || (photo ? img(photo, 1200) : '/images/about.jpg')

  if (fullBleed) {
    return (
      <section className="relative overflow-hidden bg-primary text-white">
        <img src={imageSrc} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayClass}`} />
        <div className="absolute inset-0 dots-w opacity-25" aria-hidden="true" />

        <div className="relative flex min-h-[460px] items-center md:min-h-[560px]">
          <div className="w-full max-w-7xl mx-auto px-5 pt-14 pb-16 md:pt-16 md:pb-20">
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs text-white/60">
              <Link to="/" className="transition hover:text-teal">Home</Link>
              <span className="text-teal">/</span>
              <span className="text-white/85">{title}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[.18em] text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                {kicker || 'Lilongwe Adventist Hospital'}
              </span>
              <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">{title}</h1>
              {text && <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/80">{text}</p>}
              {(children || showActions) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {children || (
                    <>
                      <Button to="/book" variant="teal">Book an appointment <ArrowRight size={18} /></Button>
                      <Button href={tel} variant="ghostLight">Call us</Button>
                    </>
                  )}
                </div>
              )}
            </div>

            {showBadge && (
              <div className={(children || showActions) ? 'mt-6' : 'mt-9'}>
                <span className="inline-flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-light text-teal-dark"><Clock size={18} /></span>
                  <span>
                    <span className="block text-sm font-bold text-charcoal leading-none">{badge}</span>
                    <span className="mt-1 block text-[11px] text-ink/55">Lilongwe Adventist Hospital</span>
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-teal/20 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 dots-w opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 pt-14 pb-16 md:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs text-white/60">
          <Link to="/" className="transition hover:text-teal">Home</Link>
          <span className="text-teal">/</span>
          <span className="text-white/85">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[.18em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              {kicker || 'Lilongwe Adventist Hospital'}
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">{title}</h1>
            {text && <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/80">{text}</p>}
            {(children || showActions) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {children || (
                  <>
                    <Button to="/book" variant="teal">Book an appointment <ArrowRight size={18} /></Button>
                    <Button href={tel} variant="ghostLight">Call us</Button>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.25rem] border border-teal/30" aria-hidden="true" />
            <img src={imageSrc} alt={alt || title} className="relative w-full h-[260px] sm:h-[320px] lg:h-[400px] rounded-[1.75rem] object-cover shadow-2xl" />
            <div className="absolute -bottom-5 left-5 lg:left-7 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-light text-teal-dark"><Clock size={18} /></span>
              <div>
                <p className="text-sm font-bold text-charcoal leading-none">{badge}</p>
                <p className="mt-1 text-[11px] text-ink/55">Lilongwe Adventist Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
