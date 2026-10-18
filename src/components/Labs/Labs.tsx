import { labs } from '../../data/labs'
import LabCard from '../LabCard/LabCard'

export default function Labs() {
  return (
    <section id="labs" aria-labelledby="labs-title" className="scroll-mt-6 border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <h2 id="labs-title" className="mb-7 text-[11px] font-semibold tracking-[.18em]">EXPLORE MY WORK</h2>
        <div className="grid gap-9 sm:grid-cols-2 sm:gap-12 lg:gap-20">
          {labs.map((lab) => <LabCard key={lab.id} lab={lab} />)}
        </div>
      </div>
    </section>
  )
}
