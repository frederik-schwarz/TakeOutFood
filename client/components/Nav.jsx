import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'

function Nav({history}) {
    const[data1, changedata1] = useState({backgroundColor: 'transparent'})
    const props = useSpring({
        to: {backgroundImage: 'linearGradient(to bottom right, red yellow)'},
        from: {backgroundImage: 'red'},
        config: {mass: 4, tension: 150, friction: 50},
        reset: true,

    })
    return (
        <div>
            <div className='topLine'></div>
        <ul className='navUl'>
            <animated.li style={data1} onMouseEnter={() => changedata1(props)} onMouseLeave={() => changedata1({backgroundColor: 'transparent'})} className='navLi' onClick={() => history.push('/')}>Home</animated.li>
            <animated.li className='navLi' onClick={() => history.push('/Menu')}>Order Online</animated.li>
            <animated.li className='navLi' onClick={() => history.push('/bookings/customer')}>Bookings</animated.li>
        </ul>
        </div>
    )
  
}
export default connect() (Nav)