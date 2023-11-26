import * as go from 'gojs';

const configureGridStyle = (diagram) => {
    const $ = go.GraphObject.make;
    diagram.grid =
        $(go.Panel, "Grid",
            { gridCellSize: new go.Size(40, 40) },
            $(go.Shape, "LineH", { stroke: "lightgray" }),
            $(go.Shape, "LineV", { stroke: "lightgray" }),
            $(go.Shape, "LineH", { stroke: "gray", interval: 5, strokeWidth: 2 }),
            $(go.Shape, "LineV", { stroke: "gray", interval: 5, strokeWidth: 2 })
        );
};

const configureNodeTemplate = (diagram) => {
    const $ = go.GraphObject.make;
    diagram.nodeTemplate =
        $(go.Node, 'Auto',
            { resizable: true },
            $(go.Shape, 'RoundedRectangle', { strokeWidth: 0, fill: 'red' }),
            $(go.TextBlock, { margin: 8 },
                new go.Binding('text', 'key'))
        );
}

export { configureGridStyle, configureNodeTemplate };