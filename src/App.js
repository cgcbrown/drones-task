import React, { useEffect, useState } from 'react';
import DronesTable from './components/DronesTable';
import Filter from './components/Filter';
import './App.css';




function App() {
  const [ drones, setDrones ] = useState([]);
  const [ dronesLoaded, setDronesLoaded ] = useState(false);

  useEffect(() => {
    if (drones.length <= 0) {
      fetchDronesData()
    }
  }, [])

  const handleSetDrones = (dronesArray) => {
    const newDrones = dronesArray.map((drone) => {
      return {
        ...drone,
        crashRate: drone.numCrashes / drone.numFlights
      }
    })
    
    setDrones(newDrones);
    setDronesLoaded(true);
  }

  const fetchDronesData = async () => {
    await fetch('https://bobs-epic-drone-shack-inc.herokuapp.com/api/v0/drones', {
      cache: 'no-cache'
    })
      .then(
        async (response) => {
          if (response.ok) {
            const res = await response.json();
            handleSetDrones(res);
          } else {
            return await fetchDronesData()
          }
        }
      )
      .then(() => console.log('Success'), (error) => console.log(error))
  }

  if (!dronesLoaded) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div className="container">
      <DronesTable drones={drones} />
      <Filter />
    </div>
  );
}

export default App;
