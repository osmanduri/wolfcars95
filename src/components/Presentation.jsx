import React from 'react'
export default function Presentation() {
    return (
        <div className="presentation">
            <div className="presentation_img">
                <img src={require('../images/Galerie/audi_r8.jpeg').default} alt='mecano'/>
            </div>
            <div className="presentation_texte">
                <h2>Bienvenue</h2>
                <h3>Chez Wolf Cars 95 ! </h3>
                <p>Spécialisé dans les véhicules allemande, votre garage Wolf Cars 95 accueille toutes les marques. Il est votre interlocuteur de confiance pour toutes réparations mécanique, nous entreprenons d'importantes vérification au titre de la sécurité en plus de notre activités de conseil. Wolf Cars 95 est attaché à 3 valeurs essentiels: la proximité, la qualité et l'entière satisfaction de ses clients. Nous vous accueillons exclusivement sur rendez-vous pour que vous puissiez bénéficier d'un service premium. quels que soient vos besoins n'hésitez pas à <a className="presentation_nous_contacter" href="/contact">nous contacter</a>.<br/>A bientôt chez <br/>Wolf Cars 95 !</p>
            </div>
        </div>
    )
}
