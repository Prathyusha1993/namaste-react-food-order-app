import React, {useState,useEffect} from 'react'

const User = ({name}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
       const timer = setInterval(() => {
            console.log('Namaste React')
        }, 1000);
        return() => {clearInterval(timer);
            console.log('useEffect return')}
    },[])
    //if i dont put dependency array it willr ender every time
    //if I put empty array it will render just once
    //If i update dependency array with value it will render only when that value changes

  return (
    <div className='user-card'>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>Name: {name}</h2>
        <h3>Location: California</h3>
        <h4>Contact: @prathyusha9310</h4>
    </div>
  )
}

export default User;