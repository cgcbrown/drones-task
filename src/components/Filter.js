import React, {useState} from 'react';

function Filter({options, onSelect}) {
  const [selectedFilter, setSelectedFilter] = useState(0);

  const handleSelect = (option) => {
    setSelectedFilter(option.id);
    onSelect(option.value);
  } 

  return (
    <div style={{display: 'flex'}}>
      {options.map((item) => {
        return (
          <button
            key={item.id}
            style={(selectedFilter === item.id ? {backgroundColor: '#63ACE5'} : {backgroundColor: '#E7EFF6'})}
            onClick={() => handleSelect(item)}
          >
            {item.name}
          </button>
        )
      })}
    </div>
  )
}

export default Filter