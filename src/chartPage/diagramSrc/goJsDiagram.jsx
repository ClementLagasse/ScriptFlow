import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';
import {configureGridStyle, configureNodeTemplate} from './diagramStyle.jsx';

const GoJsDiagram = () => {
    const diagramRef = useRef(null);
    const diagram = useRef(null);
    useEffect(() => {
        if (diagramRef.current && !diagram.current) {
            const $ = go.GraphObject.make;
            diagram.current = $(go.Diagram, diagramRef.current, {
                'undoManager.isEnabled': true,
                layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
            });

            configureGridStyle(diagram.current);
            configureNodeTemplate(diagram.current);

            diagram.current.model = new go.GraphLinksModel(
                [{ key: 'Hello' }, { key: 'World' }],
                [{ from: 'Hello', to: 'World' }]
            );
        }

        //return () => {
        //    if (diagram.current) {
        //        diagram.current.div = null;
        //    }
        //};

    }, []);
    return <div ref={diagramRef} className="w-full"></div>;
};




export default GoJsDiagram;
