import { useEffect, useRef, useState } from 'react'

// Geeft een ref en boolean terug. Zodra het element voor ~15% in beeld komt,
// wordt inView true (en blijft dat — het element hoeft niet opnieuw te animeren
// als je terugscrollt).
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Zonder IntersectionObserver-support (zeer oude browsers) gewoon meteen tonen.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
