'use client'
import LogoMark from './LogoMark'

const services = [
  'Zoho CRM Customization',
  'Zoho Automation Services',
  'Zoho Creator App Development',
  'Zoho Integration Services',
  'Zoho Analytics Customization',
  'Zoho Books & Finance',
  'Zoho One Stack Architecture',
  'Zoho Migration & Re-implementation',
]

const cities = [
  'Bangalore', 'Mumbai', 'Chennai', 'Hyderabad',
  'Pune', 'Delhi NCR', 'Ahmedabad', 'Kolkata',
  'Coimbatore', 'Jaipur', 'Kochi', 'Indore',
]

const company = [
  { label: 'Home',          href: '#hero' },
  { label: 'Services',      href: '#services' },
  { label: 'Apps',          href: '#products' },
  { label: 'Our Approach',  href: '#approach' },
  { label: 'Process',       href: '#process' },
  { label: 'Case Studies',  href: '#case-studies' },
  { label: 'FAQ',           href: '#faq' },
  { label: 'Contact',       href: '#contact' },
]

const related = [
  { label: 'Zoho CRM Customization',   href: '#' },
  { label: 'Hire Zoho Developer',      href: '#' },
  { label: 'Zoho CRM Data Migration',  href: '#' },
]

const socials = [
  { icon: 'bi-linkedin',   href: 'https://www.linkedin.com/in/arulraj-inboxist/', color: '#0a66c2', label: 'LinkedIn' },
  { icon: 'bi-whatsapp',   href: 'https://wa.me/918190009222',                    color: '#25d366', label: 'WhatsApp' },
  { icon: 'bi-envelope',   href: 'mailto:info@zoflowx.com',                       color: '#dc2626', label: 'Email' },
  { icon: 'bi-telephone',  href: 'tel:+918190009222',                             color: '#2563eb', label: 'Call' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0b1220',
      color: 'rgba(255,255,255,0.78)',
      position: 'relative', overflow: 'hidden',
      paddingTop: 70, paddingBottom: 30,
    }}>
      {/* Tri-color top stripe */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'var(--grad-tri)',
      }} />

      {/* Decorative blobs */}
      <div aria-hidden style={{
        position: 'absolute', top: '-15%', left: '-5%', width: 460, height: 460,
        background: 'radial-gradient(circle, rgba(37,99,235,0.18), transparent 65%)', filter: 'blur(40px)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '-25%', right: '-5%', width: 460, height: 460,
        background: 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 65%)', filter: 'blur(40px)',
      }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.10 }} className="grid-pattern-light" />

      <div className="container position-relative">
        <div className="row g-5">
          {/* Brand block */}
          <div className="col-lg-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <LogoMark />
              <span style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '1.45rem', color: '#fff', letterSpacing: '-0.018em',
              }}>ZoFlowX</span>
            </div>

            <p style={{
              fontFamily: 'Inter,sans-serif', color: 'rgba(255,255,255,0.7)',
              fontSize: '0.94rem', lineHeight: 1.72, marginBottom: 20, maxWidth: 380,
            }}>
              A Certified Zoho Partner helping growing businesses customize, automate and scale across the Zoho ecosystem — engineered for the long term.
            </p>

            {/* Zoho Authorized Partner pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 14px', borderRadius: 50,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              marginBottom: 22, fontFamily: 'Inter,sans-serif', fontSize: '0.84rem',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: '#10b981',
                boxShadow: '0 0 12px rgba(16,185,129,0.6)',
              }} />
              <span style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}>Zoho Authorized Partner · India</span>
            </div>

            {/* Contact lines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
              <a href="mailto:info@zoflowx.com" style={{
                color: 'rgba(255,255,255,0.78)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', transition: 'color 0.28s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fcd34d'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'}
              >
                <i className="bi bi-envelope-fill" style={{ color: '#fca5a5' }} /> info@zoflowx.com
              </a>
              <a href="tel:+918190009222" style={{
                color: 'rgba(255,255,255,0.78)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', transition: 'color 0.28s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fcd34d'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'}
              >
                <i className="bi bi-telephone-fill" style={{ color: '#93c5fd' }} /> +91 8190 009 222
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{
                  width: 40, height: 40, borderRadius: 11,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.86)', fontSize: '1.05rem',
                  textDecoration: 'none', transition: 'all 0.3s var(--ease-out)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = s.color
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = s.color
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = `0 10px 24px ${s.color}44`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.86)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services list */}
          <div className="col-md-6 col-lg-3">
            <h5 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
              fontSize: '0.95rem', color: '#fff', marginBottom: 18,
              letterSpacing: '-0.01em',
            }}>Customization Services</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {services.map(svc => (
                <li key={svc}>
                  <a href="#services" style={{
                    color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.88rem',
                    transition: 'color 0.28s, transform 0.28s', display: 'inline-block',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fcd34d'; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = '' }}
                  >{svc}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Related */}
          <div className="col-md-6 col-lg-2">
            <h5 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
              fontSize: '0.95rem', color: '#fff', marginBottom: 18, letterSpacing: '-0.01em',
            }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {company.map(c => (
                <li key={c.label}>
                  <a href={c.href} style={{
                    color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.88rem',
                    transition: 'color 0.28s, transform 0.28s', display: 'inline-block',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#93c5fd'; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = '' }}
                  >{c.label}</a>
                </li>
              ))}
            </ul>

            <h5 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
              fontSize: '0.95rem', color: '#fff', marginBottom: 18, letterSpacing: '-0.01em',
            }}>Related Pages</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {related.map(r => (
                <li key={r.label}>
                  <a href={r.href} style={{
                    color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.88rem',
                    transition: 'color 0.28s, transform 0.28s', display: 'inline-block',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fca5a5'; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = '' }}
                  >{r.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div className="col-lg-3">
            <h5 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
              fontSize: '0.95rem', color: '#fff', marginBottom: 18, letterSpacing: '-0.01em',
            }}>Indian Cities We Serve</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cities.map(city => (
                <span key={city} style={{
                  display: 'inline-block', padding: '6px 12px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 50, color: 'rgba(255,255,255,0.78)',
                  fontFamily: 'Inter,sans-serif', fontSize: '0.78rem',
                  transition: 'all 0.28s var(--ease-out)', cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(245,158,11,0.20)'
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.50)'
                    e.currentTarget.style.color = '#fcd34d'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.78)'
                    e.currentTarget.style.transform = ''
                  }}
                >{city}</span>
              ))}
            </div>

            {/* Mini CTA */}
            <div style={{
              marginTop: 22, padding: '16px 18px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 14,
            }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: '0.88rem', color: '#fff', marginBottom: 4 }}>
                Ready to start?
              </div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginBottom: 10, lineHeight: 1.55 }}>
                Book a free Zoho health check today.
              </div>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                fontSize: '0.84rem', color: '#fcd34d', textDecoration: 'none',
                transition: 'gap 0.28s',
              }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                onMouseLeave={e => e.currentTarget.style.gap = '6px'}
              >
                Get a free audit <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 50, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.10)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 14,
        }}>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)' }}>
            © {new Date().getFullYear()} ZoFlowX · Inboxist Martech Solutions Pvt Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
            <a href="#" style={{
              fontFamily: 'Inter,sans-serif', fontSize: '0.84rem',
              color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
              transition: 'color 0.28s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fcd34d'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >Privacy Policy</a>
            <a href="#" style={{
              fontFamily: 'Inter,sans-serif', fontSize: '0.84rem',
              color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
              transition: 'color 0.28s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fcd34d'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >Terms of Service</a>
            <a href="#" style={{
              fontFamily: 'Inter,sans-serif', fontSize: '0.84rem',
              color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
              transition: 'color 0.28s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fcd34d'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
