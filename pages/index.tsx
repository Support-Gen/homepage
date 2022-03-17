import type { NextPage } from 'next'
import Image from 'next/image'
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
        <FeatureSearch></FeatureSearch>
      </div>
      <div className='flex justify-center relative flex-1 overflow-x-hidden mb-10'>
        <FeatureGuide></FeatureGuide>
      </div>
    </main>
  )
}

export default Home
