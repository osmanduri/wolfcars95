import React, { useState } from 'react'
import footerServicesInfo from '../data/FooterServicesInfo.js'
import FooterServices from '../components/Footer_services'
import footerCategorieInfo from '../data/FooterCategorieInfo.js'
import FooterCategories from '../components/Footer_categories'
import ModalSnap from './ModalSnap'


export default function Footer() {
    const [showModal, setShowModal] = useState(false)


    return (
        <div className="main_footer">
            <div className="footer container">
                <div className="footer_info">
                    <div className="map">
                        <i className="far fa-map"></i>
                        <p>23 rue de Clairvaux<br/>95140 Montmorency</p>
                    </div>
                    <div className="wolf">
                        <img src='/Logo_WolfCars/wolf.jpg' alt="wolf"/>
                    </div>
                    <div className="contacter">
                        <i className="fas fa-phone-alt"></i>
                        <p>Nous contacter<br/>07 86 90 94 39</p>
                    </div>
                </div>
                <div className="footer_trait"/>
                <div className="footer_info_second">
                    <div className="footer_propos">
                        <h3>A propos</h3>
                        <div className="footer_trait_petit"/>
                        <div className="footer_propos_adresse">
                           <p>23 rue de clairvaux montmorency<br/>95140 Montmorency</p>
                        </div>
                        <div className="footer_propos_mobile">
                           <p>Mobile: </p>
                           <p>07 86 90 94 39</p>
                        </div>
                        <div className="footer_propos_email">
                           <p>Email:</p>
                           <p>wolfcars95@gmail.com</p>
                        </div>
                        <div className="footer_reseaux_sociaux">
                            <a href="https://www.facebook.com/wolfcars95/"><i className="fab fa-facebook-f"/></a>
                            <a href="https://www.instagram.com/wolfcars95/"><i className="fab fa-instagram"/></a>
                            <i onClick={() => setShowModal(true)} className="fab fa-snapchat-ghost"></i>
                            <ModalSnap showModal={showModal} setShowModal={setShowModal}/>
                        </div>
                    </div>
                    <div className="footer_service">
                        <h3>nos services</h3>
                        <div className="footer_trait_petit"/>
                            <div className="footer_service_description_main">
                                {
                                    footerServicesInfo.map((element, index) => {
                                        return (
                                            <FooterServices element={element} key={index}/>
                                            )
                                    })
                                }
                            </div>
                    </div>
                    <div className="footer_categorie">
                        <h3>categories</h3>
                        <div className="footer_trait_petit"/>
                        <div className="footer_liste_categorie">
                                {
                                    footerCategorieInfo.map((element, index) => {
                                        return (
                                            <FooterCategories element={element} key={index}/>
                                        )
                                    })
                                }
                                
                        </div>
                    </div>
                    <div className="footer_horaires">
                        <h3>horaires</h3>
                        <div className="footer_trait_petit"/>
                        <div className="footer_horaires_second">
                            <div className="footer_semaine">
                                <p>Lundi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Mardi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Mercredi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Jeudi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Vendredi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Samedi:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                            <div className="footer_semaine">
                                <p>Dimanche:</p>
                                <p>08:00 - 19:00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
