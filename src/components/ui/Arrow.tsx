type ArrowProps = { diagonal?: boolean }

export default function Arrow({ diagonal = false }: ArrowProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`h-5 w-5 shrink-0 ${diagonal ? '-rotate-45' : ''}`}>
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  )
}
