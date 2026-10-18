import type { Lab } from '../../data/labs'
import Arrow from '../ui/Arrow'

export default function LabCard({ lab }: { lab: Lab }) {
  return (
    <article id={lab.id} className="flex scroll-mt-6 flex-col border-t border-ink pt-5">
      <h3 className="font-serif text-3xl tracking-tight">{lab.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{lab.description}</p>
      <div className="mt-auto pt-5">
        {lab.href ? (
          <a href={lab.href} className="group inline-flex items-center gap-5 py-1 text-sm font-semibold text-accent hover:text-ink">Visit the lab <Arrow diagonal /></a>
        ) : (
          <p className="py-1 text-sm text-muted">Coming soon</p>
        )}
      </div>
    </article>
  )
}
