import React, { useState } from 'react';
import { PiCircle, PiRectangle, PiStar } from 'react-icons/pi';
import { IoRemoveOutline } from 'react-icons/io5';
import { BiPolygon } from 'react-icons/bi';
import { CiEdit } from 'react-icons/ci';
import { v4 as uuid } from 'uuid';
import Shapes from '../Shapes/shapes';
import { Stage, Layer, Line } from 'react-konva';
import './menu-bar.css';
import { SelectedShapesObj } from '../Interfaces/shapes.interface';

const MenuBar = () => {
  const [currentSelectedShape, setCurrentSelectedShape] = useState<string>('');
  let [selectedShapes, setSelectedShapes] = useState<SelectedShapesObj[]>([]);

  const [color, setColor] = useState<string>('green');

  const [lines, setLines] = useState<any>([]);
  const isDrawing = React.useRef<boolean>(false);

  const updateShape = (shape: string) => {
    const xCordinate: number = Math.floor(Math.random() * (1200 - 20 + 1)) + 20;
    const yCordinate: number = Math.floor(Math.random() * (450 - 55 + 1) + 55);
    const newShape: SelectedShapesObj = {
      id: uuid(),
      shape,
      xCordinate,
      yCordinate,
    };
    setSelectedShapes((prevShapes) => [...prevShapes, newShape]);
    setCurrentSelectedShape(shape);
  };

  const handleClick = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor =
      '#' +
      r.toString(16).padStart(2, '0') +
      g.toString(16).padStart(2, '0') +
      b.toString(16).padStart(2, '0');
    setColor(randomColor);
  };

  const updateCoordinates = (tempShape: SelectedShapesObj) => {
    setSelectedShapes((prevShapes) =>
      prevShapes.map((eachShape) => {
        if (eachShape.id === tempShape.id) {
          return {
            ...eachShape,
            xCoordinate: tempShape.xCordinate,
            yCoordinate: tempShape.yCordinate,
          };
        }
        return eachShape;
      }),
    );
  };

  // Free Drawing Functionality

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    setLines([...lines.slice(0, lines.length - 1), lastLine]); // Update lines state properly
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div className="d-flex flex-column justify-content-start">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-row justify-content-between align-self-center card shadow mt-2 w-25 p-0 m-auto">
          <button
            type="button"
            className={
              currentSelectedShape === 'rectangle'
                ? 'btn selected-shape'
                : 'btn'
            }
            onClick={() => updateShape('rectangle')}>
            <PiRectangle className="fs-5" />
          </button>
          <button
            type="button"
            className={
              currentSelectedShape === 'circle' ? 'btn selected-shape' : 'btn'
            }
            onClick={() => updateShape('circle')}>
            <PiCircle className="fs-5" />
          </button>
          <button
            type="button"
            className={
              currentSelectedShape === 'star' ? 'btn selected-shape' : 'btn'
            }
            onClick={() => updateShape('star')}>
            <PiStar className="fs-5" />
          </button>
          <button
            type="button"
            className={
              currentSelectedShape === 'line' ? 'btn selected-shape' : 'btn'
            }
            onClick={() => updateShape('line')}>
            <IoRemoveOutline className="fs-5" />
          </button>
          <button
            type="button"
            className={
              currentSelectedShape === 'polygon' ? 'btn selected-shape' : 'btn'
            }
            onClick={() => updateShape('polygon')}>
            <BiPolygon className="fs-5" />
          </button>
          <button
            type="button"
            className={
              currentSelectedShape === 'customShape'
                ? 'btn selected-shape'
                : 'btn'
            }
            onClick={() => updateShape('customShape')}>
            <CiEdit className="fs-5" />
          </button>
        </div>
      </div>
      <div>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}>
          <Layer>
            {selectedShapes.map((item, index) => (
              <Shapes
                key={index}
                shape={item}
                color={color}
                handleClick={handleClick}
                updateCoordinates={updateCoordinates}
              />
            ))}
            {currentSelectedShape === 'customShape' &&
              lines.map((line: any, i: any) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke="black"
                  strokeWidth={5}
                  tension={0.5}
                  lineCap="round"
                  lineJoin="round"
                />
              ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default MenuBar;
