import React, {Component} from 'react';
import UserClass from './UserClass';
import User from './User';

class About extends Component {
  constructor(props){
    super(props);
    console.log(' parent constructor');
    this.state={
      userInfo: {}
    }
  };

  async componentDidMount(){
    console.log('parent componentDidMount');
    const data = await fetch('https://api.github.com/users/Prathyusha1993');
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json})
};

  render() {
    console.log('parent render')
    const {name, location, login, avatar_url} = this.state.userInfo;
    return (
      <div>
          <h1>About</h1>
          <h1>Namaste React Web Series</h1>
          {/* <User /> */}
          {/* <UserClass name={name}
          location={location} contact={login} image={avatar_url} /> */}
      </div>
    )
  }
  
}

export default About;