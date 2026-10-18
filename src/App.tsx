import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Labs from './components/Labs/Labs'
import Footer from './components/Footer/Footer'
import SkipLink from './components/ui/SkipLink'

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Labs />
      </main>
      <Footer />
    </>
  )
}
