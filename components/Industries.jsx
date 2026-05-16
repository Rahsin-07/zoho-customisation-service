'use client'
import { useEffect, useRef } from 'react'

// Section 4 — Zoho customization tailored for every industry we touch (8 industries)
const industries = [
  {
    name: 'Manufacturing & Distribution',
    icon: 'bi-gear-wide-connected',
    color: '#2563eb',
    desc: 'Inventory, BOM, multi-warehouse and dealer-network customization.',
  },
  {
    name: 'Real Estate & Construction',
    icon: 'bi-buildings',
    color: '#dc2626',
    desc: 'Project tracking, broker management, payment-milestone automation.',
  },
  {
    name: 'Professional Services',
    icon: 'bi-briefcase-fill',
    color: '#f59e0b',
    desc: 'Time, billing, project & client lifecycle management in one stack.',
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: 'bi-heart-pulse-fill',
    color: '#2563eb',
    desc: 'Patient journeys, compliant CRM, referral & appointment automation.',
  },
  {
    name: 'FinTech & BFSI',
    icon: 'bi-bank',
    color: '#dc2626',
    desc: 'Lead-to-loan workflows, KYC modules and audit-grade record keeping.',
  },
  {
    name: 'EdTech & Education',
    icon: 'bi-mortarboard-fill',
    color: '#f59e0b',
    desc: 'Admissions CRM, batch management, fee & placement tracking.',
  },
  {
    name: 'SaaS & Technology',
    icon: 'bi-cloud-fill',
    color: '#2563eb',
    desc: 'Trial-to-paid funnels, churn analytics and usage-based automations.',
  },
  {
    name: 'D2C & E-Commerce',
    icon: 'bi-cart3',
    color: '#dc2626',
    desc: 'Marketplace sync, order-to-cash, returns & loyalty workflows.',
  },
]

export default function Industries() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="industries" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: -100, right: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.10), transparent 65%)', filter: 'blur(30px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: -100, left: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.10), transparent 65%)', filter: 'blur(30px)' }} />
      <div aria-hidden style={{ position: 'absolute', top: '40%', right: '30%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.06), transparent 65%)', filter: 'blur(28px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 900, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">Industries We Serve</span>
          </div>
          <h2 className="section-title">
            Zoho customization tailored for <span className="grad-red-yellow">every industry we touch</span>
          </h2>
          <p className="section-sub mx-auto">
            Every sector has its own quirks. We've shipped Zoho customizations across all of these — and we know exactly where each one tends to break.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {industries.map((ind, i) => (
            <div key={ind.name} className="col-md-6 col-lg-3 fade-up" style={{ transitionDelay: `${i * 0.04}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 18,
                padding: '24px 22px', height: '100%',
                transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-5px)'
                  el.style.borderColor = ind.color
                  el.style.boxShadow = `0 20px 44px ${ind.color}1f`
                  el.querySelector('.ind-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.ind-icon').style.background = ind.color
                  el.querySelector('.ind-icon').style.color = '#fff'
                  el.querySelector('.ind-icon').style.transform = 'rotate(-5deg) scale(1.08)'
                  el.querySelector('.ind-name').style.color = ind.color
                  el.querySelector('.ind-glow').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.borderColor = '#e8e3dc'
                  el.style.boxShadow = ''
                  el.querySelector('.ind-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.ind-icon').style.background = `${ind.color}15`
                  el.querySelector('.ind-icon').style.color = ind.color
                  el.querySelector('.ind-icon').style.transform = ''
                  el.querySelector('.ind-name').style.color = '#0b1220'
                  el.querySelector('.ind-glow').style.opacity = '0'
                }}
              >
                <div className="ind-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: ind.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />
                <div className="ind-glow" aria-hidden style={{
                  position: 'absolute', top: -60, right: -60, width: 200, height: 200,
                  borderRadius: '50%', background: `radial-gradient(circle, ${ind.color}1f, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.36s',
                }} />
                <div className="ind-icon" style={{
                  width: 52, height: 52, borderRadius: 13, marginBottom: 14,
                  background: `${ind.color}15`, color: ind.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', zIndex: 1,
                }}>
                  <i className={`bi ${ind.icon}`} />
                </div>
                <h3 className="ind-name" style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                  fontSize: '0.98rem', color: '#0b1220',
                  transition: 'color 0.3s', position: 'relative', zIndex: 1,
                  lineHeight: 1.3, marginBottom: 8, letterSpacing: '-0.012em',
                }}>{ind.name}</h3>
                <p style={{
                  fontSize: '0.84rem', color: '#64748b', lineHeight: 1.6,
                  fontFamily: 'Inter,sans-serif', marginBottom: 0,
                  position: 'relative', zIndex: 1,
                }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="fade-up" style={{ marginTop: 50 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 20,
            padding: '28px 32px',
            background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)',
            border: '1px solid #d1fae5', borderRadius: 22,
            maxWidth: 940, margin: '0 auto', position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: 'linear-gradient(95deg, #25d366, #128c4f)',
            }} />
            <div style={{ maxWidth: 540, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16, background: '#25d366', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', flexShrink: 0,
                boxShadow: '0 8px 20px rgba(37,211,102,0.30)',
              }}>
                <i className="bi bi-whatsapp" />
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                  fontSize: '1.05rem', color: '#0b1220', marginBottom: 4, letterSpacing: '-0.01em',
                }}>Can't find your industry?</h4>
                <p style={{
                  fontFamily: 'Inter,sans-serif', color: '#475569',
                  fontSize: '0.9rem', marginBottom: 0, lineHeight: 1.6,
                }}>
                  Contact us directly on WhatsApp to discuss your Zoho customization needs.
                </p>
              </div>
            </div>
            <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#25d366', color: '#fff', border: 'none', borderRadius: 12,
              padding: '0.82rem 1.7rem',
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none', cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(37,211,102,0.34)',
              transition: 'all 0.28s var(--ease-out)', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(37,211,102,0.46)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.34)' }}
            >
              <i className="bi bi-whatsapp" /> Contact us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
