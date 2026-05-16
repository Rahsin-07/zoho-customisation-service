'use client'
import { useEffect, useRef } from 'react'

// Section 11 — ZoFlowX vs DIY vs generic vendors
const compareRows = [
  { aspect: 'Approach to your business', diy: 'Trial and error, learn as you go', generic: 'Templates from another client', zoflowx: 'Workflow-first, mapped to your actual process' },
  { aspect: 'Who builds it', diy: 'Your already-busy in-house team', generic: 'Junior implementers, frequent handoffs', zoflowx: 'Senior architects with 8–13 yrs Zoho experience' },
  { aspect: 'Code vs configuration', diy: 'Random scripts, no patterns', generic: 'Heavy hard-coded Deluge everywhere', zoflowx: 'Configuration first, code only when essential' },
  { aspect: 'Upgrade safety', diy: 'Breaks on the next Zoho update', generic: 'Survives, but tech debt piles up', zoflowx: 'Documented, modular, upgrade-safe by design' },
  { aspect: 'Documentation', diy: 'Lives in someone\'s head', generic: 'Minimal — usually a one-pager', zoflowx: 'Full design doc + admin playbook + training' },
  { aspect: 'After go-live', diy: 'No one owns it', generic: 'Goodbye, talk to support', zoflowx: 'Hyper-care, monthly optimization, real ownership' },
  { aspect: 'Cost predictability', diy: 'Hidden costs in lost productivity', generic: 'Hourly billing surprises', zoflowx: 'Fixed-scope SOWs tied to KPIs' },
]

export default function Journey() {
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
    <section id="compare" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(220,38,38,0.07), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 320, background: 'radial-gradient(circle, rgba(245,158,11,0.05), transparent 65%)', filter: 'blur(30px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 880, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">How we compare</span>
          </div>
          <h2 className="section-title">
            ZoFlowX vs DIY <span className="grad-blue-red">vs generic vendors</span>
          </h2>
          <p className="section-sub mx-auto">
            We earn the customization partner title in every column. Here's how each option actually stacks up when you put them side by side.
          </p>
        </div>

        {/* DESKTOP TABLE */}
        <div className="d-none d-lg-block fade-up">
          <div style={{
            background: '#fff', border: '1px solid #e8e3dc', borderRadius: 24,
            overflow: 'hidden', boxShadow: '0 18px 50px rgba(11,18,32,0.06)',
            position: 'relative',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: 'var(--grad-tri)',
            }} />
            {/* Header row */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1.05fr',
              borderBottom: '1px solid #e8e3dc',
              background: '#fafaf7',
            }}>
              <div style={{ padding: '22px 24px', fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.72rem', fontWeight: 800, letterSpacing: 1.6, textTransform: 'uppercase', color: '#64748b' }}>Aspect</div>
              <div style={{ padding: '22px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '1.02rem', color: '#0b1220' }}>DIY / In-house</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif', marginTop: 2 }}>Self-taught approach</div>
              </div>
              <div style={{ padding: '22px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '1.02rem', color: '#0b1220' }}>Generic vendor</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif', marginTop: 2 }}>Resellers, freelancers</div>
              </div>
              <div style={{
                padding: '22px 24px', textAlign: 'center',
                background: 'linear-gradient(135deg, #2563eb12 0%, #dc262610 50%, #f59e0b14 100%)',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: 8, right: 8, fontSize: '0.62rem',
                  fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase',
                  background: 'var(--grad-tri)', color: '#fff',
                  padding: '2px 8px', borderRadius: 50, fontFamily: 'Inter,sans-serif',
                }}>Recommended</span>
                <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '1.08rem' }}>
                  <span className="grad-blue-red">ZoFlowX</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#475569', fontFamily: 'Inter,sans-serif', marginTop: 2, fontWeight: 600 }}>Certified Zoho Partner</div>
              </div>
            </div>

            {/* Rows */}
            {compareRows.map((r, i) => (
              <div key={r.aspect} style={{
                display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1.05fr',
                borderBottom: i < compareRows.length - 1 ? '1px solid #f0ece6' : 'none',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#fafaf7'}
                onMouseLeave={e => e.currentTarget.style.background = ''}
              >
                <div style={{ padding: '20px 24px', fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#0b1220' }}>{r.aspect}</div>
                <div style={{ padding: '20px 24px', textAlign: 'center', fontSize: '0.88rem', color: '#64748b', fontFamily: 'Inter,sans-serif', lineHeight: 1.55, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <i className="bi bi-x-circle" style={{ color: '#cbd5e1', fontSize: '1rem', flexShrink: 0 }} />
                  <span>{r.diy}</span>
                </div>
                <div style={{ padding: '20px 24px', textAlign: 'center', fontSize: '0.88rem', color: '#64748b', fontFamily: 'Inter,sans-serif', lineHeight: 1.55, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <i className="bi bi-dash-circle" style={{ color: '#cbd5e1', fontSize: '1rem', flexShrink: 0 }} />
                  <span>{r.generic}</span>
                </div>
                <div style={{
                  padding: '20px 24px', textAlign: 'center', fontSize: '0.9rem',
                  color: '#0b1220', fontFamily: 'Inter,sans-serif', lineHeight: 1.55,
                  fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: 'linear-gradient(135deg, #2563eb08 0%, #dc262606 50%, #f59e0b0a 100%)',
                }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#10b981', fontSize: '1.05rem', flexShrink: 0 }} />
                  <span>{r.zoflowx}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE STACK */}
        <div className="d-lg-none fade-up">
          {compareRows.map((r, idx) => (
            <div key={r.aspect} style={{
              background: '#fff', border: '1px solid #e8e3dc', borderRadius: 18,
              padding: '20px 20px', marginBottom: 14,
              boxShadow: '0 6px 18px rgba(11,18,32,0.04)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-tri)' }} />
              <div style={{
                fontSize: '0.72rem', fontWeight: 800, color: '#64748b',
                letterSpacing: 1.4, textTransform: 'uppercase', marginTop: 6, marginBottom: 12,
                fontFamily: 'Inter,sans-serif',
              }}>{r.aspect}</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                <i className="bi bi-x-circle" style={{ color: '#cbd5e1', fontSize: '1.05rem', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>DIY</div>
                  <div style={{ fontSize: '0.9rem', color: '#475569', fontFamily: 'Inter,sans-serif', lineHeight: 1.55 }}>{r.diy}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                <i className="bi bi-dash-circle" style={{ color: '#cbd5e1', fontSize: '1.05rem', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>Generic vendor</div>
                  <div style={{ fontSize: '0.9rem', color: '#475569', fontFamily: 'Inter,sans-serif', lineHeight: 1.55 }}>{r.generic}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <i className="bi bi-check-circle-fill" style={{ color: '#10b981', fontSize: '1.05rem', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, fontFamily: 'Inter,sans-serif' }}>
                    <span className="grad-blue-red">ZoFlowX</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#0b1220', fontFamily: 'Inter,sans-serif', lineHeight: 1.55, fontWeight: 600 }}>{r.zoflowx}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 50 }}>
          <a href="#contact" className="btn-gradient ahover">
            I want these results <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
