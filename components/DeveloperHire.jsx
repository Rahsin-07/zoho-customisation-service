'use client'
import { useEffect, useRef } from 'react'

// Section 7 — Our Approach: system design, not isolated scripting (5 principles)
const principles = [
  {
    num: '01',
    icon: 'bi-search',
    color: '#2563eb',
    title: 'Business process first, technology second',
    desc: 'We first map your actual workflows before we touch a single Zoho setting. Software conforms to your business — never the other way around.',
  },
  {
    num: '02',
    icon: 'bi-gear-fill',
    color: '#dc2626',
    title: 'Configuration before custom code',
    desc: 'We use native Zoho features before writing Deluge or external functions. The fewer lines of code, the less maintenance in the long run.',
  },
  {
    num: '03',
    icon: 'bi-shield-check',
    color: '#f59e0b',
    title: 'Automation paired with governance',
    desc: 'Workflows, approvals and escalations are designed with role-based access, audit trails and clean ownership from day one.',
  },
  {
    num: '04',
    icon: 'bi-graph-up-arrow',
    color: '#2563eb',
    title: 'Scalable design over quick fixes',
    desc: 'We build for the next 1,000 users, not the next quarter. Every customization is documented, modular and upgrade-safe.',
  },
  {
    num: '05',
    icon: 'bi-mortarboard-fill',
    color: '#dc2626',
    title: 'Adoption baked into the build',
    desc: 'Tiered training, role-specific walkthroughs and reinforcement sessions ensure your teams actually use what we deliver.',
  },
]

export default function DeveloperHire() {
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
    <section id="approach" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label section-label-blue">Our Approach</div>
            <h2 className="section-title">
              We treat customization as <span className="grad-blue-red">system design</span>, not isolated scripting
            </h2>
            <p className="section-sub">
              Every customization decision is taken with three things in mind: today's pain, tomorrow's growth, and a Zoho environment that remains upgrade-safe for years.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#discovery-call" className="link-reveal">
              Meet our architects <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {principles.map((p, i) => (
            <div key={p.title} className={i === 0 ? 'col-lg-6 fade-up' : i < 3 ? 'col-md-6 col-lg-6 fade-up' : 'col-md-6 col-lg-4 fade-up'} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div style={{
                background: '#fafaf7', border: '1px solid #e8e3dc', borderRadius: 20,
                padding: '28px 26px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.background = '#fff'
                  el.style.boxShadow = `0 24px 60px ${p.color}1f`
                  el.style.borderColor = p.color
                  el.querySelector('.ap-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.ap-icon').style.background = p.color
                  el.querySelector('.ap-icon').style.color = '#fff'
                  el.querySelector('.ap-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  el.querySelector('.ap-num').style.color = p.color
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.background = '#fafaf7'
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.ap-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.ap-icon').style.background = `${p.color}15`
                  el.querySelector('.ap-icon').style.color = p.color
                  el.querySelector('.ap-icon').style.transform = ''
                  el.querySelector('.ap-num').style.color = '#cbd5e1'
                }}
              >
                <div className="ap-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: p.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, position: 'relative' }}>
                  <div className="ap-icon" style={{
                    width: 54, height: 54, borderRadius: 14,
                    background: `${p.color}15`, color: p.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
                  }}>
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <span className="ap-num" style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '2rem',
                    fontWeight: 800, color: '#cbd5e1', transition: 'color 0.3s',
                    letterSpacing: '-0.025em', lineHeight: 1,
                  }}>{p.num}</span>
                </div>

                <h3 style={{
                  fontSize: '1.1rem', fontWeight: 800, marginBottom: 10,
                  color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif',
                  lineHeight: 1.32, letterSpacing: '-0.012em',
                }}>{p.title}</h3>

                <p style={{
                  fontSize: '0.92rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif',
                }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
