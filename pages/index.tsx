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
      <div className='min-h-screen flex flex-col mb-20 md:mb-80 relative sm:pb-5'>
        <Nav></Nav>
        <div className='flex flex-1'>
          <Hero></Hero>
        </div>
      </div>
      <DocsOverview></DocsOverview>
      <Search></Search>
      <Themes></Themes>
      {/* <AdminUI></AdminUI> */}
      <Faq></Faq>
      <CtaNotify></CtaNotify>
      <Footer></Footer>
    </main>
  )
}

export default Home
