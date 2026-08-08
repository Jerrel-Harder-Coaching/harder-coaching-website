import Reveal from './Reveal.jsx'

export default function Videos() {
  return (
    <section className="container">
      <Reveal className="title-block center">
        <span className="eyebrow">
          <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Rood.png" alt="" />
          Meer van mij
        </span>
        <h2>Volg het proces</h2>
        <div className="dash"></div>
        <p>
          Ik deel mijn eigen weg naar het podium en praat tweewekelijks met andere lifters,
          coaches en experts in de podcast. Wil je meer zien? Kijk hier mee.
        </p>
      </Reveal>

      <div className="videos-wrap">
        <div className="videos-grid">
          <Reveal className="video-card">
            <h3>Wedstrijdvoorbereiding</h3>
            <p className="video-sub">Volg mijn weg naar het podium, van diet tot peak week.</p>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/videoseries?si=Favm4M-I6-CyVKUr&list=PLW6RedeTohsK2sBBG8h05LUjbqehYLdRK"
                title="Bodybuildwedstrijd voorbereiding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Reveal>

          <Reveal className="video-card" delay={150}>
            <h3>Podcast</h3>
            <p className="video-sub">Gesprekken met lifters, coaches en experts, tweewekelijks.</p>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/videoseries?si=zZ0E31tXyF9YcEuv&list=PLW6RedeTohsJB2mHH2ZAt44NofKtFpfO7"
                title="Harder Coaching Podcast"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Reveal>

          <div className="video-divider-badge">
            <img src="/images/Berg_rood_Berg_Wit.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
