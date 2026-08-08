import Reveal from './Reveal.jsx'

export default function Desire() {
  return (
    <section className="dark">
      <div className="container">
        <div className="split">
          <Reveal>
            <div className="title-block left">
              <span className="eyebrow">
                <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Wit.png" alt="" />
                Wat je nodig hebt
              </span>
              <h2>Zo ziet werken met een plan eruit</h2>
              <div className="dash-white"></div>
            </div>
            <ul className="desire-list">
              <li>Een fysiek dat past bij jouw potentie.</li>
              <li>Vertrouwen in je aanpak, omdat je weet waarom elke keuze wordt gemaakt.</li>
              <li>Elke herhaling met de juiste techniek: pijnvrije gewrichten en maximale spiergroei.</li>
              <li>Nooit meer twijfelen of je wel goed bezig bent.</li>
              <li>Je spieren blind aansturen en presenteren, zodat je fysiek er altijd top uitziet.</li>
              <li>Een coach die de details begrijpt die op jouw niveau het verschil maken.</li>
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <img
              src="/images/Fotoshoot.webp"
              alt="Jerrel den Harder van Harder Coaching tijdens zijn fotoshoot bij Fox Gym in Rotterdam in augustus 2025"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
