import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



const SeeDocumentationContent = () => (
    <>
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-custom-red dark:text-custom-red">Look for Examples ?</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to make your next No-code script</p>
        <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
            See our documentation
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
        </a>
    </>
)


const ScrollElement = ({ delay, align, scrollY, children}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > scrollY;
            setIsVisible(scrollCheck);
        };

        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, []);

    const visibilityClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    const alignmentClass = align === 'left' ? 'translate-x-[-10%]' : 'translate-x-[10%]';

    return (
        <div className={`flex flex-col justify-center items-center mt-20 transform transition-all ease-in-out ${visibilityClass} ${alignmentClass} ${delay}`}>
            <div className="max-w-xs     p-6 bg-white border border-white rounded-lg shadow dark:bg-white dark:border-white">
                {children}
            </div>
        </div>
    );
};

ScrollElement.propTypes = {
    delay: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'right']).isRequired,
    scrollY: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
};

const LandingPageContent = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/charts');
    };
    return (
        <div>
        <div className="flex flex-col min-h-screen justify-center items-center">
            <h1 className="text-5xl text-white font-bold mb-6">ScriptFlow</h1>
            <p className="text-lg text-white mb-6">
                A simple and small Web No-code platform for creating flowcharts.
            </p>
            <div className="flex space-x-4">
                <button  onClick={handleGetStartedClick} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-custom-red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-custom-red/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Get Started
                </button>
                <button className="text-red-700 hover:text-white border border-red-700 hover:bg-gradient-to-r from-red-400 via-red-500 to-custom-red focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-gradient-to-r from-red-400 via-red-500 to-custom-red dark:focus:ring-red-900">
                    Github
                </button>
            </div>
        </div>
            <div className="flex flex-col items-center space-y-40 pb-10">
            <ScrollElement delay="duration-500" align="left" scrollY={300}>
                <SeeDocumentationContent/>
            </ScrollElement>
            <ScrollElement delay="duration-500" align="right" scrollY={600}>
                <SeeDocumentationContent/>
            </ScrollElement>
            <ScrollElement delay="duration-500" align="left" scrollY={1000}>
                <SeeDocumentationContent/>
            </ScrollElement>
            </div>
        </div>
    );
}

export default LandingPageContent;