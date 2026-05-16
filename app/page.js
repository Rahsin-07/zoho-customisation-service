import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBrands from '@/components/TrustedBrands'
import Journey from '@/components/Journey'
import Problem from '@/components/Problem'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import ZohoProducts from '@/components/ZohoProducts'
import DeveloperHire from '@/components/DeveloperHire'
import CustomBuild from '@/components/CustomBuild'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import DiscoveryCall from '@/components/DiscoveryCall'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export const metadata = {
  title: 'Zoho Customization Services | Certified Zoho Partner India',
  description:
    "Transform Zoho to match your workflows. ZoFlowX delivers expert Zoho customization services — CRM, Creator, Analytics & more. Book a free audit today.",
  alternates: { canonical: 'https://zoflowx.com/zoho-customization-services' },
  openGraph: {
    title: 'Zoho Customization Services | Certified Zoho Partner India',
    description:
      "Certified Zoho Authorized Partner. CRM, Creator, Analytics, Books and 40+ Zoho apps — customized around your real workflows, not a template.",
    url: 'https://zoflowx.com/zoho-customization-services',
    type: 'website',
  },
}

export default function ZohoCustomizationPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <Journey />
        <Problem />
        <Services />
        <ZohoProducts />
        <DeveloperHire />
        <Process />
        <WhyUs />
        <CustomBuild />
        <CaseStudies />
        <Industries />
        <Testimonials />
        <DiscoveryCall />
        <Resources />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
