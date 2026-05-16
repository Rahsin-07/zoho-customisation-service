'use client'
import { useEffect, useRef } from 'react'

// Section 15 — Let's build a Zoho your team will actually use
const valueProps = [
  {
    icon: 'bi-clipboard2-check',
    color: '#93c5fd',
    title: 'Free Zoho health check',
    desc: 'We audit your setup before recommending anything.',
  },
  {
    icon: 'bi-person-workspace',
    color: '#fcd34d',
    title: 'Senior architect on call',
    desc: "You speak directly with the person who builds it.",
  },
  {
    icon: 'bi-file-earmark-text',
    color: '#fca5a5',
    title: 'Written solution brief',
    desc: "Yours to keep, whether we work together or not.",
  },
]

const credentials = [
  { v: '14+', l: 'Years Experience', c: '#93c5fd' },
  { v: '50+', l: 'Implementations',  c: '#fca5a5' },
  { v: '20+', l: 'Industries',       c: '#fcd34d' },
]

export default function DiscoveryCall() {
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
    <section id="discovery-call" ref={ref} style={{
      background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 22% 28%, rgba(99,179,237,0.20) 0%, transparent 55%), radial-gradient(ellipse at 82% 78%, rgba(245,158,11,0.16) 0%, transparent 50%), radial-gradient(ellipse at 78% 18%, rgba(220,38,38,0.14) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.22 }} className="grid-pattern-light" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* LEFT — copy + values */}
          <div className="col-lg-6 fade-up">
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.8px',
              textTransform: 'uppercase', color: '#f59e0b', marginBottom: 16,
            }}>
              <span style={{ width: 28, height: 2, background: 'currentColor', borderRadius: 2 }} />
              Zoho Customization Services
            </span>

            <h2 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800,
              color: '#fff', marginBottom: 18, letterSpacing: '-0.022em', lineHeight: 1.12,
            }}>
              Let's build a Zoho your team will <span style={{
                background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>actually use</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.78)', fontSize: '1.02rem', marginBottom: 28,
              fontFamily: 'Inter,sans-serif', lineHeight: 1.72,
            }}>
              Tell us how your business runs. A senior Zoho architect from ZoFlowX will map your workflows, identify what's holding your team back, and share a clear customization plan — no boilerplate, no junior handoffs.
            </p>

            {/* Value cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {valueProps.map((v) => (
                <div key={v.title} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 14,
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s var(--ease-out)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
                    e.currentTarget.style.borderColor = `${v.color}66`
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                    e.currentTarget.style.transform = ''
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${v.color}1f`, color: v.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem', flexShrink: 0,
                  }}>
                    <i className={`bi ${v.icon}`} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                      fontSize: '1rem', color: '#fff', marginBottom: 2, letterSpacing: '-0.01em',
                    }}>{v.title}</div>
                    <div style={{
                      fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'Inter,sans-serif', lineHeight: 1.55,
                    }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer" className="btn-accent ahover">
                Book a free architect call <i className="bi bi-arrow-right" />
              </a>
              <a href="https://www.linkedin.com/in/arulraj-inboxist/" target="_blank" rel="noreferrer" className="btn-outline-white">
                <i className="bi bi-linkedin" /> Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — Arul Raj founder card */}
          <div className="col-lg-6 fade-up">
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 24, padding: '36px 32px',
              backdropFilter: 'blur(14px)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
              }} />
              <div aria-hidden style={{
                position: 'absolute', top: -80, right: -80, width: 280, height: 280,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.28), transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22, position: 'relative' }}>
                <div style={{
                  width: 84, height: 84, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #dc2626, #f59e0b)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                  fontSize: '2rem', color: '#fff',
                  boxShadow: '0 18px 40px rgba(245,158,11,0.30)',
                  position: 'relative', flexShrink: 0,
                }}>
                  AR
                  <span style={{
                    position: 'absolute', bottom: -2, right: -2,
                    width: 26, height: 26, borderRadius: '50%',
                    background: '#10b981', border: '3px solid #0b1220',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className="bi bi-check2" style={{ color: '#fff', fontSize: '0.85rem' }} />
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                    fontSize: '1.35rem', color: '#fff', letterSpacing: '-0.014em',
                  }}>Arul Raj</div>
                  <div style={{
                    fontSize: '0.85rem', color: '#fcd34d',
                    fontFamily: 'Inter,sans-serif', fontWeight: 600, marginTop: 2,
                  }}>Founder & Senior Zoho Architect</div>
                </div>
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.8)', fontSize: '0.96rem', lineHeight: 1.7,
                fontFamily: 'Inter,sans-serif', marginBottom: 24, position: 'relative',
              }}>
                14+ years architecting CRM and email automation stacks — previously at Oracle and Infosys. Arul personally maps your workflows on the first call and reviews every solution brief before it leaves the building.
              </p>

              {/* Credential strip */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
                padding: '18px 0', borderTop: '1px solid rgba(255,255,255,0.10)',
                position: 'relative',
              }}>
                {credentials.map((c, i, arr) => (
                  <div key={c.l} style={{
                    textAlign: 'center', padding: '0 8px',
                    borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                      fontSize: '1.6rem', color: c.c, lineHeight: 1, marginBottom: 4,
                    }}>{c.v}</div>
                    <div style={{
                      fontSize: '0.74rem', color: 'rgba(255,255,255,0.65)',
                      fontFamily: 'Inter,sans-serif', lineHeight: 1.3,
                    }}>{c.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
