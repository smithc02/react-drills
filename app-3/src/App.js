import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
        filterString: '',
        food: ['Spaghetti', 'Ice Cream', 'Sushi', 'Bologna', 'Cheese']
        };
      }    
filter(e){
  this.setState( {filterString: e})
}
  render() {
    let foodFilter = this.state.food.filter((e,index) => {
      return e.includes (this.state.filterString);
      }).map( (e , index) => {
      return <h2 key={index}>{e}</h2>
      })
    return (
      <div className="App">
      <input onChange={(e)=> this.filter((e.target.value))} type = 'text'/>
      {foodFilter}
      </div>
    );
  }
}

export default App;
