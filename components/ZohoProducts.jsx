'use client'
import { useEffect, useRef, useState } from 'react'

// Section 6 — 40+ Zoho apps grouped by 4 categories
const categories = [
  {
    id: 'sales',
    name: 'Sales & CRM',
    icon: 'bi-people-fill',
    color: '#2563eb',
    apps: [
      { name: 'Zoho CRM',      icon: 'bi-people-fill' },
      { name: 'Zoho Bigin',    icon: 'bi-kanban' },
      { name: 'Zoho SalesIQ',  icon: 'bi-chat-square-text-fill' },
      { name: 'Zoho Bookings', icon: 'bi-calendar-check-fill' },
      { name: 'Zoho Forms',    icon: 'bi-ui-checks' },
      { name: 'Zoho Sign',     icon: 'bi-pen-fill' },
      { name: 'Zoho Commerce', icon: 'bi-bag-fill' },
      { name: 'Zoho Sites',    icon: 'bi-globe' },
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Accounting',
    icon: 'bi-journal-text',
    color: '#dc2626',
    apps: [
      { name: 'Zoho Books',     icon: 'bi-journal-text' },
      { name: 'Zoho Invoice',   icon: 'bi-receipt' },
      { name: 'Zoho Inventory', icon: 'bi-box-seam-fill' },
      { name: 'Zoho Expense',   icon: 'bi-credit-card-2-back' },
      { name: 'Zoho Subscriptions', icon: 'bi-arrow-repeat' },
      { name: 'Zoho Checkout',  icon: 'bi-cart-check' },
      { name: 'Zoho Billing',   icon: 'bi-cash-coin' },
      { name: 'Zoho Practice',  icon: 'bi-briefcase-fill' },
    ],
  },
  {
    id: 'ops',
    name: 'Operations & Custom Apps',
    icon: 'bi-grid-3x3-gap-fill',
    color: '#f59e0b',
    apps: [
      { name: 'Zoho Creator',   icon: 'bi-app-indicator' },
      { name: 'Zoho Flow',      icon: 'bi-diagram-3' },
      { name: 'Zoho Analytics', icon: 'bi-bar-chart-fill' },
      { name: 'Zoho One',       icon: 'bi-grid-3x3-gap-fill' },
      { name: 'Zoho Catalyst',  icon: 'bi-cpu' },
      { name: 'Zoho Projects',  icon: 'bi-kanban-fill' },
      { name: 'Zoho Sprints',   icon: 'bi-lightning-fill' },
      { name: 'Zoho Workdrive', icon: 'bi-cloud-arrow-up-fill' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing, Service & People',
    icon: 'bi-megaphone-fill',
    color: '#2563eb',
    apps: [
      { name: 'Zoho Campaigns', icon: 'bi-megaphone-fill' },
      { name: 'Zoho Social',    icon: 'bi-share-fill' },
      { name: 'Zoho Marketing', icon: 'bi-bullseye' },
      { name: 'Zoho Survey',    icon: 'bi-clipboard-check' },
      { name: 'Zoho Desk',      icon: 'bi-headset' },
      { name: 'Zoho Assist',    icon: 'bi-display' },
      { name: 'Zoho People',    icon: 'bi-person-badge-fill' },
      { name: 'Zoho Recruit',   icon: 'bi-person-plus-fill' },
    ],
  },
]

export default function ZohoProducts() {
  const ref = useRef(null)
  const [activeTab, setActiveTab] = useState('sales')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const activeCat = categories.find(c => c.id === activeTab)

  return (
    <section id="products" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '20%', right: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(220,38,38,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 880, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Zoho Apps We Customize</span>
          </div>
          <h2 className="section-title">
            40+ Zoho apps. <span className="grad-blue-red">One customization partner</span>
          </h2>
          <p className="section-sub mx-auto">
            Whether it's one app or the full Zoho One suite, we customize, automate and connect them as a unified business platform.
          </p>
        </div>

        {/* Category tabs */}
        <div className="fade-up" style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10,
          marginBottom: 40,
        }}>
          {categories.map(c => {
            const isActive = activeTab === c.id
            return (
              <button key={c.id} onClick={() => setActiveTab(c.id)} style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '11px 20px', borderRadius: 50,
                background: isActive ? c.color : '#fff',
                color: isActive ? '#fff' : '#334155',
                border: `1.5px solid ${isActive ? c.color : '#e8e3dc'}`,
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                fontSize: '0.86rem', cursor: 'pointer',
                transition: 'all 0.28s cubic-bezier(.2,.7,.2,1)',
                boxShadow: isActive ? `0 12px 28px ${c.color}40` : '0 2px 8px rgba(11,18,32,0.04)',
                transform: isActive ? 'translateY(-1px)' : 'none',
              }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.color = c.color } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.color = '#334155' } }}
              >
                <i className={`bi ${c.icon}`} style={{ fontSize: '1.02rem' }} />
                {c.name}
              </button>
            )
          })}
        </div>

        {/* Active category — apps grid */}
        <div className="fade-up">
          <div className="row g-3 g-md-4">
            {activeCat.apps.map((app, i) => (
              <div key={app.name} className="col-6 col-md-4 col-lg-3" style={{
                animation: 'count-up 0.45s var(--ease-out) backwards',
                animationDelay: `${i * 0.04}s`,
              }}>
                <div style={{
                  background: '#fff', border: '1px solid #e8e3dc', borderRadius: 16,
                  padding: '22px 18px', height: '100%', textAlign: 'center',
                  transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', overflow: 'hidden',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(-5px)'
                    el.style.borderColor = activeCat.color
                    el.style.boxShadow = `0 20px 44px ${activeCat.color}1f`
                    el.querySelector('.app-icon').style.background = activeCat.color
                    el.querySelector('.app-icon').style.color = '#fff'
                    el.querySelector('.app-icon').style.transform = 'rotate(-5deg) scale(1.08)'
                    el.querySelector('.app-name').style.color = activeCat.color
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.transform = ''
                    el.style.borderColor = '#e8e3dc'
                    el.style.boxShadow = ''
                    el.querySelector('.app-icon').style.background = `${activeCat.color}15`
                    el.querySelector('.app-icon').style.color = activeCat.color
                    el.querySelector('.app-icon').style.transform = ''
                    el.querySelector('.app-name').style.color = '#0b1220'
                  }}
                >
                  <div className="app-icon" style={{
                    width: 52, height: 52, borderRadius: 14, margin: '0 auto 12px',
                    background: `${activeCat.color}15`, color: activeCat.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  }}>
                    <i className={`bi ${app.icon}`} />
                  </div>
                  <div className="app-name" style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                    fontSize: '0.9rem', color: '#0b1220',
                    transition: 'color 0.3s', lineHeight: 1.3,
                  }}>{app.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Helper card */}
        <div className="fade-up" style={{
          marginTop: 56,
          background: 'linear-gradient(135deg, #f6f1ea 0%, #fef3c7 100%)',
          border: '1px solid #e8e3dc', borderRadius: 22,
          padding: '32px 36px', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'var(--grad-tri)',
          }} />
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div style={{
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2,
                textTransform: 'uppercase', color: '#dc2626', marginBottom: 10,
                fontFamily: 'Inter,sans-serif',
              }}>Ready to start</div>
              <h4 style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '1.5rem', color: '#0b1220', lineHeight: 1.25,
                marginBottom: 8, letterSpacing: '-0.014em',
              }}>
                Ready to customize your Zoho apps to fit your business perfectly?
              </h4>
              <p style={{
                fontFamily: 'Inter,sans-serif', color: '#475569',
                fontSize: '0.96rem', marginBottom: 0, lineHeight: 1.65,
              }}>
                Let's get started today — one app or the whole Zoho One stack, we customize them all.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn-gradient ahover">
                Start my Zoho customization <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
