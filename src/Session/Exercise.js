import React, { useState } from 'react';
import Set from './Set';
import './Exercise.css';

function Exercise(props) {
  const [setCount, updateCount] = useState(0);
  const [exerciseSets, setExerciseSets] = useState([]);

  const handleDeleteSet = id => {
    if (exerciseSets.length === 1) {
      setExerciseSets([]);
    } else {
      let array = [...exerciseSets];
      let findId = exerciseSets.find(obj => obj.id === id);
      const index = array.indexOf(findId);
      array.splice(index, 1);

      setExerciseSets(array);
    }
  };

  const makeNewSet = () => {
    const newSet = { key: setCount, id: setCount };
    let count = setCount;
    updateCount(count++);
    setExerciseSets([...exerciseSets, newSet]);
  };

  return (
    <div className="Exercise col-sm-3" id={props.id}>
      <h4>{props.name}</h4>

      <button onClick={makeNewSet} className="btn btn-info">
        Add A Set
      </button>
      <button onClick={props.onDelete} className="btn btn-danger">
        Delete Exercise
      </button>
      <div>
        {exerciseSets.length >= 0 &&
          exerciseSets.map(s => (
            <Set
              key={s.key}
              setId={s.id}
              deleteSet={() => handleDeleteSet(s.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Exercise;
