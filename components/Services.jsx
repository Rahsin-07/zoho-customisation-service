'use client'
import { useEffect, useRef } from 'react'

// Section 5 — End-to-end Zoho customization services (10 services)
const PALETTE = ['#2563eb', '#dc2626', '#f59e0b']

const services = [
  {
    num: '01', tag: 'CRM', icon: 'bi-people-fill',
    title: 'Zoho CRM Customization',
    desc: 'We do more than just setup and configure Zoho CRM. Our advanced Zoho CRM customization is designed with your sales team in mind, not the software.',
    bullets: [
      'Custom modules, fields, layouts, validation rules',
      'Lead scoring, assignment, territory management',
      'Custom buttons, related lists, Canvas views',
      'Multi-pipeline architecture for product lines',
      'Sales process automation & workflows',
      'Role-based permissions & data sharing',
    ],
    outcome: 'Shorter sales cycles, better data hygiene, higher rep adoption',
    cta: 'Customize my CRM',
  },
  {
    num: '02', tag: 'Automation', icon: 'bi-lightning-charge-fill',
    title: 'Zoho Automation Services',
    desc: 'We design end-to-end Zoho automation services that eliminate manual effort across your entire organisation.',
    bullets: [
      'Workflow rules, blueprints, and macros',
      'Cross-app automation via Zoho Flow',
      'Email, SMS, WhatsApp, Slack triggers',
      'Multi-step approvals with escalations',
      'Custom Deluge functions for advanced logic',
      'SLA tracking, auto-escalations, exceptions',
    ],
    outcome: 'Faster cycle times, zero approval bottlenecks, consistent execution',
    cta: 'Automate my workflows',
  },
  {
    num: '03', tag: 'Creator', icon: 'bi-app-indicator',
    title: 'Zoho Creator Custom App Development',
    desc: "Create purpose-built operational apps when standard Zoho doesn't go deep enough — built to fit inside your stack and integrate seamlessly within Zoho One.",
    bullets: [
      'Custom forms, workflows, and reports',
      'Approval portals & internal admin tools',
      'Deluge scripting for advanced logic',
      'Mobile-ready apps for field teams',
      'Customer / partner / vendor portals',
      'Native integration with Zoho stack',
    ],
    outcome: 'Purpose-built functionality without external software or third-party tools',
    cta: 'Build a custom app',
  },
  {
    num: '04', tag: 'Integration', icon: 'bi-diagram-3-fill',
    title: 'Zoho Integration Services',
    desc: 'Secure and reliable data flow between Zoho and your broader tech stack — using Zoho API integration, Zoho Flow and custom webhooks.',
    bullets: [
      'Native integrations across Zoho One apps',
      'Tally, SAP, Dynamics, NetSuite connectors',
      'Telephony, WhatsApp, SMS integration',
      'Custom REST API & webhook integrations',
      'Razorpay, Stripe, PayPal payment gateways',
      'Real-time bi-directional sync',
    ],
    outcome: 'One source of truth across every system your business runs on',
    cta: 'Integrate my stack',
  },
  {
    num: '05', tag: 'Analytics', icon: 'bi-bar-chart-line-fill',
    title: 'Zoho Analytics Customization',
    desc: 'Transform raw Zoho data into executive-level insights. We create custom Zoho Analytics dashboards that integrate data from CRM, Books, Desk, Inventory, and external sources.',
    bullets: [
      'Executive & departmental dashboards',
      'Predictive analytics & Zia AI insights',
      'Embedded analytics in CRM and Creator',
      'Cross-app and cross-system reporting',
      'KPI tracking with threshold alerts',
      'White-labelled client reporting portals',
    ],
    outcome: 'Real insight for leadership — not spreadsheets, not stale data',
    cta: 'Build my dashboards',
  },
  {
    num: '06', tag: 'Books', icon: 'bi-journal-text',
    title: 'Zoho Books & Finance Customization',
    desc: 'Our Zoho Books customization services align your financial workflows with operational reality — eliminating the manual reconciliation that slows finance teams down.',
    bullets: [
      'Custom invoice, quote & PO templates by entity',
      'Multi-level finance approval chains with audit trail',
      'Tax configuration, multi-currency & branch-level setup',
      'CRM-to-Books automation for deals, orders & billing',
      'Automated payment reminders & collections workflows',
      'Real-time financial dashboards & custom report builders',
    ],
    outcome: 'Faster billing, accurate books, real-time financial visibility',
    cta: 'Customize finance',
  },
  {
    num: '07', tag: 'Desk + Campaigns', icon: 'bi-headset',
    title: 'Zoho Desk & Campaigns Customization',
    desc: 'We customize Zoho Desk for your specific support operations and tie Zoho Campaigns tightly into your sales pipeline — so marketing journeys, support tickets and CRM context all speak the same language.',
    bullets: [
      'Custom ticket views, routing rules & SLA automation',
      'CRM-linked support context & cross-module escalation',
      'Custom satisfaction surveys & feedback loop automation',
      'Trigger-based Zoho Campaigns with audience segmentation',
      'Automated drip sequences tied to deal stage & behaviour',
      'Unified sales, support & marketing reporting in Analytics',
    ],
    outcome: 'Aligned sales, marketing, and support — one Zoho ecosystem',
    cta: 'Align my teams',
  },
  {
    num: '08', tag: 'Zoho One', icon: 'bi-grid-3x3-gap-fill',
    title: 'Zoho One Stack Architecture',
    desc: 'Strategic design and clean-up of your entire Zoho environment so apps function as a single platform — not 30 separate tools. We audit, rationalise and rebuild with governance, security and long-term scalability at the core.',
    bullets: [
      'Stack audit, rationalisation & redundancy elimination',
      'Data architecture, governance & role-based access design',
      'Migration, consolidation & phased rollout planning',
      'Custom-code refactoring for upgrade-safe configurations',
      'Ongoing health checks, version control & admin training',
      'Cross-app workflow design & inter-module automation',
    ],
    outcome: 'A cohesive Zoho platform your entire business actually runs on',
    cta: 'Audit my Zoho stack',
  },
  {
    num: '09', tag: 'Modules', icon: 'bi-sliders',
    title: 'Custom modules, fields & layouts',
    desc: 'Extend Zoho applications with custom data models that align with your business objects — products, properties, projects, claims, vehicles, you name it.',
    bullets: [
      'Custom modules with relationship mapping',
      'Field-level dependencies and validation',
      'Canvas-based UI customization',
      'Conditional layouts by role and stage',
      'Custom buttons, links, related lists',
      'Page personalization by user persona',
    ],
    outcome: 'Higher data quality, faster adoption, fewer errors',
    cta: 'Customize my Zoho modules',
  },
  {
    num: '10', tag: 'Migration', icon: 'bi-arrow-left-right',
    title: 'Zoho migration & re-implementation',
    desc: 'Already using Zoho but stuck with a mess of customizations from previous vendors? We clean up, re-architect and migrate without loss of data or downtime.',
    bullets: [
      'Audit of existing customizations',
      'Data migration from Salesforce, HubSpot',
      'Phased rollout with user training',
      'Re-architecture roadmap',
      'Migration from Pipedrive, Dynamics, older Zoho orgs',
      'Post-go-live optimization',
    ],
    outcome: 'A clean, scalable Zoho environment you can actually maintain',
    cta: 'Start my migration',
  },
]

function ServiceCard({ s, color, delay }) {
  return (
    <div className="col-md-6 col-lg-6 col-xl-4 fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="svc-card" style={{
        background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
        padding: '30px 26px', height: '100%',
        transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.transform = 'translateY(-7px)'
          el.style.boxShadow = `0 30px 70px ${color}26`
          el.style.borderColor = color
          el.querySelector('.svc-glow').style.opacity = '1'
          el.querySelector('.svc-icon').style.background = color
          el.querySelector('.svc-icon').style.color = '#fff'
          el.querySelector('.svc-icon').style.transform = 'rotate(-6deg) scale(1.08)'
          el.querySelector('.svc-cta').style.color = color
          el.querySelector('.svc-cta').style.gap = '12px'
          el.querySelector('.svc-tag').style.background = color
          el.querySelector('.svc-tag').style.color = '#fff'
          el.querySelector('.svc-bar').style.transform = 'scaleX(1)'
          el.querySelector('.svc-num').style.color = color
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.transform = ''
          el.style.boxShadow = ''
          el.style.borderColor = '#e8e3dc'
          el.querySelector('.svc-glow').style.opacity = '0'
          el.querySelector('.svc-icon').style.background = `${color}15`
          el.querySelector('.svc-icon').style.color = color
          el.querySelector('.svc-icon').style.transform = ''
          el.querySelector('.svc-cta').style.color = '#0b1220'
          el.querySelector('.svc-cta').style.gap = '8px'
          el.querySelector('.svc-tag').style.background = `${color}15`
          el.querySelector('.svc-tag').style.color = color
          el.querySelector('.svc-bar').style.transform = 'scaleX(0)'
          el.querySelector('.svc-num').style.color = '#cbd5e1'
        }}
      >
        <div className="svc-bar" aria-hidden style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: color, transform: 'scaleX(0)', transformOrigin: 'left',
          transition: 'transform 0.45s ease-out',
        }} />
        <div className="svc-glow" aria-hidden style={{
          position: 'absolute', top: -60, right: -60, width: 220, height: 220,
          borderRadius: '50%', background: `radial-gradient(circle, ${color}28, transparent 70%)`,
          opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, position: 'relative' }}>
          <div className="svc-icon" style={{
            width: 54, height: 54, borderRadius: 14,
            background: `${color}15`, color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', transition: 'all 0.32s',
          }}>
            <i className={`bi ${s.icon}`} />
          </div>
          <span className="svc-num" style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.4rem',
            fontWeight: 800, color: '#cbd5e1', transition: 'color 0.3s',
            letterSpacing: '-0.02em',
          }}>{s.num}</span>
        </div>

        <span className="svc-tag" style={{
          display: 'inline-block', background: `${color}15`, color,
          fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.5,
          textTransform: 'uppercase', padding: '4px 10px', borderRadius: 50,
          marginBottom: 12, fontFamily: 'Inter,sans-serif', transition: 'all 0.32s',
          alignSelf: 'flex-start',
        }}>{s.tag}</span>

        <h3 style={{
          fontSize: '1.12rem', fontWeight: 800, marginBottom: 10,
          color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.3,
          letterSpacing: '-0.012em',
        }}>{s.title}</h3>

        <p style={{
          fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7,
          marginBottom: 14, fontFamily: 'Inter,sans-serif',
        }}>{s.desc}</p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0' }}>
          {s.bullets.map(b => (
            <li key={b} style={{
              display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6,
              fontSize: '0.84rem', color: '#475569', fontFamily: 'Inter,sans-serif', lineHeight: 1.55,
            }}>
              <i className="bi bi-check2" style={{ color: color, fontSize: '0.95rem', marginTop: 3, flexShrink: 0, fontWeight: 800 }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div style={{
          padding: '10px 12px', background: `${color}0d`,
          borderLeft: `3px solid ${color}`, borderRadius: '0 8px 8px 0',
          fontSize: '0.84rem', color: '#0b1220', fontWeight: 600,
          fontFamily: 'Inter,sans-serif', lineHeight: 1.55, marginBottom: 16,
        }}>
          <i className="bi bi-arrow-right-circle-fill" style={{ color, marginRight: 6 }} />
          {s.outcome}
        </div>

        <a href="#contact" className="svc-cta" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: '0.86rem', fontWeight: 700, color: '#0b1220',
          textDecoration: 'none', fontFamily: 'Plus Jakarta Sans,sans-serif',
          transition: 'all 0.28s', marginTop: 'auto',
        }}>
          {s.cta} <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
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
    <section id="services" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '5%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '5%', right: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">What we do</div>
            <h2 className="section-title">
              End-to-end Zoho customization services, <span className="grad-blue-red">engineered for scale</span>
            </h2>
            <p className="section-sub">
              We customize, extend and integrate the Zoho ecosystem to make it one business platform — from custom CRM modules to Zoho Creator apps and cross-app automation.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#contact" className="link-reveal">
              Get a free customization audit <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} color={PALETTE[i % 3]} delay={(i % 6) * 0.05} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="fade-up" style={{
          background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
          borderRadius: 24, padding: '46px 40px', marginTop: 60,
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.22 }} className="dot-grid-light" />
          <div aria-hidden style={{
            position: 'absolute', top: '-40%', right: '-10%', width: 420, height: 420,
            background: 'radial-gradient(circle, rgba(220,38,38,0.30), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: '-40%', left: '-10%', width: 380, height: 380,
            background: 'radial-gradient(circle, rgba(245,158,11,0.22), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div className="row align-items-center position-relative g-4">
            <div className="col-lg-8">
              <div style={{
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.5px',
                textTransform: 'uppercase', color: '#f59e0b', marginBottom: 12,
              }}>One partner. Every Zoho service.</div>
              <h3 style={{
                color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: 8,
                lineHeight: 1.2, letterSpacing: '-0.018em',
              }}>
                Customization, automation, integration and migration — under one roof.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.96rem', marginBottom: 0, fontFamily: 'Inter,sans-serif' }}>
                Senior Zoho architects design it. Documentation-first delivery. Outcome-led pricing. Maintained for the long term.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn-accent ahover">
                Work with our Zoho architects <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
