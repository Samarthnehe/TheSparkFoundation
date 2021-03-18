import React from 'react';
import {Link} from 'react-router-dom';
import './CustomerInfo.css';
import {useStateValue} from '../StateProvider';

function CustomerInfo({first,last,balance,mail,id}) {
    const[{currIndex},dispatch]=useStateValue();
    
    const sendId=()=>{
    
       dispatch({
           type:"SET_INDEX",
           index:id
       })
    }

    return (
       
             <tr> 
                    <td>{first}</td>
                    <td>{last}</td>
                    <td>{balance}</td>
                    <td>{mail}</td>
                    <td><Link to="/view"><button onClick={sendId}   style={{backgroundColor:"rgb(9, 58, 9)",color:"white",width:"100%",height:"40px"}}>View</button></Link></td>
                </tr>
     
    )
}

export default CustomerInfo
