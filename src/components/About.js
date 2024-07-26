import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <h1>Namaste React Web Series</h1>
        <User name={'Prathyusha Kurigala (function)'} />
        <UserClass name={'Prathyusha Kurigala (classs)'}
        location={'California'} contact={'@prathyusha9310'} />
    </div>
  )
}

export default About;

// class About extends Component {
//   state = {  } 
//   render() { 
//     return ();
//   }
// }
 
// export default About;