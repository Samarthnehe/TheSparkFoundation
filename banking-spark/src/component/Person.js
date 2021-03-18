import React from 'react';
import './Person.css';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Person({first,last,mail,id,balance,user}) {
    
    const [{currUser},dispatch]=useStateValue();
    const sendUser=()=>{
        return (
            dispatch({
                    type:"SET_USER",
                    user:user
            })
        )
    }

    return (
        <div className="person">
            <div className="person__container">
                <h1>Customer Details</h1>
                <div className="person__details">
                <div className="person__div">
                    <div>
                        <h3>First Name</h3>
                            <span>{first}</span>
                    </div>
                    <div>
                    <h3>Last Name</h3>
                        <span>{last}</span>
                    </div>

                    </div>
                    <div className="person__div">
                        <div>
                        <h3>Balance</h3>
                        <span>{balance}</span>
                        </div>
                      <div>
                      <h3>Email</h3>
                        <span>{mail}</span>
                      </div>

                    </div>
                   
                </div>
                <Link to="/transfer">
                <button  onClick={sendUser} style={{backgroundColor:"rgb(9, 58, 9)"}}>Transfer Money</button>
                </Link>
               

            </div>
        </div>
    )
}

export default Person
