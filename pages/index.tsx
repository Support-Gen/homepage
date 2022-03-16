import type { NextPage } from 'next'
import Image from 'next/image'
import Hero from '../components/hero'
import HowItWorks from '../components/howitworks'
import Nav from '../shared/nav'

const Home: NextPage = () => {
  return (
    <main>
      <div className='min-h-screen flex flex-col'>
        <Nav></Nav>
        <div className='flex justify-center relative flex-1 overflow-x-hidden'>
          <Hero></Hero>
        </div>
      </div>
      <div className='flex justify-center relative flex-1 overflow-x-hidden'>
        <HowItWorks></HowItWorks>
      </div>
    </main>
  )
}

export default Home
