import React, {Component} from 'react';






class TextBox extends Component{
    constructor(props){
        super(props)
        
        this.state ={
            inputBox: ''
        };
        this.handleText = this.handleText.bind(this)
    }
    handleText(e){
        this.setState({inputBox: e})
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleText(e.target.value)}    />
                <p>{this.state.inputBox} </p>
            </div>
        )
    }

}





export default TextBox