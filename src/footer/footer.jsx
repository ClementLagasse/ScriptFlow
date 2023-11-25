import React, { useState, useEffect } from 'react';
import '../App.css';

const CustomFooter = () => {

    return (
        <footer className={`bg-white rounded-lg shadow dark:bg-white mr-4 ml-4 mb-4`}>
                <div className="w-full max-w-screen-xl mx-auto p-2">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    </div>
                    <span className="block text-sm text-custom-red sm:text-center dark:text-custom-red">© 2023 ScriptFlow™. All Rights Reserved.</span>
                </div>
        </footer>
    );
};

export default CustomFooter;
