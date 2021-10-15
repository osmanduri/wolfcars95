import React from 'react'

export default function Cards({element}) {
    return (
        <>
            <div className="cards">
                <div className="thefront">
                    <i className={element.icon}></i>
                    <h4>{element.textFrontH4}</h4>
                </div>
                <div className="theback">
                    <p>{element.p}</p>
                    <a href={element.voirPlus}>Voir plus</a>
                </div>

            </div>
        </>
    )
}
