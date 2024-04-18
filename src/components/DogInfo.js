import React from 'react';

function DogInfo({ selectedPup, onToggleGoodness }) {
  const { id, image, name, isGoodDog } = selectedPup;

  const toggleGoodness = () => {
    onToggleGoodness(id);
  };

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button onClick={toggleGoodness}>
        {isGoodDog ? 'Good Dog!' : 'Bad Dog!'}
      </button>
    </div>
  );
}

export default DogInfo;