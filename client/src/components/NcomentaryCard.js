import React from 'react'

import '../styles/ncomen.css'


const NcomentaryCard = ({ comentary }) => {

    return (
        
          <article className="ncomen"> 
            
             <p>{comentary}</p>
             
          </article>
        
    )
}



export default NcomentaryCard