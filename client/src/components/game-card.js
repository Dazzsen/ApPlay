import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/game-card.css'
//import '../styles/game-card.css'
// import { type } from 'os';
import GameDetail from './gameDetails'

const GameCard = ({ imageUrl, name, plataform, price, whattsapp, comentary, _id }) => {

    return (
        <article className="game-card col-md-3">
             <img src={imageUrl} alt={name} />
             <hr></hr>
        <Link to={`/games/${_id}`}>
          <div>
             <h4>{name}</h4>
             <h5>> {plataform}</h5>
             <p>{price} €</p>
             <p>Contacto: {whattsapp}</p>
             <p className="coment">{comentary}</p>
          </div>
        </Link>
          </article>
        
    )
}



export default GameCard