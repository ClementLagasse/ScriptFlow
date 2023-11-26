import React from 'react';
import GoJsDiagram from "./goJsDiagram.jsx";

const DiagramBoxCustom = () => {
    return (
        <div className="flex flex-grow bg-white rounded-lg shadow dark:bg-white mr-4 ml-4 mt-4">
            <GoJsDiagram/>
        </div>
    );
}

export default DiagramBoxCustom;