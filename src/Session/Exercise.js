import React from 'react';
import Set from './Set';
import { render } from '@testing-library/react';
import './Exercise.css';

class Exercise extends React.Component {
  // const [name, setName] = useState('');
  // const [exerciseSets, makeNewSet] = useState([<Set />]);

  state = {
    exercise: this.props.name,
    exerciseId: this.props.id,
    exerciseSets: [],
    sessionExercises: []
  };

  makeNewSet = () => {
    this.setState({
      exerciseSets: [...this.state.exerciseSets, <Set />]
    });
  };

  removeSet = () => {
    this.setState({
      exerciseSets: [...this.state.exerciseSets, <Set />]
    });
  };

  pickExercise = e => {
    this.setState({
      exercise: e.target.value,
      sessionExercises: [...this.state.sessionExercises, e.target.value]
    });
  };

  render() {
    return (
      <div className="Exercise col-sm-3" id={this.props.id}>
        <h4>{this.props.name}</h4>

        <div>{this.state.exerciseSets}</div>

        <button onClick={this.makeNewSet} className="btn btn-info">
          Add A Set
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger">
          Delete Exercise
        </button>
      </div>
    );
  }
}

export default Exercise;
