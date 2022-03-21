import type { NextPage } from 'next'
import AdminUI from '../components/admin-ui'
import CtaNotify from '../components/cta-notify'
import DocsOverview from '../components/docs-overview'
import Faq from '../components/faq'
import Hero from '../components/hero'
import Integration from '../components/integration'
import Search from '../components/search'
import Themes from '../components/themes'
import Nav from '../shared/nav'

const Home: NextPage = () => {
  return (
    <main className='overflow-x-hidden'>
      <div className='min-h-screen flex flex-col mb-10'>
        <Nav></Nav>
        <div className='flex flex-1'>
          <Hero></Hero>
        </div>
      </div>
      <DocsOverview></DocsOverview>
      <Search></Search>
      <Themes></Themes>
      <Integration></Integration>
      <AdminUI></AdminUI>
      <Faq></Faq>
      <CtaNotify></CtaNotify>
    </main>
  )
}

export default Home
