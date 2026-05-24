'use client';

import { Stage, Layer, Circle } from 'react-konva';
import { useState } from 'react';

export default function CanvasEditor() {
  const [points, setPoints] = useState<any[]>([]);

  const handleClick = (e: any) => {
    const pos = e.target.getStage().getPointerPosition();

    setPoints([
      ...points,
      {
        x: pos.x,
        y: pos.y,
      },
    ]);
  };

  return (
    <div className="w-full h-full">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleClick}
      >
        <Layer>
          {points.map((point, index) => (
            <Circle
              key={index}
              x={point.x}
              y={point.y}
              radius={8}
              fill="red"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
