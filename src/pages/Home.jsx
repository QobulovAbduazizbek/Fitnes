import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import HomeHero from '../Components/HomeHero'
import HomeSection from '../Components/HomeSection'
import HomeSection2 from '../Components/HomeSection2'
import Foto from '../Components/Foto'
import HomeSection3 from '../Components/HomeSection3'
import HomeHero2 from './HomeHero2'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeSlider/>
      <HomeHero2/>
      <HomeSection/>
      <HomeSection2/>
      <Foto/>
      <HomeSection3/>
    </div>
  )
}

export default Home
