import React, { Component } from 'react';
import Filter from './components/filter';
import './App.css';







class Filter extends Component{
    constructor(){
        super()
        this.state = {
            filterString: '',
            food: ['Spaghetti', 'Ice Cream', 'Sushi', 'bologna', 'cheese']
        };
    }    

filter(e){
    this.setState( {filterString: e})
}





        render() {
            let foodFilter = this.state.food.filter((e,i) => {
                return e.includes (this.state.filterstring);
                }) .map( (e,i) => {
                return <h2 key={i}> {e}</h2>
                })
                return(
                <div className='App'>
                <input onChange={(e)=> this.Filter((e.target.value))} type = 'text'/>
                {foodFilter}

                </div>
            )
    }

}
export default Filter

// array on state
// take input,
//each input filters list for only ones with matching letters