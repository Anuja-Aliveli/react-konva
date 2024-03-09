import React, { useState } from 'react';
import {
  Stage,
  Layer,
  Rect,
  Circle,
  Line,
  Text,
  RegularPolygon,
  Star,
} from 'react-konva';
import { ShapesObject } from '../Interfaces/shapes.interface';

const Shapes = (props: any) => {
  const shapesObj: ShapesObject = {
    rectangle: 'rectangle',
    text: 'text',
    circle: 'circle',
    star: 'star',
    line: 'line',
    polygon: 'polygon',
  };

  const renderRequiredShape = () => {
    switch (props.shape) {
      case shapesObj.rectangle:
        return (
          <Rect
            x={200}
            y={200}
            width={100}
            height={100}
            fill={props.color}
            stroke="black"
            onClick={props.handleClick}
            draggable
          />
        );
      case shapesObj.circle:
        return (
          <Circle
            x={200}
            y={200}
            stroke="black"
            radius={50}
            draggable
            fill={props.color}
            onClick={props.handleClick}
          />
        );
      case shapesObj.star:
        return (
          <Star
            x={200}
            y={200}
            numPoints={5}
            innerRadius={20}
            outerRadius={50}
            fill={props.color}
            stroke="black"
            strokeWidth={4}
            onClick={props.handleClick}
            draggable
          />
        );
      case shapesObj.line:
        return (
          <Line
            x={200}
            y={200}
            points={[0, 0, 100, 0]}
            stroke="black"
            strokeWidth={3}
            fill={props.color}
            onClick={props.handleClick}
          />
        );
      case shapesObj.text:
        return <Text text="Some text on canvas" fontSize={15} />;
      case shapesObj.polygon:
        return (
          <RegularPolygon
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            sides={5}
            radius={100}
            fill={props.color}
            onClick={props.handleClick}
            stroke="black"
            strokeWidth={4}
            draggable
          />
        );
    }
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>{renderRequiredShape()}</Layer>
    </Stage>
  );
};

export default Shapes;
