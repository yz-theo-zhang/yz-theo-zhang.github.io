import { githubUrl, labs } from '../../data/labs'
import Arrow from '../ui/Arrow'

export default function Navigation() {
  return (
    <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium sm:gap-x-8 sm:text-sm">
      {labs.map((lab) => (
        <a key={lab.id} href={lab.href ?? `#${lab.id}`} className="border-b border-transparent py-1 transition-colors hover:border-accent hover:text-accent">{lab.title}</a>
      ))}
      <a href={githubUrl} className="flex items-center gap-2 border-l border-line pl-6 transition-colors hover:text-accent sm:pl-8">GitHub <Arrow diagonal /></a>
    </nav>
  )
}
