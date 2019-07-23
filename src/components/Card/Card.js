import React from 'react';

const Card = (props) => {
    return (
        <div className={`card ${props.selected? 'selected': ''}`}>
            <img src={props.img} alt='movie poster' />
            <h1>{props.name}</h1>
        </div>
    );
};

export default Card;
