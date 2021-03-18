import React,{useEffect} from 'react';
import './Customer.css';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CustomerInfo from './CustomerInfo';
import axios from 'axios';

function Customer() {
    const[{user},dispatch]=useStateValue(); 
    
    
    console.log(user);
    return (
        <div  className="customer">
            <div className="customer__container">
                <h1>CUSTOMERS</h1>
            <table className="table">
                <thead className="head">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Balance</th>
                    <th>Email</th>
                    <th></th>
                </thead>
                <tbody>
                    {user.map((item)=>{
                        return (
                            <CustomerInfo first={item.first} last={item.last} balance={item.balance} mail={item.mail} id={item.id} />
                        )
                          
                        
                  
                    })}
                    
                </tbody>
               
                </table>
                <Link to="/">
                    <button style={{width:"20%"}}>Back</button> 
                </Link>

       

                

            </div>
        </div>
    )
}

export default Customer
