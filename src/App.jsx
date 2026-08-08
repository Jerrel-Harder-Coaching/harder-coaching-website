import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Approach from './components/Approach.jsx'
import Testimonial from './components/Testimonial.jsx'
import Difference from './components/Difference.jsx'
import Qualify from './components/Qualify.jsx'
import Desire from './components/Desire.jsx'
import Pricing from './components/Pricing.jsx'
import About from './components/About.jsx'
import Videos from './components/Videos.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import MidCTA from './components/MidCTA.jsx'
import FloatingCTA from './components/FloatingCTA.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <MidCTA
        title="Klaar om verder te komen dan harder trainen?"
        text="Ontdek in een gratis, vrijblijvend gesprek van 30 minuten of coaching bij jouw situatie past."
      />
      <Approach />
      <Testimonial />
      <Difference />
      <Qualify />
      <Desire />
      <Pricing />
      <About />
      <Videos />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </>
  )
}
