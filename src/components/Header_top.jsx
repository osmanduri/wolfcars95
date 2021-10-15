import { React, useState, useEffect } from 'react'

export default function Header_top() {
    const [displayMenu, setDisplayMenu] = useState(true)
    const [click, setClick] = useState(false)



    const handleClick = () => {
        setClick(!click)
    }
    const showBurgerMenu = () => {
        if(window.innerWidth <= 768){
            setDisplayMenu(false)
        }
        else if(window.innerWidth > 768){
            setDisplayMenu(true)
        }
    }



    window.addEventListener('resize', showBurgerMenu);

    useEffect(() => {
        showBurgerMenu()
    }, [])

    return (
        <>

        { displayMenu ?

        <div className="header">
            <div className="header_inside">
                <div className="localisation">
                    <i className="fas fa-map-marker-alt"></i>
                    <p style={{marginLeft:"7px"}}>23, rue de Clairvaux, 95160, Montmorency</p>
                </div>
                <div className="need_help">
                    <ul>
                        <li><a href="/contact">Besoin d'aide?</a></li>
                        <li><a href="/contact">Contactez-nous!</a></li>
                        <p>07.86.90.94.39</p>
                        <p><span>7/7</span></p>
                    </ul>
                </div>
            </div>
        </div> :
        <div className="burger_menu">
                    <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    {
                    <div className={click ? 'navbar_mobile active' : 'navbar_mobile'}>
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="services">Services</a></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="galerie">Galerie</a></li>
                        </ul>
                    </div>

                    }
        </div>
        }
        </>
    )
}
