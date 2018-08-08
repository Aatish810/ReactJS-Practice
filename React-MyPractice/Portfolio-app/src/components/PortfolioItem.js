import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div>
            <h1>A Thing I have done</h1>
            <p>This id the page for item with id: {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioItem;