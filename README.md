# Zoho Customization Service — ZoFlowX

A Next.js 14 landing page for **Zoho Customization Services** by ZoFlowX.

> **URL:** `/zoho-customization-services`
> **SEO Title:** Zoho Customization Services | Certified Zoho Partner India

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.js          — root layout + global styles + bootstrap-icons
  page.js            — the page (all 16 sections wired up)

components/          — one component per section
  Navbar.jsx
  Hero.jsx           — S1: H1 + stats + reviewer-avatar star ratings + 5 action chips (Call/WhatsApp/Email/Schedule/Live Chat)
  TrustedBrands.jsx  — S2: "Out-of-the-box Zoho is powerful…" + brand marquee
  Journey.jsx        — S11: ZoFlowX vs DIY vs generic vendors comparison
  Problem.jsx        — S3: 6 signs your business needs Zoho customization
  Services.jsx       — S5: 10 end-to-end Zoho customization services
  ZohoProducts.jsx   — S6: 40+ Zoho apps, tabbed by 4 categories
  DeveloperHire.jsx  — S7: Our Approach (5 principles)
  Process.jsx        — S8: 6-step customization process
  WhyUs.jsx          — S9: 5 reasons + by-the-numbers card
  CustomBuild.jsx    — S10: Engagement models (Starter / Growth / Enterprise)
  CaseStudies.jsx    — S12: 3 real outcomes (Image Star · Brite Decking · CoWorkFlowX)
  Industries.jsx     — S4: 8 industries + WhatsApp CTA
  Testimonials.jsx   — S13: 6 client voices
  DiscoveryCall.jsx  — S15: Senior architect on call (Arul Raj founder card)
  Resources.jsx      — S14: Zoho insights & resources
  Contact.jsx        — Contact form + channels
  FAQ.jsx            — S16: 11 FAQs + Related Pages
  Footer.jsx         — Footer with cities, services, related pages
  LogoMark.jsx       — ZoFlowX tri-color X mark
  ScrollTop.jsx      — Floating scroll-to-top button

styles/
  globals.css        — design tokens, utilities, animations
```

## Design system

Tri-color identity from the ZoFlowX "X" logo:

- Blue   `#2563eb`
- Red    `#dc2626`
- Yellow `#f59e0b`

Fonts: Plus Jakarta Sans (display), Inter (body) — loaded via Google Fonts.
