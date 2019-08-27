import React from 'react'
//import { Link } from 'react-router-dom'
import '../styles/game-card.css'
//import '../styles/game-card.css'
// import { type } from 'os';


const GameCard = ({ imageUrl, name, plataform, price, whattsapp, comentary }) => {

    return (
        
          <article className="game-card col-md-3">
             <img src={imageUrl} alt={name} />
             <hr></hr>
             <h4>{name}</h4>
             <h5>> {plataform}</h5>
             <p>{price} €</p>
             <p>Contacto: {whattsapp}</p>
             <p className="coment">{comentary}</p>
          </article>
        
    )
}



export default GameCard