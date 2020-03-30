import React, { useState, useEffect } from 'react';
import './App.css';
import Session from './Session/Session';

// API calls
const apiExerciseList =
  'https://wger.de/api/v2/exercise/?format=json&language=2&limit=685&status=2';

const daysofWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function App() {
  const [date, setDate] = useState('');
  const [exerciseList, updateList] = useState([]);

  useEffect(() => {
    let today = new Date();

    let month = months[today.getMonth()];
    let day = daysofWeek[today.getDay()];

    setDate(`${day}, ${month} ${today.getDate()}, ${today.getFullYear()}`);
    // API call to grab a list of exercises to log
    fetch(apiExerciseList)
      .then(res => res.json())
      .then(data => {
        const list = data.results.map(e => {
          let newExercise = {};
          newExercise.id = e.id;
          newExercise.name = e.name;
          newExercise.description = e.description;
          return newExercise;
        });
        updateList(list);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App container">
      <div className="logo">
        <h1>Work It Out</h1>
        <i className="fas fa-dumbbell"></i>
      </div>
      <div id="Workouts">
        <Session exercises={exerciseList} date={date} />
      </div>
    </div>
  );
}

export default App;
