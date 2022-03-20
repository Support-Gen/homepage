import type { NextPage } from 'next'
import CtaNotify from '../components/cta-notify'
import DocsOverview from '../components/docs-overview'
import Hero from '../components/hero'
import Search from '../components/search'
import Themes from '../components/themes'
import Nav from '../shared/nav'

const Home: NextPage = () => {
  return (
    <main>
      <div className='min-h-screen flex flex-col mb-10'>
        <Nav></Nav>
        <div className='flex flex-1'>
          <Hero></Hero>
        </div>
      </div>
      <DocsOverview></DocsOverview>
      <Search></Search>
      <Themes></Themes>
      <CtaNotify></CtaNotify>
    </main>
  )
}

export default Home
