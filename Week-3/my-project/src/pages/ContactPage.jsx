import ContactMe from '../components/ContactMe.jsx'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

export default function ContactPage() {
    document.title = 'Contact Me - JAVN';
    return(
        <div>
            <NavBar />
            <ContactMe />
            <Footer />
        </div>
    )
}