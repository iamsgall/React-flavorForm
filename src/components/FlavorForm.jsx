import React, {useState} from 'react';

export default function FlavorForm() {
  let [flavor, setFlavor] = useState('coconut');

  const handleSubmit = e => {
    alert(`Your favorite flavor is: ${flavor}`);
    e.preventDefault();
  };

  const handleChange = e => {
    setFlavor((flavor = e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select value={flavor} onChange={handleChange}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>
      </label>
      <input style={{marginLeft: 8}} type='submit' value='Submit' />
    </form>
  );
}
