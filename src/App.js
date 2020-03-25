import React from 'react';
import './App.css';
import Session from './Session/Session';

// API calls
const apiExerciseList =
  'https://wger.de/api/v2/exercise/?format=json&language=2&limit=685&status=2';
const daysofWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
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

class App extends React.Component {
  state = {
    date: '',
    exerciseList: []
  };

  componentDidMount() {
    let today = new Date();

    let month = months[today.getMonth()];
    let day = daysofWeek[today.getDay() - 1];

    this.setState({
      date: `${day}, ${month} ${today.getDate()}, ${today.getFullYear()}`
    });
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
        this.setState({ exerciseList: list });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App container">
        <div className="logo">
          <h1>Work It Out</h1>
          <i className="fas fa-dumbbell"></i>
        </div>
        <div id="Workouts">
          <Session exercises={this.state.exerciseList} date={this.state.date} />
        </div>
      </div>
    );
  }
}

export default App;
