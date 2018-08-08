import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = ()=> {
    return(
        <header>
           <NavLink to="/" exact= {true} activeClassName= "is-active">Home</NavLink>
           <NavLink to="/contact"  activeClassName= "is-active">Contact</NavLink>
           <NavLink to="/portfoliopage" exact= {true} activeClassName= "is-active">Portfolio</NavLink>
        </header>
    )
}

export default Header ;