import React from 'react';
import Set from './Set';
import { render } from '@testing-library/react';
import './Exercise.css';

class Exercise extends React.Component {
  state = {
    exercise: this.props.name,
    exerciseId: this.props.id,
    setCount: 0,
    exerciseSets: []
  };

  handleDeleteSet = id => {
    if (this.state.exerciseSets.length == 1) {
      this.setState({ exerciseSets: [] });
    } else {
      let array = [...this.state.exerciseSets];
      let findId = this.state.exerciseSets.find(obj => obj.id === id);
      const index = array.indexOf(findId);
      array.splice(index, 1);

      this.setState({ exerciseSets: array });
    }
  };

  makeNewSet = () => {
    const newSet = { key: this.state.setCount, id: this.state.setCount };

    this.setState({
      setCount: ++this.state.setCount,
      exerciseSets: [...this.state.exerciseSets, newSet]
    });
  };

  render() {
    return (
      <div className="Exercise col-sm-3" id={this.props.id}>
        <h4>{this.props.name}</h4>

        <div>
          {this.state.exerciseSets.length >= 0 &&
            this.state.exerciseSets.map(s => (
              <Set
                key={s.key}
                setId={s.id}
                deleteSet={() => this.handleDeleteSet(s.id)}
              />
            ))}
        </div>

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
