import type { NextPage } from 'next'
import AdminUI from '../components/admin-ui'
import CtaNotify from '../components/cta-notify'
import DocsOverview from '../components/docs-overview'
import Faq from '../components/faq'
import Hero from '../components/hero'
import Integration from '../components/integration'
import Search from '../components/search'
import Themes from '../components/themes'
import Footer from '../shared/footer'
import Nav from '../shared/nav'

const Home: NextPage = () => {
  return (
    <main className='overflow-x-hidden'>
      <Nav></Nav>
      <Footer></Footer>
    </main>
  )
}

export default Home
