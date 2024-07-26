import React, {Component} from 'react';

class UserClass extends Component {
    constructor(props){
        super(props);
        console.log(props);
        console.log(this.props.name + 'child constructor');
        this.state = { 
         };
    };
    componentDidMount(){
        console.log('child componentDidMount');
        // setInterval(() => {
        //     console.log('Namaste React')
        // }, 1000);
    };
    componentDidUpdate() {
        console.log('child componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('child componentWillUnmount');
    }

    render() { 
        console.log(this.props.name +'child render');
        const {name, location, contact,image} = this.props;
        return (
            <div className='user-card'>
                <img src={image} alt=''/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
}
 
export default UserClass;