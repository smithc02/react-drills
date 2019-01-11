import React, {Component} from 'react';




class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
        username: '',
        password: ''
        };
        
        this.handleClick = this.handleClick.bind(this)
    }

updateUsername(e){
    console.log(e)
    this.setState({username: e})
}


updatePassword(e){
    this.setState({password: e})
}

handleClick(){
    alert(`Username: ${ this.state.username } Password: ${this.state.password}`);
}



    render(){
        return(
            <div>
                <input type='text' onChange={(e)=> this.updateUsername(e.target.value)} />
                <input type ='text' onChange={(e)=> this.updatePassword(e.target.value) } />

                {/* when using something taking input and pushing it make sure to use e.target.value after sending it to this.functionTitle() */}
                <button onClick={this.handleClick} > Login </button>
                {/*  button does not need  more than this.functionName to operate. No event information is being passed therefor no arrow function is needed  */}
            </div>

        )
    }
}

export default Login
