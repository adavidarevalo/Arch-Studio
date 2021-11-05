import React from "react"
import Leaders from "../components/AboutUs/Leaders"
import Heritage from "../components/AboutUs/Heritage"
import MainPresentaition from '../components/Shared/MainPresentaition'
import imageHeroDesktop from '../assets/about/desktop/imageHeroDesktop.jpg'
import imageHeroMovil from '../assets/about/mobile/imageHeroMovil.jpg'
import imageHeroTablet from '../assets/about/tablet/imageHeroTablet.jpg'
import AsideBanner from '../components/Shared/AsideBanner'

const MainElelemnt = {
  imgDesktop: imageHeroDesktop,
  imgMobile: imageHeroMovil,
  imgTablet: imageHeroTablet,
  whatherMark: 'About',
  title: 'Your team of professionals',
  paragraph: 'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
}


const AboutUs = () =>{
  return(
    <>
    <AsideBanner page='About Us'/>
    <main>
      <MainPresentaition elements={MainElelemnt}/>
      <Heritage/>
      <Leaders/>
    </main>
    </>
  )
}

export default AboutUs