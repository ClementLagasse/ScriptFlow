
import './App.css'
import CustomNavBar from './landingPage/navBar/navBar.jsx'
import CustomFooter from "./landingPage/footer/footer.jsx";
import LandingPageContent from "./landingPage/landingPageContent.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChartsPage from "./chartPage/chartsPage.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <CustomNavBar />
                        <LandingPageContent />
                        <CustomFooter />
                    </>
                } />
                <Route path="/charts" element={<ChartsPage />} />

            </Routes>
        </Router>
    );
};

export default App
