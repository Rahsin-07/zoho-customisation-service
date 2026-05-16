'use client'
import { useEffect, useRef } from 'react'

// Section 14 — Zoho Insights & Resources
const articles = [
  {
    color: '#2563eb', category: 'CRM Customization', readTime: '9 min read',
    title: 'The 7 Zoho CRM customizations that actually move the needle',
    excerpt: 'Pipeline architecture, validation rules, scoring, Canvas views, and the four hidden setting changes that quietly compound over a quarter.',
    icon: 'bi-people-fill',
  },
  {
    color: '#dc2626', category: 'Automation', readTime: '11 min read',
    title: '5 Deluge patterns that quietly fail at scale (and our fixes)',
    excerpt: 'Throttling, retry logic, idempotent updates, partial saves and audit logging — what most freelance scripts skip but production needs.',
    icon: 'bi-code-slash',
  },
  {
    color: '#f59e0b', category: 'Migration', readTime: '14 min read',
    title: 'Tally to Zoho Books: a checklist from 1,500+ records of pain',
    excerpt: 'PIN codes, MobilePhone formats, custom numbering, GST templates — hard lessons distilled into a clean pre-migration checklist.',
    icon: 'bi-arrow-left-right',
  },
]

export default function Resources() {
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
    <section id="resources" ref={ref} style={{ background: '#fafaf7', position: 'relative' }}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Insights</div>
            <h2 className="section-title">
              Zoho Insights & <span className="grad-blue-red">Resources</span>
            </h2>
            <p className="section-sub">
              Stay ahead with the latest Zoho tips, tutorials, and expert resources from India's trusted Zoho Partner.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#" className="link-reveal">
              View all articles <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {articles.map((a, i) => (
            <div key={a.title} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <article style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                padding: '0', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', cursor: 'pointer',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 30px 70px ${a.color}22`
                  el.style.borderColor = a.color
                  el.querySelector('.rs-image').style.transform = 'scale(1.05)'
                  el.querySelector('.rs-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  el.querySelector('.rs-arrow').style.transform = 'translateX(6px)'
                  el.querySelector('.rs-title').style.color = a.color
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.rs-image').style.transform = ''
                  el.querySelector('.rs-icon').style.transform = ''
                  el.querySelector('.rs-arrow').style.transform = ''
                  el.querySelector('.rs-title').style.color = '#0b1220'
                }}
              >
                {/* Image area with icon */}
                <div className="rs-image" style={{
                  height: 160,
                  background: `linear-gradient(135deg, ${a.color}1a 0%, ${a.color}33 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.5s cubic-bezier(.2,.7,.2,1)',
                }}>
                  <div aria-hidden style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `radial-gradient(${a.color}40 1px, transparent 1px)`,
                    backgroundSize: '20px 20px', opacity: 0.4,
                  }} />
                  <div className="rs-icon" style={{
                    width: 70, height: 70, borderRadius: 18,
                    background: '#fff', color: a.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem', boxShadow: `0 12px 28px ${a.color}30`,
                    transition: 'transform 0.4s cubic-bezier(.2,.7,.2,1)',
                  }}>
                    <i className={`bi ${a.icon}`} />
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <span style={{
                      background: `${a.color}15`, color: a.color,
                      fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.5,
                      textTransform: 'uppercase', padding: '4px 10px', borderRadius: 50,
                      fontFamily: 'Inter,sans-serif',
                    }}>{a.category}</span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>
                      <i className="bi bi-clock" style={{ marginRight: 4 }} />{a.readTime}
                    </span>
                  </div>

                  <h3 className="rs-title" style={{
                    fontSize: '1.05rem', fontWeight: 800, marginBottom: 10,
                    color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif',
                    lineHeight: 1.35, letterSpacing: '-0.012em', transition: 'color 0.3s',
                  }}>{a.title}</h3>

                  <p style={{
                    fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65,
                    marginBottom: 16, fontFamily: 'Inter,sans-serif', flex: 1,
                  }}>{a.excerpt}</p>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: '0.84rem', fontWeight: 700, color: a.color,
                    fontFamily: 'Plus Jakarta Sans,sans-serif',
                  }}>
                    Read article <i className="bi bi-arrow-right rs-arrow" style={{ transition: 'transform 0.28s var(--ease-out)' }} />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="fade-up text-center d-lg-none" style={{ marginTop: 40 }}>
          <a href="#" className="link-reveal">
            View all articles <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
