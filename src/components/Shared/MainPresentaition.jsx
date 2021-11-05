import React from 'react'

const MainPresentaition = ({ elements }) => {
    const {
        imgDesktop, 
        imgMobile, 
        imgTablet,
        whatherMark,
        title,
        paragraph
    } = elements
    return(
        <section className='MainPresentaition'>
            <div className='MainPresentaition-Container'>
                <picture>
                    <source srcset={imgMobile} media="(max-width: 500px)"/>
                    <source srcset={imgTablet} media="(max-width: 800px)"/>
                    <img src={imgDesktop} alt={title}/>
                </picture>
                <div>
                    <p className='Whater-Mark'>{whatherMark}</p>
                    <h3>{title}</h3>
                    <p>{paragraph}</p>
                </div>
            </div>
        </section>
    )
}

export default MainPresentaition