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
            <div className='py-4 m-4'>
                <img className='w-80' src={image} alt=''/>
                <h2 className='text-lg'>Name: {name}</h2>
                <h3 className='text-lg'>Location: {location}</h3>
                <h4 className='text-lg'>Contact: {contact}</h4>
            </div>
        );
    }
}
 
export default UserClass;