import React from 'react';

const Card: React.FC = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      width: '100%',
      margin: '0 auto' // Centre la grille
    }}>
      <img src="/a2.png" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
      <img src="/a3.png" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
      <img src="/a4.png" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
      <img src="/a5.png" alt="Image 4" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Card;