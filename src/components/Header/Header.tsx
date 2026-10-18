import Navigation from '../Navigation/Navigation'

export default function Header() {
  return (
    <header id="home" className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:px-16">
        <a href="#home" className="w-fit font-serif text-2xl tracking-tight sm:text-[27px]">Yuzhe (Theo) Zhang</a>
        <Navigation />
      </div>
    </header>
  )
}
