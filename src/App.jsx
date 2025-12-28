import './App.scss'
import Hero from './components/Hero/Hero'
import Button from './ui-components/Button/Button'
import Typography from './ui-components/Typography/Typography'
import SectionCounter from './ui-components/SectionCounter/SectionCounter'
import FirstSection from './components/FirstSection/FirstSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main className="app">
      <Hero />
      <SectionCounter label="01" />
      <FirstSection />
      <SectionCounter label="02" />
      <Footer />
    </main>
  )
}

export default App
