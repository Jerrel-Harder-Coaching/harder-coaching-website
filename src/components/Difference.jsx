import Reveal from './Reveal.jsx'

const rows = [
  {
    bad: 'Je traint hard, maar techniek en uitvoering wisselen onbewust per set',
    good: 'Je traint gecontroleerd zodat elke set maximale prikkel geeft aan de juiste spier',
  },
  {
    bad: 'Je neemt beslissingen op gevoel of op basis van wat je op social media ziet',
    good: 'Elke beslissing is gebaseerd op data, ervaring en jouw persoonlijke feedback',
  },
  {
    bad: 'Je hebt geen duidelijke planning en hoopt dat je uiteindelijk je doel bereikt',
    good: 'Je volgt een duidelijke timeline en weet altijd waar je staat en wat de volgende stap is',
  },
  {
    bad: 'Je weet niet wanneer je voeding, trainingsplan of cardio moet bijsturen als je vastloopt',
    good: 'Je weet precies wanneer en waarom we bijsturen om maximale progressie te blijven maken',
  },
  {
    bad: 'Je hebt een goed fysiek maar weet niet hoe je dit presenteert op camera of het podium',
    good: 'Je leert je fysiek groter en droger presenteren door poseercoaching',
  },
]

export default function Difference() {
  return (
    <section className="dark">
      <div className="container">
        <div className="verschil-wrap">
          <Reveal className="verschil-title-col">
            <span className="eyebrow">
              <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Wit.png" alt="" />
              Het verschil
            </span>
            <h2>Zo ziet verandering eruit</h2>
            <div className="dash-white" style={{ margin: '18px 0 0' }}></div>
            <p style={{ marginTop: 20 }}>
              De situatie links is precies waarmee mijn klanten binnenkomen. Rechts werken we
              samen naartoe.
            </p>
          </Reveal>

          <div className="verschil-rows">
            <div className="verschil-header-row">
              <div className="col-head bad">Zonder plan</div>
              <div className="arrow-head"></div>
              <div className="col-head good">Met Harder Coaching</div>
            </div>

            {rows.map((row, i) => (
              <Reveal as="div" className="verschil-row" key={row.bad} delay={i * 70}>
                <div className="verschil-cell bad">{row.bad}</div>
                <div className="verschil-arrow">→</div>
                <div className="verschil-cell good">{row.good}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
