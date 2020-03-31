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

  let saveButton = (
    <button className="btn btn-outline-success btn-lg">
      <svg
        class="bi bi-folder-plus"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M13.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13v-1.5a.5.5 0 01.5-.5z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M13 12.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"
          clip-rule="evenodd"
        />
      </svg>
      Save Session
    </button>
  );

  return (
    <div className="Session container">
      <div className="row">
        <h2 className="date">{props.date}</h2>
      </div>

      <div className="row group justify-content-center">
        <select onChange={pickExercise}>
          <option>Add an Exercise</option>
          {props.exercises.map(e => (
            <option key={e.id} value={e.name} id={e.id}>
              {e.name}
            </option>
          ))}
        </select>

        {sessionExercises.length > 0 ? saveButton : null}
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
