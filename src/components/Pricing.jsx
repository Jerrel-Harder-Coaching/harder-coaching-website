import Reveal from './Reveal.jsx'

export default function Pricing() {
  return (
    <section className="container">
      <Reveal className="title-block center">
        <span className="eyebrow">
          <img className="eyebrow-icon" src="/images/Berg_rood_Berg_Rood.png" alt="" />
          Investering
        </span>
        <h2>Dit is mijn aanbod</h2>
        <div className="dash"></div>
        <p>
          Kies de frequentie die bij jouw situatie past. De aanpak verandert niet. Je krijgt
          dezelfde persoonlijke begeleiding en aandacht voor de details die het verschil maken.
        </p>
      </Reveal>

      <Reveal as="table" className="pricing-table">
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th className="col-plan">
              <span className="plan-title">Wekelijkse coaching</span>
              <span className="plan-price">€1.399,-</span>
              <span className="plan-duration">voor 6 maanden</span>
              <span className="plan-price-sub">of €279,- per maand</span>
            </th>
            <th className="col-plan">
              <span className="plan-title">Tweewekelijkse coaching</span>
              <span className="plan-price">€979,-</span>
              <span className="plan-duration">voor 6 maanden</span>
              <span className="plan-price-sub">of €199,- per maand</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="cat-row">
            <td colSpan={3}>Resultaat</td>
          </tr>
          <tr>
            <td className="row-label">Persoonlijk trainingsplan</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
          </tr>
          <tr>
            <td className="row-label">Wekelijkse techniek-analyse</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
          </tr>
          <tr>
            <td className="row-label">Feedback op poseren</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
          </tr>
          <tr>
            <td className="row-label">Progressie tracking en heldere timeline</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
          </tr>

          <tr className="cat-row">
            <td colSpan={3}>Voeding &amp; leefstijl</td>
          </tr>
          <tr>
            <td className="row-label">Voedingsaanpak naar keuze (leven met principes of meal plan)</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
          </tr>
          <tr>
            <td className="row-label">Leefstijlbegeleiding (slaap, stress, herstel)</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
          </tr>

          <tr className="cat-row">
            <td colSpan={3}>Begeleiding</td>
          </tr>
          <tr>
            <td className="row-label">Accountability &amp; reflectiecall (25 minuten)</td>
            <td className="td-check"><span className="icon-diff">Wekelijks</span></td>
            <td className="td-check"><span className="icon-diff">Tweewekelijks</span></td>
          </tr>
          <tr>
            <td className="row-label">Doorlopend contact en feedback</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
          </tr>
          <tr>
            <td className="row-note">Beschikbaar tijdens wedstrijdprep</td>
            <td className="td-check"><span className="icon-yes">✓</span></td>
            <td className="td-check"><span className="icon-no">—</span></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <a
                className="btn"
                href="https://cal.com/jerreldenharder/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 0 }}
              >
                Start intake
              </a>
            </td>
          </tr>
        </tfoot>
      </Reveal>
    </section>
  )
}
