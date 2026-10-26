export default function Eyebrow({ children, light }) {
  return (
    <p className={`inline-flex items-center gap-2.5 text-xs font-extrabold tracking-[.2em] uppercase ${light ? 'text-teal' : 'text-teal-dark'}`}>
      <span className={`h-px w-6 ${light ? 'bg-teal' : 'bg-teal-dark'}`} aria-hidden="true" />
      {children}
    </p>
  )
}
