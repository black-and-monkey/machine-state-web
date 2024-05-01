import {Background, Controls, ReactFlow} from "reactflow";
// default styling
import 'reactflow/dist/style.css';

export function RenderWorkflow({ workflow, width, height  }) {

  if (!workflow) return null;

  return (

      <div style={{ width, height }}>
        <ReactFlow
            draggable={"true"}
          nodes={workflow.nodes}
          edges={workflow.edges}
          fitView
        >
          <Controls />
            <Background
                gap={32}
                color="#aaa"
            />
        </ReactFlow>
      </div>

  );
}
