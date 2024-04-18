import React, { useState, useEffect } from 'react';
import DogBar from './DogBar';
import DogInfo from './DogInfo';

function App() {
  const [pups, setPups] = useState([]);
  const [selectedPup, setSelectedPup] = useState(null);
  const [filterGoodDogs, setFilterGoodDogs] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(resp => resp.json())
      .then(setPups);
  }, []);

  const toggleGoodness = id => {
    const updatedPups = pups.map(pup =>
      pup.id === id ? { ...pup, isGoodDog: !pup.isGoodDog } : pup
    );
    setPups(updatedPups);
  };

  const handlePupClick = id => {
    const foundPup = pups.find(pup => pup.id === id);
    setSelectedPup(foundPup);
  };

  const handleFilterToggle = () => {
    setFilterGoodDogs(!filterGoodDogs);
  };

  const filteredPups = filterGoodDogs ? pups.filter(pup => pup.isGoodDog) : pups;

  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleFilterToggle}>
          {filterGoodDogs ? 'Filter good dogs: ON' : 'Filter good dogs: OFF'}
        </button>
      </div>
      <div id="dog-bar">
        <DogBar pups={filteredPups} onPupClick={handlePupClick} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {selectedPup && (
          <DogInfo selectedPup={selectedPup} onToggleGoodness={toggleGoodness} />
        )}
      </div>
    </div>
  );
}

export default App;