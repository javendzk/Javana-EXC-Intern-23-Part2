import ContactMe from './components/ContactMe.jsx'
import NavBar from './components/NavBar.jsx'
import NavItem from './components/NavItem.jsx'
import PhotoBG from './components/PhotoBG.jsx'
import AboutMe from './components/AboutMe.jsx'
import Fade from 'react-reveal/Fade'


function App() {
  const executeScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar items={[
           <NavItem title="Home" onClick={() => executeScroll("PhotoBG")}/>,
           <NavItem title="About Me" onClick={() => executeScroll("AboutMe")}/>,
           <NavItem title="Contact Me" onClick={() => executeScroll("ContactMe")}/>
      ]}/>
      <Fade>
        <PhotoBG id="PhotoBG"/>
        <AboutMe id="AboutMe"/>
        <ContactMe id="ContactMe"/>
      </Fade>
    </>
  )
}

export default App
