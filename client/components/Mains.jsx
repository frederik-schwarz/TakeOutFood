import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'


function Mains({items, history}) {

    
    return (
       
        <> 
        <ul className='MenuUl'>
            <div className='MenuDiv'> {items.map(item => {
                if(item.course === 'Main') {
                    return (
                        <li  className='MenuLi' key={item.id}>
                            
                            <img className='allItemsImg' src={item.Img} alt={item.descirption}></img>
                            <div className='MenuDivChildNormal'>
                            <span className='allItemsName'>{item.item}</span>
                            {!!item.dietary && <span className='allItemsDietary'>{item.dietary}</span>}
                            </div>
                            <span className='allItemsDescription'>{item.descirption}</span>
                        </li>
                        )
                }
       
        })}
        </div>
        </ul>
    </>
    )
    }



const ms2p = (globalState) => {
    return {
        items: globalState.menuReducer
    }
}
export default connect(ms2p)(Mains)