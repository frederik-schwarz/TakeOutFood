import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'




function RightAd({items, history}) {
    console.log(items)

    // const [flip, set] = useState(false)
    // const {x} = useSpring({
    //     reset: true,
    //     reverse: flip,
    //     from: { x: 0 },
    //     x: 1,
    //     delay: 200,
    //     config: {weight: 1, tension: 50, friction: 50},
    //     onRest: () => set(!flip),
    // })
    
    return (
        <>
            <animated.div className='rigthAddiv'
            //  strokeWidth="7"
            //  fill="red"
            //  stroke="rgb(45, 55, 71)"
            //  strokeLinecap="round"
            //  strokeLinejoin="round"
            //  strokeDasharray={600}
            //  strokeDashoffset={x.to(x => (1 - x) * 600)}
             >
                <img className='rightAdImg' src='https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png' alt='trip advisor'></img>
                <p className='rightAdQuotes'>"Make sure you book!"</p>
                <p className='rightAdQuotes'>"Great food with lots of flavour"</p>
                <p className='rightAdQuotes'>"Amazing Vibrant restaurant Asian Fusion"</p>
                <p className='rightAdQuotes'>"Never disappoints"</p>
                <img className='rightAdImgAward' src='https://www.aucklandscenictours.co.nz/wp-content/uploads/2020/07/Trip-Advisor-Travellers-Choice-Award.png' alt='food award 2020'></img>
            </animated.div>
        </>
    )
}

export default connect() (RightAd)