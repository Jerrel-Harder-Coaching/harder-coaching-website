import Reveal from './Reveal.jsx'

const timelineItems = [
  { side: 'left', src: '/images/RicoVerhoeven.webp', alt: 'Jerrel den Harder van Harder Coaching samen met Rico Verhoeven' },
  { side: 'right', src: '/images/StartLauraTeamMeet.webp', alt: 'Jerrel den Harder van Harder Coaching bij de start met Team Laura' },
  { side: 'left', src: '/images/PowerliftWedstrijd.webp', alt: 'Jerrel den Harder van Harder Coaching tijdens een powerliftwedstrijd' },
  { side: 'right', src: '/images/FotoshootArcher.webp', alt: 'Jerrel den Harder van Harder Coaching tijdens de Archer fotoshoot' },
  { side: 'left', src: '/images/JayWhey.webp', alt: 'Jerrel den Harder van Harder Coaching met Jay Whey tijdens het Jay Whey Muscle Camp in Thailand september 2025' },
  { side: 'right', src: '/images/Henselmans.webp', alt: 'Jerrel den Harder van Harder Coaching met Menno Henselmans tijdens de uitreiking van de Henselmans PT Cursus in februari 2026' },
  { side: 'left', src: '/images/StartKVK.webp', alt: 'Jerrel den Harder van Harder Coaching bij de start van zijn KVK-inschrijving' },
]

export default function About() {
  return (
    <section className="container">
      <div className="about-split">
        <Reveal>
          <span className="eyebrow">
            <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Rood.png" alt="" />
            Over mij
          </span>
          <h2>
            Ik help jou de <span className="text-red">puntjes op de i</span> te zetten voor jouw{' '}
            <span className="text-red">beste fysiek</span>
          </h2>
          <div className="dash" style={{ margin: '20px 0 28px' }}></div>

          <p>Ik ben begonnen in de gym met 'fitness' en maakte snel de stap naar powerliften. Daar was progressie lekker simpel: meer gewicht op de stang.</p>
          <p>Toen ik overstapte naar bodybuilding, miste ik dat in het begin. Tot ik doorhad dat niet de sport het probleem was, maar mijn aanpak.</p>
          <p>Ik trainde hard, maar haalde niet alles uit mijn training. Toen ik me meer ging verdiepen in techniek, voeding, herstel en posing veranderde alles. Vanaf dat moment ben ik me volledig gaan richten op bodybuilding en het goed presenteren van mijn fysiek. Dat heb ik nooit meer losgelaten.</p>
          <p>Op een gegeven moment liep ik zelf ook vast. Zelf video's kijken en dingen uitproberen bracht me niet meer verder. Daarom ben ik coaching gaan volgen en heb ik de Henselmans PT Cursus en Jay Whey Muscle Camp gevolgd. Toen zag ik pas hoeveel verschil het maakt wanneer iemand met je meekijkt en precies weet welke knop je op welk moment moet omdraaien.</p>
          <p>Dat is ook waarom ik Harder Coaching ben gestart.</p>
          <p>Ik zie veel bodybuilders die alles goed lijken te doen: ze trainen consistent, letten op hun voeding en hebben al een goed fysiek opgebouwd. Toch blijven ze soms hangen omdat de details ontbreken. Juist op dat niveau maken kleine aanpassingen het grootste verschil.</p>
          <p>
            Naast Harder Coaching run ik ook{' '}
            <a href="https://datavance.nl" target="_blank" rel="noopener noreferrer" className="text-yellow">
              DataVance
            </a>
            , mijn databedrijf. Structuur en doelgericht werken zijn altijd een belangrijk onderdeel van mijn leven geweest. Diezelfde manier van denken gebruik ik in mijn coaching: kijken naar wat er gebeurt, begrijpen waarom iets gebeurt en vervolgens de juiste keuze maken.
          </p>
          <p>Ik houd mijn coaching bewust persoonlijk en kleinschalig, zodat ik echt de tijd heb om mijn klanten te begeleiden en samen te werken aan hun volgende niveau.</p>
          <p>Wat mij drijft is simpel: zien dat iets werkt. Bij mezelf, bij mijn klanten en in de projecten waar ik aan werk. Niet zomaar meer doen, maar steeds beter begrijpen wat nodig is om verder te komen.</p>
        </Reveal>

        <div className="timeline-wrap">
          <div className="photo-dash"></div>
          <div className="timeline-line" aria-hidden="true"></div>
          <div className="timeline-items">
            {timelineItems.map((item, i) => (
              <Reveal
                as="div"
                className={`timeline-item item-${item.side}`}
                key={item.src}
                delay={i * 90}
              >
                <img src={item.src} alt={item.alt} />
              </Reveal>
            ))}

            <div className="timeline-item item-right">
              <div className="timeline-placeholder">
                <span>
                  Foto bodybuildwedstrijd
                  <br />
                  volgt nog
                </span>
              </div>
            </div>
          </div>
          <div className="photo-dash bottom"></div>
        </div>
      </div>
    </section>
  )
}
