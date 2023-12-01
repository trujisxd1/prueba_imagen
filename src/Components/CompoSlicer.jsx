import { Slider } from 'antd';
import { useState } from 'react';

const CompoSlicer = ({ onXSlide, onYSlide }) => {
  const [xSliderValue, setXSliderValue] = useState(0);
  const [ySliderValue, setYSliderValue] = useState(0);

  const handleXSliderChange = (value) => {
    setXSliderValue(value);
    onXSlide(value);
  };

  const handleYSliderChange = (value) => {
    setYSliderValue(value);
    onYSlide(value);
  };

  return (
    <>
      {/* Slider para el eje X */}
      <Slider max={200}
        tooltip={{
          formatter: (value) => `${value}px`,
        }}
        onChange={handleXSliderChange}
      />

      {/* Contenido que se mueve con el Slider del eje X */}
      <div style={{ transform: `translateX(${xSliderValue}px) translateY(${ySliderValue}px)` }}>
      
      </div>

      {/* Slider para el eje Y */}
      <Slider max={200}
        tooltip={{
          formatter: (value) => `${value}px`,
        }}
        onChange={handleYSliderChange}
      />

      {/* Contenido que se mueve con el Slider del eje Y */}
      <div style={{ transform: `translateY(${ySliderValue}px) translateY(${ySliderValue}px)` }}>

      </div>
    </>
  );
};

export default CompoSlicer;
