import React from 'react';
import { useStateValue } from '../StateProvider';
import Person from './Person';
import './Person.css'
import './Transfer.css'

function Transfer() {
    const [{user,currIndex},dispatch]=useStateValue();
    return (
        <div className="transfer">
            <div className="transfer__container">
                {user.map(item=>{
                    return(
                        currIndex===item.id?<Person first={item.first} last={item.last} balance={item.balance} id={item.id} mail={item.mail} user={item}/>:null
                    )
                   
                })}
                
            </div>
        </div>
    )
}

export default Transfer
