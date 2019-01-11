import React, {Component} from 'react';




class ArrayList extends Component {
    constructor(props){
        super(props)

        this.state = {
            Food: ['Spaghetti', 'Ice Cream', 'Sushi', 'bologna', 'cheese']
        }
    }

//have a list of arrays
//print arrays into h2



    render() {
        let foods = this.state.Food.map((e,i) => {
            return (
                <h2 key={i}> {e} </h2>
            )
        })
        return (
            <div classNAme ='App'>
                {foods}
            </div>
      );
    }
}





  export default ArrayList;