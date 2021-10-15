import { useState } from 'react'
import Header from "./components/Header_top.jsx"
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Contacts from './pages/Contacts.jsx'
import Galerie from './pages/Galerie.jsx'
import Footer from './components/Footer.jsx'
import FooterCopyright from './components/Footer_copyright.jsx'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import scroll_img from './images/scroll.png'


function App() {
    const [showHeaderTop, setShowHeaderTop] = useState(true)
    const changeBackGround = () => {
        if (window.scrollY > 0 && window.innerWidth > 768) {
            setShowHeaderTop(false);
        } else {
            setShowHeaderTop(true);
        }
    }

    const style = {

        padding: "25px",
        background: `url(${scroll_img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: "hidden"
    }

    window.addEventListener('scroll', changeBackGround)
    return (
        <div className = "App">

        <Router >
            {
                showHeaderTop && < Header />
            }

        <Navigation />
        <Switch >
        <Route exact path = "/" component = { Home }/>
        <Route exact path = "/services" component = { Services }/>
        <Route exact path = "/contact" component = { Contacts }/>
        <Route exact path = "/galerie" component = { Galerie }/>
        <Redirect to = "/"/>
        </Switch>
        <Footer />
        <FooterCopyright />
        {
            < ScrollToTop smooth style = { style }/>
        }
        </Router>
        </div>
        );
    }

    export default App;