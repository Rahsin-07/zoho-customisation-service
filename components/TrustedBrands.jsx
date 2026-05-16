'use client'
import { useEffect, useRef } from 'react'

// Section 2 — "Out-of-the-box Zoho is powerful. Customized Zoho is unstoppable." + trusted by
const brands = [
  { name: 'Rank Me Now', alt: 'Rank Me Now logo' },
  { name: 'Innoval Digital Solutions', alt: 'Innoval Digital Solutions logo' },
  { name: 'Banana Life', alt: 'Banana Life logo' },
  { name: 'MB Logistics', alt: 'MB Logistics logo' },
  { name: 'Cflow', alt: 'Cflow logo' },
  { name: 'Camp Monk', alt: 'Camp Monk logo' },
  { name: 'Shiv Tours & Travels', alt: 'Shiv Tours And Travels Tirunelveli logo' },
  { name: 'TN Spaces · True North Co', alt: 'TN Spaces by True North Co logo' },
  { name: 'Image Star', alt: 'Image Star Chennai logo' },
  { name: 'Brite Decking', alt: 'Brite Decking Australia logo' },
]

const tcolors = ['#2563eb', '#dc2626', '#f59e0b']

export default function TrustedBrands() {
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

  // Duplicate for seamless marquee
  const marqueeBrands = [...brands, ...brands]

  return (
    <section ref={ref} id="brands" style={{
      background: '#fff', padding: '90px 0 80px', position: 'relative',
      borderTop: '1px solid #f0ece6', borderBottom: '1px solid #f0ece6',
    }}>
      <div className="container">
        <div className="text-center fade-up" style={{ marginBottom: 50, maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-blue">What it means</span>
          </div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', fontWeight: 800,
            color: '#0b1220', letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.15,
          }}>
            Out-of-the-box Zoho is powerful. <span className="grad-blue-red">Customized Zoho is unstoppable.</span>
          </h2>
          <p style={{
            color: '#475569', fontSize: '1.02rem', maxWidth: 820,
            margin: '0 auto 22px', fontFamily: 'Inter,sans-serif', lineHeight: 1.75,
          }}>
            Zoho is one of the most flexible business software ecosystems in the world, with 55+ apps covering CRM, finance, HR, marketing, operations and analytics. However, every business is unique.
          </p>
          <p style={{
            color: '#475569', fontSize: '1.02rem', maxWidth: 860,
            margin: '0 auto 26px', fontFamily: 'Inter,sans-serif', lineHeight: 1.75,
          }}>
            As a <strong style={{ color: '#0b1220' }}>Trusted Zoho Partner in India</strong>, we tailor Zoho's modules, workflows, layouts, automations and integrations so the platform mirrors your business — not a template. From deep Zoho CRM customization to custom Zoho Creator app development, advanced Analytics dashboards to third-party integrations, we make Zoho fit like a glove.
          </p>
          <a href="#contact" className="link-reveal">
            Get a free Zoho health check <i className="bi bi-arrow-right" />
          </a>
        </div>

        {/* Trusted by label */}
        <div className="text-center fade-up" style={{ marginBottom: 22 }}>
          <span style={{
            fontFamily: 'Inter,sans-serif', fontSize: '0.72rem',
            fontWeight: 800, letterSpacing: 2.5, textTransform: 'uppercase',
            color: '#64748b',
          }}>Trusted by growing businesses</span>
        </div>

        <div className="fade-up marquee">
          <div className="marquee-track" style={{ animation: 'marquee-x 36s linear infinite' }}>
            {marqueeBrands.map((b, i) => {
              const c = tcolors[i % 3]
              return (
                <div key={i} title={b.alt} style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  gap: 12, padding: '18px 32px', flexShrink: 0,
                  background: '#fafaf7', border: '1px solid #e8e3dc', borderRadius: 16,
                  minWidth: 220, transition: 'all 0.3s var(--ease-out)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = c
                    e.currentTarget.style.boxShadow = `0 14px 32px ${c}1f`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.borderColor = '#e8e3dc'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: 'var(--grad-tri)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                    fontSize: '0.95rem', flexShrink: 0,
                  }}>
                    {b.name.charAt(0)}
                  </div>
                  <span style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                    fontSize: '0.95rem', color: '#0b1220', whiteSpace: 'nowrap',
                  }}>{b.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
