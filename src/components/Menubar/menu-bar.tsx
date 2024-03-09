import React, { useState } from 'react';
import { PiCircle, PiRectangle, PiStar } from 'react-icons/pi';
import { IoRemoveOutline } from 'react-icons/io5';
import { BiPolygon } from 'react-icons/bi';
import Shapes from '../Shapes/shapes';
import './menu-bar.css';

const MenuBar = () => {
  const [shape, setShape] = useState<string>('rectangle');
  const updateShape = (shape: string) => {
    setShape(shape);
  };
  const [color, setColor] = useState<string>('green');

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

  const renderShape = () => {
    return <Shapes shape={shape} color={color} handleClick={handleClick} />;
  };

  return (
    <div className="d-flex flex-column justify-content-start">
      <div className="d-flex flex-row justify-content-between align-self-center card shadow mt-2 w-25 p-0">
        <button
          type="button"
          className={shape === 'rectangle' ? 'btn selected-shape' : 'btn'}
          onClick={() => updateShape('rectangle')}>
          <PiRectangle className="fs-5" />
        </button>
        <button
          type="button"
          className={shape === 'circle' ? 'btn selected-shape' : 'btn'}
          onClick={() => updateShape('circle')}>
          <PiCircle className="fs-5" />
        </button>
        <button
          type="button"
          className={shape === 'star' ? 'btn selected-shape' : 'btn'}
          onClick={() => updateShape('star')}>
          <PiStar className="fs-5" />
        </button>
        <button
          type="button"
          className={shape === 'line' ? 'btn selected-shape' : 'btn'}
          onClick={() => updateShape('line')}>
          <IoRemoveOutline className="fs-5" />
        </button>
        <button
          type="button"
          className={shape === 'polygon' ? 'btn selected-shape' : 'btn'}
          onClick={() => updateShape('polygon')}>
          <BiPolygon className="fs-5" />
        </button>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center">
        {renderShape()}
      </div>
    </div>
  );
};

export default MenuBar;
