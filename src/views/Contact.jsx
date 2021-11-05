import React from 'react'
import Form from '../components/Contact/Form'
import Map from '../components/Contact/Map'
import DetailsContact from '../components/Contact/DetailsContact'
import MainPresentaition from '../components/Shared/MainPresentaition'
import imageHeroDesktop from '../assets/contact/desktop/imageHeroDesktop.jpg'
import imageHeroMobile from '../assets/contact/mobile/imageHeroMobile.jpg'
import imageHeroTablet from '../assets/contact/tablet/imageHeroTablet.jpg'
import AsideBanner from '../components/Shared/AsideBanner'

const MainElelemnt = {
    imgDesktop: imageHeroDesktop,
    imgMobile: imageHeroMobile,
    imgTablet: imageHeroTablet,
    whatherMark: 'About',
    title: 'Your team of professionals',
    paragraph: 'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
  }
  

const Contact = () => {
    return(
        <>
        <AsideBanner page='Contact'/>
        <main>
            <MainPresentaition elements={MainElelemnt}/>
            <DetailsContact/>
            <Map/>
            <Form/>
        </main>
        </>
    )
}

export default Contact