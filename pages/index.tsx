import type { NextPage } from 'next'
import AdminUI from '../components/admin-ui'
import BrowserSupport from '../components/browser-support'
import CtaNotify from '../components/cta-notify'
import DocsExtraFeatures from '../components/docs-extra-features'
import DocsOverview from '../components/docs-overview'
import Faq from '../components/faq'
import Hero from '../components/hero'
import Integration from '../components/integration'
import ThereIsMore from '../components/there-is-more'
import Footer from '../shared/footer'
import Nav from '../shared/nav'

const Home: NextPage = () => {
  return (
    <main>
      <div className='min-h-screen flex flex-col mb-20 md:mb-80 relative sm:pb-5'>
        <Nav></Nav>
        <div className='flex flex-1'>
          <Hero></Hero>
        </div>
      </div>
      <DocsOverview></DocsOverview>
      <BrowserSupport></BrowserSupport>
      <DocsExtraFeatures></DocsExtraFeatures>
      <ThereIsMore></ThereIsMore>
      {/* <AdminUI></AdminUI> */}
      <Faq></Faq>
      <CtaNotify></CtaNotify>
      <Footer></Footer>
    </main>
  )
}

export default Home
