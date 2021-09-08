import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'


function MenuNav({history}) {
    const [data1, changeData1] = useState({backgroundColor: "transparent"})
    const [data2, changeData2] = useState({backgroundColor: "transparent"})
    const [data3, changeData3] = useState({backgroundColor: "transparent"})
    const [data4, changeData4] = useState({backgroundColor: "transparent"})
    const props = useSpring({
        to: {width: "8rem", borderWidth: "3px", color: "black"},
        from: {width: "0rem", borderWidth: "3px", color: "black"},
        config: {mass: 4, tension: 150, friction: 50},
        reset: true,

    })

    return (
        <>
            <ul className='menuNavUl'>
                <animated.li className='menuNavLi' onClick={() => 
                    history.push('/Menu')}
                    onMouseEnter={() => changeData1(props)}
                    onMouseLeave={() => changeData1({backgroundColor: "transparent"})}
                    >All</animated.li>
                <div className='hrDiv'>
                    <animated.hr style={data1}></animated.hr>
                </div>
                <animated.li className='menuNavLi' onClick={() => 
                    history.push('/Menu/starters')
                    }
                    onMouseEnter={() => changeData2(props)}
                    onMouseLeave={() => changeData2({backgroundColor: "transparent"})}
                    >Starters</animated.li>
                <div className='hrDiv'>
                    <animated.hr style={data2}></animated.hr>
                </div>
                <animated.li className='menuNavLi' onClick={() => 
                    history.push('/Menu/mains')}
                    onMouseEnter={() => changeData3(props)}
                    onMouseLeave={() => changeData3({backgroundColor: "transparent"})
                }>Mains</animated.li>
                <div className='hrDiv'>
                    <animated.hr style={data3}></animated.hr>
                </div>
                <animated.li className='menuNavLi'onClick={() => 
                    history.push('/Menu/share')}
                    onMouseEnter={() => changeData4(props)}
                    onMouseLeave={() => changeData4({backgroundColor: "white"})
                }>sharing</animated.li>
                <div className='hrDiv'>
                    <animated.hr style={data4}></animated.hr>
                </div>
            </ul>
        </>
    )
}

export default connect()(MenuNav)