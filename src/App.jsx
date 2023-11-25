
import './App.css'
import CustomNavBar from './navBar/navBar.jsx'
import CustomFooter from "./footer/footer.jsx";
import DiagramBoxCustom from "./diagramSrc/diagramBox.jsx";
import LandingPageContent from "./landingPage/landingPageContent.jsx";


function App() {

  return (
    <>
      <CustomNavBar/>
        <LandingPageContent/>
      <CustomFooter/>
    </>
  )
}

export default App
