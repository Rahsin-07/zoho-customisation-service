'use client'
import { useEffect, useRef, useState } from 'react'

// Section 15 (alt) — Contact form
const benefits = [
  { icon: 'bi-lightning-charge-fill', color: '#fcd34d', title: 'Same-day reply',     desc: 'A senior architect replies to every form, every day.' },
  { icon: 'bi-shield-check',          color: '#93c5fd', title: 'Zero obligation',    desc: 'No credit card. No spam. Just a clear conversation.' },
  { icon: 'bi-person-badge',          color: '#fca5a5', title: 'No SDRs',            desc: 'You talk to someone who can actually scope your build.' },
]

const channels = [
  { icon: 'bi-envelope-fill',   label: 'Email',    value: 'info@zoflowx.com', href: 'mailto:info@zoflowx.com',   color: '#2563eb' },
  { icon: 'bi-telephone-fill',  label: 'Call us',  value: '+91 8190 009 222', href: 'tel:+918190009222',         color: '#dc2626' },
  { icon: 'bi-whatsapp',        label: 'WhatsApp', value: 'Message us anytime', href: 'https://wa.me/918190009222', color: '#25d366' },
]

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', requirement: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New Zoho customization enquiry from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nRequirement:\n${form.requirement}`
    )
    window.location.href = `mailto:info@zoflowx.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} style={{
      background: '#fff', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center fade-up" style={{ maxWidth: 800, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Get in touch</span>
          </div>
          <h2 className="section-title">
            Tell us how your business runs — <span className="grad-blue-red">we'll map the rest</span>
          </h2>
          <p className="section-sub mx-auto">
            A senior Zoho architect will respond within a business day. Share what's broken, what's missing, or what's coming next — we'll send back a clear customization plan.
          </p>
        </div>

        <div className="row g-4">
          {/* LEFT — channels + benefits */}
          <div className="col-lg-5 fade-up">
            {/* Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {channels.map(ch => (
                <a key={ch.label} href={ch.href} target={ch.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 18px', background: '#fafaf7',
                  border: '1px solid #e8e3dc', borderRadius: 16,
                  textDecoration: 'none',
                  transition: 'all 0.3s var(--ease-out)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateX(4px)'
                    e.currentTarget.style.borderColor = ch.color
                    e.currentTarget.style.boxShadow = `0 14px 30px ${ch.color}1f`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.borderColor = '#e8e3dc'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div style={{
                    width: 46, height: 46, borderRadius: 13,
                    background: `${ch.color}15`, color: ch.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem', flexShrink: 0,
                  }}>
                    <i className={`bi ${ch.icon}`} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif', textTransform: 'uppercase', letterSpacing: 1.4, fontWeight: 700 }}>{ch.label}</div>
                    <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.96rem', color: '#0b1220', marginTop: 2 }}>{ch.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Benefits */}
            <div style={{
              background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
              borderRadius: 20, padding: '26px 24px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-tri)' }} />
              <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.18 }} className="dot-grid-light" />

              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: 2,
                  textTransform: 'uppercase', color: '#fcd34d', marginBottom: 14,
                  fontFamily: 'Inter,sans-serif',
                }}>What to expect</div>
                {benefits.map(b => (
                  <div key={b.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
                    <i className={`bi ${b.icon}`} style={{ color: b.color, fontSize: '1.15rem', marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '0.96rem', color: '#fff', letterSpacing: '-0.01em' }}>{b.title}</div>
                      <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.72)', fontFamily: 'Inter,sans-serif', marginTop: 2, lineHeight: 1.55 }}>{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="col-lg-7 fade-up">
            <form onSubmit={handleSubmit} style={{
              background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
              padding: '32px 30px', position: 'relative', overflow: 'hidden',
              boxShadow: '0 18px 50px rgba(11,18,32,0.06)',
            }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--grad-tri)' }} />

              <h3 style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '1.4rem', color: '#0b1220', marginBottom: 6, letterSpacing: '-0.014em',
              }}>Share your Zoho challenge</h3>
              <p style={{ fontFamily: 'Inter,sans-serif', color: '#64748b', fontSize: '0.92rem', marginBottom: 22, lineHeight: 1.65 }}>
                We respond in one business day with a clear next step.
              </p>

              <div className="row g-3">
                <div className="col-md-6">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>Your name <span style={{ color: '#dc2626' }}>*</span></label>
                  <input required type="text" placeholder="Arul Raj" className="zfx-input" value={form.name} onChange={handleChange('name')} />
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>Company</label>
                  <input type="text" placeholder="ZoFlowX" className="zfx-input" value={form.company} onChange={handleChange('company')} />
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>Email <span style={{ color: '#dc2626' }}>*</span></label>
                  <input required type="email" placeholder="you@company.com" className="zfx-input" value={form.email} onChange={handleChange('email')} />
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>Phone / WhatsApp</label>
                  <input type="tel" placeholder="+91 ..." className="zfx-input" value={form.phone} onChange={handleChange('phone')} />
                </div>
                <div className="col-12">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155', fontFamily: 'Inter,sans-serif', marginBottom: 6, display: 'block' }}>What customization do you need? <span style={{ color: '#dc2626' }}>*</span></label>
                  <textarea required placeholder="Which Zoho apps you use today, what's broken, what you'd like to customize, your timeline..." className="zfx-input" value={form.requirement} onChange={handleChange('requirement')} />
                </div>
                <div className="col-12">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
                    <p style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif', marginBottom: 0 }}>
                      <i className="bi bi-shield-lock" style={{ marginRight: 6 }} />
                      Your details stay between us. No spam, no SDR follow-up.
                    </p>
                    <button type="submit" className="btn-gradient ahover">
                      Send my brief <i className="bi bi-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>

              {submitted && (
                <div style={{
                  marginTop: 18, padding: '14px 16px',
                  background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 12,
                  color: '#065f46', fontSize: '0.9rem', fontFamily: 'Inter,sans-serif',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <i className="bi bi-check-circle-fill" style={{ fontSize: '1.1rem' }} />
                  Your email client just opened with your brief. Hit send and we'll be in touch within a business day.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
