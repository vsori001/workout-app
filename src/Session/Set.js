import React, { useState } from 'react';
import './Set.css';

function Set(props) {
  const [reps, updateReps] = useState(0);
  const [weight, updateWeight] = useState(0);

  return (
    <div className="Set">
      Reps:
      <input
        type="number"
        onChange={e => updateReps(e.target.value)}
        value={reps}
        className="form-control"
      />
      Weight:
      <input
        type="number"
        onChange={e => updateWeight(e.target.value)}
        value={weight}
        className="form-control"
      />
      <span onClick={props.deleteSet}>&times;</span>
    </div>
  );
}

export default Set;
