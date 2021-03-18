import React from 'react';
import './Home.css';
import Signin from './Signin';
import Info from './Info';
import Banner  from '.././images/home.jpg';

function Home() {
    return (
        <div className="home">
            <img className="banner" src={Banner} alt=""/>
            <div className="mask">              
            </div>
            <div className="home__container">
                <Info/>
                <Signin/>  
            </div>
        </div>
    )
}

export default Home
