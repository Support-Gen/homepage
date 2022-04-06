import type { NextPage } from 'next'
import AdminUI from '../components/admin-ui'
import CtaNotify from '../components/cta-notify'
import DocsOverview from '../components/docs-overview'
import Faq from '../components/faq'
import Hero from '../components/hero'
import Integration from '../components/integration'
import Footer from '../shared/footer'
import Nav from '../shared/nav'

const Terms: NextPage = () => {
  return (
    <main>
      <Nav></Nav>
      <section className="container mx-auto pt-12 mb-40">
        <h1 className="text-7xl font-bold mb-8 text-center">Cookies</h1>

      </section>
      <Footer></Footer>
    </main>
  )
}

export default Terms
