import React, { useEffect, useState } from 'react';
import DronesTable from './DronesTable';
import Filter from './Filter';

const filterOptions = [
  {
    id: 0,
    name: "ALL",
    value: {
      min: 0,
      max: 1
    }
  },
  {
    id: 1,
    name: "0 - 20%",
    value: {
      min: 0,
      max: 0.2
    }
  },
  {
    id: 2,
    name: "20% - 40%",
    value: {
      min: 0.2,
      max: 0.4
    }
  },
  {
    id: 3,
    name: "40% - 60%",
    value: {
      min: 0.4,
      max: 0.6
    }
  },
  {
    id: 4,
    name: "60% - 80%",
    value: {
      min: 0.6,
      max: 0.8
    }
  },
  {
    id: 5,
    name: "80% - 100%",
    value: {
      min: 0.8,
      max: 1
    }
  }
]


function DronesTableScreen() {
  const [ drones, setDrones ] = useState([]);
  const [ dronesLoaded, setDronesLoaded ] = useState(false);
  const [ displayedDrones, setDisplayedDrones ] = useState([])

  // On intitial load fetch drones api
  useEffect(() => {
    if (drones.length <= 0) {
      fetchDronesData()
    }
  }, [])

  // Request dodgy API to fetch list of drones
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

  // Sets drones in state and adds the property crashrate
  const handleSetDrones = (dronesArray) => {
    const newDrones = dronesArray.map((drone) => {
      return {
        ...drone,
        crashRate: drone.numCrashes / drone.numFlights
      }
    })
    
    setDrones(newDrones);
    setDisplayedDrones(newDrones);
    setDronesLoaded(true);
  }

  // On filter request change displayed drones
  const handleFilter = ({min, max}) => {
    return setDisplayedDrones(drones.filter((drone) => drone.crashRate >= min && drone.crashRate <= max))
  }


  if (!dronesLoaded) {
    return (
      <div className="loading-screen">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <>
      <h1>Drones Data</h1>
      <div className="filter-container">
        <h3>Crash Rate:</h3>
        <Filter options={filterOptions} onSelect={(selectedValue) => handleFilter(selectedValue)} />
      </div>
      <DronesTable drones={displayedDrones} />
    </>
  );
}

export default DronesTableScreen