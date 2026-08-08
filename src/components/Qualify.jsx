import Reveal from './Reveal.jsx'

export default function Qualify() {
  return (
    <section className="container">
      <Reveal className="title-block center">
        <span className="eyebrow">
          <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Rood.png" alt="" />
          Geschikt voor jou?
        </span>
        <h2>Ik werk niet met iedereen</h2>
        <div className="dash"></div>
      </Reveal>

      <div className="compare">
        <Reveal className="card card-yes">
          <h3>Dit is voor jou als:</h3>
          <ul className="yes-list">
            <li>Je bent klaar om je training serieus aan te pakken met een coach en wilt zien wat er mogelijk is.</li>
            <li>Je wilt 3 tot 5 keer per week trainen en doet consistent wat nodig is, ook als je er even geen zin in hebt.</li>
            <li>Je bent eerlijk tegen jezelf en tegen mij over wat wel en niet goed gaat.</li>
            <li>Je ziet coaching als een investering in je toekomst, niet als iets vrijblijvends.</li>
          </ul>
        </Reveal>

        <Reveal className="card card-no" delay={120}>
          <h3>Dit is niet voor jou als:</h3>
          <ul className="no-list">
            <li>Je bent net begonnen met trainen en hebt iemand nodig die je handje vasthoudt.</li>
            <li>Je praat jezelf regelmatig uit keuzes die je eigenlijk al weet dat je moet maken.</li>
            <li>Je verwacht resultaten zonder jezelf verantwoordelijk te houden voor het proces.</li>
            <li>Je wilt alleen bevestiging dat je 'goed bezig bent', zonder echt te veranderen.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
