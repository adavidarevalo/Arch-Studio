import React from 'react'
import CarouselElement from "../components/home/CarouselElement"
import WelcomeElement from "../components/home/WelcomeElement"
import IdeasBanner from "../components/home/IdeasBanner"
import FeaturedElement from "../components/home/FeaturedElement"

const Home = () => {
    return(
        <main>
          <CarouselElement/>
          <WelcomeElement/>
          <IdeasBanner/>
          <FeaturedElement/>
            <h2>Home</h2>
        </main>
    )
}

export default Home