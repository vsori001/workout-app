import React, { useState } from 'react';
import Exercise from './Exercise';
import './Session.css';

function Session(props) {
  const [sessionExercises, setSessionExercises] = useState([]);

  const pickExercise = e => {
    let id = props.exercises.find(exercise => exercise.name === e.target.value);

    // Makes sure the exercise is not already logged
    if (!sessionExercises.find(check => check.id === id.id)) {
      let newExercise = {
        id: id.id,
        name: e.target.value
      };
      setSessionExercises([...sessionExercises, newExercise]);
    } else {
      alert(`You already have ${e.target.value} logged`);
    }
  };

  const handleDelete = e => {
    if (sessionExercises.length === 1) {
      setSessionExercises([]);
    } else {
      let array = [...sessionExercises];
      let findId = sessionExercises.find(obj => obj.id === e);
      const index = array.indexOf(findId);
      array.splice(index, 1);

      setSessionExercises(array);
    }
  };

  return (
    <div className="Session container">
      <div className="row">
        <h2 className="date">{props.date}</h2>
        <select onChange={pickExercise}>
          <option>Add an Exercise</option>
          {props.exercises.map(e => (
            <option key={e.id} value={e.name} id={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row group d-inline-flex justify-content-center">
        {sessionExercises.length > 0 &&
          sessionExercises.map(e => (
            <Exercise
              name={e.name}
              key={e.id}
              id={e.id}
              onDelete={() => handleDelete(e.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Session;
