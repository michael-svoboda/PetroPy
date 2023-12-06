import React from 'react';
import { ForceGraph3D } from 'react-force-graph'

const EngineeringGraph = () => {
  const graphData = {
    nodes: [
      { id: 'Engineering', group: 'Engineering' },
      { id: 'Mechanical', group: 'Mechanical' },
      { id: 'Electrical', group: 'Electrical' },
      { id: 'Oil and Gas', group: 'Oil and Gas' },
      { id: 'Geomatics', group: 'Geomatics' },
      { id: 'Petroleum', group: 'Petroleum' },
      { id: 'Chemical', group: 'Chemical' },
      { id: 'Thermodynamics', group: 'Shared' },
      { id: 'Fluid Mechanics', group: 'Shared' },
      { id: 'Heat Transfer', group: 'Shared' },
      // Additional nodes
      { id: 'Newton\'s Law of Cooling', group: 'Heat Transfer' },
      { id: 'Fourier\'s Law', group: 'Heat Transfer' },
      { id: 'Reynolds Number', group: 'Fluid Mechanics' },
      { id: 'Bernoulli\'s Equation', group: 'Fluid Mechanics' },
      { id: 'Maxwell\'s Equations', group: 'Electrical' },
      { id: 'Ohm\'s Law', group: 'Electrical' },
      { id: 'Reservoir Engineering', group: 'Oil and Gas' },
      { id: 'Drilling Engineering', group: 'Oil and Gas' },
      { id: 'Oil Exploration', group: 'Oil and Gas' },
      { id: 'GIS', group: 'Geomatics' },
      { id: 'Cartography', group: 'Geomatics' },
      { id: 'Remote Sensing', group: 'Geomatics' },
    ],
    links: [
      { source: 'Engineering', target: 'Mechanical' },
      { source: 'Engineering', target: 'Electrical' },
      { source: 'Engineering', target: 'Oil and Gas' },
      { source: 'Engineering', target: 'Geomatics' },
      { source: 'Engineering', target: 'Petroleum' },
      { source: 'Engineering', target: 'Chemical' },
      { source: 'Mechanical', target: 'Fluid Mechanics' },
      { source: 'Mechanical', target: 'Thermodynamics' },
      { source: 'Mechanical', target: 'Heat Transfer' },
      { source: 'Electrical', target: 'Maxwell\'s Equations' },
      { source: 'Electrical', target: 'Ohm\'s Law' },
      { source: 'Oil and Gas', target: 'Reservoir Engineering' },
      { source: 'Oil and Gas', target: 'Drilling Engineering' },
      { source: 'Oil and Gas', target: 'Oil Exploration' },
      { source: 'Geomatics', target: 'GIS' },
      { source: 'Geomatics', target: 'Cartography' },
      { source: 'Geomatics', target: 'Remote Sensing' },
      { source: 'Heat Transfer', target: 'Newton\'s Law of Cooling' },
      { source: 'Heat Transfer', target: 'Fourier\'s Law' },
      { source: 'Fluid Mechanics', target: 'Reynolds Number' },
      { source: 'Fluid Mechanics', target: 'Bernoulli\'s Equation' },
    ],
  };
  
  console.log(graphData);
  

  return (
    <ForceGraph3D
      graphData={graphData}
      nodeAutoColorBy="group"
      linkDirectionalArrowLength={6}
      linkDirectionalArrowRelPos={1}
      nodeLabel="id" // Display node labels based on the 'id' property
    
    />
  );
};

export default EngineeringGraph;
