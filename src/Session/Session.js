import React, { useEffect } from 'react';
import Exercise from './Exercise';
import './Session.css';

class Session extends React.Component {
  state = {
    sessionExercises: []
  };

  // Need to fix when a user has 2 of the same exercises
  pickExercise = e => {
    let id = this.props.exercises.find(id => id.name === e.target.value);
    let newExercise = {
      id: id.id,
      name: e.target.value
    };
    this.setState({
      sessionExercises: [...this.state.sessionExercises, newExercise]
    });
  };

  // Need to fix when a user has 2 of the same exercises
  handleDelete = e => {
    if (this.state.sessionExercises.length == 1) {
      this.setState({ sessionExercises: [] });
    } else {
      let array = [...this.state.sessionExercises];
      let findId = this.state.sessionExercises.find(obj => obj.id === e);
      const index = array.indexOf(findId);
      array.splice(index, 1);

      this.setState({ sessionExercises: array });
    }
  };

  render() {
    return (
      <div className="Session container">
        <div className="row">
          <h2 className="date">{this.props.date}</h2>
          <select onChange={this.pickExercise}>
            <option>Add an Exercise ...</option>
            {this.props.exercises.map(e => (
              <option key={e.id} value={e.name} id={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div className="row group d-inline-flex justify-content-center">
          {this.state.sessionExercises.length > 0 &&
            this.state.sessionExercises.map(e => (
              <Exercise
                name={e.name}
                key={e.id}
                id={e.id}
                onDelete={() => this.handleDelete(e.id)}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Session;
