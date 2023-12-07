import React from 'react';
import {
  ReactFlowProvider,
  Controls,
  MiniMap,
  Background,
  ReactFlow, // Correct import statement
} from 'react-flow-renderer';
const Stories = () => {
  const elements = [
    { id: '1', type: 'input', data: { label: 'Big Container' }, position: { x: 250, y: 5 } },
    { id: '2', type: 'default', data: { label: 'Image 1' }, position: { x: 100, y: 100 } },
    { id: '3', type: 'default', data: { label: 'Image 2' }, position: { x: 400, y: 100 } },
  ];

  const onElementClick = (event, element) => {
    console.log('Element clicked!', element);
  };

  return (
    <ReactFlowProvider>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ReactFlowProvider>
          <Controls />
          <MiniMap />
          <Background color="#888" gap={16} />
          <ReactFlow
            elements={elements}
            onElementClick={onElementClick}
            nodeTypes={{
              input: ({ children }) => (
                <div style={{ width: '400px', height: '200px', background: '#ddd' }}>{children}</div>
              ),
              default: ({ data }) => (
                <div style={{ width: '150px', height: '150px', background: '#eee' }}>
                  {data.label}
                </div>
              ),
            }}
          />
        </ReactFlowProvider>
      </div>
    </ReactFlowProvider>
  );
};

export default Stories;
