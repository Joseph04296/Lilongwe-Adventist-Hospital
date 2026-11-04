export default function Eyebrow({ children, light }) {
  return (
    <p className={`inline-flex items-center gap-2.5 text-xs font-extrabold tracking-[.2em] uppercase ${light ? 'text-teal' : 'text-teal-dark'}`}>
      {children}
    </p>
  )
}
