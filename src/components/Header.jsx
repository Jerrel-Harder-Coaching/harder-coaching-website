import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header-inner">
        <a className="logo-link" href="#" aria-label="Harder Coaching home">
          <img src="/images/Berg_rood_Harder+Coaching_Wit.png" alt="Harder Coaching logo" />
        </a>
      </div>
    </header>
  )
}
