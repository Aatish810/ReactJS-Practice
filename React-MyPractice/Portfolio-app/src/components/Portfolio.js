
import React from 'react';
import {NavLink} from 'react-router-dom';

const PortfolioPage = () => {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <NavLink to="/portfolio/23">Item One</NavLink>
            <NavLink to="/portfolio/29">Item Two</NavLink>
        </div>
    )
}

export default PortfolioPage;