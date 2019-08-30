import React from 'react';
import '../styles/nota.css'
 

const Nota = ({ best, worst, note }) => {

      return (
        
            <article className="row notas">
                <div className="col-4">
                    <h4>Nota</h4>
                    <h3> {note} </h3>
                </div>
                <div className=" col-4 borde">
                        <h4>Lo bueno</h4>
                        <p> {best} </p>
                </div>
                <div className=" col-4 borde">
                        <h4>Lo malo</h4>
                        <p> {worst} </p>
                </div>
            
            </article>
    
    )
      
  }
  
  export default Nota