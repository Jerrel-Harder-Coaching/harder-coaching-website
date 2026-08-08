import Reveal from './Reveal.jsx'

export default function MidCTA({ title, text, dark = false }) {
  return (
    <section className={`mid-cta${dark ? ' dark' : ''}`}>
      <div className="container mid-cta-inner center">
        <Reveal>
          <h2>{title}</h2>
          <p>{text}</p>
          <a className="btn" href="#contact">Plan jouw gratis intake</a>
        </Reveal>
      </div>
    </section>
  )
}
