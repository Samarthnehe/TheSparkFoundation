import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import './Money.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Money() {
    const[{user,currUser},dispatch]=useStateValue();
    const[person,setPerson]=useState('Samarth');
    const[amount,setAmount]=useState(0);


    console.log(person);
    // console.log(amount);
    const sendMoney=()=>{
            console.log(currUser);
            console.log(person);
            const userInd=user.findIndex(item=>item.first===person);
            const userIndex=user.findIndex(item=>item.first===currUser.first)
            console.log(userInd);
            console.log(userIndex);
                
                axios({
                     url:'/api/send',
                     method:"POST",
                     data:{
                         id:user[userInd]._id,
                         amount:amount
                     }
                   
                   }).then(()=>{
                    axios({
                        url:'/api/sendPay',
                        method:"POST",
                        data:{
                            id:user[userIndex]._id,
                            amount:amount
                        }
                      
                      }).then(async() => {
                            const result=await  axios({
                                url:'/api/user',
                            
                            })
                            console.log(".................!!!!!!!!!!!!!!!heya what is up");
                            dispatch({
                                type:"TAKE_USER",
                                user:result.data
                            })
                            // console.log(result.data);
               
                            }).catch(()=>console.log("error"));
                   }).catch(()=>console.log("error"));
                   
                  
     
    };
    

    let userOption=user.map((item)=>{
        return(
            item.first!=currUser.first?<option value={item.id}>{item.first}</option>:null
        )
    })
    return (
        <div className="money">
            <h1 style={{fontWeight:"700"}}>Transfer Portal</h1>
            <div className="money__container">
                
                <form className="money__form">
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <h4>Whom do you want to transfer the money ?</h4>
                        <select onChange={e=>{
                                    setPerson(e.target[e.target.selectedIndex].text);
                                    console.log(e.target[e.target.selectedIndex].text);
                                    console.log(person);
                        }}>
                            {userOption}
                        </select>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <h4>Enter the amount</h4>
                        <input onChange={e=>setAmount(e.target.value)} type="text"></input>
                    </div>
                    <Link to="/viewCustomer"> 
                        <button onClick={sendMoney}>SEND</button>
                    </Link>

                </form>

                
            </div>
        </div>
    )
}

export default Money
