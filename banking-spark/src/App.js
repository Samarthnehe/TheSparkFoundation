import React,{useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Customer from './component/Customer'
import Transfer from './component/Transfer';
import Money from './component/Money';
import './App.css';
import { useStateValue } from './StateProvider';

function App() {

const[{user,currIndex},dispatch]=useStateValue();

useEffect(async () => {
 const result=await  axios({
      url:'/api/user',
    
    })

    dispatch({
      type:"TAKE_USER",
      user:result.data
    })
    
    
}, [])
 



  return (
    <Router>
          <div className="App">
            <Switch>
            <Route path="/view">
                  <Header/>
                  <Transfer/>
              </Route>
              <Route path="/viewCustomer">
                <Header/>
                <Customer/>
              </Route>
              <Route exact path="/transfer">
                 <Header/>
                 <Money/>
              </Route>
              <Route exact path="/">
                 <Header/>
                 <Home/>
              </Route>
            </Switch>

          </div>
    </Router>
  );
}

export default App;
