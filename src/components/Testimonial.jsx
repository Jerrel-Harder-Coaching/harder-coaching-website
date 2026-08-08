import { useEffect } from 'react'
import Reveal from './Reveal.jsx'

export default function Testimonial() {
  useEffect(() => {
    // Instagram embed script: laadt eenmalig en verwerkt daarna alle
    // blockquote.instagram-media elementen op de pagina.
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]')

    if (existing && window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="container">
      <Reveal className="title-block center">
        <span className="eyebrow">
          <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Rood.png" alt="" />
          Resultaat
        </span>
        <h2>Dit ervaren mijn klanten</h2>
        <div className="dash"></div>
      </Reveal>

      <Reveal className="testimonial-wrap">
        <div className="testimonial-card">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DaFrdI3jfjR/"
            data-instgrm-version="14"
          ></blockquote>
          <a
            className="btn"
            href="https://www.instagram.com/p/DaFrdI3jfjR/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bekijk op Instagram
          </a>
        </div>
      </Reveal>
    </section>
  )
}
