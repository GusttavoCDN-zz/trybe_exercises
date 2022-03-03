import './App.css';
import React from 'react';

class App extends React.Component {
  render() {

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tasks = ['Ask for sorry to Bea', 'Ask refund for Elden Ring', 'Study React', 'Study C', 'Study JS', 'Play Video- Game'];

    return (
      <ol className='list'>
        {tasks.map((task) => Task(task))}
      </ol>
    );
  }
}

export default App;
