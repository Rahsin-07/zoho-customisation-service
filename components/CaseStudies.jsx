'use client'
import { useEffect, useRef } from 'react'

// Section 12 — Customization stories that moved the needle
const cases = [
  {
    industry: 'Paper Distribution',
    color: '#dc2626',
    icon: 'bi-box-seam',
    company: 'Image Star · Chennai',
    headline: 'Tally → Zoho Books migration with zero broken history',
    summary:
      "Moved 1,500+ customers, 500+ vendors, custom-numbered records, and a full GST invoice template into Zoho Books. Set up rules for de-duplicated phones, PIN code fields, and a Tally-style branded invoice format that finance could trust on day one.",
    metrics: [
      { label: 'Customer records', value: '1,522' },
      { label: 'Vendor records',   value: '506' },
      { label: 'Manual reconciliation', value: '0 hrs' },
    ],
    stack: ['Zoho Books', 'Custom templates', 'GST', 'Tally export', 'Data fidelity'],
  },
  {
    industry: 'Construction',
    color: '#2563eb',
    icon: 'bi-buildings',
    company: 'Brite Decking · Australia',
    headline: 'From scattered leads to a 5-stage pipeline that closed itself',
    summary:
      'Re-architected Zoho CRM around lead-source attribution, automated UTM capture from Avanser call tracking, and rebuilt the Lead → Opportunity → Estimate → Sales Order → Invoice flow inside Zoho Books — fully automated, end to end.',
    metrics: [
      { label: 'Manual entry eliminated', value: '92%' },
      { label: 'Lead-to-quote time',     value: '3d → 6h' },
      { label: 'Source attribution',     value: '100%' },
    ],
    stack: ['Zoho CRM', 'Zoho Books', 'Deluge', 'Avanser', 'UTM cascade'],
  },
  {
    industry: 'Coworking SaaS',
    color: '#f59e0b',
    icon: 'bi-laptop',
    company: 'CoWorkFlowX',
    headline: 'A new multi-tenant SaaS, architected and shipped in six weeks',
    summary:
      'Drafted the full PRD, designed an 18-table Mongoose schema, set up a permission matrix for four roles, integrated Razorpay, and produced an AI build-prompt strategy — ready for the dev team to ship sprint by sprint.',
    metrics: [
      { label: 'PRD sections',     value: '14' },
      { label: 'Schemas designed', value: '18' },
      { label: 'Sprint plan',      value: '6 wks' },
    ],
    stack: ['MERN', 'Razorpay', 'Multi-tenant', 'RBAC', 'Architecture'],
  },
]

export default function CaseStudies() {
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
    <section id="case-studies" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '5%', right: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(220,38,38,0.06), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '5%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Real Outcomes</div>
            <h2 className="section-title">
              Customization stories that <span className="grad-blue-red">moved the needle</span>
            </h2>
            <p className="section-sub">
              A snapshot of recent Zoho customization engagements — and the operational impact each one delivered.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#contact" className="link-reveal">
              Explore more case studies <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {cases.map((c, i) => (
            <div key={c.company} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                padding: '28px 26px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-7px)'
                  el.style.boxShadow = `0 30px 70px ${c.color}22`
                  el.style.borderColor = c.color
                  el.querySelector('.cs-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.cs-icon').style.background = c.color
                  el.querySelector('.cs-icon').style.color = '#fff'
                  el.querySelector('.cs-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  el.querySelector('.cs-glow').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.cs-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.cs-icon').style.background = `${c.color}15`
                  el.querySelector('.cs-icon').style.color = c.color
                  el.querySelector('.cs-icon').style.transform = ''
                  el.querySelector('.cs-glow').style.opacity = '0'
                }}
              >
                <div className="cs-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: c.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.45s ease-out',
                }} />
                <div className="cs-glow" aria-hidden style={{
                  position: 'absolute', top: -60, right: -60, width: 220, height: 220,
                  borderRadius: '50%', background: `radial-gradient(circle, ${c.color}22, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, position: 'relative' }}>
                  <div className="cs-icon" style={{
                    width: 50, height: 50, borderRadius: 13,
                    background: `${c.color}15`, color: c.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)', flexShrink: 0,
                  }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <span style={{
                    background: `${c.color}10`, color: c.color,
                    fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.5,
                    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 50,
                    fontFamily: 'Inter,sans-serif',
                  }}>{c.industry}</span>
                </div>

                <div style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                  fontSize: '0.84rem', color: '#64748b', marginBottom: 6,
                  letterSpacing: '0.02em',
                }}>{c.company}</div>

                <h3 style={{
                  fontSize: '1.08rem', fontWeight: 800, marginBottom: 12,
                  color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif',
                  lineHeight: 1.32, letterSpacing: '-0.012em',
                }}>{c.headline}</h3>

                <p style={{
                  fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7,
                  marginBottom: 18, fontFamily: 'Inter,sans-serif',
                }}>{c.summary}</p>

                {/* Metrics */}
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
                  padding: '14px 0', borderTop: '1px solid #f0ece6', borderBottom: '1px solid #f0ece6',
                  marginBottom: 16,
                }}>
                  {c.metrics.map((m, mi, marr) => (
                    <div key={m.label} style={{
                      textAlign: 'center', padding: '0 6px',
                      borderRight: mi < marr.length - 1 ? '1px solid #f0ece6' : 'none',
                    }}>
                      <div style={{
                        fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                        fontSize: '1rem', color: c.color, marginBottom: 3, lineHeight: 1.1,
                      }}>{m.value}</div>
                      <div style={{
                        fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif',
                        lineHeight: 1.3,
                      }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.stack.map(s => (
                    <span key={s} style={{
                      fontSize: '0.7rem', fontWeight: 600,
                      background: '#f6f1ea', color: '#475569',
                      padding: '3px 9px', borderRadius: 50,
                      fontFamily: 'Inter,sans-serif',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center d-lg-none" style={{ marginTop: 40 }}>
          <a href="#contact" className="link-reveal">
            Explore more case studies <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
