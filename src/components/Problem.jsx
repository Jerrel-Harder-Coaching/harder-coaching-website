import Reveal from './Reveal.jsx'

const points = [
  'Je weet niet altijd wanneer je training, voeding of cardio moet aanpassen om verder te groeien.',
  'Je maakt keuzes op gevoel of op basis van wat je online ziet, zonder duidelijk plan.',
  'Je techniek, intensiteit en fysieke presentatie houden je nog tegen om je maximale potentie te bereiken.',
  'Je mist objectieve feedback om precies te weten welke knop je wanneer moet omdraaien.',
]

export default function Problem() {
  return (
    <section className="container">
      <Reveal className="title-block center">
        <span className="eyebrow">
          <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Rood.png" alt="" />
          Het probleem
        </span>
        <h2>Je doet alles goed, toch voelt het alsof er meer in zit</h2>
        <div className="dash"></div>
      </Reveal>

      <Reveal>
        <p>
          Je hebt de basis onder controle. Je traint serieus, let op je voeding en doet wat nodig
          is. Maar op jouw niveau maken juist de details het verschil. Herken je dit?
        </p>
      </Reveal>

      <ul className="problem-list">
        {points.map((point, i) => (
          <Reveal as="li" key={point} delay={i * 80}>
            {point}
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p>Daar maken we het verschil. De juiste keuzes op het juiste moment.</p>
      </Reveal>
    </section>
  )
}
