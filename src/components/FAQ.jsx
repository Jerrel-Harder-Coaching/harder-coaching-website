import Reveal from './Reveal.jsx'

const faqs = [
  {
    q: 'Voor wie is Harder Coaching?',
    a: 'Voor serieuze lifters, natural bodybuilders en sporters met een duidelijk fysiek doel die al 2-3 jaar consistent trainen en de basis onder de knie hebben.',
  },
  {
    q: 'Moet ik wedstrijden doen?',
    a: 'Nee. Coaching is ook geschikt voor recreatieve lifters en fotoshootdoelen.',
  },
  {
    q: 'Wat maakt dit anders?',
    a: 'De focus ligt op het optimaliseren van de details die op gevorderd niveau het verschil maken: techniek, timing van aanpassingen en poseren, in plaats van een standaard schema.',
  },
  {
    q: 'Hoe werkt de check-in?',
    a: 'Je deelt wekelijks (of tweewekelijks) je trainings-, voedings- en herstelgegevens. Op basis daarvan krijg je concrete feedback en, waar nodig, een aanpassing van je plan.',
  },
]

export default function FAQ() {
  return (
    <section className="container">
      <Reveal className="title-block center">
        <span className="eyebrow">
          <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Rood.png" alt="" />
          Vragen
        </span>
        <h2>Veelgestelde vragen</h2>
        <div className="dash"></div>
      </Reveal>

      {faqs.map((item, i) => (
        <Reveal as="details" key={item.q} delay={i * 70}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </Reveal>
      ))}
    </section>
  )
}
