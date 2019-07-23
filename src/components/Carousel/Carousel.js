import React, { useState } from 'react';
import Card from '../Card/Card';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './carousel.scss';

export default function Carousel(props) {
    const [ selected, setSelected ] = useState(0);
    const mappedCards = props.input ? props.input.map((el, i)=> <Card selected={i===selected} {...el}/>) : []
    console.log(selected, mappedCards.length);
    return (

        <div className='carousel'>
            <div className='carousel__cards'
                style={{
                    transform: `translateX(-${selected * 300}px`
                }}>{mappedCards}</div>
            <div className='carousel__btns'>
                <button onClick={() => setSelected(selected-1)}
                disabled={selected<=0}
                ><FaArrowLeft/></button>
                <button onClick={() => setSelected(selected+1)}
                disabled={selected >= mappedCards.length-1}
                ><FaArrowRight/></button>
            </div>
        </div>

    )
}
