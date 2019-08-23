import React from 'react'
//import { Link } from 'react-router-dom'

import '../styles/detail.css'
// import { type } from 'os';


const GameCard = ({ imageUrl, name, plataform, price, whattsapp, comentary, _id }) => {

    return (
        <div className="col-md-3">
             <img src={imageUrl} alt={name} />
             <h4>{name}</h4>
             <h5>{plataform}</h5>
             <p>{price}</p>
             <p>{whattsapp}</p>
             <hr></hr>
             <p>{comentary}</p>
        </div>
    )
}


export default GameCard