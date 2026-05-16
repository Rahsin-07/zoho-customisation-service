'use client'
import { useEffect, useRef } from 'react'

// Section 10 — Flexible engagement models to match your stage
const engagements = [
  {
    icon: 'bi-rocket-takeoff',
    color: '#93c5fd',
    badge: 'Starter',
    title: 'Fixed-scope project',
    desc: 'Defined deliverables, defined timeline, defined cost. Perfect for a single customization, a re-implementation, or a CRM cleanup project.',
    points: ['2–10 week engagement', 'Clear written SOW', 'Fixed-price billing'],
  },
  {
    icon: 'bi-arrow-repeat',
    color: '#fcd34d',
    badge: 'Growth',
    title: 'Retainer / continuous improvement',
    desc: 'Monthly retainer for ongoing Zoho work — new customizations, optimizations, support, and admin hours rolled into a single predictable bill.',
    points: ['Monthly retained capacity', 'Dedicated architect', 'Priority response SLAs'],
    featured: true,
  },
  {
    icon: 'bi-building',
    color: '#fca5a5',
    badge: 'Enterprise',
    title: 'Multi-app Zoho One programme',
    desc: 'For larger rollouts touching multiple Zoho apps, multi-entity setups, or governance overhauls — staffed with a senior architect and a dedicated build team.',
    points: ['Phased multi-quarter rollout', 'Architecture + build + adoption', 'Programme governance'],
  },
]

export default function CustomBuild() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="engagement" ref={ref} style={{
      background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
      position: 'relative', overflow: 'hidden', color: '#fff',
    }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.18 }} className="grid-pattern-light" />
      <div aria-hidden style={{
        position: 'absolute', top: '-30%', left: '-10%', width: 520, height: 520,
        background: 'radial-gradient(circle, rgba(37,99,235,0.30), transparent 65%)', filter: 'blur(40px)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '-30%', right: '-10%', width: 520, height: 520,
        background: 'radial-gradient(circle, rgba(245,158,11,0.22), transparent 65%)', filter: 'blur(40px)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', top: '30%', right: '30%', width: 260, height: 260,
        background: 'radial-gradient(circle, rgba(220,38,38,0.20), transparent 65%)', filter: 'blur(30px)',
      }} />

      {/* Floating tri-color dots */}
      <div aria-hidden className="d-none d-md-block" style={{
        position: 'absolute', top: 40, right: 50,
        display: 'flex', gap: 6, animation: 'float-y-soft 4s ease-in-out infinite',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#2563eb', boxShadow: '0 0 16px rgba(37,99,235,0.6)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 16px rgba(220,38,38,0.6)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 16px rgba(245,158,11,0.6)' }} />
      </div>

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.8px',
              textTransform: 'uppercase', color: '#fcd34d', marginBottom: 14,
            }}>
              <span style={{ width: 28, height: 2, background: 'currentColor', borderRadius: 2 }} />
              Engagement
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            fontSize: 'clamp(1.8rem, 3.8vw, 2.8rem)', fontWeight: 800,
            color: '#fff', marginBottom: 16, letterSpacing: '-0.022em', lineHeight: 1.12,
          }}>
            Flexible models to <span style={{
              background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>match your stage</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.74)', fontSize: '1rem',
            margin: '0 auto', fontFamily: 'Inter,sans-serif', lineHeight: 1.72,
          }}>
            Whether you need one focused customization or a multi-quarter Zoho One programme — pick the model that fits where your business is right now.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {engagements.map((e, i) => {
            const featured = e.featured
            return (
              <div key={e.badge} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div style={{
                  background: featured ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.04)',
                  border: featured ? `1.5px solid ${e.color}66` : '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 22, padding: '32px 26px', height: '100%',
                  backdropFilter: 'blur(8px)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                  transform: featured ? 'translateY(-6px)' : 'none',
                }}
                  onMouseEnter={ev => {
                    const el = ev.currentTarget
                    el.style.transform = 'translateY(-8px)'
                    el.style.background = 'rgba(255,255,255,0.10)'
                    el.style.borderColor = e.color
                    el.style.boxShadow = `0 28px 60px ${e.color}30`
                  }}
                  onMouseLeave={ev => {
                    const el = ev.currentTarget
                    el.style.transform = featured ? 'translateY(-6px)' : ''
                    el.style.background = featured ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.04)'
                    el.style.borderColor = featured ? `${e.color}66` : 'rgba(255,255,255,0.10)'
                    el.style.boxShadow = ''
                  }}
                >
                  {featured && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      fontSize: '0.6rem', fontWeight: 800, letterSpacing: 1.5,
                      textTransform: 'uppercase', background: 'var(--grad-tri)',
                      color: '#fff', padding: '4px 10px', borderRadius: 50,
                      fontFamily: 'Inter,sans-serif',
                    }}>Most popular</div>
                  )}

                  <div style={{
                    width: 56, height: 56, borderRadius: 14, marginBottom: 16,
                    background: `${e.color}1f`, color: e.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem',
                  }}>
                    <i className={`bi ${e.icon}`} />
                  </div>

                  <span style={{
                    display: 'inline-block', background: `${e.color}1f`, color: e.color,
                    fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.5,
                    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 50,
                    marginBottom: 12, fontFamily: 'Inter,sans-serif',
                  }}>{e.badge}</span>

                  <h3 style={{
                    fontSize: '1.2rem', fontWeight: 800, marginBottom: 10,
                    color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif',
                    lineHeight: 1.3, letterSpacing: '-0.014em',
                  }}>{e.title}</h3>

                  <p style={{
                    fontSize: '0.92rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7,
                    marginBottom: 18, fontFamily: 'Inter,sans-serif',
                  }}>{e.desc}</p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {e.points.map(p => (
                      <li key={p} style={{
                        display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8,
                        fontSize: '0.88rem', color: 'rgba(255,255,255,0.86)', fontFamily: 'Inter,sans-serif', lineHeight: 1.55,
                      }}>
                        <i className="bi bi-check-circle-fill" style={{ color: e.color, fontSize: '0.95rem', marginTop: 3, flexShrink: 0 }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 50 }}>
          <a href="#contact" className="btn-accent ahover">
            Discuss the right model for us <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
