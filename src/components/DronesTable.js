import React from 'react'

function DronesTable({drones}) {
  console.log(drones);
  return (
    <table>
      <tbody>
        <tr>
          <th>Drone Name</th>
          <th>Price</th>
          <th>No of flights</th>
          <th>Crash Rate</th>
        </tr>
        {drones.map((item, key) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.numFlights}</td>
              <td>{item.crashRate.toFixed(2)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DronesTable;