import React from 'react'
import Swiper from '../components/SwiperJS.js'
import Cards from '../components/Cards'
import infoCards from '../data/cardsInfo.js'
import Presentation from '../components/Presentation'

export default function Home() {
    return (
        <div>
            <Swiper/>
            <div className="container_cards">
                {
                    
                    infoCards.map((element, index) => {
                        return (
                            <Cards element={element} key={index}/>
                        )
                    })
                }
            </div>
            <div className="container">
                <Presentation/>
            </div>
            <div style={{marginTop:"80px"}}/>
        </div>

    )
}
