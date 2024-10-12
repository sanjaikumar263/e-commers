import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offer/Offer'
import NewCollection from '../Component/NewCollection/NewCollection'
import Newletter from '../Component/Newletter/Newletter'
import "./CSS/Hero.css"

function Home() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <Newletter/>
      
    </div>
  )
}

export default Home
