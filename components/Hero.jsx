'use client'
import { useEffect, useRef } from 'react'

// Section 1 — Hero with ratings + action buttons + stat strip
// Content: Zoho customization that makes Zoho work your way

// Floating Zoho module chips around the hero
const moduleChips = [
  { label: 'Zoho CRM',       icon: 'bi-people-fill',    x: '2%',  y: '14%', delay: 0,   color: '#2563eb' },
  { label: 'Zoho Books',     icon: 'bi-journal-text',   x: '88%', y: '12%', delay: 0.4, color: '#dc2626' },
  { label: 'Zoho Creator',   icon: 'bi-app-indicator',  x: '90%', y: '48%', delay: 0.2, color: '#2563eb' },
  { label: 'Zoho Analytics', icon: 'bi-bar-chart-line', x: '1%',  y: '52%', delay: 0.8, color: '#f59e0b' },
  { label: 'Zoho Flow',      icon: 'bi-diagram-3',      x: '4%',  y: '82%', delay: 1.2, color: '#dc2626' },
  { label: 'Zoho Desk',      icon: 'bi-headset',        x: '90%', y: '82%', delay: 1.0, color: '#f59e0b' },
]

// Reviewer avatars (initials) — matches the supplied reference styling
const reviewers = [
  { id: 'RK', color: '#2563eb' },
  { id: 'PM', color: '#10b981' },
  { id: 'SA', color: '#1d4ed8' },
  { id: 'VN', color: '#d97706' },
  { id: 'DM', color: '#dc2626' },
]

// Stat strip — pulled directly from the brief Section 1
const heroStats = [
  { v: '50+', l: 'Zoho Apps Customized', c: '#2563eb' },
  { v: '14+', l: 'Years of Zoho Expertise', c: '#dc2626' },
  { v: '20+', l: 'Industries Served', c: '#f59e0b' },
  { v: '98%', l: 'Client Satisfaction Rate', c: '#0b1220' },
]

export default function Hero() {
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
    <section id="hero" ref={ref} style={{
      background: 'linear-gradient(160deg, #fafaf7 0%, #f0ece5 100%)',
      padding: '90px 0 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Tri-color gradient blobs */}
      <div aria-hidden style={{ position: 'absolute', width: 540, height: 540, top: -200, left: -140, background: 'radial-gradient(circle at center, rgba(37,99,235,0.22), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 580, height: 580, bottom: -240, right: -180, background: 'radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 420, height: 420, top: '30%', right: '20%', background: 'radial-gradient(circle at center, rgba(220,38,38,0.12), transparent 60%)', animation: 'blob-drift 22s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.45 }} className="dot-grid" />

{/*  
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {moduleChips.map((c, i) => (
          <div key={c.label} className="d-none d-xl-inline-flex"
            style={{
              position: 'absolute', left: c.x, top: c.y,
              background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(8px)',
              border: '1px solid #e8e3dc', borderRadius: 999, padding: '7px 14px',
              fontSize: '0.78rem', fontFamily: 'Inter,sans-serif', fontWeight: 600,
              color: '#334155', boxShadow: '0 10px 28px rgba(11,18,32,0.08)',
              alignItems: 'center', gap: 8,
              animation: `float-y ${5 + (i % 3) * 1.2}s ease-in-out ${c.delay}s infinite`,
              whiteSpace: 'nowrap',
            }}>
            <i className={`bi ${c.icon}`} style={{ color: c.color, fontSize: '0.95rem' }} />
            {c.label}
          </div>
        ))}
      </div> */}

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* HEADLINE block */}
        <div className="text-center fade-up" style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div className="pill-tri">
              <span className="pill-dot" />
              <span>Zoho Authorized Partner · India</span>
              <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
              <span style={{ color: '#2563eb', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <i className="bi bi-patch-check-fill" /> Certified
              </span>
            </div>
          </div>

          <h1 style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            fontSize: 'clamp(2.3rem, 5.4vw, 4.05rem)',
            fontWeight: 800, color: '#0b1220',
            marginBottom: 22, letterSpacing: '-0.028em', lineHeight: 1.05,
          }}>
            <span className="grad-blue-red">Zoho Customization</span> that makes
            <br /> Zoho <span className="grad-red-yellow">work your way</span>
          </h1>

          <p style={{
            fontSize: '1.13rem', color: '#475569', maxWidth: 820,
            margin: '0 auto 28px', lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
          }}>
            We're ZoFlowX, an authorized Zoho Partner helping growing businesses customize, automate, and scale their Zoho ecosystem. From CRM customization to custom Creator apps, we engineer Zoho around your <strong style={{ color: '#0b1220' }}>real workflows</strong> — not the other way around.
          </p>

          {/* RATINGS ROW (avatars + 5 stars only, no review count text) */}
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            background: '#fff', border: '1px solid #e8e3dc', borderRadius: 50,
            padding: '6px 18px 6px 6px',
            boxShadow: '0 6px 18px rgba(11,18,32,0.06)',
            marginBottom: 24,
          }}>
            <div className="avatar-stack" aria-hidden>
              {reviewers.map((r, i) => (
                <div key={r.id} className="av" style={{ background: r.color, zIndex: reviewers.length - i }}>
                  {r.id}
                </div>
              ))}
            </div>
            <div className="rating-stars" aria-label="5 out of 5 stars">
              {[0,1,2,3,4].map(i => (
                <i key={i} className="bi bi-star-fill" style={{ animationDelay: `${i * 0.08}s` }} />
              ))}
            </div>
          </div>

          {/* PRIMARY CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 26 }}>
            <a href="#contact" className="btn-gradient ahover" style={{ padding: '0.94rem 2rem', fontSize: '0.95rem' }}>
              Book a free Zoho audit <i className="bi bi-arrow-right" />
            </a>
            <a href="#discovery-call" className="btn-white-soft ahover" style={{ padding: '0.86rem 1.9rem', fontSize: '0.95rem' }}>
              Talk to a Zoho architect <i className="bi bi-chat-dots" />
            </a>
          </div>

          {/* QUICK ACTION CHIPS — Call / WhatsApp / Email / Schedule / Live Chat */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap',
            marginBottom: 36,
          }}>
            <a href="tel:+918190009222" className="hero-action-chip">
              <i className="bi bi-telephone" /> Call
            </a>
            <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" className="hero-action-chip whatsapp">
              <i className="bi bi-whatsapp" /> WhatsApp
            </a>
            <a href="mailto:info@zoflowx.com" className="hero-action-chip">
              <i className="bi bi-envelope" /> Email
            </a>
            <a href="#discovery-call" className="hero-action-chip">
              <i className="bi bi-calendar-check" /> Schedule
            </a>
            <a href="#contact" className="hero-action-chip">
              <i className="bi bi-chat-square-text" /> Live Chat
            </a>
          </div>

          {/* Tri-dots brand mark */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <div className="tri-dots" aria-hidden>
              <span /><span /><span />
            </div>
          </div>
        </div>

        {/* HERO STATS STRIP — 50+ / 14+ / 20+ / 98% */}
        <div className="fade-up" style={{
          marginTop: 50, maxWidth: 1080, marginLeft: 'auto', marginRight: 'auto',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 0, padding: '28px 16px',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'saturate(180%) blur(12px)',
            border: '1px solid #e8e3dc', borderRadius: 22,
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 18px 50px rgba(11,18,32,0.06)',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: 'var(--grad-tri)',
            }} />
            {heroStats.map((s, i, arr) => (
              <div key={s.l} style={{
                textAlign: 'center', padding: '10px 18px',
                borderRight: i < arr.length - 1 ? '1px solid #e8e3dc' : 'none',
                position: 'relative',
              }}>
                <div style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  fontWeight: 800, color: s.c, lineHeight: 1, marginBottom: 8,
                }}>{s.v}</div>
                <div style={{
                  fontSize: '0.85rem', color: '#475569',
                  fontFamily: 'Inter,sans-serif', lineHeight: 1.4, fontWeight: 500,
                }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
