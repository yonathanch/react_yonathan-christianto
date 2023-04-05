import React, { useState } from 'react';

const Contoh = () => {
    const [name, setName] = useState('');
    return (
        
        <div>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            setName(e.target.value);
          } else {
            alert('Name should not exceed 10 characters');
          }
        }}
      />
    
    </div>
        
        
        
    )
}

export default Contoh