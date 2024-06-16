import React, { useState } from 'react';
import complete from '../../assets/icons/percentage-complete.svg';
import initial from '../../assets/icons/percentage-initial.svg';

const OverlappingSVGs = () => {
  const [percentage, setPercentage] = useState(50); // Exemplo de porcentagem

  // Lógica para decidir qual SVG mostrar com base na porcentagem
  const showSVG1 = percentage < 50;  // Exemplo de lógica simples
  const showSVG2 = percentage >= 50;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        {/* SVG 1 */}
        {showSVG1 && (
          <img src={complete} alt="SVG 1" className="absolute top-0 left-0 w-24 h-24" />
        )}

        {/* SVG 2 */}
        {showSVG2 && (
          <img src={initial} alt="SVG 2" className="absolute top-0 left-0 w-24 h-24" />
        )}

        {/* Exemplo de um controle para mudar a porcentagem */}
        {/* <input
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
          className="w-full"
        />
        <span>{percentage}%</span> */}
      </div>
    </div>
  );
};

export default OverlappingSVGs;
