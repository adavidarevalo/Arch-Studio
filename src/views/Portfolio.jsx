import React from 'react'
import { PortfolioApi } from '../Api/PortfolioApi'
import AsideBanner from '../components/Shared/AsideBanner'

const Portfolio = () => {
    return(
        <>
        <AsideBanner page='Portfoliio'/>
        <main>
        <section className='Portfolio'>
            <div className='Portfolio-Container'>
                {PortfolioApi.map(item => (
                    <div className='Portfolio-Elements'>
                        <picture>
                            <source srcset={item.imgMovil} media="(max-width: 500px)"/>
                            <source srcset={item.imgTablet} media="(max-width: 800px)"/>
                            <img src={item.imgDesktop} alt={item.name}/>
                        </picture>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.data}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </main>
        </>
    )
}

export default Portfolio