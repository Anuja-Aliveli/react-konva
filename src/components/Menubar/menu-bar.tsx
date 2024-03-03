import React, { useState } from 'react';
import { PiCircle, PiRectangle, PiStar } from 'react-icons/pi';
import { IoRemoveOutline } from 'react-icons/io5';
import { BiPolygon } from 'react-icons/bi';
import './menu-bar.css';

const MenuBar = () => {
  const [shape, setShape] = useState<string>('rect');
  const updateShape = (shape: string) => {
    setShape(shape);
  };

  const renderShape = () => {
    switch (shape) {
      case 'rect':
        return <p>Rectangle</p>;
      case 'circle':
        return <p>Circle</p>;
      case 'star':
        return <p>Star</p>;
      case 'line':
        return <p>Line</p>;
      case 'polygon':
        return <p>Polygon</p>;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-start">
      <div className="d-flex flex-row justify-content-between align-self-center card shadow mt-2 w-25 p-0">
        <button
          type="button"
          className="btn"
          onClick={() => updateShape('rect')}>
          <PiRectangle className="fs-5" />
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => updateShape('circle')}>
          <PiCircle className="fs-5" />
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => updateShape('star')}>
          <PiStar className="fs-5" />
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => updateShape('line')}>
          <IoRemoveOutline className="fs-5" />
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => updateShape('polygon')}>
          <BiPolygon className="fs-5" />
        </button>
      </div>
      <div className="h">{renderShape()}</div>
    </div>
  );
};

export default MenuBar;
