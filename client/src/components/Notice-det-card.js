import React from 'react'
//import { Link } from 'react-router-dom'

//import '../styles/detail.css'
import { type } from 'os';


const NoticeCard = ({ plataform, title, author, imageUrl, review,_id }) => {

    return (
        <div className="container">
                
               <div>
                 <p> {plataform} </p>
               </div>
               <div>
                    <h3>{title}</h3>
               </div>

               <div>
                    <p> {author} </p>
               </div>

               <div>
                    <img src={imageUrl} alt={title} />
               </div>

               <div>
                 <p> {review} </p>
               </div>
        
        </div>
    )
}


export default NoticeCard