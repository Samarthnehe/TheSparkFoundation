import React from 'react'
import './Header.css';
import { Link} from 'react-router-dom';

function Header() {
    return (
        <div class="header">
            <Link to="/">
            <div className="header__logo">
                    <h2>BANKING SYSTEM</h2>
            </div>
            </Link>

            
            <div className="header__nav">
                
                    <div className="header__options">
                    <Link > <span>Create User</span>  </Link>
                    </div>
              
          
                    <div className="header__options">
                    <Link to="/transfer"><span>Transfer Money</span>    </Link>
                    </div>
     
                
                    <div className="header__options">
                    <Link to="/viewCustomer">   <span>View Customers</span>  </Link>
                    </div>
              

            </div>
        </div>
    )
}

export default Header
