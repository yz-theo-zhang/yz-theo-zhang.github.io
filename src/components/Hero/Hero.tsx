import Arrow from '../ui/Arrow'

export default function Hero() {
  return (
    <section aria-labelledby="intro-title" className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20 lg:px-16">
      <div>
        <p className="mb-5 text-[10px] font-semibold tracking-[.22em] text-accent">PERSONAL PORTFOLIO</p>
        <h1 id="intro-title" className="max-w-xl font-serif text-[44px] leading-[1.08] tracking-[-.035em] sm:text-6xl">Economics. Finance.<br />A quantitative lens.</h1>
      </div>
      <div className="lg:pb-1">
        <p className="max-w-sm text-base leading-7 text-muted">I’m Theo. This is where I bring together my interests in economics, finance, and code.</p>
        <a href="#labs" className="mt-6 inline-flex items-center gap-5 text-sm font-semibold text-accent transition-colors hover:text-ink">Explore the labs <Arrow /></a>
      </div>
    </section>
  )
}
