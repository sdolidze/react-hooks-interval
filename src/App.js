import React, { useState } from 'react';
import Level00 from './levels/Level00';
import Level01 from './levels/Level01';
import Level02 from './levels/Level02';
import Level03 from './levels/Level03';
import Level04 from './levels/Level04';
import Level05 from './levels/Level05';
import Level06 from './levels/Level06';
import Level07 from './levels/Level07';
import Level08 from './levels/Level08';
import Level09 from './levels/Level09';
import Level10 from './levels/Level10';
import Level11 from './levels/Level11';
import Level12 from './levels/Level12';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const levels = [
    Level00,
    Level01,
    Level02,
    Level03,
    Level04,
    Level05,
    Level06,
    Level07,
    Level08,
    Level09,
    Level10,
    Level11,
    Level12,
  ];

  const SelectedComponent = levels[selectedIndex];

  return (
    <div>
      <h1>React Hooks: Interval</h1>
      <label>Level: </label>
      <select
        style={{ marginBottom: 10 }}
        value={selectedIndex || ''}
        onChange={e => setSelectedIndex(e.target.value)}
      >
        {levels.map((_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <SelectedComponent />
    </div>
  );
}

export default App;
