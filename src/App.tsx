
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Labs from './components/Labs/Labs'
import Footer from './components/Footer/Footer'
import SkipLink from './components/ui/SkipLink'
import Test from './components/Test'
import { HashRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (<>
    <SkipLink />
    <Header />
    <main id="main">
      <Hero />
      <Labs />
    </main>
    <Footer />
  </>)
}

export default function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </HashRouter>

  )
}
