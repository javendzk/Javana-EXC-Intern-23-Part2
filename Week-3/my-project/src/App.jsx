import NavBar from './components/NavBar.jsx'
import PhotoBG from './components/PhotoBG.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'

function App() {
  document.title = 'Home - JAVN';

  return (
    <div>
      <NavBar />
      <PhotoBG />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
