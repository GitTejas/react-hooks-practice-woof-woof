import React from 'react';

function DogBar({ pups, onPupClick }) {
  const handleClick = id => {
    onPupClick(id);
  };

  return (
    <>
      {pups.map(pup => (
        <span key={pup.id} onClick={() => handleClick(pup.id)}>
          {pup.name}
        </span>
      ))}
    </>
  );
}

export default DogBar;