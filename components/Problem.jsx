'use client'
import { useEffect, useRef } from 'react'

// Section 3 — 6 signs your business needs Zoho customization
const problems = [
  {
    num: '01',
    icon: 'bi-file-earmark-spreadsheet',
    color: '#dc2626',
    title: 'Spreadsheets still run your operations',
    desc: 'Your team exports Zoho data into Excel just to get a useful report. Customization replaces those spreadsheets with native Zoho dashboards and analytics.',
  },
  {
    num: '02',
    icon: 'bi-people',
    color: '#2563eb',
    title: 'Manual work between departments',
    desc: 'Sales closes a deal, but finance and operations only find out via email. With Zoho automation services, handoffs become invisible and instant.',
  },
  {
    num: '03',
    icon: 'bi-puzzle',
    color: '#f59e0b',
    title: "Standard modules don't match your process",
    desc: 'Your business doesn\'t fit standard "Leads → Deals" pipelines. Custom modules, fields, and layouts make Zoho speak your language.',
  },
  {
    num: '04',
    icon: 'bi-diagram-3',
    color: '#dc2626',
    title: 'Disconnected tools and data silos',
    desc: "You're paying for Zoho and still using 4–5 separate SaaS applications. Zoho integration services unify your stack into one source of truth.",
  },
  {
    num: '05',
    icon: 'bi-hourglass-split',
    color: '#2563eb',
    title: 'Slow approvals and bottlenecks',
    desc: 'Quotes are pending for days. Invoices get stuck. The wait is eliminated with custom workflows and approval rules.',
  },
  {
    num: '06',
    icon: 'bi-emoji-frown',
    color: '#f59e0b',
    title: 'Low user adoption',
    desc: 'Your team avoids Zoho because it\'s clunky. Role-based layouts, automations, and Creator apps make Zoho intuitive — and actually used.',
  },
]

export default function Problem() {
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
    <section id="problem" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: 60, right: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.08), transparent 65%)', filter: 'blur(20px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: 60, left: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(20px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 880, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Diagnostic</span>
          </div>
          <h2 className="section-title">
            6 signs your business needs <span className="grad-red-yellow">Zoho customization</span>
          </h2>
          <p className="section-sub mx-auto">
            If any of these resonate with you, your Zoho setup is not helping you move forward — it's holding you back.
          </p>
          <div style={{ marginTop: 22 }}>
            <a href="#contact" className="link-reveal">
              Schedule a Zoho audit <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {problems.map((p, i) => (
            <div key={p.title} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="prob-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 20,
                padding: '30px 28px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 24px 60px ${p.color}1f`
                  el.style.borderColor = p.color
                  el.querySelector('.pr-glow').style.opacity = '1'
                  el.querySelector('.pr-icon').style.background = p.color
                  el.querySelector('.pr-icon').style.color = '#fff'
                  el.querySelector('.pr-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  el.querySelector('.pr-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.pr-num').style.color = p.color
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.pr-glow').style.opacity = '0'
                  el.querySelector('.pr-icon').style.background = `${p.color}15`
                  el.querySelector('.pr-icon').style.color = p.color
                  el.querySelector('.pr-icon').style.transform = ''
                  el.querySelector('.pr-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.pr-num').style.color = '#cbd5e1'
                }}
              >
                <div className="pr-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: p.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />
                <div className="pr-glow" aria-hidden style={{
                  position: 'absolute', top: -80, right: -80, width: 240, height: 240,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${p.color}28, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, marginBottom: 18, position: 'relative' }}>
                  <div className="pr-icon" style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${p.color}15`, color: p.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)', flexShrink: 0,
                  }}>
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <span className="pr-num" style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.6rem',
                    fontWeight: 800, color: '#cbd5e1', transition: 'color 0.3s',
                    letterSpacing: '-0.02em',
                  }}>{p.num}</span>
                </div>

                <h3 style={{
                  fontSize: '1.06rem', fontWeight: 800, marginBottom: 10,
                  color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif',
                  lineHeight: 1.32, letterSpacing: '-0.012em', position: 'relative',
                }}>{p.title}</h3>

                <p style={{
                  fontSize: '0.92rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif', position: 'relative',
                }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up" style={{ marginTop: 56 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 24,
            padding: '32px 36px', background: 'linear-gradient(135deg, #f6f1ea 0%, #fef3c7 100%)',
            border: '1px solid #e8e3dc', borderRadius: 22,
            maxWidth: 940, margin: '0 auto', position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: 'var(--grad-tri)',
            }} />
            <div style={{ maxWidth: 540 }}>
              <div style={{
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2,
                textTransform: 'uppercase', color: '#dc2626', marginBottom: 8,
                fontFamily: 'Inter,sans-serif',
              }}>If any of these sound like you</div>
              <div style={{
                fontSize: '1rem', color: '#334155',
                fontFamily: 'Inter,sans-serif', lineHeight: 1.7,
              }}>
                Your Zoho is working against you, not for you. <strong style={{ color: '#0b1220' }}>One short audit. Zero commitment.</strong> You'll walk away with a clear picture of exactly what's blocking your team — and what's worth customizing first.
              </div>
            </div>
            <a href="#contact" className="btn-gradient ahover">
              Claim my free Zoho audit <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
