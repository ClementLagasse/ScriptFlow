

const LandingPageContent = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <h1 className="text-5xl text-white font-bold mb-6">ScriptFlow</h1>
            <p className="text-lg text-white mb-6">
                A simple and small Web No-code platform for creating and sharing flowcharts.
            </p>
            <div className="flex space-x-4">
                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-custom-red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-custom-red/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Get Started
                </button>
                <button className="text-red-700 hover:text-white border border-red-700 hover:bg-gradient-to-r from-red-400 via-red-500 to-custom-red focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-gradient-to-r from-red-400 via-red-500 to-custom-red dark:focus:ring-red-900">
                    Github
                </button>
            </div>
        </div>
    );
}

export default LandingPageContent;