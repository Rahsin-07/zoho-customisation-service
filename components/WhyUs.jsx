'use client'
import { useEffect, useRef } from 'react'

// Section 9 — Why ZoFlowX (5 reasons + numbers)
const reasons = [
  {
    letter: 'A',
    icon: 'bi-patch-check-fill',
    color: '#2563eb',
    title: 'A Certified Zoho Partner with hands-on architects',
    desc: 'Senior consultants with 8–13 years of pure-play Zoho and CRM systems experience — not junior implementers.',
  },
  {
    letter: 'B',
    icon: 'bi-bricks',
    color: '#dc2626',
    title: 'Engineering-grade builds, not patchwork',
    desc: 'Documented, modular, upgrade-safe customizations that survive Zoho updates and your own internal team changes.',
  },
  {
    letter: 'C',
    icon: 'bi-grid-3x3-gap-fill',
    color: '#f59e0b',
    title: 'Cross-app, full-stack Zoho expertise',
    desc: 'We work fluently across CRM, Creator, Books, Analytics, People, Desk and Flow — your stack stays unified.',
  },
  {
    letter: 'D',
    icon: 'bi-geo-alt-fill',
    color: '#2563eb',
    title: 'India-based, global-grade delivery',
    desc: 'Bangalore, Mumbai, Chennai, Hyderabad, Pune and Delhi NCR — fast, accountable, in your timezone.',
  },
  {
    letter: 'E',
    icon: 'bi-cash-coin',
    color: '#dc2626',
    title: 'Outcome-led pricing & transparent SOWs',
    desc: 'Fixed-scope packages or retainer models — every deliverable mapped to a measurable business outcome.',
  },
]

const numbers = [
  { v: '40+', l: 'Zoho applications mastered & customized', c: '#2563eb' },
  { v: '14hrs', l: 'Average weekly time saved per user', c: '#dc2626' },
  { v: '98%', l: 'Client retention & renewal rate', c: '#f59e0b' },
  { v: '20+', l: 'Industries served', c: '#0b1220' },
]

export default function WhyUs() {
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
    <section id="why-us" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-5%', width: 480, height: 480, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.07), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 920, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-blue">Why ZoFlowX</span>
          </div>
          <h2 className="section-title">
            India's most trusted <span className="grad-blue-red">Zoho Customization Partner</span> — a real technology team, not a reseller
          </h2>
        </div>

        {/* 5 reasons cards */}
        <div className="row g-4">
          {reasons.map((r, i) => (
            <div key={r.letter} className={i < 2 ? 'col-md-6 fade-up' : 'col-md-6 col-lg-4 fade-up'} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 20,
                padding: '28px 26px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 24px 60px ${r.color}1f`
                  el.style.borderColor = r.color
                  el.querySelector('.wy-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.wy-icon').style.background = r.color
                  el.querySelector('.wy-icon').style.color = '#fff'
                  el.querySelector('.wy-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  el.querySelector('.wy-letter').style.background = r.color
                  el.querySelector('.wy-letter').style.color = '#fff'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.wy-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.wy-icon').style.background = `${r.color}15`
                  el.querySelector('.wy-icon').style.color = r.color
                  el.querySelector('.wy-icon').style.transform = ''
                  el.querySelector('.wy-letter').style.background = `${r.color}15`
                  el.querySelector('.wy-letter').style.color = r.color
                }}
              >
                <div className="wy-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: r.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div className="wy-icon" style={{
                    width: 50, height: 50, borderRadius: 13,
                    background: `${r.color}15`, color: r.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)', flexShrink: 0,
                  }}>
                    <i className={`bi ${r.icon}`} />
                  </div>
                  <div className="wy-letter" style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${r.color}15`, color: r.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                    fontSize: '1rem', transition: 'all 0.3s', flexShrink: 0,
                  }}>{r.letter}</div>
                </div>

                <h3 style={{
                  fontSize: '1.05rem', fontWeight: 800, marginBottom: 10,
                  color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif',
                  lineHeight: 1.32, letterSpacing: '-0.012em',
                }}>{r.title}</h3>

                <p style={{
                  fontSize: '0.92rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif',
                }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* By the numbers */}
        <div className="fade-up" style={{ marginTop: 56 }}>
          <div style={{
            background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
            padding: '36px 32px', position: 'relative', overflow: 'hidden',
            boxShadow: '0 18px 50px rgba(11,18,32,0.06)',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: 'var(--grad-tri)',
            }} />

            <div className="row align-items-center g-4 mb-4">
              <div className="col-lg-7">
                <div style={{
                  fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2,
                  textTransform: 'uppercase', color: '#dc2626', marginBottom: 8,
                  fontFamily: 'Inter,sans-serif',
                }}>By the numbers</div>
                <h3 style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                  fontSize: '1.5rem', color: '#0b1220', lineHeight: 1.25,
                  marginBottom: 0, letterSpacing: '-0.014em',
                }}>
                  Real results from <span className="grad-blue-red">real Zoho customizations</span>
                </h3>
              </div>
              <div className="col-lg-5 text-lg-end">
                <a href="#contact" className="btn-primary-custom ahover">
                  Talk to our team <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 0,
              padding: '20px 0 0', borderTop: '1px solid #f0ece6',
            }}>
              {numbers.map((s, i, arr) => (
                <div key={s.l} style={{
                  textAlign: 'center', padding: '14px 14px',
                  borderRight: i < arr.length - 1 ? '1px solid #e8e3dc' : 'none',
                }}>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif',
                    fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)',
                    fontWeight: 800, color: s.c, lineHeight: 1, marginBottom: 8,
                  }}>{s.v}</div>
                  <div style={{
                    fontSize: '0.82rem', color: '#64748b',
                    fontFamily: 'Inter,sans-serif', lineHeight: 1.4,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
