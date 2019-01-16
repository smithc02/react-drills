import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List';


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
    this.handleAddTask = this.handleAddTask.bind(this)
  }
    handleAddTask(value) {
      this.setState({ list: [ ...this.state.list, value ] });

    }

    render() {
      return (
        <div className="App">
          <h1><b>My to-do list</b></h1>
          <NewTask add={this.handleAddTask}/>
          <List tasks={this.state.list}/>
        </div>
      );
    }
  
}

export default App;
