import React, {Component} from 'react';

class UserClass extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    state = { 
        count: 0,
     };

    render() { 
        const {name, location, contact} = this.props;
        return (
            <div className='user-card'>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {this.setState({count: this.state.count+1})}}>Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
}
 
export default UserClass;