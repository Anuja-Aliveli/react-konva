import React from 'react';
import { Rect, Circle, Line, Text, RegularPolygon, Star } from 'react-konva';
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
            key="rectangle"
            x={props.xCordinate}
            y={props.yCordinate}
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
            key="circle"
            x={props.xCordinate}
            y={props.yCordinate}
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
            key="star"
            x={props.xCordinate}
            y={props.yCordinate}
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
            key="line"
            x={props.xCordinate}
            y={props.yCordinate}
            points={[0, 0, 100, 0]}
            stroke={props.color}
            strokeWidth={3}
            fill={props.color}
            draggable
            onClick={props.handleClick}
          />
        );
      case shapesObj.text:
        return <Text key="text" text="Some text on canvas" fontSize={15} />;
      case shapesObj.polygon:
        return (
          <RegularPolygon
            key="polygon"
            x={props.xCordinate}
            y={props.yCordinate}
            sides={5}
            radius={100}
            fill={props.color}
            onClick={props.handleClick}
            stroke="black"
            strokeWidth={4}
            draggable
          />
        );
      default:
        return null;
    }
  };

  return <>{renderRequiredShape()}</>;
};

export default Shapes;
