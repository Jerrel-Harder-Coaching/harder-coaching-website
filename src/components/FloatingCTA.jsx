import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#contact"
      className={`floating-cta${visible ? ' floating-cta--visible' : ''}`}
      aria-hidden={!visible}
    >
      Plan een call
    </a>
  )
}
