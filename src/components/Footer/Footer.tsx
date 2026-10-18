import { githubUrl } from '../../data/labs'

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:px-10 lg:px-16">
      <p>© {new Date().getFullYear()} Yuzhe (Theo) Zhang</p>
      <a href={githubUrl} className="transition-colors hover:text-accent">Projects & source code ↗</a>
    </footer>
  )
}
