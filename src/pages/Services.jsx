import React from 'react'
import servicesInfo from '../data/servicesInfo.js'
export default function Services() {
    return (
        <>
        <h1 className="serviceH1">Nos services</h1>
        <div className="services container">
                
            {
                servicesInfo.map((element, index) => {
                    return (
                        
                        <div className="service_image_texte" key={index}>
                            <img src={`/Logo_WolfCars/services/${element}.PNG`} alt="logo" />
                            <p>{element}</p>
                        </div>

                    )
                    
                })
            }

        </div>
        </>
    )
}
