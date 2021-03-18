import React from 'react';
import './Info.css';
import {Link} from 'react-router-dom'

function Info() {
    return (
        <div className="info">
            <h1>Welcome to Spark Banking System</h1>
            <h4>Want to transfer money to  your friends. family and client? Here is the best way to do so!</h4>
            <Link to='/viewCustomer'>
                    <button  >View all Customers</button>
            </Link>

            
        </div>
    )
}

export default Info
