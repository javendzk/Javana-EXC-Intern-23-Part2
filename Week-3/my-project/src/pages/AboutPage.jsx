import AboutMe from '../components/AboutMe.jsx'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

export default function AboutPage(){
    document.title = 'About Me - Javn';
    return(
        <div>
            <NavBar />
            <AboutMe />
            <Footer />
        </div>
    )
}