import Reveal from './Reveal.jsx'

const solutions = [
  {
    title: 'Persoonlijke begeleiding',
    text: '(Twee-)wekelijkse check-ins, doorlopend contact en uitgebreide feedback.',
  },
  {
    title: 'Duidelijke, gestructureerde timeline',
    text: 'Weet precies in welke fase (groei, diet/prep of peak) je zit en hoe de overgangen gepland zijn.',
  },
  {
    title: 'Optimale uitvoering van je training',
    text: 'Train met de juiste intensiteit en techniek door middel van wekelijkse video-analyses.',
  },
  {
    title: 'Geavanceerde datatracking',
    text: 'Biometrische data (HRV, slaapkwaliteit, rusthartslag) en trainingsdata bijhouden, analyseren en gebruiken om bij te sturen.',
  },
  {
    title: 'Poseren van je fysiek',
    text: 'Je leert je fysiek poseren en je sterke punten benadrukken, zodat je beter tot je recht komt tijdens een fotoshoot, festival of bodybuildwedstrijd.',
  },
  {
    title: 'Vertrouwen in het proces',
    text: 'Begrijp waarom elke keuze wordt gemaakt en geniet van de weg richting je doelen.',
  },
]

export default function Approach() {
  return (
    <section className="dark">
      <div className="container">
        <Reveal className="title-block center">
          <span className="eyebrow">
            <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Wit.png" alt="" />
            De aanpak
          </span>
          <h2>Zo los ik dat op</h2>
          <div className="dash-white"></div>
        </Reveal>

        <ul className="solution-list">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 90}>
              <strong>{s.title}</strong>
              {s.text}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
