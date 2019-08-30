import React from 'react'

import '../styles/ncomen.css'


const NcomentaryCard = ({ comentary, user }) => {

    return (
        
          <article className="ncomen"> 
            <p> {user} </p>
             <p>{comentary}</p>
             
          </article>
        
    )
}



export default NcomentaryCard