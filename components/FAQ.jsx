'use client'
import { useState, useEffect, useRef } from 'react'

// Section 16 — Frequently asked questions
const faqs = [
  {
    q: 'What is Zoho Customization, and how is it different from implementation?',
    a: 'Zoho Implementation is the initial setup — installing apps, configuring users, migrating data. Zoho Customization is the ongoing process of tailoring Zoho\'s modules, fields, workflows, automations, and UI to match your unique business processes. Most growing businesses need both.',
  },
  {
    q: 'Is Zoho Customization safe for long-term upgrades?',
    a: 'Yes — if done correctly. At ZoFlowX, we follow upgrade-safe design principles: configuration before code, minimal hard-coding, native Deluge over hacky workarounds, and full documentation. Done poorly, customization creates tech debt. Done right, it scales for years.',
  },
  {
    q: 'Do you only customize Zoho CRM, or other Zoho apps too?',
    a: 'We customize the entire Zoho ecosystem — CRM, Creator, Analytics, Books, Inventory, Desk, People, Recruit, Campaigns, Flow, and 30+ other apps. We also customize Zoho One environments end-to-end.',
  },
  {
    q: 'When should we use Zoho Creator instead of customizing existing apps?',
    a: 'Use Zoho Creator when your workflow is so unique that no standard Zoho app fits — for example, a custom field operations app, partner portal, or internal approval system. Use customization on existing apps when your process is close to standard but needs adjustments.',
  },
  {
    q: 'Can you fix customizations done by a previous Zoho vendor?',
    a: 'Yes. We regularly audit and re-architect Zoho environments left in poor shape by previous developers. We document existing customizations, identify tech debt, and rebuild critical pieces with upgrade-safe patterns.',
  },
  {
    q: 'How long does a typical Zoho Customization project take?',
    a: 'Small customizations: 2–4 weeks. Mid-size CRM/Creator projects: 6–10 weeks. Enterprise multi-app rollouts: 3–6 months. We share an exact timeline after a free discovery session.',
  },
  {
    q: 'What does Zoho Customization cost in India?',
    a: 'It depends on scope, complexity, and number of apps involved. Small projects start in the low five figures (INR), while enterprise multi-app customization runs into lakhs. We share fixed-scope quotes after the discovery call — no hourly surprises.',
  },
  {
    q: 'Are you a Certified Zoho Partner?',
    a: 'Yes. ZoFlowX is a Certified Zoho Partner in India, with senior Zoho architects, developers, and analysts on staff.',
  },
  {
    q: 'Which Indian cities do you serve?',
    a: 'Bangalore, Mumbai, Chennai, Hyderabad, Pune, Delhi NCR, Ahmedabad, Kolkata, Coimbatore, Jaipur, Kochi, and Indore — both onsite and remotely. We also serve clients globally.',
  },
  {
    q: 'Why is ZoFlowX considered one of the best Zoho Partners in India?',
    a: 'Three reasons: depth, governance and outcomes. We bring senior, certified Zoho architects (not junior implementers), engineer customizations that are documented and upgrade-safe, and tie every deliverable to a measurable business KPI. Add 500+ projects across Bangalore, Mumbai, Chennai and beyond — and you have a partner built for serious work.',
  },
  {
    q: 'Do you offer Zoho customization for small businesses?',
    a: 'Yes. We have tailored engagement models for Zoho customization for small businesses — focused, outcome-oriented scopes that deliver maximum ROI without enterprise-level investment. We help small teams get the most from Zoho quickly.',
  },
]

const relatedPages = [
  { label: 'Zoho CRM Customization', href: '#', icon: 'bi-people-fill',    color: '#2563eb' },
  { label: 'Hire Zoho Developer',    href: '#', icon: 'bi-person-workspace', color: '#dc2626' },
  { label: 'Zoho CRM Data Migration',href: '#', icon: 'bi-arrow-left-right', color: '#f59e0b' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
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
    <section id="faq" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '10%', right: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(220,38,38,0.07), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">FAQs</span>
          </div>
          <h2 className="section-title">
            Frequently asked <span className="grad-blue-red">questions</span>
          </h2>
          <p className="section-sub mx-auto">
            Everything you wanted to know about Zoho customization — and a few things you should know before hiring any partner.
          </p>
          <div style={{ marginTop: 20 }}>
            <a href="#contact" className="link-reveal">
              Have another question? Ask us <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-10">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((f, i) => {
                const isOpen = open === i
                const accent = ['#2563eb', '#dc2626', '#f59e0b'][i % 3]
                return (
                  <div key={f.q} className="fade-up" style={{ transitionDelay: `${(i % 6) * 0.04}s` }}>
                    <div style={{
                      background: '#fff',
                      border: `1px solid ${isOpen ? accent : '#e8e3dc'}`,
                      borderRadius: 16,
                      overflow: 'hidden',
                      transition: 'all 0.3s var(--ease-out)',
                      boxShadow: isOpen ? `0 18px 40px ${accent}1f` : '0 2px 8px rgba(11,18,32,0.04)',
                    }}>
                      <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                        width: '100%', padding: '20px 24px',
                        background: 'transparent', border: 'none', cursor: 'pointer',
                        textAlign: 'left', fontFamily: 'Plus Jakarta Sans,sans-serif',
                      }}
                        onMouseEnter={e => { if (!isOpen) e.currentTarget.parentElement.style.borderColor = `${accent}66` }}
                        onMouseLeave={e => { if (!isOpen) e.currentTarget.parentElement.style.borderColor = '#e8e3dc' }}
                      >
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 14,
                          fontSize: '1rem', fontWeight: 800, color: '#0b1220',
                          letterSpacing: '-0.012em', flex: 1, lineHeight: 1.4,
                        }}>
                          <span style={{
                            width: 30, height: 30, borderRadius: 8,
                            background: isOpen ? accent : `${accent}15`,
                            color: isOpen ? '#fff' : accent,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.82rem', fontWeight: 800, flexShrink: 0,
                            transition: 'all 0.3s var(--ease-out)',
                          }}>{String(i + 1).padStart(2, '0')}</span>
                          {f.q}
                        </span>
                        <span style={{
                          width: 32, height: 32, borderRadius: '50%',
                          background: isOpen ? accent : '#f6f1ea',
                          color: isOpen ? '#fff' : '#475569',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.9rem', flexShrink: 0,
                          transition: 'all 0.3s var(--ease-out)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        }}>
                          <i className="bi bi-chevron-down" />
                        </span>
                      </button>
                      <div style={{
                        maxHeight: isOpen ? 400 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.4s var(--ease-out)',
                      }}>
                        <div style={{
                          padding: '0 24px 22px 68px',
                          fontFamily: 'Inter,sans-serif',
                          fontSize: '0.94rem', color: '#475569', lineHeight: 1.72,
                          borderTop: `1px solid ${accent}1a`,
                          paddingTop: 16,
                        }}>{f.a}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="fade-up" style={{ marginTop: 70 }}>
          <div className="text-center mb-4">
            <h3 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#0b1220',
              letterSpacing: '-0.016em', marginBottom: 8,
            }}>Related Pages</h3>
            <p style={{ fontFamily: 'Inter,sans-serif', color: '#64748b', fontSize: '0.95rem', marginBottom: 0 }}>
              Dig deeper into the Zoho services we offer
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {relatedPages.map((rp, i) => (
              <div key={rp.label} className="col-md-4">
                <a href={rp.href} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '20px 22px', background: '#fff',
                  border: '1px solid #e8e3dc', borderRadius: 16,
                  textDecoration: 'none',
                  transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', overflow: 'hidden',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = rp.color
                    e.currentTarget.style.boxShadow = `0 18px 40px ${rp.color}22`
                    e.currentTarget.querySelector('.rp-icon').style.background = rp.color
                    e.currentTarget.querySelector('.rp-icon').style.color = '#fff'
                    e.currentTarget.querySelector('.rp-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                    e.currentTarget.querySelector('.rp-arrow').style.transform = 'translateX(4px)'
                    e.currentTarget.querySelector('.rp-arrow').style.color = rp.color
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.borderColor = '#e8e3dc'
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.querySelector('.rp-icon').style.background = `${rp.color}15`
                    e.currentTarget.querySelector('.rp-icon').style.color = rp.color
                    e.currentTarget.querySelector('.rp-icon').style.transform = ''
                    e.currentTarget.querySelector('.rp-arrow').style.transform = ''
                    e.currentTarget.querySelector('.rp-arrow').style.color = '#94a3b8'
                  }}
                >
                  <div className="rp-icon" style={{
                    width: 46, height: 46, borderRadius: 12,
                    background: `${rp.color}15`, color: rp.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', flexShrink: 0,
                    transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  }}>
                    <i className={`bi ${rp.icon}`} />
                  </div>
                  <span style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                    fontSize: '0.95rem', color: '#0b1220', flex: 1,
                  }}>{rp.label}</span>
                  <i className="bi bi-arrow-up-right rp-arrow" style={{
                    color: '#94a3b8', fontSize: '1.05rem',
                    transition: 'transform 0.28s var(--ease-out), color 0.28s var(--ease-out)',
                  }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
