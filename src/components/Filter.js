import React from 'react';

function Filter({options, onSelect}) {
  return (
    <div style={{display: 'flex'}}>
      {options.map((item) => {
          return (
            <button key={item.id} onClick={() => onSelect(item.value)}>
              {item.name}
            </button>
          )
        })}
    </div>
  )
}

export default Filter