import type { NextPage } from 'next'
import Image from 'next/image'
import CodePreview from '../components/code-preview'
import CtaNotify from '../components/cta-notify'
import DocsOverview from '../components/docs-overview'
import FeatureGuide from '../components/feature-guide'
import FeatureOverview from '../components/feature-overview'
import FeatureSearch from '../components/feature-search'
import Hero from '../components/hero'
import Nav from '../shared/nav'

const Home: NextPage = () => {
  return (
    <main>
      <div className='min-h-screen flex flex-col mb-10'>
        <Nav></Nav>
        <div className='flex justify-center relative flex-1 overflow-x-hidden'>
          <Hero></Hero>
        </div>
      </div>
      <div className='flex justify-center relative flex-1 overflow-x-hidden mb-10'>
        <DocsOverview></DocsOverview>
      </div>
      {/* <div className='flex justify-center relative flex-1 overflow-x-hidden mb-10'>
        <FeatureGuide></FeatureGuide>
      </div>
      <div className='flex justify-center relative flex-1 overflow-x-hidden mb-10'>
        <FeatureOverview></FeatureOverview>
      </div>
      <div className='flex justify-center relative flex-1 overflow-x-hidden mb-10'>
        <CodePreview></CodePreview>
      </div> */}
      <div className='flex justify-center relative flex-1 overflow-x-hidden mb-10'>
        <CtaNotify></CtaNotify>
      </div>
    </main>
  )
}

export default Home
